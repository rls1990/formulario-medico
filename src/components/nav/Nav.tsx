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
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/admin">Admin</NavLink>
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
            <Button>
              <Link to="/login">Login</Link>
            </Button>

            <Button>
              <Link to="/register">Register</Link>
            </Button>

            <Button>
              <Link to="/admin">Admin</Link>
            </Button>
          </Grid>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Nav;
