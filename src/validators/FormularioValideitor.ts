import * as yup from "yup";

export const validationSchema = yup.object({
  nombre:yup.string().required('El nombre es requerido'),
  otros_sintomas:yup.string(),
  primer_sintoma:yup.string()


    // remision: yup
    // .string().oneOf(["fgf",""])
    // .required("EL nombre de usuario es requerido"),
    
});