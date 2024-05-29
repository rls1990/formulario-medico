export interface User {
  id?: number | null | string;
  username: string | null;
  password: string | null;
}

export interface ContextProps {
  users: User[] | null;
  dataToEdit: User | null;
  setDatatoEdit: React.Dispatch<React.SetStateAction<User>> | null;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
  createUser: ((data: User) => void) | null;
  updateUser: ((data: User) => void) | null;
  deleteUser: ((id: number) => void) | null;
  login: ((data: User) => void) | null;
  register: ((data: User) => void) | null;
}

export interface UserContextProps {
  children: React.ReactNode;
}

export const initialData: ContextProps = {
  users: null,
  dataToEdit: null,
  setDatatoEdit: null,
  isAuth: false,
  error: null,
  createUser: null,
  updateUser: null,
  deleteUser: null,
};

export const initialDateToEdit: User = {
  id: null,
  password: null,
  username: null,
};
