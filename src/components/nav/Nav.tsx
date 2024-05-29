import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  CssBaseline,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import { UserContext } from "../../context/userContext/UserContext";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { isAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Link to="/" style={{ paddingBottom: 20 }}>
            <Grid display="flex" alignItems="center">
              <img src="/img/logo.png" alt="" width={40} loading="lazy" />
              <h3 style={{ margin: 0, marginLeft: 12 }}>Mi Aplicación</h3>
            </Grid>
          </Link>

          {/** Aquí puedes agregar los links para pantallas grandes */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              {isAuth && <NavLink to="/">Home</NavLink>}
              {isAuth && <NavLink to="/admin">Formulario</NavLink>}
              {!isAuth && <NavLink to="/login">Login</NavLink>}
              {!isAuth && <NavLink to="/register">Register</NavLink>}
            </div>
          </Box>
        </Toolbar>

        <Drawer open={open} onClose={handleDrawerToggle}>
          <Grid
            id="nav-menu"
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ width: 150 }}
          >
            {isAuth && (
              <Button sx={{ p: 2 }} onClick={() => navigate("/")}>
                Home
              </Button>
            )}
            {isAuth && (
              <Button sx={{ p: 2 }} onClick={() => navigate("/admin")}>
                Formulario
              </Button>
            )}
            {!isAuth && (
              <Button sx={{ p: 2 }} onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
            {!isAuth && (
              <Button sx={{ p: 2 }} onClick={() => navigate("/register")}>
                Register
              </Button>
            )}
          </Grid>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Nav;
