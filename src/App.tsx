import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Nav from "./components/nav/Nav";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error404 from "./components/error/Error404";
import { lazy, Suspense } from "react";
import { Loader } from "./components/loader/Loader";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import Logout from "./pages/logout/Logout";

const AdminComponent = lazy(() => import("./pages/admin/Admin"));

function App() {
  //logica
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/logout" Component={Logout} />
          <Route path="/register" Component={Register} />
          <Route Component={ProtectedRoute}>
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={<Loader />}>
                  <AdminComponent />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" Component={Error404} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
