import axios from "axios";
import { getToken } from "./tokenService";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {
    const token = getToken();
    if(token) config.headers.Authorization = token;

    return config;
});

api.interceptors.response.use(
    (res) => res,
    (error) => {
        console.log("Error: ", error)
        return Promise.reject(error)
    }
)

export default api;