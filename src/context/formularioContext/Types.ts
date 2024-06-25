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
  diagnosticado_en = "diagnosticado_en",
  diagnostico_topografico_selecciona = "diagnostico_topografico_selecciona",
  diagnostico_morfologico_selecciona = "diagnostico_morfologico_selecciona",
  diagnosticado_en_selecciona = "diagnosticado_en_selecciona",
  grado_de_diferenciacion = "grado_de_diferenciacion",
  base_del_diagnostico = "base_del_diagnostico",
  otras = "otras",
  etapa_clinica = "etapa_clinica",
  tnm_T = "tnm_T",
  tnm_N = "tnm_N",
  tnm_M = "tnm_M",
  ptnm_pT = "ptnm_pT",
  ptnm_pN = "ptnm_pN",
  ptnm_pM = "ptnm_pM",
  metastasis_a_distancia = "metastasis_a_distancia",
  extension_clinica = "extension_clinica",
  en_la_institucion = "en_la_institucion",
  en_otro_centro = "en_otro_centro",
  tratamiento_planificado = "tratamiento_planificado",
  otro_tratamiento_planificado = "otro_tratamiento_planificado",
  inclusion_en_ec = "inclusion_en_ec",
  en_caso_de_si = "en_caso_de_si",
  tratamiento_quirurgico = "tratamiento_quirurgico",
  tipo_de_cirugia = "tipo_de_cirugia",
  fecha_del_tratamiento_quirurgico = "fecha_del_tratamiento_quirurgico",
  tratamiento_radioterapia = "tratamiento_radioterapia",
  tipo_de_tratamiento_radioterap = "tipo_de_tratamiento_radioterap",
  fecha_del_inicio_del_tratamiento_radioterapeutico = "fecha_del_inicio_del_tratamiento_radioterapeutico",
  fecha_del_final_del_tratamiento_radioterapeutico = "fecha_del_final_del_tratamiento_radioterapeutico",
  dosis_total = "dosis_total",
  gy_fraccion = "gy_fraccion",  
  tratamiento_quimioterapia = "tratamiento_quimioterapia",
  esquema_tratamiento = "esquema_tratamiento",
  numero_de_ciclos = "numero_de_ciclos",
  fecha_del_inicio_del_tratamiento_quimioterapeutico = "fecha_del_inicio_del_tratamiento_quimioterapeutico",
  fecha_del_final_del_tratamiento_quimioterapeutico = "fecha_del_final_del_tratamiento_quimioterapeutico",
  otro_tratamiento = "otro_tratamiento", 
  cual_tratamiento = "cual_tratamiento",
  fecha_del_inicio_del_tratamiento = "fecha_del_inicio_del_tratamiento",
  fecha_del_final_del_tratamiento = "fecha_del_final_del_tratamiento",
  evaluacion_de_la_respuesta = "evaluacion_de_la_respuesta",
  fecha_evaluacion = "fecha_evaluacion",
  observaciones = "observaciones",
  nombre_del_medico = "nombre_del_medico",
  registro_profesional = "registro_profesional",
}

export interface Formulario {
  id?: number | null | string;
  nombre: string;
  fecha?: string; //"2024-06-22";
  remision?: "No remitido" | "Atención primaria" | "Programa de control" | "Atención secundaria";
  historia_clinica?: boolean; //true;
  motivo_consulta?: string; //"string";
  primer_sintoma?: string; //"string";
  tiempo_de_aparicion?: string; //"Días";
  otros_sintomas?: string;
  personales_de_riesgo?: string; //"Ninguno";
  personales_patologicos?: string; //"Ninguno";
  familiares_con_cancer?: "Si" | "No" | "Desconocido";
  caracteristicas_de_la_lesion?: string; //"Vegetante";
  region?: string; //"Derecha";
  tamanno_de_la_lesion?: number; 
  localizacion_en_labio?: string; //"Labio superior";
  lengua_movil?: string; //"Cara central";
  suelo_de_Boca?: string; //"Parte anterior";
  encia?: string; //"Superior";
  otras_partes_del_a_boca?: string; //"Carrillo";
  glandulas_salibales?: string; //"Parótida";
  ardenopatia_cervical_derecha?: string; //"No";
  ardenopatia_cervical_izquierda?: string; //"No";
  extension_clinica_a?: string; //"No";
  performance_status?: string; //"0";
  primer_apellido?: string;
  segundo_apellido?: string;
  nombre_del_paciente?: string;
  sexo?: "Masculino" | "Femenino";
  edad?: number; //0;
  color_de_piel?: string; //"Blanca";
  carne_de_identidad?: string;
  historia_clinica_numero?: number;
  fecha_de_inscripcion: string; //0;
  creatinina?: number; //"664.17";
  hemoglobina?: number; //"82219074677";
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
  diagnostico_morfologico?: string,
  diagnosticado_en?: string,
  diagnostico_topografico_selecciona?: string,
  diagnostico_morfologico_selecciona?: string,
  diagnosticado_en_selecciona?: string,
  grado_de_diferenciacion?: string,
  base_del_diagnostico?: string,
  otras?: string,
  etapa_clinica?: string,
  tnm_T?: string,
  tnm_N?: string,
  tnm_M?: string,
  ptnm_pT?: string,
  ptnm_pN?: string,
  ptnm_pM?: string,
  metastasis_a_distancia?: string,
  extension_clinica?: string,
  en_otro_centro?: string,
  en_la_institucion?: string,
  tratamiento_planificado?: string,
  otro_tratamiento_planificado?: string,
  inclusion_en_ec?: true,
  en_caso_de_si?: string,
  tratamiento_quirurgico?: boolean,
  tipo_de_cirugia?: string,
  fecha_del_tratamiento_quirurgico?: string,
  tratamiento_radioterapia?: boolean,
  tipo_de_tratamiento_radioterap?: string,
  fecha_del_inicio_del_tratamiento_radioterapeutico?: string,
  fecha_del_final_del_tratamiento_radioterapeutico?: string,
  dosis_total?: number,
  gy_fraccion?: number,
  tratamiento_quimioterapia?: boolean,
  esquema_tratamiento?: string,
  numero_de_ciclos?: number,
  fecha_del_inicio_del_tratamiento_quimioterapeutico?: string,
  fecha_del_final_del_tratamiento_quimioterapeutico?: string,
  otro_tratamiento?: boolean,
  cual_tratamiento?: string,
  fecha_del_inicio_del_tratamiento?: string,
  fecha_del_final_del_tratamiento?: string,
  evaluacion_de_la_respuesta?: string,
  fecha_evaluacion?: string,
  observaciones?: string,
  nombre_del_medico?: string,
  registro_profesional?: string
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
  tamanno_de_la_lesion: 0,
  localizacion_en_labio: "Labio superior",
  lengua_movil: "Cara central",
  suelo_de_Boca: "Parte anterior",
  encia: "Superior",
  otras_partes_del_a_boca: "Carrillo",
  glandulas_salibales: "Parótida",
  ardenopatia_cervical_derecha: "No",
  ardenopatia_cervical_izquierda: "No",
  extension_clinica_a: "No",
  performance_status: "0",
  primer_apellido: "string",
  segundo_apellido: "string",
  nombre_del_paciente: "string",
  sexo: "Femenino",
  edad: 0,
  color_de_piel: "Blanca",
  carne_de_identidad: "string",
  historia_clinica_numero: 0,
  fecha_de_inscripcion: "2024-06-22",
  creatinina: 0,
  hemoglobina: 0,
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
  diagnostico_morfologico: "string",
  diagnosticado_en: "string",
  diagnostico_topografico_selecciona: "Ninguno",
  diagnostico_morfologico_selecciona: "Ninguno",
  diagnosticado_en_selecciona: "Ninguno",
  grado_de_diferenciacion: "Diferenciado",
  base_del_diagnostico: "Desconocidas",
  otras: "strnig",
  etapa_clinica: "Desconocida",
  tnm_T: "strnig",
  tnm_N: "strnig",
  tnm_M: "strnig",
  ptnm_pT: "strnig",
  ptnm_pN: "strnig",
  ptnm_pM: "strnig",
  metastasis_a_distancia: "Desconocida",
  extension_clinica: "Desconocida",
  en_la_institucion: "No",
  en_otro_centro: "No",
  tratamiento_planificado: "Desconocido",
  otro_tratamiento_planificado: "string",
  inclusion_en_ec: true,
  en_caso_de_si: "string",
  tratamiento_quirurgico: true,
  tipo_de_cirugia: "string",
  fecha_del_tratamiento_quirurgico: "2024-06-22",
  tratamiento_radioterapia: true,
  tipo_de_tratamiento_radioterap: "string",
  fecha_del_inicio_del_tratamiento_radioterapeutico: "2024-06-22",
  fecha_del_final_del_tratamiento_radioterapeutico: "2024-06-22",
  dosis_total: 0,
  gy_fraccion:0,
  tratamiento_quimioterapia: true,
  esquema_tratamiento: "string",
  numero_de_ciclos:0,
  fecha_del_inicio_del_tratamiento_quimioterapeutico: "2024-06-22",
  fecha_del_final_del_tratamiento_quimioterapeutico: "2024-06-22",
  otro_tratamiento: true,
  cual_tratamiento: "string",
  fecha_del_inicio_del_tratamiento: "2024-06-22",
  fecha_del_final_del_tratamiento: "2024-06-22",
  evaluacion_de_la_respuesta: "RC",
  fecha_evaluacion: "2024-06-22",
  observaciones: "string",
  nombre_del_medico: "string",
  registro_profesional: "string",

};
