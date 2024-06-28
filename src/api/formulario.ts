import { Formulario } from "../context/formularioContext/Types";
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

export const addFormularioRequest = async (data: Formulario) =>
  axios.post("formulario/", data, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

export const updateFormularioRequest = async (data: Formulario, id: number) =>
  axios.patch(`formulario/${id}/`, data, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

export const delFormularioRequest = async (id: number) =>
  axios.delete(`formulario/${id}/`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

export const reportRequest = async (id: number) =>
  axios.get(`formulario/reportecompleto/${id}/`, {
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });

export const getFormularioRequest = async (id: number) =>
  axios.get(`formulario/${id}/`, {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
