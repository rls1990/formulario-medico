/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as yup from "yup";

const capitalizeFirstLetter = (value: any) => {
  if (value.length === 0) return true; // Permitir campos vacíos
  const firstLetter = value.charAt(0);
  const restOfString = value.slice(1);
  return (
    firstLetter === firstLetter.toUpperCase() &&
    restOfString === restOfString.toLowerCase()
  );
};

//   return value.charAt(0).toUpperCase() + value.slice(1);
// };

export const validationSchema = yup.object({
  nombre: yup
    .string()
    .min(5, "Requiere más de 5 carcteres")
    .required("El nombre es requerido"),
  
    otros_sintomas: yup.string(),

  primer_sintoma: yup
    .string()
    .min(5, "Requiere más de 5 carcteres")
    .required("Este campo es requerido"),
  
    tamanno_de_la_lesion: yup
    .number()
    .required("Este valor es requerido")
    .min(0, "El tamaño de la lesión debe ser mayor o igual que cero"),
  // primer_apellido:yup.string().required("Este campo es requerido")
  // .test(
  //   'capitalizeFirstLetter',
  //   'Lleva mayúscula solo la primera letra',
  //   (value) => capitalizeFirstLetter(value)//capitalizeFirstLetter(value) === value

  primer_apellido: yup
    .string()
    .required("El primer apellido es requerido")
    .min(2, "El primer apellido debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      "El primer apellido debe comenzar con una letra mayúscula y contener solo letras"
    ),

  segundo_apellido: yup
    .string()
    .required("El segundo apellido es requerido")
    .min(2, "El segundo apellido debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      "El segundo apellido debe comenzar con una letra mayúscula y contener solo letras"
    ),

  nombre_del_paciente: yup
    .string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      "El nombre debe comenzar con una letra mayúscula y contener solo letras"
    ),

  edad: yup
    .number().integer("El número no debe contener coma")
    .required("Este valor es requerido")
    .min(0, "La edad no puede ser menor que 0"),

    carne_de_identidad: yup.string()
    .required("Este campo es requerido") .matches(
      /^[1-9]\d{10}$/,
      'Ingrese la cantidad de dígitos correcta (11)'
    ),

  historia_clinica_numero: yup
    .number()
    .integer("El número no debe contener coma")
    .min(1,"Valor no admitido")
    .required("El número es requerido"),

    creatinina:yup
    .number()
    .required("Este valor es requerido")
    .min(0, "El valor debe ser mayor o igual que cero"),

    hemoglobina:yup
    .number()
    .required("Este valor es requerido")
    .min(0, "El valor debe ser mayor o igual que cero"),

    biopsia_numero: yup
    .number().integer("El número no debe contener coma")
    .required("Este valor es requerido")
    .min(0, "No puede ser menor que 0"),

    diagnostico_topografico: yup
    .string()
    .required("Este campo es requerido"),

    diagnostico_morfologico: yup
    .string()
    .required("Este campo es requerido"),

    diagnosticado_en: yup
    .string()
    .required("Este campo es requerido"),

    tnm_T: yup
    .string()
    .required("Este campo es requerido"),

    tnm_N: yup
    .string()
    .required("Este campo es requerido"),

    tnm_M: yup
    .string()
    .required("Este campo es requerido"),

    ptnm_pT: yup
    .string()
    .required("Este campo es requerido"),

    ptnm_pN: yup
    .string()
    .required("Este campo es requerido"),

    ptnm_pM: yup
    .string()
    .required("Este campo es requerido"),

    observaciones: yup
    .string()
    .required("Este campo es requerido"),

    nombre_del_medico: yup
    .string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe llevar al menos un carácter")
    .matches(
      /^[A-Z][a-zÁÉÍÓÚÜÑa-áéíóúüñ]+$/,
      "El nombre debe comenzar con una letra mayúscula y contener solo letras"
    ),

    registro_profesional: yup.string()
    .required('El campo es requerido')
    .matches(
      /^[^\s]+$/,
      'El texto no debe contener espacios')
      .min(5, "Complete los caracteres del registro profesional")
    ,


  // remision: yup
  // .string().oneOf(["fgf",""])
  // .required("EL nombre de usuario es requerido"),
});
