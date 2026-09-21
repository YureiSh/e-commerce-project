# Bilinen Sorunlar

Son güncelleme: 2026-09-21

Kod incelemesinden çıkan, henüz kapatılmamış maddeler. Sıralama önem derecesine göre.

---

## Backend

### 1. Login hata kodları ve kullanıcı sızıntısı

`backend/.../service/AuthService.java` — `login()`

```java
.orElseThrow(() -> new AuthException("Email not found", HttpStatus.NOT_FOUND));
...
throw new AuthException("Invalid email or password ", HttpStatus.NOT_FOUND);
```

İki sorun:

- Başarısız kimlik doğrulama `404` dönüyor, doğrusu `401 UNAUTHORIZED`.
- Mesajlar farklı olduğu için, bir e-postanın sistemde kayıtlı olup olmadığı dışarıdan anlaşılıyor (user enumeration). Kayıtlı olmayan e-posta `"Email not found"`, kayıtlı olup şifresi yanlış olan `"Invalid email or password"` dönüyor.

**Yapılacak:** İkisini de `HttpStatus.UNAUTHORIZED` ve aynı genel mesaj (`"Invalid email or password"`) yap.

### 2. `sort` parametresi doğrulanmıyor

`backend/.../service/ProductService.java` — `parseSort()`

```java
return Sort.by(dir, parts[0]);
```

`parts[0]` doğrudan istekten geliyor. Geçersiz bir alan adı (`?sort=herhangibirsey:desc`) `PropertyReferenceException` fırlatıp `500` üretiyor.

SQL injection değil — Spring Data alan adını entity'ye karşı doğruluyor — ama işlenmemiş bir sunucu hatası ve entity alan adlarını dışarıya sızdırıyor.

**Yapılacak:** İzin verilen alanları beyaz listeye al (`id`, `price`, `name`, ...), liste dışındaki değer için `400` dön.

### 3. `offset` sayfaya sessizce yuvarlanıyor

`backend/.../service/ProductService.java` — `search()`

```java
Pageable pageable = PageRequest.of(offset / limit, limit, parseSort(sort));
```

`offset` `limit`'in katı değilse tamsayı bölmesi aşağı yuvarlıyor. `offset=10&limit=25` → sayfa 0, yani istenen kayıttan farklı bir küme dönüyor, hata da verilmiyor.

**Yapılacak:** Ya `offset`'in `limit`'in katı olmasını zorunlu kıl, ya da `PageRequest` yerine offset tabanlı bir sorgu kullan.

### 4. DTO ile entity arasındaki doğrulama boşluğu

`backend/.../dto/request/OrderRequest.java`

- `@NotNull` String'lerde boş metni (`""`) geçiriyor — `name`, `surname`, `phone`, `nameOnCard`, `lastFour` için `@NotBlank` gerekiyor.
- `Orders` entity'sinde uzunluk sınırları var (`name` 45, `nameOnCard` 155, `lastFour` 4, `expireMonth` 2) ama DTO'da karşılıkları yok. Sınırı aşan değer istek doğrulamasını geçip persist sırasında patlıyor → `400` yerine `500`.

**Yapılacak:** DTO'ya `@NotBlank` ve entity ile eşleşen `@Size` ekle.

### 5. `JwtUtil` jjwt'nin eski API'sini kullanıyor

`backend/.../util/JwtUtil.java`

`pom.xml` jjwt `0.13.0` bildiriyor, kod `0.11` dönemi deprecated çağrılarla yazılmış: `setClaims`, `setSubject`, `setIssuedAt`, `setExpiration`, `setSigningKey`, `parseClaimsJws`, `getBody`.

Şu an derleniyor, bir sonraki majör sürümde kırılacak.

**Karşılıkları:** `claims()`, `subject()`, `issuedAt()`, `expiration()`, `verifyWith()`, `parseSignedClaims()`, `getPayload()`.

### 6. Geçersiz token sessizce yutuluyor

`backend/.../filter/JwtAuthenticationFilter.java`

```java
} catch (RuntimeException e) {
    SecurityContextHolder.clearContext();
}
```

Bozuk veya süresi dolmuş token'da istek anonim olarak devam ediyor. Kullanıcı `401` yerine `403` görüyor ve sebebini anlamıyor. Frontend'deki 401 interceptor'ı da bu yüzden tetiklenmiyor.

**Yapılacak:** Kimlik doğrulama hatasında `401` dön (`AuthenticationEntryPoint` ya da filtrede doğrudan yanıt yazarak).

### 7. Test yok

`backend/src/test/` altında tek dosya var: `ProjectApplicationTests.contextLoads()` — o da PostgreSQL ve env değişkenleri olmadan çalışmıyor.

**Yapılacak:** En azından `OrderService.createOrder` (toplam hesabı, ürün bulunamadı durumu) ve `JwtUtil` (üretme / süre dolumu / `shouldRefresh`) için birim testler. DB gereksinimini kaldırmak için Testcontainers ya da H2 profili.

---

## Frontend

### 8. Kalan lint hataları

`npm run lint` → **9 error, 11 warning**

| Adet | Kural | Yer |
|---|---|---|
| 3 | `react-refresh/only-export-components` | `BlogPost.jsx`, `HomePageBlog.jsx`, `CategoryBanner.jsx` |
| 2 | `no-unused-vars` | `App.jsx` — `user`, `authLoading` |
| 2 | `react-hooks/set-state-in-effect` | `useAuthVerification.js`, `useLocalStorage.js` |
| 1 | `react-hooks/rules-of-hooks` | `ImageCarouselwPreview.jsx:18` |
| 1 | `no-empty-pattern` | `ProductActionPanel.jsx:8` |

`App.jsx`'teki ikisi bilinçli: loading spinner satırı yorumda bırakıldığı için `authLoading` kullanılmıyor.

```js
// if (authLoading) return <CustomGsapSpinner />; Temporary disable
```

Spinner geri açılırsa kendiliğinden çözülür.

`ImageCarouselwPreview.jsx:18` gerçek bir bug: `useEffect` erken `return`'den sonra, yani koşullu çağrılıyor.

### 9. `BASE_URL` sabit kodlanmış

`frontend/src/constants/apiConstant.js`

```js
export const BASE_URL = "https://e-commerce-project-b3rx.onrender.com";
```

Local ve production ayrımı yapılamıyor.

**Yapılacak:** `import.meta.env.VITE_API_URL` kullan, `.env.development` ve `.env.production` ekle.

### 10. `react-router-dom` 5.3.4 ile React 19

v5 oldukça eski; `RegisterPage.jsx:25`'te `react-hooks/incompatible-library` uyarısı bundan kaynaklanıyor. v6/v7'ye geçiş `Switch`/`useHistory` API'lerinin değişmesi demek — ayrı ve planlı bir iş.

### 11. Bundle 500 kB'ı aşıyor

```
dist/assets/index-*.js   510.74 kB │ gzip: 163.85 kB
```

Route bazlı `React.lazy` + `Suspense` ile bölünebilir. GSAP ve `react-icons` en ağır parçalar.

### 12. `isFirstRender` kullanılmıyor

`frontend/src/pages/page-components/ShopPage/ShopProductList.jsx` — temizlik sırasında kaldırıldı, ama şunu not düşmek gerek: ilk render'da efekti atlamak için konulmuş, hiç okunmamış. O koruma gerekiyorsa mantık eksik demektir.

---

## Depo

### 13. Satır sonu karmaşası (CRLF/LF)

Kökte `.gitattributes` yok ve `core.autocrlf` ayarlı değil. Sonuç: `git status` 143 dosyayı değişmiş gösteriyor, `git diff --stat` ise 10422 ekleme / 10422 silme diyor — birebir eşit, yani sadece satır sonu farkı.

Gerçek değişiklikler bu gürültünün içinde kayboluyor.

**Yapılacak:** Köke `.gitattributes` ekle:

```
* text=auto eol=lf
*.cmd text eol=crlf
*.bat text eol=crlf
```

Sonra tek seferlik: `git add --renormalize .`

### 14. README auth akışı güncel değil

`README.md` — "Authentication flow" bölümü hâlâ yalnızca `/verify`'ın token yenilediğini söylüyor. Artık doğrulanmış her istek, token eşiğe girdiğinde `new-token` dönebiliyor.

---

## Kapatılanlar

- `/order` ve `/order/**` yetkilendirmesi — `SecurityConfig`
- `OrderService.getAllOrders()` gerçek veri dönüyor
- `OrderRequest` / `OrderProductRequest` doğrulamaları + `@NotEmpty @Valid` ile iç içe doğrulama
- `limit` / `offset` negatif ve sıfır kontrolü
- Token yenileme: `JwtUtil.shouldRefresh`, filtrede `new-token` header'ı, CORS `exposedHeaders`
- Frontend axios interceptor: `new-token` yakalama + 401'de otomatik çıkış
- 10 debug `console.log` temizlendi
- ~40 kullanılmayan değişken temizlendi (lint: 53 error → 9)
- `useSlugify` → `slugify` (hook olmadığı hâlde hook adı taşıyordu)
