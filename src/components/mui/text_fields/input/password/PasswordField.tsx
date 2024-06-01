import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { TextFieldBase } from "../../../types/TextFieldBase";

const PasswordField: React.FC<TextFieldBase> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  helperText,
  error,
  startAdornment,
  endAdornment,
  color,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={id ? id : "password"}
      label={label ? label : "Contraseña"}
      type={showPassword ? "text" : "password"}
      sx={{ mb: 3, width: 300 }}
      color={color}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ marginRight: 1 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>

            {endAdornment}
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      helperText={helperText}
      error={error}
    />
  );
};

export default PasswordField;
