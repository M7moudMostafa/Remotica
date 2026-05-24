import axios from "axios";
import { getToken } from "./tokenService";
import { handleApiErrors } from "./errorHandler";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {
    const token = getToken();
    if(token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

api.interceptors.response.use(
    (res) => res,
    (error) => {
        handleApiErrors(error);
        return Promise.reject(error);
    }
);

export default api;