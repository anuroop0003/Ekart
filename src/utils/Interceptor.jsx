import axios from "axios";
import { getUserToken } from "./StorageServices";

export const AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_Base_URL,
    // baseURL: "http://localhost:3333/api",
    headers: {
      "Content-Type": "application/json",
    },
  });