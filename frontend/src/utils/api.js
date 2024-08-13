import axios from "axios";
import { LoginSucces } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";
import store from "@/store/store";

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
        const dispatch = useDispatch()
        const tokens = store.getState().auth.token;
        if(error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await axios.post('/api/users/refresh-token', { refreshToken: tokens.refreshToken });
                dispatch(LoginSucces(res.data.data))
                originalRequest.headers['Authorization'] = `Bearer ${ tokens.accessToken }`;
                return api(originalRequest);
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
)

export default api