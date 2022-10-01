import axios, { AxiosRequestConfig } from 'axios';
import { env } from '../config/env';

const config: AxiosRequestConfig = {
    baseURL: `https://${env.BASE_API_URL}/`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'bearer <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    },
};

export const AxiosInstance = axios.create(config);
