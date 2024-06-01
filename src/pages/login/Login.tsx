/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Alert, AlertTitle, Button, Divider } from "@mui/material";
import PasswordField from "../../components/mui/text_fields/input/password/PasswordField";
import { LoginFormValues } from "./Types";
import { useFormik } from "formik";
import { initialValues } from "./Types";
import { validationSchema } from "../../validators/LoginValidator";
import { TextField } from "../../components/mui/text_fields/input/text/TextField";
import {
  IconEdnPassword,
  IconEdnUserName,
  IconStartPassWord,
  IconStartUserName,
} from "./HelpersForm";

const Login = () => {
  const { isAuth, loading, login, error } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuth) navigate("/admin");
  }, [isAuth]);

  const onSubmit = (values: LoginFormValues) => {
    if (login) login({ username: values.username, password: values.password });
  };

  const formik = useFormik<LoginFormValues>({
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

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && (
        <div style={{ marginBottom: 21 }}>
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
            {error}
          </Alert>
        </div>
      )}

      <form className="form-login" onSubmit={formik.handleSubmit}>
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
          startAdornment={<IconStartPassWord formik={formik} />}
          endAdornment={<IconEdnPassword formik={formik} />}
          color={colorPassword}
          {...formik.getFieldProps("password")}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button
          variant="contained"
          size="large"
          className="buttom-login"
          type="submit"
        >
          Iniciar Seción
        </Button>
      </form>

      <span style={{ marginTop: 12, fontSize: "15px" }}>
        No tienes una cuenta?{" "}
        <Link style={{ color: "rgb(6 53 98)", paddingLeft: 0 }} to="/register">
          <b>Regísrese</b>
        </Link>
      </span>
    </div>
  );
};

export default Login;
