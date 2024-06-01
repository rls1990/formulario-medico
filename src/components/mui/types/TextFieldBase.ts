/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TextFieldBase {
  id?: string;
  label?: React.ReactNode;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  error?: boolean;
  helperText?: string | false | undefined;
  startAdornment?: React.ReactElement | string;
  endAdornment?: React.ReactElement | string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}
