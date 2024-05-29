/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuth) navigate("/admin");
  }, [isAuth]);

  return (
    <div>
      <h2>Login</h2>
    </div>
  );
};

export default Login;
