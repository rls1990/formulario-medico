import { InputAdornment, TextField as TextFieldMUI } from "@mui/material";
import { TextFieldBase } from "../../../types/TextFieldBase";

export const TextField: React.FC<TextFieldBase> = ({
  id,
  helperText,
  error,
  label,
  onBlur,
  onChange,
  value,
  startAdornment,
  endAdornment,
  color,
}) => {
  return (
    <TextFieldMUI
      id={id ? id : Date.now().toString()}
      fullWidth
      label={label ? label : "Nombre del campo"}
      sx={{ mb: 3, width: 300 }}
      color={color}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : (
          <></>
        ),
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : (
          <></>
        ),
      }}
    />
  );
};
