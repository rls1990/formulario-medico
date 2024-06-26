import * as yup from "yup";

const capitalizeFirstLetter = (value:any) => {
  if (value.length === 0) return true; // Permitir campos vacíos
  const firstLetter = value.charAt(0);
  const restOfString = value.slice(1);
  return firstLetter === firstLetter.toUpperCase() && restOfString === restOfString.toLowerCase();
};


//   return value.charAt(0).toUpperCase() + value.slice(1);
// };

export const validationSchema = yup.object({
  nombre:yup.string().min(5,"Requiere más de 5 carcteres").required('El nombre es requerido'),
  otros_sintomas:yup.string(),
  primer_sintoma:yup.string().min(5,"Requiere más de 5 carcteres").required("Este campo es requerido"),
  tamanno_de_la_lesion:yup.number().required("Este valor es requerido")
  .min(0,"El tamaño de la lesión debe ser mayor o igual que cero"),
  // primer_apellido:yup.string().required("Este campo es requerido")
  // .test(
  //   'capitalizeFirstLetter',
  //   'Lleva mayúscula solo la primera letra',
  //   (value) => capitalizeFirstLetter(value)//capitalizeFirstLetter(value) === value

  primer_apellido: yup.string()
    .required('El apellido es requerido').min(2,"El apellido debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      'El primer apellido debe comenzar con una letra mayúscula y contener solo letras'
    ),

    segundo_apellido: yup.string()
    .required('El apellido es requerido').min(2,"El apellido debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      'El segundo apellido debe comenzar con una letra mayúscula y contener solo letras'
    ),

    nombre_del_paciente: yup.string()
    .required('El apellido es requerido').min(2,"El apellido debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      'El segundo apellido debe comenzar con una letra mayúscula y contener solo letras'
    ),

    edad:yup.number().required("Este valor es requerido")
  .min(0,"La edad no puede ser menor que 0"),

  historia_clinica_numero:yup.number()
  // .required("Este valor es requerido")
  // .min(1,"Valor no admitido"),
  .required('El número es requerido')

    // remision: yup
    // .string().oneOf(["fgf",""])
    // .required("EL nombre de usuario es requerido"),
    
});