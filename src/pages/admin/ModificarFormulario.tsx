import { useParams } from "react-router-dom";

const ModificarFormulario = () => {
  const { id } = useParams();
  return (
    <div className="admin-container">
      <h3>Modificar Formulario Id: {id}</h3>
    </div>
  );
};

export default ModificarFormulario;
