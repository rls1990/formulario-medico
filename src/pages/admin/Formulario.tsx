/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { useContext, useEffect, useState } from "react";

import { TextField } from "../../components/mui/text_fields/input/text/TextField";

import "./Formulario.css";
import {
  Button,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField as TextFieldSelect,
  TextField as TextFieldNumber,
  TextField as TextFieldMUI,
  Alert,
  AlertTitle,
  Divider,
} from "@mui/material";
import { FormularioFormValues } from "./Types";
import { useFormik } from "formik";
import { initialValues } from "./Types";
import { validationSchema } from "../../validators/FormularioValideitor";
import { IconEdnUserName, IconStartUserName } from "../login/HelpersForm";
import { NumericFormatCustom } from "../../components/mui/text_fields/input/number/FormattedInputs";
import { TextField as TextArea } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Formulario as FormularioDataInterf } from "../../context/formularioContext/Types";
import { FormularioContext } from "../../context/formularioContext/FormularioContext";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Formulario = () => {
  const [valueTab, setValueTab] = useState(0);
  const { createFormulario } = useContext(FormularioContext);
  const [errorFormik, setErrorFormik] = useState(false);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  // const [valueTab, setValueTab] = useState(0);

  // const handleChangeTab = (event: any, newValue: any) => {
  //   setValueTab(newValue);
  // };

  const [fecha, setFecha] = useState<Dayjs | null>(dayjs());
  const handleChange = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
  };

  const [fecha_de_inscripcion, setFecha_de_inscripcion] =
    useState<Dayjs | null>(dayjs());
  const handleChange_fecha_de_inscripcion = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_de_inscripcion(newValue);
  };

  const [fecha_de_diagnostico, setFecha_de_diagnostico] =
    useState<Dayjs | null>(dayjs());
  const handleChange_fecha_de_diagnostico = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_de_diagnostico(newValue);
  };

  const [
    fecha_del_tratamiento_quirurgico,
    setFecha_del_tratamiento_quirurgico,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_tratamiento_quirurgico = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_tratamiento_quirurgico(newValue);
  };

  const [
    fecha_del_inicio_del_tratamiento_radioterapeutico,
    setFecha_del_inicio_del_tratamiento_radioterapeutico,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_inicio_del_tratamiento_radioterapeutico = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_inicio_del_tratamiento_radioterapeutico(newValue);
  };

  const [
    fecha_del_final_del_tratamiento_radioterapeutico,
    setFecha_del_final_del_tratamiento_radioterapeutico,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_final_del_tratamiento_radioterapeutico = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_final_del_tratamiento_radioterapeutico(newValue);
  };

  const [
    fecha_del_inicio_del_tratamiento_quimioterapeutico,
    setFecha_del_inicio_del_tratamiento_quimioterapeutico,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_inicio_del_tratamiento_quimioterapeutico = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_inicio_del_tratamiento_quimioterapeutico(newValue);
  };

  const [
    fecha_del_final_del_tratamiento_quimioterapeutico,
    setFecha_del_final_del_tratamiento_quimioterapeutico,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_final_del_tratamiento_quimioterapeutico = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_final_del_tratamiento_quimioterapeutico(newValue);
  };

  const [
    fecha_del_inicio_del_tratamiento,
    setFecha_del_inicio_del_tratamiento,
  ] = useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_inicio_del_tratamiento = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_inicio_del_tratamiento(newValue);
  };

  const [fecha_del_final_del_tratamiento, setFecha_del_final_del_tratamiento] =
    useState<Dayjs | null>(dayjs());
  const handleChange_fecha_del_final_del_tratamiento = (
    newValue: Dayjs | null
  ) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_del_final_del_tratamiento(newValue);
  };

  const [fecha_evaluacion, setFecha_evaluacion] = useState<Dayjs | null>(
    dayjs()
  );
  const handleChange_fecha_evaluacion = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha_evaluacion(newValue);
  };

  const onChangeSelect = () => {};

  const onSubmit = (values: FormularioFormValues) => {
    //TODO api
    const data: FormularioDataInterf = { ...values };

    data.fecha = values.fecha;

    data.fecha_de_inscripcion = values.fecha_de_inscripcion;

    data.fecha_de_diagnostico = values.fecha_de_diagnostico;

    data.fecha_del_tratamiento_quirurgico =
      values.fecha_del_tratamiento_quirurgico;

    data.fecha_del_inicio_del_tratamiento_radioterapeutico =
      values.fecha_del_inicio_del_tratamiento_radioterapeutico;

    data.fecha_del_final_del_tratamiento_radioterapeutico =
      values.fecha_del_final_del_tratamiento_radioterapeutico;

    data.fecha_del_inicio_del_tratamiento_quimioterapeutico =
      values.fecha_del_inicio_del_tratamiento_quimioterapeutico;

    data.fecha_del_final_del_tratamiento_quimioterapeutico =
      values.fecha_del_final_del_tratamiento_quimioterapeutico;

    data.fecha_del_inicio_del_tratamiento =
      values.fecha_del_inicio_del_tratamiento;

    data.fecha_del_final_del_tratamiento =
      values.fecha_del_final_del_tratamiento;

    data.fecha_evaluacion = values.fecha_evaluacion;

    createFormulario && createFormulario(data);
  };

  const formik = useFormik<FormularioFormValues>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    let id: number = 0;
    if (!formik.isValid) {
      console.log("init");
      setErrorFormik(true);
      id = setTimeout(() => {
        setErrorFormik(false);
        console.log("end");
      }, 5000);
    }

    return () => clearTimeout(id);
  }, [formik.isValid]);

  const colorNombre = formik.errors.nombre
    ? "error"
    : formik.touched.nombre
    ? "success"
    : "primary";

  const colorPrimerSintoma = formik.errors.primer_sintoma
    ? "error"
    : formik.touched.primer_sintoma
    ? "success"
    : "primary";

  const colorTamanno_de_la_lesion = formik.errors.tamanno_de_la_lesion
    ? "error"
    : formik.touched.tamanno_de_la_lesion
    ? "success"
    : "primary";

  const colorPrimer_apellido = formik.errors.primer_apellido
    ? "error"
    : formik.touched.primer_apellido
    ? "success"
    : "primary";

  const colorSegundo_apellido = formik.errors.segundo_apellido
    ? "error"
    : formik.touched.segundo_apellido
    ? "success"
    : "primary";

  const colorNombre_del_paciente = formik.errors.nombre_del_paciente
    ? "error"
    : formik.touched.nombre_del_paciente
    ? "success"
    : "primary";

  const colorEdad = formik.errors.edad
    ? "error"
    : formik.touched.edad
    ? "success"
    : "primary";

  const colorCarne_de_identidad = formik.errors.carne_de_identidad
    ? "error"
    : formik.touched.carne_de_identidad
    ? "success"
    : "primary";

  const colorHistoria_clinica_numero = formik.errors.historia_clinica_numero
    ? "error"
    : formik.touched.historia_clinica_numero
    ? "success"
    : "primary";

  const colorCreatinina = formik.errors.creatinina
    ? "error"
    : formik.touched.creatinina
    ? "success"
    : "primary";

  const colorHemoglobina = formik.errors.hemoglobina
    ? "error"
    : formik.touched.hemoglobina
    ? "success"
    : "primary";

  const colorBiopsia_numero = formik.errors.biopsia_numero
    ? "error"
    : formik.touched.biopsia_numero
    ? "success"
    : "primary";

  const colorDiagnostico_topografico = formik.errors.diagnostico_topografico
    ? "error"
    : formik.touched.diagnostico_topografico
    ? "success"
    : "primary";

  const colorDiagnostico_morfologico = formik.errors.diagnostico_morfologico
    ? "error"
    : formik.touched.diagnostico_morfologico
    ? "success"
    : "primary";

  const colorDiagnosticado_en = formik.errors.diagnosticado_en
    ? "error"
    : formik.touched.diagnosticado_en
    ? "success"
    : "primary";

  const colorTnm_T = formik.errors.tnm_T
    ? "error"
    : formik.touched.tnm_T
    ? "success"
    : "primary";

  const colorTnm_N = formik.errors.tnm_N
    ? "error"
    : formik.touched.tnm_N
    ? "success"
    : "primary";

  const colorTnm_M = formik.errors.tnm_M
    ? "error"
    : formik.touched.tnm_M
    ? "success"
    : "primary";

  const colorPtnm_pT = formik.errors.ptnm_pT
    ? "error"
    : formik.touched.ptnm_pT
    ? "success"
    : "primary";

  const colorPtnm_pN = formik.errors.ptnm_pN
    ? "error"
    : formik.touched.ptnm_pN
    ? "success"
    : "primary";

  const colorPtnm_pM = formik.errors.ptnm_pM
    ? "error"
    : formik.touched.ptnm_pM
    ? "success"
    : "primary";

  const colorObservaciones = formik.errors.observaciones
    ? "error"
    : formik.touched.observaciones
    ? "success"
    : "primary";

  const colorNombre_del_medico = formik.errors.nombre_del_medico
    ? "error"
    : formik.touched.nombre_del_medico
    ? "success"
    : "primary";

  const colorRegistro_profesional = formik.errors.registro_profesional
    ? "error"
    : formik.touched.registro_profesional
    ? "success"
    : "primary";

  return (
    <div>
      <h3>Formulario</h3>

      {errorFormik && (
        <div
          style={{
            marginBottom: 21,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Alert variant="filled" severity="error" sx={{ width: 300 }}>
            <div className="alert-title">
              <AlertTitle>Error</AlertTitle>
              <Divider
                orientation="horizontal"
                variant="fullWidth"
                sx={{
                  mb: 1,
                  borderColor: "rgb(255 255 255 / 58%)",
                  width: 150,
                }}
              />
            </div>
            Existen campos sin validar
          </Alert>
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="formulario-container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={valueTab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-flexContainer": {
                display: "flex",
                flexWrap: "wrap",
              },
            }}
          >
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="Remisión" {...a11yProps(1)} />
            <Tab label="Anamnesis" {...a11yProps(2)} />
            <Tab label="Antecedentes" {...a11yProps(3)} />
            <Tab label="Evaluación Clínica" {...a11yProps(4)} />
            <Tab label="Datos del Paciente" {...a11yProps(5)} />
            <Tab label="Evaluación" {...a11yProps(6)} />
            <Tab label="Anatomía Patológica" {...a11yProps(7)} />
            <Tab label="Estadiamiento" {...a11yProps(8)} />
            <Tab label="Tratamiento" {...a11yProps(9)} />
            <Tab label="Descripción del Tratamiento" {...a11yProps(10)} />
            <Tab label="Datos del Médico" {...a11yProps(11)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={valueTab} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="nombre"
                  label="Nombre del formulario"
                  startAdornment={<IconStartUserName formik={formik} />}
                  endAdornment={<IconEdnUserName formik={formik} />}
                  color={colorNombre}
                  {...formik.getFieldProps("nombre")}
                  error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                  helperText={formik.touched.nombre && formik.errors.nombre}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha"
                    label="Fechade creación del formulario"
                    value={fecha}
                    onChange={handleChange}
                    sx={{ mb: 3, width: 300 }}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <TextFieldSelect
                  id="remision"
                  label="Remision"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No remitido"
                  {...formik.getFieldProps("remision")}
                  error={
                    formik.touched.remision && Boolean(formik.errors.remision)
                  }
                  helperText={formik.touched.remision && formik.errors.remision}
                >
                  <MenuItem value="No remitido">No remitido</MenuItem>
                  <MenuItem value="Atención primaria">
                    Atención primaria
                  </MenuItem>
                  <MenuItem value="Programa de control">
                    Programa de control
                  </MenuItem>
                  <MenuItem value="Atención secundaria">
                    Atención secundaria
                  </MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item>
                <FormControlLabel
                  id="historia_clinica"
                  control={<Switch defaultChecked />}
                  label="Historia Clínica"
                  {...formik.getFieldProps("historia_clinica")}
                  // error={
                  //   formik.touched.historia_clinica &&
                  //   Boolean(formik.errors.historia_clinica)
                  // }
                  // helperText={
                  //   formik.touched.historia_clinica &&
                  //   formik.errors.historia_clinica
                  // }
                />
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="motivo_consulta"
                  label="Motivo de la Consulta"
                  select
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Aparición de lesión"
                  {...formik.getFieldProps("motivo_consulta")}
                >
                  <MenuItem value="Aparición de lesión">
                    Aparición de lesión
                  </MenuItem>
                  <MenuItem value="Aumento de volumen">
                    Aumento de volumen
                  </MenuItem>
                  <MenuItem value="Nódulo cervical">Nódulo cervical</MenuItem>
                  <MenuItem value="Sangramiento">Sangramiento</MenuItem>
                  <MenuItem value="Odinofagia">Odinofagia</MenuItem>
                  <MenuItem value="Sialorrea">Sialorrea</MenuItem>
                  <MenuItem value="Dolor">Dolor</MenuItem>
                  <MenuItem value="Parálisis facial">Parálisis facial</MenuItem>
                  <MenuItem value="Otros síntomas">Otros síntomas</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                {/* <TextField id="otros_sintomas" label="Otros Síntomas" /> */}
                <TextArea
                  id="otros_sintomas"
                  label="Otros Síntomas"
                  multiline
                  maxRows={4}
                  sx={{ mb: 3, width: 300 }}
                  {...formik.getFieldProps("otros_sintomas")}
                  error={
                    formik.values.motivo_consulta === "Otros síntomas" &&
                    formik.touched.otros_sintomas &&
                    Boolean(formik.errors.otros_sintomas)
                  }
                  helperText={
                    formik.values.motivo_consulta === "Otros síntomas" &&
                    formik.touched.otros_sintomas &&
                    formik.errors.otros_sintomas
                  }
                  disabled={
                    formik.values.motivo_consulta === "Otros síntomas"
                      ? false
                      : true
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="primer_sintoma"
                  label="Primer Síntoma"
                  color={colorPrimerSintoma}
                  {...formik.getFieldProps("primer_sintoma")}
                  error={
                    formik.touched.primer_sintoma &&
                    Boolean(formik.errors.primer_sintoma)
                  }
                  helperText={
                    formik.touched.primer_sintoma &&
                    formik.errors.primer_sintoma
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="tiempo_de_aparicion"
                  label="Tiempo de Aparición"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Días"
                  {...formik.getFieldProps("tiempo_de_aparicion")}
                  error={
                    formik.touched.tiempo_de_aparicion &&
                    Boolean(formik.errors.tiempo_de_aparicion)
                  }
                  helperText={
                    formik.touched.tiempo_de_aparicion &&
                    formik.errors.tiempo_de_aparicion
                  }
                >
                  <MenuItem value="Días">Días</MenuItem>
                  <MenuItem value="Meses">Meses</MenuItem>
                  <MenuItem value="Años">Años</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={3}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="personales_de_riesgo"
                  label="Personales de Riesgo"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("personales_de_riesgo")}
                  error={
                    formik.touched.personales_de_riesgo &&
                    Boolean(formik.errors.personales_de_riesgo)
                  }
                  helperText={
                    formik.touched.personales_de_riesgo &&
                    formik.errors.personales_de_riesgo
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Tabaquismo">Tabaquismo</MenuItem>
                  <MenuItem value="Exposición a irritantes">
                    Exposición a irritantes
                  </MenuItem>
                  <MenuItem value="Ingestión bebidas alcohólicas">
                    Ingestión bebidas alcohólicas
                  </MenuItem>
                  <MenuItem value="Trauma región de la lesión">
                    Trauma región de la lesión
                  </MenuItem>
                  <MenuItem value="Mala higiene bucal">
                    Mala higiene bucal
                  </MenuItem>
                  <MenuItem value="Uso de prótesis">Uso de prótesi</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="personales_patologicos"
                  label="Personales Patológicos"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("personales_patologicos")}
                  error={
                    formik.touched.personales_patologicos &&
                    Boolean(formik.errors.personales_patologicos)
                  }
                  helperText={
                    formik.touched.personales_patologicos &&
                    formik.errors.personales_patologicos
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Leucoplasias">Leucoplasias</MenuItem>
                  <MenuItem value="Queratosis">Queratosis</MenuItem>
                  <MenuItem value="Avitaminosis">Avitaminosis</MenuItem>
                  <MenuItem value="Tuberculosis">Tuberculosis</MenuItem>
                  <MenuItem value="Sífilis">Sífilis</MenuItem>
                  <MenuItem value="Infección crónica">
                    Infección crónica
                  </MenuItem>
                  <MenuItem value="VIH">VIH</MenuItem>
                  <MenuItem value="Neoplasia maligna">
                    Neoplasia maligna
                  </MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="familiares_con_cancer"
                  label="Familiares con Cáncer"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocido"
                  {...formik.getFieldProps("familiares_con_cancer")}
                  error={
                    formik.touched.familiares_con_cancer &&
                    Boolean(formik.errors.familiares_con_cancer)
                  }
                  helperText={
                    formik.touched.familiares_con_cancer &&
                    formik.errors.familiares_con_cancer
                  }
                >
                  <MenuItem value="Desconocido">Desconocido</MenuItem>
                  <MenuItem value="Sí">Sí</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="caracteristicas_de_la_lesion"
                  label="Características de la Lesión"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Vegetante"
                  {...formik.getFieldProps("caracteristicas_de_la_lesion")}
                  error={
                    formik.touched.caracteristicas_de_la_lesion &&
                    Boolean(formik.errors.caracteristicas_de_la_lesion)
                  }
                  helperText={
                    formik.touched.caracteristicas_de_la_lesion &&
                    formik.errors.caracteristicas_de_la_lesion
                  }
                >
                  <MenuItem value="Vegetante">Vegetante</MenuItem>
                  <MenuItem value="Infiltrante">Infiltrante</MenuItem>
                  <MenuItem value="Úlcero-vegetante">Úlcero-vegetante</MenuItem>
                  <MenuItem value="Úlcero-infiltrante">
                    Úlcero-infiltrante
                  </MenuItem>
                  <MenuItem value="Necrosante">Necrosante</MenuItem>
                  <MenuItem value="Plana">Plana</MenuItem>
                  <MenuItem value="Submucosa">Submucosa</MenuItem>
                  <MenuItem value="Nodular">Nodular</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="region"
                  label="Región"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Derecha"
                  {...formik.getFieldProps("region")}
                  error={formik.touched.region && Boolean(formik.errors.region)}
                  helperText={formik.touched.region && formik.errors.region}
                >
                  <MenuItem value="Derecha">Derecha</MenuItem>
                  <MenuItem value="Central">Central</MenuItem>
                  <MenuItem value="Izquierda">Izquierda</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="tamanno_de_la_lesion"
                  label="Tamaño de la Lesión"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
                  color={colorTamanno_de_la_lesion}
                  {...formik.getFieldProps("tamanno_de_la_lesion")}
                  error={
                    formik.touched.tamanno_de_la_lesion &&
                    Boolean(formik.errors.tamanno_de_la_lesion)
                  }
                  helperText={
                    formik.touched.tamanno_de_la_lesion &&
                    formik.errors.tamanno_de_la_lesion
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="localizacion_en_labio"
                  label="Localizacion en Labio"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Labio superior"
                  {...formik.getFieldProps("localizacion_en_labio")}
                  error={
                    formik.touched.localizacion_en_labio &&
                    Boolean(formik.errors.localizacion_en_labio)
                  }
                  helperText={
                    formik.touched.localizacion_en_labio &&
                    formik.errors.localizacion_en_labio
                  }
                >
                  <MenuItem value="Labio superior">Labio superior</MenuItem>
                  <MenuItem value="Mucosa superior">Mucosa superior</MenuItem>
                  <MenuItem value="Comisuras labiales">
                    Comisuras labiales
                  </MenuItem>
                  <MenuItem value="Labio inferior">Labio inferior</MenuItem>
                  <MenuItem value="Mucosa inferior">Mucosa inferior</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="lengua_movil"
                  label="Lengua Móvil"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Cara central"
                  {...formik.getFieldProps("lengua_movil")}
                  error={
                    formik.touched.lengua_movil &&
                    Boolean(formik.errors.lengua_movil)
                  }
                  helperText={
                    formik.touched.lengua_movil && formik.errors.lengua_movil
                  }
                >
                  <MenuItem value="Cara central">Cara central</MenuItem>
                  <MenuItem value="Cara dorsal">Cara dorsal</MenuItem>
                  <MenuItem value="Punta">Punta</MenuItem>
                  <MenuItem value="Borde">Borde</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="suelo_de_Boca"
                  label="Suelo de Boca"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Parte anterior"
                  {...formik.getFieldProps("suelo_de_Boca")}
                  error={
                    formik.touched.suelo_de_Boca &&
                    Boolean(formik.errors.suelo_de_Boca)
                  }
                  helperText={
                    formik.touched.suelo_de_Boca && formik.errors.suelo_de_Boca
                  }
                >
                  <MenuItem value="Parte anterior">Parte anterior</MenuItem>
                  <MenuItem value="Parte lateral">Parte lateral</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="encia"
                  label="Encía"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Superior"
                  {...formik.getFieldProps("encia")}
                  error={formik.touched.encia && Boolean(formik.errors.encia)}
                  helperText={formik.touched.encia && formik.errors.encia}
                >
                  <MenuItem value="Superior">Superior</MenuItem>
                  <MenuItem value="Inferior">Inferior</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="otras_partes_del_a_boca"
                  label="Otras Partes de la Boca"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Carrillo"
                  {...formik.getFieldProps("otras_partes_del_a_boca")}
                  error={
                    formik.touched.otras_partes_del_a_boca &&
                    Boolean(formik.errors.otras_partes_del_a_boca)
                  }
                  helperText={
                    formik.touched.otras_partes_del_a_boca &&
                    formik.errors.otras_partes_del_a_boca
                  }
                >
                  <MenuItem value="Carrillo">Carrillo</MenuItem>
                  <MenuItem value="Vesíbulo">Vesíbulo</MenuItem>
                  <MenuItem value="Paladar duro">Paladar duro</MenuItem>
                  <MenuItem value="Espacio retromolar">
                    Espacio retromolar
                  </MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="glandulas_salibales"
                  label="Glándulas Salibales"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Parótida"
                  {...formik.getFieldProps("glandulas_salibales")}
                  error={
                    formik.touched.glandulas_salibales &&
                    Boolean(formik.errors.glandulas_salibales)
                  }
                  helperText={
                    formik.touched.glandulas_salibales &&
                    formik.errors.glandulas_salibales
                  }
                >
                  <MenuItem value="Parótida">Parótida</MenuItem>
                  <MenuItem value="Sublingual">Sublingual</MenuItem>
                  <MenuItem value="Submaxilar">Submaxilar</MenuItem>
                  <MenuItem value="Otra">Otra</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="ardenopatia_cervical_derecha"
                  label="Ardenopatía cervical derecha"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
                  {...formik.getFieldProps("ardenopatia_cervical_derecha")}
                  error={
                    formik.touched.ardenopatia_cervical_derecha &&
                    Boolean(formik.errors.ardenopatia_cervical_derecha)
                  }
                  helperText={
                    formik.touched.ardenopatia_cervical_derecha &&
                    formik.errors.ardenopatia_cervical_derecha
                  }
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Nivel I">Nivel I</MenuItem>
                  <MenuItem value="Nivel II">Nivel II</MenuItem>
                  <MenuItem value="Nivel III">Nivel III</MenuItem>
                  <MenuItem value="Nivel IV">Nivel IV</MenuItem>
                  <MenuItem value="Nivel V">Nivel V</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="ardenopatia_cervical_izquierda"
                  label="Ardenopatía cervical izquierda"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
                  {...formik.getFieldProps("ardenopatia_cervical_izquierda")}
                  error={
                    formik.touched.ardenopatia_cervical_izquierda &&
                    Boolean(formik.errors.ardenopatia_cervical_izquierda)
                  }
                  helperText={
                    formik.touched.ardenopatia_cervical_izquierda &&
                    formik.errors.ardenopatia_cervical_izquierda
                  }
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Nivel I">Nivel I</MenuItem>
                  <MenuItem value="Nivel II">Nivel II</MenuItem>
                  <MenuItem value="Nivel III">Nivel III</MenuItem>
                  <MenuItem value="Nivel IV">Nivel IV</MenuItem>
                  <MenuItem value="Nivel V">Nivel V</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="extension_clinica_a"
                  label="Extensión Clínica"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
                  {...formik.getFieldProps("extension_clinica_a")}
                  error={
                    formik.touched.extension_clinica_a &&
                    Boolean(formik.errors.extension_clinica_a)
                  }
                  helperText={
                    formik.touched.extension_clinica_a &&
                    formik.errors.extension_clinica_a
                  }
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Suelo de boca">Suelo de boca</MenuItem>
                  <MenuItem value="Laringe">Laringe</MenuItem>
                  <MenuItem value="Labio">Labio</MenuItem>
                  <MenuItem value="Otras partes de la cavidad oral">
                    Otras partes de la cavidad oral
                  </MenuItem>
                  <MenuItem value="Mesofaringe">Mesofaringe</MenuItem>
                  <MenuItem value="Hipofaringe">Hipofaringe</MenuItem>
                  <MenuItem value="Encía">Encía</MenuItem>
                  <MenuItem value="Nasofaringe">Nasofaringe</MenuItem>
                  <MenuItem value="Piel y partes blandas">
                    Piel y partes blandas
                  </MenuItem>
                  <MenuItem value="Hueso">Hueso</MenuItem>
                  <MenuItem value="Otras">Otras</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="performance_status"
                  label="Performance Status"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="0"
                  {...formik.getFieldProps("performance_status")}
                  error={
                    formik.touched.performance_status &&
                    Boolean(formik.errors.performance_status)
                  }
                  helperText={
                    formik.touched.performance_status &&
                    formik.errors.performance_status
                  }
                >
                  <MenuItem value="0">0</MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={5}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="primer_apellido"
                  label="Primer Apellido"
                  // sx={{ mb: 3, width: 300 }}
                  color={colorPrimer_apellido}
                  {...formik.getFieldProps("primer_apellido")}
                  error={
                    formik.touched.primer_apellido &&
                    Boolean(formik.errors.primer_apellido)
                  }
                  helperText={
                    formik.touched.primer_apellido &&
                    formik.errors.primer_apellido
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="segundo_apellido"
                  label="Segundo Apellido"
                  color={colorSegundo_apellido}
                  {...formik.getFieldProps("segundo_apellido")}
                  error={
                    formik.touched.segundo_apellido &&
                    Boolean(formik.errors.segundo_apellido)
                  }
                  helperText={
                    formik.touched.segundo_apellido &&
                    formik.errors.segundo_apellido
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="nombre_del_paciente"
                  label="Nombre del Paciente"
                  color={colorNombre_del_paciente}
                  {...formik.getFieldProps("nombre_del_paciente")}
                  error={
                    formik.touched.nombre_del_paciente &&
                    Boolean(formik.errors.nombre_del_paciente)
                  }
                  helperText={
                    formik.touched.nombre_del_paciente &&
                    formik.errors.nombre_del_paciente
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="sexo"
                  label="Sexo"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Masculino"
                  {...formik.getFieldProps("sexo")}
                  error={formik.touched.sexo && Boolean(formik.errors.sexo)}
                  helperText={formik.touched.sexo && formik.errors.sexo}
                >
                  <MenuItem value="Masculino">Masculino</MenuItem>
                  <MenuItem value="Femenino">Fememnino</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="edad"
                  label="Edad"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
                  color={colorEdad}
                  {...formik.getFieldProps("edad")}
                  error={formik.touched.edad && Boolean(formik.errors.edad)}
                  helperText={formik.touched.edad && formik.errors.edad}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="color_de_piel"
                  label="Color de la Piel"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Blanca"
                  {...formik.getFieldProps("color_de_piel")}
                  error={
                    formik.touched.color_de_piel &&
                    Boolean(formik.errors.color_de_piel)
                  }
                  helperText={
                    formik.touched.color_de_piel && formik.errors.color_de_piel
                  }
                >
                  <MenuItem value="Blanca">Blanca</MenuItem>
                  <MenuItem value="Negra">Negra</MenuItem>
                  <MenuItem value="Mestiza">Mestiza</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="carne_de_identidad"
                  label="Carné de Identidad"
                  color={colorCarne_de_identidad}
                  {...formik.getFieldProps("carne_de_identidad")}
                  error={
                    formik.touched.carne_de_identidad &&
                    Boolean(formik.errors.carne_de_identidad)
                  }
                  helperText={
                    formik.touched.carne_de_identidad &&
                    formik.errors.carne_de_identidad
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="historia_clinica_numero"
                  label="Historia Clínica Número"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
                  color={colorHistoria_clinica_numero}
                  {...formik.getFieldProps("historia_clinica_numero")}
                  error={
                    formik.touched.historia_clinica_numero &&
                    Boolean(formik.errors.historia_clinica_numero)
                  }
                  helperText={
                    formik.touched.historia_clinica_numero &&
                    formik.errors.historia_clinica_numero
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_de_inscripcion"
                    label="Fecha de Inscripción"
                    value={fecha_de_inscripcion}
                    onChange={handleChange_fecha_de_inscripcion}
                    sx={{ mb: 3, width: 300 }}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  label="Creatinina"
                  id="creatinina"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                  color={colorCreatinina}
                  {...formik.getFieldProps("creatinina")}
                  error={
                    formik.touched.creatinina &&
                    Boolean(formik.errors.creatinina)
                  }
                  helperText={
                    formik.touched.creatinina && formik.errors.creatinina
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  label="Hemoglobina"
                  id="hemoglobina"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                  color={colorHemoglobina}
                  {...formik.getFieldProps("hemoglobina")}
                  error={
                    formik.touched.hemoglobina &&
                    Boolean(formik.errors.hemoglobina)
                  }
                  helperText={
                    formik.touched.hemoglobina && formik.errors.hemoglobina
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="imagen_rx_torax"
                  label="Imagen RX del Torax"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("imagen_rx_torax")}
                  error={
                    formik.touched.imagen_rx_torax &&
                    Boolean(formik.errors.imagen_rx_torax)
                  }
                  helperText={
                    formik.touched.imagen_rx_torax &&
                    formik.errors.imagen_rx_torax
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="imagen_us_abdomen"
                  label="Imagen US del Abdomen"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("imagen_us_abdomen")}
                  error={
                    formik.touched.imagen_us_abdomen &&
                    Boolean(formik.errors.imagen_us_abdomen)
                  }
                  helperText={
                    formik.touched.imagen_us_abdomen &&
                    formik.errors.imagen_us_abdomen
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="imagen_tac_cavidad_oral"
                  label="Imagen TAC de la Cavidad Oral"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("imagen_tac_cavidad_oral")}
                  error={
                    formik.touched.imagen_tac_cavidad_oral &&
                    Boolean(formik.errors.imagen_tac_cavidad_oral)
                  }
                  helperText={
                    formik.touched.imagen_tac_cavidad_oral &&
                    formik.errors.imagen_tac_cavidad_oral
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="otros_tac_faringe"
                  label="Otros TAC Faringe"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("otros_tac_faringe")}
                  error={
                    formik.touched.otros_tac_faringe &&
                    Boolean(formik.errors.otros_tac_faringe)
                  }
                  helperText={
                    formik.touched.otros_tac_faringe &&
                    formik.errors.otros_tac_faringe
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="otros_tac_cuello"
                  label="OtroS TAC Cuello"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("otros_tac_cuello")}
                  error={
                    formik.touched.otros_tac_cuello &&
                    Boolean(formik.errors.otros_tac_cuello)
                  }
                  helperText={
                    formik.touched.otros_tac_cuello &&
                    formik.errors.otros_tac_cuello
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="otros_tac_torax"
                  label="Otros TAC Torax"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("otros_tac_torax")}
                  error={
                    formik.touched.otros_tac_torax &&
                    Boolean(formik.errors.otros_tac_torax)
                  }
                  helperText={
                    formik.touched.otros_tac_torax &&
                    formik.errors.otros_tac_torax
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="otros_rmn"
                  label="Otros RMN"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("otros_rmn")}
                  error={
                    formik.touched.otros_rmn && Boolean(formik.errors.otros_rmn)
                  }
                  helperText={
                    formik.touched.otros_rmn && formik.errors.otros_rmn
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={7}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="biopsia_numero"
                  label="Biopsia Número"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
                  color={colorBiopsia_numero}
                  {...formik.getFieldProps("biopsia_numero")}
                  error={
                    formik.touched.biopsia_numero &&
                    Boolean(formik.errors.biopsia_numero)
                  }
                  helperText={
                    formik.touched.biopsia_numero &&
                    formik.errors.biopsia_numero
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_de_diagnostico"
                    label="Fecha de Diagnóstico"
                    value={fecha_de_diagnostico}
                    onChange={handleChange_fecha_de_diagnostico}
                    sx={{ mb: 3, width: 300 }}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="diagnostico_topografico"
                  label="Diagnóstico Topográfico"
                  color={colorDiagnostico_topografico}
                  {...formik.getFieldProps("diagnostico_topografico")}
                  error={
                    formik.touched.diagnostico_topografico &&
                    Boolean(formik.errors.diagnostico_topografico)
                  }
                  helperText={
                    formik.touched.diagnostico_topografico &&
                    formik.errors.diagnostico_topografico
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="diagnostico_morfologico"
                  label="Diagnóstico Morfológico"
                  color={colorDiagnostico_morfologico}
                  {...formik.getFieldProps("diagnostico_morfologico")}
                  error={
                    formik.touched.diagnostico_morfologico &&
                    Boolean(formik.errors.diagnostico_morfologico)
                  }
                  helperText={
                    formik.touched.diagnostico_morfologico &&
                    formik.errors.diagnostico_morfologico
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="diagnosticado_en"
                  label="Diagnósticado en"
                  color={colorDiagnosticado_en}
                  {...formik.getFieldProps("diagnosticado_en")}
                  error={
                    formik.touched.diagnosticado_en &&
                    Boolean(formik.errors.diagnosticado_en)
                  }
                  helperText={
                    formik.touched.diagnosticado_en &&
                    formik.errors.diagnosticado_en
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="diagnostico_topografico_selecciona"
                  label="Seleccione Diagnóstico Topográfico"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps(
                    "diagnostico_topografico_selecciona"
                  )}
                  error={
                    formik.touched.diagnostico_topografico_selecciona &&
                    Boolean(formik.errors.diagnostico_topografico_selecciona)
                  }
                  helperText={
                    formik.touched.diagnostico_topografico_selecciona &&
                    formik.errors.diagnostico_topografico_selecciona
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="diagnostico_morfologico_selecciona"
                  label="Seleccione Diagnóstico Morfológico"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps(
                    "diagnostico_morfologico_selecciona"
                  )}
                  error={
                    formik.touched.diagnostico_morfologico_selecciona &&
                    Boolean(formik.errors.diagnostico_morfologico_selecciona)
                  }
                  helperText={
                    formik.touched.diagnostico_morfologico_selecciona &&
                    formik.errors.diagnostico_morfologico_selecciona
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="diagnosticado_en_selecciona"
                  label="Seleccione Diagnósticado en"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
                  {...formik.getFieldProps("diagnosticado_en_selecciona")}
                  error={
                    formik.touched.diagnosticado_en_selecciona &&
                    Boolean(formik.errors.diagnosticado_en_selecciona)
                  }
                  helperText={
                    formik.touched.diagnosticado_en_selecciona &&
                    formik.errors.diagnosticado_en_selecciona
                  }
                >
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Positivo">Positivo</MenuItem>
                  <MenuItem value="Negativo">Negativo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="grado_de_diferenciacion"
                  label="Grado de diferenciación"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Diferenciado"
                  {...formik.getFieldProps("grado_de_diferenciacion")}
                  error={
                    formik.touched.grado_de_diferenciacion &&
                    Boolean(formik.errors.grado_de_diferenciacion)
                  }
                  helperText={
                    formik.touched.grado_de_diferenciacion &&
                    formik.errors.grado_de_diferenciacion
                  }
                >
                  <MenuItem value="Diferenciado">Diferenciado</MenuItem>
                  <MenuItem value="Indiferenciado">Indiferenciado</MenuItem>
                  <MenuItem value="Moderadamente diferenciado">
                    Moderadamente diferenciado
                  </MenuItem>
                  <MenuItem value="Poco diferenciado">
                    Poco diferenciado
                  </MenuItem>
                  <MenuItem value="No determinado">No determinado</MenuItem>
                  <MenuItem value="No procede">No procede</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="base_del_diagnostico"
                  label="Base del diagnóstico"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocidas"
                  {...formik.getFieldProps("base_del_diagnostico")}
                  error={
                    formik.touched.base_del_diagnostico &&
                    Boolean(formik.errors.base_del_diagnostico)
                  }
                  helperText={
                    formik.touched.base_del_diagnostico &&
                    formik.errors.base_del_diagnostico
                  }
                >
                  <MenuItem value="Desconocidas">Desconocidas</MenuItem>
                  <MenuItem value="E. clínico">E. clínico</MenuItem>
                  <MenuItem value="Inv. clínica">Inv. clínica</MenuItem>
                  <MenuItem value="Cirugía">Cirugía</MenuItem>
                  <MenuItem value="P. bio. Inmunológ">
                    P. bio. Inmunológ
                  </MenuItem>
                  <MenuItem value="Citología">Citología</MenuItem>
                  <MenuItem value="Citogenética">Citogenética</MenuItem>
                  <MenuItem value="Hematología">Hematología</MenuItem>
                  <MenuItem value="Histología">Histología</MenuItem>
                  <MenuItem value="Otras">Otras</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                {/* <TextField
                  id="otras"
                  label="En csao de seleccionar Otras rellene este campo"
                /> */}
                <TextArea
                  id="otras"
                  label="En csao de seleccionar Otras rellene este campo"
                  multiline
                  maxRows={4}
                  sx={{ mb: 3, width: 300 }}
                  {...formik.getFieldProps("otras")}
                  error={
                    formik.touched.otras &&
                    formik.values.base_del_diagnostico === "Otras" &&
                    Boolean(formik.errors.otras)
                  }
                  helperText={
                    formik.touched.otras &&
                    formik.values.base_del_diagnostico === "Otras" &&
                    formik.errors.otras
                  }
                  disabled={
                    formik.values.base_del_diagnostico === "Otras"
                      ? false
                      : true
                  }
                />
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="etapa_clinica"
                  label="Etapa clínica"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocida"
                  {...formik.getFieldProps("etapa_clinica")}
                  error={
                    formik.touched.etapa_clinica &&
                    Boolean(formik.errors.etapa_clinica)
                  }
                  helperText={
                    formik.touched.etapa_clinica && formik.errors.etapa_clinica
                  }
                >
                  <MenuItem value="Desconocida">Desconocida</MenuItem>
                  <MenuItem value="In situ">In situ</MenuItem>
                  <MenuItem value="I">I</MenuItem>
                  <MenuItem value="Ia">Ia</MenuItem>
                  <MenuItem value="Ib">Ib</MenuItem>
                  <MenuItem value="Ic">Ic</MenuItem>
                  <MenuItem value="II">II</MenuItem>
                  <MenuItem value="IIa">IIa</MenuItem>
                  <MenuItem value="IIb">IIb</MenuItem>
                  <MenuItem value="IIc">IIc</MenuItem>
                  <MenuItem value="III">III</MenuItem>
                  <MenuItem value="IIIa">IIIa</MenuItem>
                  <MenuItem value="IIIb">IIIb</MenuItem>
                  <MenuItem value="IIIc">IIIc</MenuItem>
                  <MenuItem value="IV">IV</MenuItem>
                  <MenuItem value="IVa">IVa</MenuItem>
                  <MenuItem value="IVb">IVb</MenuItem>
                  <MenuItem value="IVc">IVc</MenuItem>
                  <MenuItem value="No procede">No procede</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="tnm_T"
                  label="TNM T"
                  color={colorTnm_T}
                  {...formik.getFieldProps("tnm_T")}
                  error={formik.touched.tnm_T && Boolean(formik.errors.tnm_T)}
                  helperText={formik.touched.tnm_T && formik.errors.tnm_T}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="tnm_N"
                  label="TNM N"
                  color={colorTnm_N}
                  {...formik.getFieldProps("tnm_N")}
                  error={formik.touched.tnm_N && Boolean(formik.errors.tnm_N)}
                  helperText={formik.touched.tnm_N && formik.errors.tnm_N}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="tnm_M"
                  label="TNM M"
                  color={colorTnm_M}
                  {...formik.getFieldProps("tnm_M")}
                  error={formik.touched.tnm_M && Boolean(formik.errors.tnm_M)}
                  helperText={formik.touched.tnm_M && formik.errors.tnm_M}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="ptnm_pT"
                  label="pTNM pT"
                  color={colorPtnm_pT}
                  {...formik.getFieldProps("ptnm_pT")}
                  error={
                    formik.touched.ptnm_pT && Boolean(formik.errors.ptnm_pT)
                  }
                  helperText={formik.touched.ptnm_pT && formik.errors.ptnm_pT}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="ptnm_pN"
                  label="pTNM pN"
                  color={colorPtnm_pN}
                  {...formik.getFieldProps("ptnm_pN")}
                  error={
                    formik.touched.ptnm_pN && Boolean(formik.errors.ptnm_pN)
                  }
                  helperText={formik.touched.ptnm_pN && formik.errors.ptnm_pN}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="ptnm_pM"
                  label="pTNM pM"
                  color={colorPtnm_pM}
                  {...formik.getFieldProps("ptnm_pM")}
                  error={
                    formik.touched.ptnm_pM && Boolean(formik.errors.ptnm_pM)
                  }
                  helperText={formik.touched.ptnm_pM && formik.errors.ptnm_pM}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="metastasis_a_distancia"
                  label="Metástasis a Distancia"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocida"
                  {...formik.getFieldProps("metastasis_a_distancia")}
                  error={
                    formik.touched.metastasis_a_distancia &&
                    Boolean(formik.errors.metastasis_a_distancia)
                  }
                  helperText={
                    formik.touched.metastasis_a_distancia &&
                    formik.errors.metastasis_a_distancia
                  }
                >
                  <MenuItem value="Desconocida">Desconocida</MenuItem>
                  <MenuItem value="Ninguna">Ninguna</MenuItem>
                  <MenuItem value="Pulmón pleura">Pulmón pleura</MenuItem>
                  <MenuItem value="Hígado">Hígado</MenuItem>
                  <MenuItem value="Ovarios">Ovarios</MenuItem>
                  <MenuItem value="Hueso">Hueso</MenuItem>
                  <MenuItem value="Ganglios distales">
                    Ganglios distales
                  </MenuItem>
                  <MenuItem value="Cerebro">Cerebro</MenuItem>
                  <MenuItem value="Piel y TCS">Piel y TCS</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="extension_clinica"
                  label="Extensión Clínica"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocido"
                  {...formik.getFieldProps("extension_clinica")}
                  error={
                    formik.touched.extension_clinica &&
                    Boolean(formik.errors.extension_clinica)
                  }
                  helperText={
                    formik.touched.extension_clinica &&
                    formik.errors.extension_clinica
                  }
                >
                  <MenuItem value="Desconocido">Desconocido</MenuItem>
                  <MenuItem value="In situ">In situ</MenuItem>
                  <MenuItem value="Ext. directa y linf. regionales">
                    Ext. directa y linf. regionales
                  </MenuItem>
                  <MenuItem value="Localizado">Localizado</MenuItem>
                  <MenuItem value="Metástasis a distancia">
                    Metástasis a distancia
                  </MenuItem>
                  <MenuItem value="Extensión directa">
                    Extensión directa
                  </MenuItem>
                  <MenuItem value="No aplicable">No aplicable</MenuItem>
                  <MenuItem value="Linfático regionales">
                    Linfático regionales
                  </MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="en_la_institucion"
                  label="En la Institución"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
                  {...formik.getFieldProps("en_la_institucion")}
                  error={
                    formik.touched.en_la_institucion &&
                    Boolean(formik.errors.en_la_institucion)
                  }
                  helperText={
                    formik.touched.en_la_institucion &&
                    formik.errors.en_la_institucion
                  }
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Parcial">Parcial</MenuItem>
                  <MenuItem value="Completo">Completo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="en_otro_centro"
                  label="En Otro Centro"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
                  {...formik.getFieldProps("en_otro_centro")}
                  error={
                    formik.touched.en_otro_centro &&
                    Boolean(formik.errors.en_otro_centro)
                  }
                  helperText={
                    formik.touched.en_otro_centro &&
                    formik.errors.en_otro_centro
                  }
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Parcial">Parcial</MenuItem>
                  <MenuItem value="Completo">Completo</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="tratamiento_planificado"
                  label="Tratamiento Planificado"
                  select
                  //onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocido"
                  {...formik.getFieldProps("tratamiento_planificado")}
                  error={
                    formik.touched.tratamiento_planificado &&
                    Boolean(formik.errors.tratamiento_planificado)
                  }
                  helperText={
                    formik.touched.tratamiento_planificado &&
                    formik.errors.tratamiento_planificado
                  }
                >
                  <MenuItem value="Desconocido">Desconocido</MenuItem>
                  <MenuItem value="Ninguno">Ninguno</MenuItem>
                  <MenuItem value="Radioterapia">Radioterapia</MenuItem>
                  <MenuItem value="Hormonoterapia">Hormonoterapia</MenuItem>
                  <MenuItem value="Cirugía">Cirugía</MenuItem>
                  <MenuItem value="Quimioterapia">Quimioterapia</MenuItem>
                  <MenuItem value="Inmunoterapia">Inmunoterapia</MenuItem>
                  <MenuItem value="Otro Tratamiento">Otro Tratamiento</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="otro_tratamiento_planificado"
                  label="Que otro tratamiento se aplicó"
                  {...formik.getFieldProps("en_otro_centro")}
                  error={
                    formik.touched.en_otro_centro &&
                    Boolean(formik.errors.en_otro_centro)
                  }
                  helperText={
                    formik.touched.en_otro_centro &&
                    formik.errors.en_otro_centro
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <FormControlLabel
                  id="inclusion_en_ec"
                  control={<Switch defaultChecked />}
                  {...formik.getFieldProps("inclusion_en_ec")}
                  label="Inclusión en EC"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldMUI
                  id="en_caso_de_si"
                  label="En caso de ser sí; cuál es el código"
                  disabled={!formik.values.inclusion_en_ec}
                  {...formik.getFieldProps("en_caso_de_si")}
                  error={
                    formik.touched.inclusion_en_ec &&
                    formik.values.inclusion_en_ec
                      ? Boolean(formik.errors.en_caso_de_si)
                      : false
                  }
                  helperText={
                    formik.touched.inclusion_en_ec &&
                    formik.values.inclusion_en_ec
                      ? formik.errors.en_caso_de_si
                      : ""
                  }
                />
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={10}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <FormControlLabel
                  id="tratamiento_quirurgico"
                  control={
                    <Switch
                      {...formik.getFieldProps("tratamiento_quirurgico")}
                      defaultChecked
                    />
                  }
                  label="Se Realizó Tratamiento quirúrgico"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldMUI
                  id="tipo_de_cirugia"
                  label="Qué tipo de cirugía se realizó"
                  disabled={!formik.values.tratamiento_quirurgico}
                  {...formik.getFieldProps("tipo_de_cirugia")}
                  error={
                    formik.touched.tipo_de_cirugia &&
                    formik.values.tratamiento_quirurgico
                      ? Boolean(formik.errors.tipo_de_cirugia)
                      : false
                  }
                  helperText={
                    formik.touched.tipo_de_cirugia &&
                    formik.values.tratamiento_quirurgico
                      ? formik.errors.tipo_de_cirugia
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_tratamiento_quirurgico"
                    label="Fecha de la cirugía"
                    value={fecha_del_tratamiento_quirurgico}
                    onChange={handleChange_fecha_del_tratamiento_quirurgico}
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.tratamiento_quirurgico}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <FormControlLabel
                  id="tratamiento_radioterapia"
                  control={<Switch defaultChecked />}
                  {...formik.getFieldProps("tratamiento_radioterapia")}
                  label="Se Realizó Tratamiento radioterapéutico"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldMUI
                  id="tipo_de_tratamiento_radioterap"
                  label="Qué Tipo de Tratamiento Radioterapéutico se Utilizó"
                  disabled={!formik.values.tratamiento_radioterapia}
                  {...formik.getFieldProps("tipo_de_tratamiento_radioterap")}
                  error={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? Boolean(formik.errors.tipo_de_tratamiento_radioterap)
                      : false
                  }
                  helperText={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? formik.errors.tipo_de_tratamiento_radioterap
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_inicio_del_tratamiento_radioterapeutico"
                    label="Fecha del Inicio del Tratamiento Radioterapéutico"
                    value={fecha_del_inicio_del_tratamiento_radioterapeutico}
                    onChange={
                      handleChange_fecha_del_inicio_del_tratamiento_radioterapeutico
                    }
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.tratamiento_radioterapia}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_final_del_tratamiento_radioterapeutico"
                    label="Fecha Final del Tratamiento Radioterapéutico"
                    value={fecha_del_final_del_tratamiento_radioterapeutico}
                    onChange={
                      handleChange_fecha_del_final_del_tratamiento_radioterapeutico
                    }
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.tratamiento_radioterapia}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  label="Cuál fue la Dosis Total Utilizada"
                  //name="numberformat"
                  id="dosis_total"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                  disabled={!formik.values.tratamiento_radioterapia}
                  {...formik.getFieldProps("dosis_total")}
                  error={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? Boolean(formik.errors.dosis_total)
                      : false
                  }
                  helperText={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? formik.errors.dosis_total
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  label="GY Fracción"
                  //  name="numberformat"
                  id="gy_fraccion"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                  disabled={!formik.values.tratamiento_radioterapia}
                  {...formik.getFieldProps("gy_fraccion")}
                  error={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? Boolean(formik.errors.gy_fraccion)
                      : false
                  }
                  helperText={
                    formik.touched.tratamiento_radioterapia &&
                    formik.values.tratamiento_radioterapia
                      ? formik.errors.gy_fraccion
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <FormControlLabel
                  id="tratamiento_quimioterapia"
                  control={<Switch defaultChecked />}
                  {...formik.getFieldProps("tratamiento_quimioterapia")}
                  label="Se Realizó Tratamiento Quimioterapéutico"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldMUI
                  id="esquema_tratamiento"
                  label="Esquema del tratamiento"
                  disabled={!formik.values.tratamiento_quimioterapia}
                  {...formik.getFieldProps("esquema_tratamiento")}
                  error={
                    formik.touched.tratamiento_quimioterapia &&
                    formik.values.tratamiento_quimioterapia
                      ? Boolean(formik.errors.esquema_tratamiento)
                      : false
                  }
                  helperText={
                    formik.touched.tratamiento_quimioterapia &&
                    formik.values.tratamiento_quimioterapia
                      ? formik.errors.esquema_tratamiento
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="numero_de_ciclos"
                  label="Número de Ciclos"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
                  disabled={!formik.values.tratamiento_quimioterapia}
                  {...formik.getFieldProps("numero_de_ciclos")}
                  error={
                    formik.touched.tratamiento_quimioterapia &&
                    formik.values.tratamiento_quimioterapia
                      ? Boolean(formik.errors.numero_de_ciclos)
                      : false
                  }
                  helperText={
                    formik.touched.tratamiento_quimioterapia &&
                    formik.values.tratamiento_quimioterapia
                      ? formik.errors.numero_de_ciclos
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_inicio_del_tratamiento_quimioterapeutico"
                    label="Fecha del Inicio del Tratamiento Quimioterapéutico"
                    value={fecha_del_inicio_del_tratamiento_quimioterapeutico}
                    onChange={
                      handleChange_fecha_del_inicio_del_tratamiento_quimioterapeutico
                    }
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.tratamiento_quimioterapia}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_final_del_tratamiento_quimioterapeutico"
                    label="Fecha Final del Tratamiento Quimioterapéutico"
                    value={fecha_del_final_del_tratamiento_quimioterapeutico}
                    onChange={
                      handleChange_fecha_del_final_del_tratamiento_quimioterapeutico
                    }
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.tratamiento_quimioterapia}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <FormControlLabel
                  id="otro_tratamiento"
                  control={<Switch defaultChecked />}
                  {...formik.getFieldProps("otro_tratamiento")}
                  label="Se Realizó Otro Tratamiento"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldMUI
                  id="cual_tratamiento"
                  label="Cuál"
                  disabled={!formik.values.otro_tratamiento}
                  {...formik.getFieldProps("cual_tratamiento")}
                  error={
                    formik.touched.otro_tratamiento &&
                    formik.values.otro_tratamiento
                      ? Boolean(formik.errors.cual_tratamiento)
                      : false
                  }
                  helperText={
                    formik.touched.otro_tratamiento &&
                    formik.values.otro_tratamiento
                      ? formik.errors.cual_tratamiento
                      : ""
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_inicio_del_tratamiento"
                    label="Fecha del Inicio del Tratamiento"
                    value={fecha_del_inicio_del_tratamiento}
                    onChange={handleChange_fecha_del_inicio_del_tratamiento}
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.otro_tratamiento}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_del_final_del_tratamiento"
                    label="Fecha Final del Tratamiento"
                    value={fecha_del_final_del_tratamiento}
                    onChange={handleChange_fecha_del_final_del_tratamiento}
                    sx={{ mb: 3, width: 300 }}
                    disabled={!formik.values.otro_tratamiento}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={11}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="evaluacion_de_la_respuesta"
                  label="Evaluación de la respuesta"
                  select
                  // onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="RC"
                  {...formik.getFieldProps("evaluacion_de_la_respuesta")}
                  error={
                    formik.touched.evaluacion_de_la_respuesta &&
                    Boolean(formik.errors.evaluacion_de_la_respuesta)
                  }
                  helperText={
                    formik.touched.evaluacion_de_la_respuesta &&
                    formik.errors.evaluacion_de_la_respuesta
                  }
                >
                  <MenuItem value="RC">RC</MenuItem>
                  <MenuItem value="RP">RP</MenuItem>
                  <MenuItem value="EE">EE</MenuItem>
                  <MenuItem value="EP">EP</MenuItem>
                  <MenuItem value="No Procede">No Procede</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="es"
                >
                  <DatePicker
                    name="fecha_evaluacion"
                    label="Fecha de Evaluación"
                    value={fecha_evaluacion}
                    onChange={handleChange_fecha_evaluacion}
                    sx={{ mb: 3, width: 300 }}
                  />
                </LocalizationProvider>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                {/* <TextField id="observaciones" label="Observaciones" /> */}
                <TextArea
                  id="observaciones"
                  label="Observaciones"
                  multiline
                  maxRows={4}
                  sx={{ mb: 3, width: 300 }}
                  color={colorObservaciones}
                  {...formik.getFieldProps("observaciones")}
                  error={
                    formik.touched.observaciones &&
                    Boolean(formik.errors.observaciones)
                  }
                  helperText={
                    formik.touched.observaciones && formik.errors.observaciones
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="nombre_del_medico"
                  label="Nombre del Médico"
                  color={colorNombre_del_medico}
                  {...formik.getFieldProps("nombre_del_medico")}
                  error={
                    formik.touched.nombre_del_medico &&
                    Boolean(formik.errors.nombre_del_medico)
                  }
                  helperText={
                    formik.touched.nombre_del_medico &&
                    formik.errors.nombre_del_medico
                  }
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="registro_profesional"
                  label="Registro Profesional"
                  color={colorRegistro_profesional}
                  {...formik.getFieldProps("registro_profesional")}
                  error={
                    formik.touched.registro_profesional &&
                    Boolean(formik.errors.registro_profesional)
                  }
                  helperText={
                    formik.touched.registro_profesional &&
                    formik.errors.registro_profesional
                  }
                />
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <Button
          variant="contained"
          size="large"
          className="buttom-formulario"
          type="submit"
          onClick={() => {
            console.log("click");
            if (!formik.isValid) {
              console.log("no es valido");
              setErrorFormik(true);
              // console.log("init");
              setTimeout(() => {
                setErrorFormik(false);
                console.log("end");
              }, 5000);
              // clearTimeout(id);
            }
          }}
        >
          Adicionar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
