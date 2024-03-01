// config.js
const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'http://52.66.55.67:8080'
    : 'http://52.66.55.67:8080';

export default API_BASE_URL;
