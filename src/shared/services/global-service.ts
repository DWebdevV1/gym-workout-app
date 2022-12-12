import axios from 'axios';

const GlobalService = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: { 'Authorization': 'XXX_TOKEN' }
});

export default GlobalService
