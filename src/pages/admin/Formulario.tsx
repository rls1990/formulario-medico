import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { useState } from "react";
import { TextField } from "../../components/mui/text_fields/input/text/TextField";
import "./Formulario.css";
import {
  Button,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField as TextFieldSelect,
  TextField as TextFieldNumber,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { FormularioFormValues } from "./Types";
import { useFormik } from "formik";
import { initialValues } from "./Types";
import { validationSchema } from "../../validators/FormularioValideitor";
import { IconEdnUserName, IconStartUserName } from "../login/HelpersForm";
import {
  NumericFormatCustom,
  TextMaskCustom,
} from "../../components/mui/text_fields/input/number/FormattedInputs";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
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
    console.log(values);
  };

  const formik = useFormik<FormularioFormValues>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const colorNombre = formik.errors.nombre
    ? "error"
    : formik.touched.nombre
    ? "success"
    : "primary";

  return (
    <div>
      <h3>Formulario</h3>
      <form onSubmit={formik.handleSubmit} className="formulario-container">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={valueTab}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
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
                    label="Selecciona una fecha"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No remitido"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Aparición de lesión"
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
                <TextField id="otros_sintomas" label="Otros Síntomas" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField id="primer_sintoma" label="Primer Síntoma" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="tiempo_de_aparicion"
                  label="Tiempo de Aparición"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Días"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocido"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Vegetante"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desrecha"
                >
                  <MenuItem value="Desrecha">Desrecha</MenuItem>
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
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="localizacion_en_labio"
                  label="Localizacion en Labio"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Labio superior"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Cara central"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Parte anterior"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Superior"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Carrillo"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Parótida"
                >
                  <MenuItem value="Parótida">Parótida</MenuItem>
                  <MenuItem value="Sublingual">Sublingual</MenuItem>
                  <MenuItem value="Submaxilar">Submaxilar</MenuItem>
                  <MenuItem value="Otras">Otras</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="ardenopatia_cervical_derecha"
                  label="Ardenopatía cervical derecha"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="No"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="0"
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
                <TextField id="primer_apellido" label="Primer Apellido" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField id="segundo_apellido" label="Segundo Apellido" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="nombre_del_paciente"
                  label="Nombre del Paciente"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="sexo"
                  label="Sexo"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Masculino"
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
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="color_de_piel"
                  label="Color de la Piel"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Blanca"
                >
                  <MenuItem value="Blanca">Blanca</MenuItem>
                  <MenuItem value="Negra">Negra</MenuItem>
                  <MenuItem value="Mestiza">Mestiza</MenuItem>
                </TextFieldSelect>
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField id="carne_de_identidad" label="Carné de Identidad" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  id="historia_clinica_numero"
                  label="Historia Clínica Número"
                  type="number"
                  sx={{ mb: 3, width: 300 }}
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
                  name="numberformat"
                  id="creatinina"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldNumber
                  label="Hemoglobina"
                  name="numberformat"
                  id="hemoglobina"
                  InputProps={{
                    inputComponent: NumericFormatCustom as any,
                  }}
                  variant="outlined"
                  sx={{ mb: 3, width: 300 }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="imagen_rx_torax"
                  label="Imagen RX del Torax"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField
                  id="diagnostico_morfologico"
                  label="Diagnóstico Morfológico"
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextField id="diagnosticado_en" label="Diagnósticado en" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item>
                <TextFieldSelect
                  id="diagnostico_topografico_selecciona"
                  label="Seleccione Diagnóstico Topográfico"
                  select
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Ninguno"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Diferenciado"
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
                  onChange={onChangeSelect}
                  sx={{ mb: 3, width: 300 }}
                  defaultValue="Desconocidas"
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
                <TextField
                  id="otras"
                  label="En csao de seleccionar Otras rellene este campo"
                />
              </Item>
            </Grid>
          </Grid>
        </CustomTabPanel>

        <CustomTabPanel value={valueTab} index={9}>
          <TextFieldSelect
            id="etapa_clinica"
            label="Etapa clínica"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="Desconocida"
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
          <TextField id="tnm_T" label="TNM T" />
          <TextField id="tnm_N" label="TNM N" />
          <TextField id="tnm_M" label="TNM M" />
          <TextField id="ptnm_pT" label="pTNM pT" />
          <TextField id="ptnm_pN" label="pTNM pN" />
          <TextField id="ptnm_pM" label="pTNM pM" />
          <TextFieldSelect
            id="metastasis_a_distancia"
            label="Metástasis a Distancia"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="Desconocida"
          >
            <MenuItem value="Desconocida">Desconocida</MenuItem>
            <MenuItem value="Ninguna">Ninguna</MenuItem>
            <MenuItem value="Pulmón pleura">Pulmón pleura</MenuItem>
            <MenuItem value="Hígado">Hígado</MenuItem>
            <MenuItem value="Ovarios">Ovarios</MenuItem>
            <MenuItem value="Hueso">Hueso</MenuItem>
            <MenuItem value="Ganglios distales">Ganglios distales</MenuItem>
            <MenuItem value="Cerebro">Cerebro</MenuItem>
            <MenuItem value="Piel y TCS">Piel y TCS</MenuItem>
          </TextFieldSelect>
          <TextFieldSelect
            id="extension_clinica"
            label="Extensión Clínica"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="Desconocida"
          >
            <MenuItem value="Desconocida">Desconocida</MenuItem>
            <MenuItem value="In situ">In situ</MenuItem>
            <MenuItem value="Ext. directa y linf. regionales">
              Ext. directa y linf. regionales
            </MenuItem>
            <MenuItem value="Localizado">Localizado</MenuItem>
            <MenuItem value="Metástasis a distancia">
              Metástasis a distancia
            </MenuItem>
            <MenuItem value="Extensión directa">Extensión directa</MenuItem>
            <MenuItem value="No aplicable">No aplicable</MenuItem>
            <MenuItem value="Linfático regionales">
              Linfático regionales
            </MenuItem>
          </TextFieldSelect>
          <TextFieldSelect
            id="en_la_institucion"
            label="En la Institución"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="No"
          >
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Parcial">Parcial</MenuItem>
            <MenuItem value="Completo">Completo</MenuItem>
          </TextFieldSelect>
          <TextFieldSelect
            id="en_otro_centro"
            label="En Otro Centro"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="No"
          >
            <MenuItem value="No">No</MenuItem>
            <MenuItem value="Parcial">Parcial</MenuItem>
            <MenuItem value="Completo">Completo</MenuItem>
          </TextFieldSelect>
          <TextFieldSelect
            id="tratamiento_planificado"
            label="Tratamiento Planificado"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="Desconocido"
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
          <TextField
            id="otro_tratamiento_planificado"
            label="Que otro tratamiento se aplicó"
          />
          <FormControlLabel
            id="inclusion_en_ec"
            control={<Switch defaultChecked />}
            label="Inclusión en EC"
          />
          <TextField
            id="en_caso_de_si"
            label="En caso de ser sí; cuál es el código"
          />
          <FormControlLabel
            id="tratamiento_quirurgico"
            control={<Switch defaultChecked />}
            label="Se Realizó Tratamiento quirúrgico"
          />
          <TextField
            id="tipo_de_cirugia"
            label="Qué tipo de cirugía se realizó"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_tratamiento_quirurgico"
              label="Fecha de la cirugía"
              value={fecha_del_tratamiento_quirurgico}
              onChange={handleChange_fecha_del_tratamiento_quirurgico}
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <FormControlLabel
            id="tratamiento_radioterapia"
            control={<Switch defaultChecked />}
            label="Se Realizó Tratamiento radioterapéutico"
          />
        </CustomTabPanel>
        <CustomTabPanel value={valueTab} index={9}>
          <TextField
            id="tipo_de_tratamiento_radioterap"
            label="Qué Tipo de Tratamiento Radioterapéutico se Utilizó"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_inicio_del_tratamiento_radioterapeutico"
              label="Fecha del Inicio del Tratamiento Radioterapéutico"
              value={fecha_del_inicio_del_tratamiento_radioterapeutico}
              onChange={
                handleChange_fecha_del_inicio_del_tratamiento_radioterapeutico
              }
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_final_del_tratamiento_radioterapeutico"
              label="Fecha Final del Tratamiento Radioterapéutico"
              value={fecha_del_final_del_tratamiento_radioterapeutico}
              onChange={
                handleChange_fecha_del_final_del_tratamiento_radioterapeutico
              }
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <TextFieldNumber
            label="Cuál fue la Dosis Total Utilizada"
            name="numberformat"
            id="dosis_total"
            InputProps={{
              inputComponent: NumericFormatCustom as any,
            }}
            variant="outlined"
            sx={{ mb: 3, width: 300 }}
          />
          <TextFieldNumber
            label="GY Fracción"
            name="numberformat"
            id="gy_fraccion"
            InputProps={{
              inputComponent: NumericFormatCustom as any,
            }}
            variant="outlined"
            sx={{ mb: 3, width: 300 }}
          />
          <FormControlLabel
            id="tratamiento_quimioterapia"
            control={<Switch defaultChecked />}
            label="Se Realizó Tratamiento Quimioterapéutico"
          />
          <TextField id="esquema_tratamiento" label="Esquema del tratamiento" />
          <TextFieldNumber
            id="numero_de_ciclos"
            label="Número de Ciclos"
            type="number"
            sx={{ mb: 3, width: 300 }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_inicio_del_tratamiento_quimioterapeutico"
              label="Fecha del Inicio del Tratamiento Quimioterapéutico"
              value={fecha_del_inicio_del_tratamiento_quimioterapeutico}
              onChange={
                handleChange_fecha_del_inicio_del_tratamiento_quimioterapeutico
              }
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_final_del_tratamiento_quimioterapeutico"
              label="Fecha Final del Tratamiento Quimioterapéutico"
              value={fecha_del_final_del_tratamiento_quimioterapeutico}
              onChange={
                handleChange_fecha_del_final_del_tratamiento_quimioterapeutico
              }
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <FormControlLabel
            id="otro_tratamiento"
            control={<Switch defaultChecked />}
            label="Se Realizó Otro Tratamiento"
          />
          <TextField id="cual_tratamiento" label="Cuál" />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_inicio_del_tratamiento"
              label="Fecha del Inicio del Tratamiento"
              value={fecha_del_inicio_del_tratamiento}
              onChange={handleChange_fecha_del_inicio_del_tratamiento}
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_del_final_del_tratamiento"
              label="Fecha Final del Tratamiento"
              value={fecha_del_final_del_tratamiento}
              onChange={handleChange_fecha_del_final_del_tratamiento}
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <TextFieldSelect
            id="evaluacion_de_la_respuesta"
            label="Evaluación de la respuesta"
            select
            onChange={onChangeSelect}
            sx={{ mb: 3, width: 300 }}
            defaultValue="RC"
          >
            <MenuItem value="RC">RC</MenuItem>
            <MenuItem value="RP">RP</MenuItem>
            <MenuItem value="EE">EE</MenuItem>
            <MenuItem value="EP">EP</MenuItem>
            <MenuItem value="No Procede">No Procede</MenuItem>
          </TextFieldSelect>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker
              name="fecha_evaluacion"
              label="Fecha de Evaluación"
              value={fecha_evaluacion}
              onChange={handleChange_fecha_evaluacion}
              sx={{ mb: 3, width: 300 }}
            />
          </LocalizationProvider>
          <TextField id="observaciones" label="Observaciones" />
          <TextField id="nombre_del_medico" label="Nombre del Médico" />
          <TextField id="registro_profesional" label="Registro Profesional" />
          //----------------------------------
        </CustomTabPanel>

        <Button
          variant="contained"
          size="large"
          className="buttom-formulario"
          type="submit"
        >
          Adicionar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
