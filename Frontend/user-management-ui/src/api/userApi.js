import axios from 'axios';

const API_URL = 'https://localhost:7018/api/users';

const api = axios.create({
    baseURL: API_URL,   
});

export const getUsers = async () => {
    const response = await api.get('/');
    return response.data
};

export const getUserById = async (id) => {
        const response = await api.get(`/${id}`);
        return response.data;
    };
export const createUser = async (userData) => {
    const response = await api.post('/', userData);
    return response.data;
};
export const updateUser = async (id, userData) => {
    const response = await api.put(`/${id}`, userData);
    return response.data;
};