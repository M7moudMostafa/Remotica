import axios from "axios";
import { getToken } from "./tokenService";

const api = axios.create({
    baseURL: "https://api.imdbapi.dev",
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