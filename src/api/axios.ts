import axios from "axios";
//import Cookies from "js-cookie";

export const BASE_URL_API = import.meta.env.BASE_URL_API;

const instance = axios.create({
  baseURL: BASE_URL_API,
  withCredentials: true,
});

export default instance;
