import axios from "axios";
import store from "@/store/store";
import { LoginSucces } from "@/store/slices/authSlice";


// Create an Axios instance with withCredentials set to true
const api = axios.create({
    withCredentials: true,
    baseURL: '/api',
});

// Add a request interceptor to automatically attach the JWT token to every request

api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token.accessToken
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to automatically handle authentication errors
api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const token = store.getState().auth.token.refreshToken;
                const res = await api.post('/api/users/refresh-token', { token })
                store.dispatch(LoginSucces(res.data.data))
                originalRequest.headers['Authorization'] = `Bearer ${ token }`;
                return api(originalRequest);
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
)

export default api