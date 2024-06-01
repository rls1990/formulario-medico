import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string()
    .min(4, "El nombre de usuario debe contener al menos 4 caracteres")
    .required("EL nombre de usuario es requerido"),
  password: yup
    .string()
    .min(4, "El password debe contener al menos 4 caracteres")
    .required("El password es requerido"),
  password_confirm: yup
    .string()
    .min(4, "El password debe contener al menos 4 caracteres")
    .required("Repita el password")
    .oneOf([yup.ref("password")], "Las Contraseñas no coinciden"),
});
