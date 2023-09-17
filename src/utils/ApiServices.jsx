import { AxiosInstance } from "./Interceptor";
import { getUserToken } from "./StorageServices";

const Log_In = (data) => AxiosInstance.post("/user/login", data,);

const Send_Mail = (data) => AxiosInstance.post("/user/sendmail", data);

const List_Categories = (data) => AxiosInstance.post("/list/categories", data, { headers: { "Authorization": getUserToken() } });

const List_Products = (data) => AxiosInstance.post("/list/products", data, { headers: { "Authorization": getUserToken() } });

export { List_Categories, List_Products, Log_In, Send_Mail };

