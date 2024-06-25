import { getAccessToken } from "../helpers/js-cookie/CookiesHelpers";
import { generateQueryParams } from "../helpers/query-params/QueryParams";
import { FormularioQuery } from "./Types";
import axios from "./axios";

// export const formulariosRequest = (data?: FormularioQuery) =>
//   axios.get(`formulario/${generateQueryParams<FormularioQuery>(data)}`, {
//     headers: {
//       Authorization: `Bearer ${getAccessToken()}`,
//     },
//   });

export const formulariosRequest = async (data?: FormularioQuery) => {
  const url = `formulario/${generateQueryParams<FormularioQuery>(data)}`;
  //console.log(url);

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
    return error;
  }
};
