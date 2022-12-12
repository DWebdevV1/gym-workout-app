import axios from 'axios';

const GlobalService = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    headers: { 'Authorization': import.meta.env.VITE_TOKEN_VALUE }
});

export default GlobalService
