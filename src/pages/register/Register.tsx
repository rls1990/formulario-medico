/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, AlertTitle, Button, Divider } from "@mui/material";
import "./Register.css";
import { TextField } from "../../components/mui/text_fields/input/text/TextField";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { RegisterFormValues, initialValues } from "./Types";
import { useFormik } from "formik";
import { validationSchema } from "../../validators/RegisterValidator";
import {
  IconEdnPassword,
  IconEdnUserName,
  IconStartPassWord,
  IconStartUserName,
} from "../login/HelpersForm";
import PasswordField from "../../components/mui/text_fields/input/password/PasswordField";

const Register = () => {
  const { isAuth, loading, register, error, setError } =
    useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuth) navigate("/admin");
  }, [isAuth]);

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
    if (register)
      register({ username: values.username, password: values.password });
  };

  const formik = useFormik<RegisterFormValues>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const colorUserName = formik.errors.username
    ? "error"
    : formik.touched.username
    ? "success"
    : "primary";

  const colorPassword = formik.errors.password
    ? "error"
    : formik.touched.password
    ? "success"
    : "primary";

  const colorPassword1 = formik.errors.password_confirm
    ? "error"
    : formik.touched.password_confirm
    ? "success"
    : "primary";

  return (
    <div className="register-container">
      <h2>Register</h2>

      {error && (
        <div style={{ marginBottom: 21 }}>
          <Alert variant="filled" severity="error">
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
            {error}
          </Alert>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="username"
          label="Nombre de usuario"
          startAdornment={<IconStartUserName formik={formik} />}
          endAdornment={<IconEdnUserName formik={formik} />}
          color={colorUserName}
          {...formik.getFieldProps("username")}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <PasswordField
          id="password"
          label="Contraseña"
          startAdornment={<IconStartPassWord formik={formik} />}
          endAdornment={<IconEdnPassword formik={formik} />}
          color={colorPassword}
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <PasswordField
          id="password_confirm"
          label="Repita la Contraseña"
          startAdornment={<IconStartPassWord formik={formik} />}
          endAdornment={<IconEdnPassword formik={formik} />}
          color={colorPassword1}
          {...formik.getFieldProps("password_confirm")}
          error={
            formik.touched.password_confirm &&
            Boolean(formik.errors.password_confirm)
          }
          helperText={
            formik.touched.password_confirm && formik.errors.password_confirm
          }
        />

        <Button
          variant="contained"
          size="large"
          className="buttom-login"
          type="submit"
        >
          Registrarse
        </Button>

        <span style={{ marginTop: 12, fontSize: "15px" }}>
          Tienes una cuenta?
          <Link
            style={{ color: "rgb(6 53 98)", paddingLeft: 4 }}
            onClick={() => setError && setError(null)}
            to="/login"
          >
            <b>Iniciar Secion</b>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
