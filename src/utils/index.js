import axios, { AxiosResponse } from "axios";
import API_BASE_URL from "./baseURL";

export const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosClient.interceptors.request.use(
    function (config) {
        const token = window.localStorage.getItem("token");

        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            return Promise.reject((error.response && error.response.data) || 'Something went wrong');
        }
        return Promise.reject(error);
    }
);

export async function getRequest(URL,otherProps) {
    const response = await axiosClient.get(`/${URL}`, otherProps);
    return response;
}

export async function postRequest({URL, payload}) {
    let response;
    try {
        response = await axiosClient.post(`/${URL}`, payload);
        return response
    } catch (err) {
        return {
            data: err.response ? err.response.data : 'An error occurred',
            status: err.response ? err.response.status : 500,
            statusText: "Invalid Pan Card",
            headers: err.response ? err.response.headers : {},
            config: err.config,
        };

    }
}







