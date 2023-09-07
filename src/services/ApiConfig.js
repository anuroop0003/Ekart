"use client";
import axios from "axios";
import { getUserToken } from "./StorageServices";

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_Base_URL,
  // baseURL: "https://localhost:3333/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: getUserToken(),
  },
});

const Log_In = (data) => AxiosInstance.post("/user/login", data);

const Send_Mail = (data) => AxiosInstance.post("/user/sendmail", data);

const List_Categories = (data) => AxiosInstance.post("/list/categories", data);

export { List_Categories, Log_In, Send_Mail };
