"use client";
import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: process.env.Base_URL,
  baseURL: "https://localhost:3333/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: JSON.parse(localStorage.getItem("user"))?.token,
  },
});

const Log_In = (data) => AxiosInstance.post("/user/login", data);

const Send_Mail = (data) => AxiosInstance.post("/user/sendmail", data);

const List_Categories = (data) => AxiosInstance.post("/list/categories", data);

export { List_Categories, Log_In, Send_Mail };
