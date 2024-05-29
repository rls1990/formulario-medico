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
  const [error, setError] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //llamada a la api
    //setIsAuth(false); //fallo la autentificacion
    setIsAuth(true); //autentificacion ok

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
    console.log(data);
  };

  const register = (data: User) => {
    console.log(data);
  };

  const dataExportContext: ContextProps = {
    users,
    dataToEdit,
    setDatatoEdit,
    error,
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
