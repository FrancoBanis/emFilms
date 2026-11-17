
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? 'http://localhost:8080'

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    SEARCH: 'SEARCH',
}

export const ENDPOINTS_AUTH = {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    ME: '/api/auth/me',
}