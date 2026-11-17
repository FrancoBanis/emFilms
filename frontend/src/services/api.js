import axios from 'axios';
import { BACKEND_URL } from '../constants/config';


export const api = axios.create(
    {
        baseURL: BACKEND_URL
    }
)

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('jwt_token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const isAuthRoute = error.config?.url?.includes('/api/auth/login') 
            || error.config?.url?.includes('/api/auth/register');
        if (error.response?.status === 401 && !isAuthRoute) {
            sessionStorage.removeItem('jwt_token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
)