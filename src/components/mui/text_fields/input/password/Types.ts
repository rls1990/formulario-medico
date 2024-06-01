export interface PasswordFieldProps {
  id?: string;
  label?: React.ReactNode;
  value?: unknown;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  error?: boolean;
  helperText: string | false | undefined;
}
