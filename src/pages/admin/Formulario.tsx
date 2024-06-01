import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { useState } from "react";

const Formulario = () => {
  const [fecha, setFecha] = useState<Dayjs | null>(dayjs());

  const handleChange = (newValue: Dayjs | null) => {
    const fecha = newValue?.toJSON().split("T")[0];
    console.log(newValue?.toJSON());
    console.log(fecha);
    setFecha(newValue);
  };

  return (
    <div>
      <h3>Formulario</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <DatePicker
          label="Selecciona una fecha"
          value={fecha}
          onChange={handleChange}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Formulario;
