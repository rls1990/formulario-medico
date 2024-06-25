/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../context/userContext/Types";
import { RefreshProp } from "./Types";
import axios from "./axios";

export const login = (data: User) => axios.post("api/token/", data);

export const refresh = (data: RefreshProp) =>
  axios.post("api/token/refresh/", data);
