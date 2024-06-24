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

const Formulario = () => {
  const [fecha, setFecha] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
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

        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker
            label="Selecciona una fecha"
            value={fecha}
            onChange={handleChange}
            sx={{ mb: 3, width: 300 }}
          />
        </LocalizationProvider>
        {/* <TextField id="remision" label="Remision"  /> */}

        <TextFieldSelect
          id="remision"
          label="Remision"
          select
          onChange={onChangeSelect}
          sx={{ mb: 3, width: 300 }}
          value="No remitido"
        >
          <MenuItem value="No remitido">No remitido</MenuItem>
          <MenuItem value="Atención primaria">Atención primaria</MenuItem>
          <MenuItem value="Programa de control">Programa de control</MenuItem>
          <MenuItem value="Atención secundaria">Atención secundaria</MenuItem>
        </TextFieldSelect>
        <FormControlLabel
          id="historia_clinica"
          control={<Switch defaultChecked />}
          label="Historia Clínica"
        />

        <TextFieldSelect
          id="motivo_consulta"
          label="Motivo de la Consulta"
          select
          onChange={onChangeSelect}
          sx={{ mb: 3, width: 300 }}
          value="No remitido"
        >
          <MenuItem value="Aparición de lesión">Aparición de lesión</MenuItem>
          <MenuItem value="Aumento de volumen">Aumento de volumen</MenuItem>
          <MenuItem value="Nódulo cervical">Nódulo cervical</MenuItem>
          <MenuItem value="Sangramiento">Sangramiento</MenuItem>
          <MenuItem value="Odinofagia">Odinofagia</MenuItem>
          <MenuItem value="Sialorrea">Sialorrea</MenuItem>
          <MenuItem value="Dolor">Dolor</MenuItem>
          <MenuItem value="Parálisis facial">Parálisis facial</MenuItem>
          <MenuItem value="Otros síntomas">Otros síntomas</MenuItem>
        </TextFieldSelect>

        <TextField id="primer_sintoma" label="Primer Síntoma" />
        <TextField id="tiempo_de_aparicion" label="Tiempo de Aparición" />
        <TextField id="otros_sintomas" label="Otros Síntomas" />
        <TextField id="personales_de_riesgo" label="Personales de Riesgo" />
        <TextField id="personales_patologicos" label="Personales Patológicos" />
        <TextField id="familiares_con_cancer" label="Familiares con Cáncer" />
        <TextField
          id="caracteristicas_de_la_lesion"
          label="Características de la Lesión"
        />
        <TextField id="region" label="Región" />
        <TextField id="tamanno_de_la_lesion" label="Tamaño de la Lesión" />
        <TextField id="localizacion_en_labio" label="Localizacion en Labio" />
        <TextField id="lengua_movil" label="Lengua Movil" />
        <TextField id="suelo_de_Boca" label="Suelo de Boca" />
        <TextField id="encia" label="Encía" />
        <TextField
          id="otras_partes_del_a_boca"
          label="Otras Partes de la Boca"
        />
        <TextField id="glandulas_salibales" label="Glándulas Salibales" />
        <TextField
          id="ardenopatia_cervical_derecha"
          label="Ardenopatía Cervical Derecha"
        />
        <TextField
          id="ardenopatia_cervical_izquierda"
          label="Ardenopatía Cervical Izquierda"
        />
        <TextField id="extension_clinica_a" label="Extensión Clínica" />
        <TextField id="performance_status" label="Performance Status" />
        <TextField id="primer_apellido" label="Primer Apellido" />
        <TextField id="segundo_apellido" label="Segundo Apellido" />
        <TextField id="nombre_del_paciente" label="Nombre del Paciente" />
        <TextField id="sexo" label="Sexo" />
        <TextFieldNumber
          id="edad"
          label="Edad"
          type="number"
          sx={{ mb: 3, width: 300 }}
        />
        <TextFieldNumber
          label="react-number-format"
          // value={values.numberformat}
          // onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
          variant="outlined"
          sx={{ mb: 3, width: 300 }}
        />
        <TextField id="color_de_piel" label="Color de la Piel" />
        <TextField id="carne_de_identidad" label="Carné de Identidad" />
        <TextField
          id="historia_clinica_numero"
          label="Historia Clínica Número"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker
            label="Fecha de Inscripción"
            value={fecha}
            onChange={handleChange}
            sx={{ mb: 3, width: 300 }}
          />
        </LocalizationProvider>
        <TextField id="creatinina" label="Creatinina" />
        <TextField id="hemoglobina" label="Hemoglobina" />
        <TextField id="imagen_rx_torax" label="Imagen RX del Torax" />
        <TextField id="imagen_us_abdomen" label="Imagen US del Abdomen" />
        <TextField
          id="imagen_tac_cavidad_oral"
          label="Imagen TAC de la Cavidad Oral"
        />
        <TextField id="otros_tac_faringe" label="Otros TAC Faringe" />
        <TextField id="otros_tac_cuello" label="Otros TAC Cuello" />
        <TextField id="otros_tac_torax" label="Otros TAC Torax" />
        <TextField id="otros_rmn" label="Otros RMN" />
        <TextField id="biopsia_numero" label="Biopsia Número" />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
          <DatePicker
            label="Fecha de Diagnóstico"
            value={fecha}
            onChange={handleChange}
            sx={{ mb: 3, width: 300 }}
          />
        </LocalizationProvider>
        <TextField
          id="diagnostico_topografico"
          label="Diagnóstico Topográfico"
        />

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
