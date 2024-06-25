// import { FormularioQuery } from "../../api/Types";

export const generateQueryParams = <T>(data?: T): string => {
  if (data && Object.keys(data).length > 0) {
    let res = "?";
    for (const key in data) {
      const value = data[key as keyof T];
      res += `${key}=${value}&`;
    }
    return res.substring(0, res.length - 1);
  }

  return "";
};
