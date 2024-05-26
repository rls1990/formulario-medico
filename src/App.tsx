import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/admin" Component={Admin} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
