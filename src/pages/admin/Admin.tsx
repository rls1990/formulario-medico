import { Route, Routes } from "react-router-dom";
import Formulario from "./Formulario";
import TableAdmin from "./TableAdmin";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={TableAdmin} />
        <Route path="/formulario" Component={Formulario} />
      </Routes>
    </>
  );
};

export default Admin;
