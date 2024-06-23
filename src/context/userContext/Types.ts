export interface User {
  id?: number | null | string;
  username: string | null;
  password: string | null;
}

export interface ContextPropsRes {
  users?: User[] | null;
  dataToEdit: User | null;
  setDatatoEdit: React.Dispatch<React.SetStateAction<User>> | null;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
  setError: React.Dispatch<React.SetStateAction<string | null>> | null;
  createUser: ((data: User) => void) | null;
  updateUser: ((data: User) => void) | null;
  deleteUser: ((id: number) => void) | null;
  login?: ((data: User) => void) | null;
  logout?: (() => void) | null;
  register: ((data: User) => void) | null;
}

export interface UserContextProps {
  children: React.ReactNode;
}

export const initialData: ContextPropsRes = {
  users: null,
  dataToEdit: null,
  setDatatoEdit: null,
  isAuth: false,
  error: null,
  setError: null,
  createUser: null,
  updateUser: null,
  deleteUser: null,
  loading: false,
  login: null,
  logout: null,
  register: null,
};

export const initialDateToEdit: User = {
  id: null,
  password: null,
  username: null,
};
