import api from "../axiosInstance";

const getAllTitle = (filters) => api.get("/titles", { params: filters });

const getTitleById = (id) => api.get(`/titles/${id}`);

const getCreditsByTitleId = (id) => api.get(`/titles/${id}/credits`);

export { getAllTitle, getTitleById, getCreditsByTitleId };
