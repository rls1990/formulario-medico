import { Route, Routes } from "react-router-dom";
import Formulario from "./Formulario";
import TableAdmin from "./TableAdmin";
import ModificarFormulario from "./ModificarFormulario";
import EliminarFormulario from "./EliminarFormulario";
import { FormularioProvider } from "../../context/formularioContext/FormularioContext";

const Admin = () => {
  return (
    <>
      <FormularioProvider>
        <Routes>
          <Route path="/" Component={TableAdmin} />
          <Route path="/formulario" Component={Formulario} />
          <Route path="/formulario/upd/:id" Component={ModificarFormulario} />
          <Route path="/formulario/del/:id" Component={EliminarFormulario} />
        </Routes>
      </FormularioProvider>
    </>
  );
};

export default Admin;
