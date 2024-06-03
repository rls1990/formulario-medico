/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../context/userContext/Types";
import axios from "./axios";
import Cookies from "js-cookie";

const access = Cookies.get("access");
const refresh = Cookies.get("refresh");

export const login = (data: User) => axios.post("token", data);
export const logout = () => axios.post("logout");
