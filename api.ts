import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
