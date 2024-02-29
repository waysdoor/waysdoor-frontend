// config.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'http://52.66.163.75:8080'
    : 'http://localhost:8080';

export default API_BASE_URL;
