import React, { createContext, useEffect, useState } from "react";
import {
  ContextPropsRes,
  User,
  UserContextProps,
  initialData,
  initialDateToEdit,
} from "./Types";

import { login as loginapi, refresh } from "../../api/auth";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../helpers/js-cookie/CookiesHelpers";

export const UserContext = createContext(initialData);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  // const [users, setUsers] = useState<User[] | null>(null);
  const [dataToEdit, setDatatoEdit] = useState(initialDateToEdit);
  const [error, setError] = useState<null | string>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refresh = getRefreshToken();
    if (!refresh) {
      removeAccessToken();
      setIsAuth(false);
    } else if (refresh) !isAuth && setIsAuth(true);

    setLoading(false);
  }, [isAuth]);

  const login = async (data: User) => {
    setLoading(true);
    //llamada a la api
    await loginapi(data)
      .then((res) => {
        const { refresh, access } = res.data;
        setRefreshToken(refresh, 1);
        setAccessToken(access, 15);

        setIsAuth(true);
        setError(null);
      })
      .catch((error) => {
        setIsAuth(false);
        setError("Credenciales Incorrectas");
        setTimeout(() => setError(null), 4000);
        console.log(error);
      });
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    removeAccessToken();
    removeRefreshToken();
    setIsAuth(false);
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

  const createUser = (data: User) => {
    console.log(data);
  };

  const updateUser = (data: User) => {
    console.log(data);
  };

  const deleteUser = (id: number) => {
    console.log(id);
  };

  const verifyAccessToken = () => {
    const accesToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (!accesToken) {
      const refre = async () => {
        await refresh({ refresh: refreshToken })
          .then((res) => {
            console.log(res);
            setAccessToken(res.data.access, 15);
            setRefreshToken(res.data.refresh, 1);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      refre();
    }
  };

  const dataExportContext: ContextPropsRes = {
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
    logout,
    register,
    verifyAccessToken,
  };

  return (
    <UserContext.Provider value={dataExportContext}>
      {children}
    </UserContext.Provider>
  );
};
