import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
    // "console-token": import.meta.env.VITE_CONSOLE_TOKEN,
  },
});

const Log_In = (data) => AxiosInstance.post("/user/login", data);

const Send_Mail = (data) => AxiosInstance.post("/user/sendmail", data);

const List_Categories = (data) => AxiosInstance.post("/list/categories", data);

export { List_Categories, Log_In, Send_Mail };
