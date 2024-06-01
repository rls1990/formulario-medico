/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountCircle, Check, LockPerson, Warning } from "@mui/icons-material";

interface IconProps {
  formik: any;
}

export const IconStartUserName: React.FC<IconProps> = ({ formik }) => {
  return (
    <AccountCircle
      color={
        formik.errors.username
          ? "error"
          : formik.touched.username
          ? "success"
          : "inherit"
      }
    />
  );
};

export const IconEdnUserName: React.FC<IconProps> = ({ formik }) => {
  return (
    <>
      {formik.errors.username ? (
        <Warning color="error" />
      ) : (
        formik.touched.username && <Check color="success" />
      )}
    </>
  );
};

export const IconStartPassWord: React.FC<IconProps> = ({ formik }) => {
  return (
    <LockPerson
      color={
        formik.errors.password
          ? "error"
          : formik.touched.password
          ? "success"
          : "inherit"
      }
    />
  );
};

export const IconEdnPassword: React.FC<IconProps> = ({ formik }) => {
  return (
    <>
      {formik.errors.password ? (
        <Warning color="error" />
      ) : (
        formik.touched.password && <Check color="success" />
      )}
    </>
  );
};
