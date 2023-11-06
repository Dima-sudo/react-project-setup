import axios, { AxiosRequestConfig } from 'axios';
import { env } from '../config/env';

const config: AxiosRequestConfig = {
    baseURL: `https://${env.BASE_API_URL}/`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'bearer <your-token-here>'
    },
};

export const AxiosInstance = axios.create(config);
