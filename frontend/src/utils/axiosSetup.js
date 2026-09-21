import axios from "axios";
import { toast } from "react-toastify";
import { ACCESS_TOKEN_KEY } from "../constants/constants";
import { logOutUser } from "../store/actions/clientActions";

// Backend oturumu uzattığında tazelenmiş token'ı bu header ile döner.
const NEW_TOKEN_HEADER = "new-token";

// Bu uçlarda gelen 401 "oturum düştü" değil, "giriş başarısız" demektir.
const AUTH_FREE_PATHS = ["/login", "/signup"];

function applyToken(token) {
    axios.defaults.headers.common["Authorization"] = token;

    // Token localStorage'a yalnızca "beni hatırla" seçiliyken yazılıyor.
    // Orada bir kayıt varsa oturum kalıcıdır; tazelenmişini de saklarız.
    // Yoksa dokunmayız, aksi hâlde sekme kapanınca silinmesi gereken
    // oturumu kalıcı hâle getirmiş oluruz.
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }
}

export function setupAxiosInterceptors(store) {
    axios.interceptors.response.use(
        (response) => {
            const newToken = response.headers?.[NEW_TOKEN_HEADER];
            if (newToken) applyToken(newToken);
            return response;
        },
        (error) => {
            const status = error?.response?.status;
            const url = error?.config?.url ?? "";
            const isAuthFree = AUTH_FREE_PATHS.some((path) => url.includes(path));

            // Sadece gerçekten bir oturum varken çıkış yaptır; aksi hâlde
            // giriş yapmamış kullanıcıya "oturumunuz bitti" demiş oluruz.
            const hasSession = Boolean(axios.defaults.headers.common["Authorization"]);

            if (status === 401 && !isAuthFree && hasSession) {
                store.dispatch(logOutUser());
                toast.info("Oturumunuz sona erdi, lütfen tekrar giriş yapın.");
            }

            return Promise.reject(error);
        }
    );
}
