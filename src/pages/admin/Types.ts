import { Formulario } from "../../context/formularioContext/Types";

export interface FormularioFormValues extends Formulario {}

export const initialValues: FormularioFormValues = {
  nombre: "",
  fecha: "2024-06-22",
  remision: "No remitido",
  historia_clinica: true,
  motivo_consulta: "Aparición de lesión",
  primer_sintoma: "",
  tiempo_de_aparicion: "Días",
  otros_sintomas: "",
  personales_de_riesgo: "Ninguno",
  personales_patologicos: "Ninguno",
  familiares_con_cancer: "Desconocido",
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
  primer_apellido: "",
  segundo_apellido: "",
  nombre_del_paciente: "",
  sexo: "Masculino",
  edad: 0,
  color_de_piel: "Blanca",
  carne_de_identidad: "",
  historia_clinica_numero: 1,
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
  biopsia_numero: 1,
  fecha_de_diagnostico: "2024-06-22",
  diagnostico_topografico: "",
  diagnostico_morfologico: "",
  diagnosticado_en: "",
  diagnostico_topografico_selecciona: "Ninguno",
  diagnostico_morfologico_selecciona: "Ninguno",
  diagnosticado_en_selecciona: "Ninguno",
  grado_de_diferenciacion: "Diferenciado",
  base_del_diagnostico: "Desconocidas",
  otras: "",
  etapa_clinica: "Desconocida",
  tnm_T: "",
  tnm_N: "",
  tnm_M: "",
  ptnm_pT: "",
  ptnm_pN: "",
  ptnm_pM: "",
  metastasis_a_distancia: "Desconocida",
  extension_clinica: "Desconocido",
  en_la_institucion: "No",
  en_otro_centro: "No",
  tratamiento_planificado: "Desconocido",
  otro_tratamiento_planificado: "",
  inclusion_en_ec: true,
  en_caso_de_si: "",
  tratamiento_quirurgico: true,
  tipo_de_cirugia: "",
  fecha_del_tratamiento_quirurgico: "2024-06-22",
  tratamiento_radioterapia: true,
  tipo_de_tratamiento_radioterap: "",
  fecha_del_inicio_del_tratamiento_radioterapeutico: "2024-06-22",
  fecha_del_final_del_tratamiento_radioterapeutico: "2024-06-22",
  dosis_total: 0,
  gy_fraccion: 0,
  tratamiento_quimioterapia: true,
  esquema_tratamiento: "",
  numero_de_ciclos: 1,
  fecha_del_inicio_del_tratamiento_quimioterapeutico: "2024-06-22",
  fecha_del_final_del_tratamiento_quimioterapeutico: "2024-06-22",
  otro_tratamiento: true,
  cual_tratamiento: "",
  fecha_del_inicio_del_tratamiento: "2024-06-22",
  fecha_del_final_del_tratamiento: "2024-06-22",
  evaluacion_de_la_respuesta: "RC",
  fecha_evaluacion: "2024-06-22",
  observaciones: "",
  nombre_del_medico: "",
  registro_profesional: "",
};
