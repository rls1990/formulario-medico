import { Button, Grid } from "@mui/material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormularioContext } from "../../context/formularioContext/FormularioContext";

const EliminarFormulario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteFormulario } = useContext(FormularioContext);
  return (
    <div className="admin-container">
      <h3>Esta seguro que desea eliminar el Formulario con Id: {id}</h3>
      <Grid>
        <Button
          sx={{ mr: 3 }}
          variant="contained"
          onClick={() => {
            deleteFormulario && deleteFormulario(parseInt(id + ""));
          }}
        >
          Sí
        </Button>
        <Button variant="contained" onClick={() => navigate("/admin")}>
          No
        </Button>
      </Grid>
    </div>
  );
};

export default EliminarFormulario;
