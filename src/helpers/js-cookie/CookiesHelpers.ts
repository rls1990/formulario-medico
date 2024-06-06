import Cookies from "js-cookie";
import { CookiesProps } from "./CookiesProps";

export const setCookie = (props: CookiesProps) => {
  const expires = props.day_expires
    ? props.day
    : props.minutes && new Date(Date.now() + props.minutes * 60 * 1000);

  const nameC = props.name ? props.name : "default-name-cookie";
  Cookies.set(nameC, props.data, {
    secure: true,
    expires,
    sameSite: "none",
  });
};

export const setAccessToken = (data: string, minutes: number) =>
  setCookie({ name: "access", data, minutes, day_expires: false });

export const setRefreshToken = (data: string, day: number) =>
  setCookie({ name: "refresh", data, day, day_expires: true });

export const getAccessToken = () => Cookies.get("access");

export const getRefreshToken = () => Cookies.get("refresh");

export const removeAccessToken = () => Cookies.remove("access");

export const removeRefreshToken = () => Cookies.remove("refresh");
