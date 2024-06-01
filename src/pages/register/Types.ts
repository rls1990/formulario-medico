export interface RegisterFormValues {
  username: string;
  password: string;
  password_confirm: string;
}

export const initialValues: RegisterFormValues = {
  username: "",
  password: "",
  password_confirm: "",
};
