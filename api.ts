import Axios from 'axios';

const api = Axios.create({
    baseURL:
        'https://x87o6plat5.execute-api.us-east-1.amazonaws.com/prod/api/v1',
    // baseURL: "http://localhost:8000/api/v1",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;
