# ---- Build aşaması ----
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Önce sadece pom.xml'i kopyalayıp bağımlılıkları indir (cache için)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Sonra kaynak kodu kopyala ve paketle
COPY src ./src
RUN mvn clean package -DskipTests

# ---- Çalıştırma aşaması ----
FROM eclipse-temurin:17-jre
WORKDIR /app

# Build aşamasında üretilen jar'ı al
COPY --from=build /app/target/project-0.0.1-SNAPSHOT.jar app.jar

# Render PORT değişkenini verir; uygulamanın onu dinlemesi gerekir
EXPOSE 9000
ENTRYPOINT ["java", "-jar", "app.jar"]