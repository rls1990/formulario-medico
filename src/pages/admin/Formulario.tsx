import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import { useState } from "react";

const Formulario = () => {
  const [fecha, setFecha] = useState<Dayjs | null>(dayjs());

  return (
    <div>
      <h3>Formulario</h3>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <DatePicker
          label="Selecciona una fecha"
          value={fecha}
          onChange={(newValue) => setFecha(newValue)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Formulario;
