import React, { createContext, useEffect, useState } from "react";
import {
  ContextProps,
  User,
  UserContextProps,
  initialData,
  initialDateToEdit,
} from "./Types";

export const UserContext = createContext(initialData);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [dataToEdit, setDatatoEdit] = useState(initialDateToEdit);
  const [error, setError] = useState<null | string>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //llamada a la api
    //setIsAuth(false); //fallo la autentificacion
    setIsAuth(false); //autentificacion ok

    setLoading(false);
  }, []);

  const createUser = (data: User) => {
    console.log(data);
  };

  const updateUser = (data: User) => {
    console.log(data);
  };

  const deleteUser = (id: number) => {
    console.log(id);
  };

  const login = (data: User) => {
    setLoading(true);
    //llamada a la api
    if (data.username === "admin" && data.password == "admin") {
      setIsAuth(true);
      setError(null);
    } else {
      setIsAuth(false);
      setError("Credenciales Incorrectas");
      setTimeout(() => setError(null), 4000);
    }
    setLoading(false);
  };

  const register = (data: User) => {
    console.log(data);
    setLoading(true);
    //llamada a la api
    const res = false;
    if (res) {
      setError(null);
    } else {
      setError("El usuario no se ha posido registrar");
      setTimeout(() => setError(null), 4000);
    }
  };

  const dataExportContext: ContextProps = {
    users,
    dataToEdit,
    setDatatoEdit,
    error,
    setError,
    isAuth,
    loading,
    createUser,
    updateUser,
    deleteUser,
    login,
    register,
  };

  return (
    <UserContext.Provider value={dataExportContext}>
      {children}
    </UserContext.Provider>
  );
};
