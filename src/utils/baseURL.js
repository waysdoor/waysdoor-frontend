// config.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'http://13.201.55.215:8080'
    : 'http://localhost:8080';

export default API_BASE_URL;
