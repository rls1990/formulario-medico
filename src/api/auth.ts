/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../context/userContext/Types";
import { RefreshProp } from "./Types";
import axios from "./axios";
import Cookies from "js-cookie";

export const login = (data: User) => axios.post("token/", data);

export const refresh = (data: RefreshProp) =>
  axios.post("token/refresh/", data);
