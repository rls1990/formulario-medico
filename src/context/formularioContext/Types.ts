export enum FormularioFields {
  id = "id",
  nombre = "nombre",
  fecha = "fecha",
  remision = "remision",
  historia_clinica = "historia_clinica",
  motivo_consulta = "motivo_consulta",
  primer_sintoma = "primer_sintoma",
  tiempo_de_aparicion = "tiempo_de_aparicion",
  otros_sintomas = "otros_sintomas",
  personales_de_riesgo = "personales_de_riesgo",
  personales_patologicos = "personales_patologicos",
  familiares_con_cancer = "familiares_con_cancer",
  caracteristicas_de_la_lesion = "caracteristicas_de_la_lesion",
  region = "region",
  tamanno_de_la_lesion = "tamanno_de_la_lesion",
  localizacion_en_labio = "localizacion_en_labio",
  lengua_movil = "lengua_movil",
  suelo_de_Boca = "suelo_de_Boca",
  encia = "encia",
  otras_partes_del_a_boca = "otras_partes_del_a_boca",
  glandulas_salibales = "glandulas_salibales",
  ardenopatia_cervical_derecha = "ardenopatia_cervical_derecha",
  ardenopatia_cervical_izquierda = "ardenopatia_cervical_izquierda",
  extension_clinica_a = "extension_clinica_a",
  performance_status = "performance_status",
  primer_apellido = "primer_apellido",
  segundo_apellido = "segundo_apellido",
  nombre_del_paciente = "nombre_del_paciente",
  sexo = "sexo",
  edad = "edad",
  color_de_piel = "color_de_piel",
  carne_de_identidad = "carne_de_identidad",
  historia_clinica_numero = "historia_clinica_numero",
  fecha_de_inscripcion = "fecha_de_inscripcion",
  creatinina = "creatinina",
  hemoglobina = "hemoglobina",
  imagen_rx_torax = "imagen_rx_torax",
  imagen_us_abdomen = "imagen_us_abdomen",
  imagen_tac_cavidad_oral = "imagen_tac_cavidad_oral",
  otros_tac_faringe = "otros_tac_faringe",
  otros_tac_cuello = "otros_tac_cuello",
  otros_tac_torax = "otros_tac_torax",
  otros_rmn = "otros_rmn",
  biopsia_numero = "biopsia_numero",
  fecha_de_diagnostico = "fecha_de_diagnostico",
  diagnostico_topografico = "diagnostico_topografico",
}

export interface Formulario {
  id?: number | null | string;
  nombre: string;
  fecha?: string; //"2024-06-22";
  remision?: "No remitido" | "remitido";
  historia_clinica?: boolean; //true;
  motivo_consulta?: string; //"string";
  primer_sintoma?: string; //"string";
  tiempo_de_aparicion?: string; //"Días";
  otros_sintomas?: string;
  personales_de_riesgo?: string; //"Ninguno";
  personales_patologicos?: string; //"Ninguno";
  familiares_con_cancer?: "Si" | "No" | "Tal vez";
  caracteristicas_de_la_lesion?: string; //"Vegetante";
  region?: string; //"Derecha";
  tamanno_de_la_lesion?: string; //"2024-06-22";
  localizacion_en_labio?: string; //"Labio superior";
  lengua_movil?: string; //"Cara central";
  suelo_de_Boca?: string; //"Parte anterior";
  encia?: string; //"Superior";
  otras_partes_del_a_boca?: string; //"Carrillo";
  glandulas_salibales?: string; //"Parótida";
  ardenopatia_cervical_derecha?: string; //"No";
  ardenopatia_cervical_izquierda?: string; //"No";
  extension_clinica_a?: string; //"No";
  performance_status?: number; //"0";
  primer_apellido?: string;
  segundo_apellido?: string;
  nombre_del_paciente?: string;
  sexo?: "Femenino" | "Masculino";
  edad?: number; //0;
  color_de_piel?: string; //"Blanca";
  carne_de_identidad?: string;
  historia_clinica_numero?: string;
  fecha_de_inscripcion: number; //0;
  creatinina?: string; //"664.17";
  hemoglobina?: string; //"82219074677";
  imagen_rx_torax?: string; //"Ninguno";
  imagen_us_abdomen?: string; //"Ninguno";
  imagen_tac_cavidad_oral?: string; //"Ninguno";
  otros_tac_faringe?: string; //"Ninguno";
  otros_tac_cuello?: string; //"Ninguno";
  otros_tac_torax?: string; //"Ninguno";
  otros_rmn?: string; //"Ninguno";
  biopsia_numero?: number; //0;
  fecha_de_diagnostico?: string; //"2024-06-22";
  diagnostico_topografico?: string;
}

export interface ContextPropsRes {
  formularios?: Formulario[] | null;
  dataToEdit?: Formulario | null;
  setDatatoEdit?: React.Dispatch<React.SetStateAction<Formulario>> | null;
  loading?: boolean;
  error?: null | string;
  setError?: React.Dispatch<React.SetStateAction<string | null>> | null;
  createFormulario?: ((data: Formulario) => void) | null;
  updateFormulario?: ((data: Formulario) => void) | null;
  deleteFormulario?: ((id: number) => void) | null;
  getFormularios?: (() => void) | null;
}

export interface FormularioContextProps {
  children: React.ReactNode;
}

export const initialData: ContextPropsRes = {
  formularios: null,
  dataToEdit: null,
  setDatatoEdit: null,
  loading: false,
  error: null,
  setError: null,
  createFormulario: null,
  updateFormulario: null,
  deleteFormulario: null,
  getFormularios: null,
};

export const initialDateToEdit: Formulario = {
  nombre: "string",
  fecha: "2024-06-22",
  remision: "No remitido",
  historia_clinica: true,
  motivo_consulta: "string",
  primer_sintoma: "string",
  tiempo_de_aparicion: "Días",
  otros_sintomas: "string",
  personales_de_riesgo: "Ninguno",
  personales_patologicos: "Ninguno",
  familiares_con_cancer: "Si",
  caracteristicas_de_la_lesion: "Vegetante",
  region: "Derecha",
  tamanno_de_la_lesion: "2024-06-22",
  localizacion_en_labio: "Labio superior",
  lengua_movil: "Cara central",
  suelo_de_Boca: "Parte anterior",
  encia: "Superior",
  otras_partes_del_a_boca: "Carrillo",
  glandulas_salibales: "Parótida",
  ardenopatia_cervical_derecha: "No",
  ardenopatia_cervical_izquierda: "No",
  extension_clinica_a: "No",
  performance_status: 0,
  primer_apellido: "string",
  segundo_apellido: "string",
  nombre_del_paciente: "string",
  sexo: "Femenino",
  edad: 0,
  color_de_piel: "Blanca",
  carne_de_identidad: "string",
  historia_clinica_numero: "string",
  fecha_de_inscripcion: 0,
  creatinina: "-7717608",
  hemoglobina: "-35713934",
  imagen_rx_torax: "Ninguno",
  imagen_us_abdomen: "Ninguno",
  imagen_tac_cavidad_oral: "Ninguno",
  otros_tac_faringe: "Ninguno",
  otros_tac_cuello: "Ninguno",
  otros_tac_torax: "Ninguno",
  otros_rmn: "Ninguno",
  biopsia_numero: 0,
  fecha_de_diagnostico: "2024-06-22",
  diagnostico_topografico: "string",
};
