import { useParams } from "react-router-dom";

const EliminarFormulario = () => {
  const { id } = useParams();
  return (
    <div className="admin-container">
      <h3>Eliminar Formulario Id: {id}</h3>
    </div>
  );
};

export default EliminarFormulario;
