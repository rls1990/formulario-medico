/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Loader } from "../../components/loader/Loader";
import { UserContext } from "../../context/userContext/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (logout) {
      logout();
    }

    if (!loading) navigate("/login");
  }, []);

  return <Loader />;
};

export default Logout;
