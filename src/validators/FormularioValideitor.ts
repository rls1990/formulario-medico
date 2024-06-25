import * as yup from "yup";

export const validationSchema = yup.object({
  nombre:yup.string().required('El nombre es requerido')

    // remision: yup
    // .string().oneOf(["fgf",""])
    // .required("EL nombre de usuario es requerido"),
    
});