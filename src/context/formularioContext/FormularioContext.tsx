/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import {
  ContextPropsRes,
  Formulario,
  FormularioContextProps,
  initialData,
  initialDateToEdit,
} from "./Types";
import { addFormularioRequest, formulariosRequest } from "../../api/formulario";
export const FormularioContext = createContext(initialData);

export const FormularioProvider: React.FC<FormularioContextProps> = ({
  children,
}) => {
  const [formularios, setFormularios] = useState<Formulario[]>();
  const [dataToEdit, setDatatoEdit] = useState<Formulario>(initialDateToEdit);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createFormulario = async (data: Formulario) => {
    try {
      const res = await addFormularioRequest(data);
      if (res) console.log(res);
    } catch (error: any) {
      console.log(error);
      const status = error.response.status;
      status === 400 || status === 401
        ? setError(error.response.data)
        : setError("Any Error");
    }
  };
  const updateFormulario = () => {};
  const deleteFormulario = () => {};
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
  };
  return (
    <FormularioContext.Provider value={dataExportContext}>
      {children}
    </FormularioContext.Provider>
  );
};
