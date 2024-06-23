import { createContext, useState } from "react";
import {
  ContextPropsRes,
  Formulario,
  FormularioContextProps,
  initialData,
  initialDateToEdit,
} from "./Types";

export const FormularioContext = createContext(initialData);

export const FormularioProvider: React.FC<FormularioContextProps> = ({
  children,
}) => {
  const [formularios, setFormularios] = useState<Formulario[]>();
  const [dataToEdit, setDatatoEdit] = useState<Formulario>(initialDateToEdit);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createFormulario = () => {};
  const updateFormulario = () => {};
  const deleteFormulario = () => {};

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
  };
  return (
    <FormularioContext.Provider value={dataExportContext}>
      {children}
    </FormularioContext.Provider>
  );
};
