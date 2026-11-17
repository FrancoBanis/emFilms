import {api} from './api';
import { ENDPOINTS_AUTH } from '../constants/config'
export const register = (data) => api.post(ENDPOINTS_AUTH.REGISTER, data)
export const login = (data) => api.post(ENDPOINTS_AUTH.LOGIN, data)