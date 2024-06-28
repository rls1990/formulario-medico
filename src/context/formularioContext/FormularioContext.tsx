/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";
import {
  ContextPropsRes,
  Formulario,
  FormularioContextProps,
  initialData,
  initialDateToEdit,
} from "./Types";
import {
  addFormularioRequest,
  delFormularioRequest,
  formulariosRequest,
  reportRequest,
} from "../../api/formulario";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../helpers/js-cookie/CookiesHelpers";
import { refresh } from "../../api/auth";
import { useNavigate } from "react-router-dom";
export const FormularioContext = createContext(initialData);

export const FormularioProvider: React.FC<FormularioContextProps> = ({
  children,
}) => {
  const [formularios, setFormularios] = useState<Formulario[]>();
  const [dataToEdit, setDatatoEdit] = useState<Formulario>(initialDateToEdit);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const createFormulario = (data: Formulario) => {
    const accesToken = getAccessToken();

    const req = async () => {
      try {
        const res = await addFormularioRequest(data);
        if (res) {
          console.log("respuesta");
          console.log(res);
          getFormularios();
          navigate("/admin", { replace: true });
        }
      } catch (error: any) {
        console.log("error");
        console.log(error);
        const status = error.response.status;
        status === 400 || status === 401
          ? setError(error.response.data)
          : setError("Any Error");
      }
    };
    if (accesToken) {
      console.log("hay accses");
      req();
    } else {
      console.log("Verificando at");
      verifyAccessToken().then(() => {
        req();
      });
    }
  };
  const updateFormulario = (data: Formulario, id: number) => {
    console.log(data);
  };

  const deleteFormulario = (id: number) => {
    const accesToken = getAccessToken();

    const req = async () => {
      try {
        const res = await delFormularioRequest(id);
        if (res) {
          console.log("respuesta");
          console.log(res);
          getFormularios().then(() => navigate("/admin"));
        }
      } catch (error: any) {
        console.log("error");
        console.log(error);
        const status = error.response.status;
        status === 400 || status === 401
          ? setError(error.response.data)
          : setError("Any Error");
      }
    };
    if (accesToken) {
      console.log("hay accses");
      req();
    } else {
      console.log("Verificando at");
      verifyAccessToken().then(() => {
        req();
      });
    }
  };
  const getFormularios = async () => {
    try {
      const res = await formulariosRequest();
      if (res) {
        //console.log(res);
        setFormularios(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getReport = (id: number) => {
    const accesToken = getAccessToken();

    const req = async () => {
      try {
        const res = await reportRequest(id);
        if (res) {
          console.log("respuesta");
          console.log(res);
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          const pdfUrl = URL.createObjectURL(pdfBlob);

          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = "reporte.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error: any) {
        console.log("error");
        console.log(error);
        const status = error.response.status;
        status === 400 || status === 401
          ? setError(error.response.data)
          : setError("Any Error");
      }
    };
    if (accesToken) {
      console.log("hay accses");
      req();
    } else {
      console.log("Verificando at");
      verifyAccessToken().then(() => {
        req();
      });
    }
  };

  const verifyAccessToken = async () => {
    const refreshToken = getRefreshToken();

    return await refresh({ refresh: refreshToken })
      .then((res) => {
        console.log(res);
        setAccessToken(res.data.access, 15);
        setRefreshToken(res.data.refresh, 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataExportContext: ContextPropsRes = {
    formularios,
    dataToEdit,
    setDatatoEdit,
    loading,
    error,
    setError,
    createFormulario,
    updateFormulario,
    deleteFormulario,
    getFormularios,
    getReport,
  };
  return (
    <FormularioContext.Provider value={dataExportContext}>
      {children}
    </FormularioContext.Provider>
  );
};
