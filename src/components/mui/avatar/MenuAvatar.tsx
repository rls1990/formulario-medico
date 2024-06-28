import { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext/UserContext";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { MenuAvatarProps } from "./Types";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import "./MenuAvatar.css";

const MenuAvatar: React.FC<MenuAvatarProps> = ({
  src,
  active,
  height,
  width,
  items,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenuAvatar = Boolean(anchorEl);

  const { isAuth } = useContext(UserContext);

  const handleClickMenuAvatar = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenuAvatar = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: isAuth ? { flexGrow: 1, xs: "flex", md: "flex" } : "none",
        justifyContent: isAuth ? "flex-end" : "",
      }}
    >
      <IconButton
        id="menu-avatar-button"
        onClick={handleClickMenuAvatar}
        aria-controls={openMenuAvatar ? "menu-avatar" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenuAvatar ? "true" : undefined}
      >
        <Avatar {...{ src, active, height, width }} />
      </IconButton>

      <Menu
        id="menu-avatar"
        anchorEl={anchorEl}
        open={openMenuAvatar}
        onClose={handleCloseMenuAvatar}
        MenuListProps={{
          "aria-labelledby": "menu-avatar-button",
        }}
      >
        <MenuItem onClick={handleCloseMenuAvatar}>
          <a href="http://localhost:8000/">Admin</a>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem key={index} onClick={handleCloseMenuAvatar}>
            <Link to={item.url}>{item.name}</Link>
          </MenuItem>
        ))}
        {/* <MenuItem onClick={handleCloseMenuAvatar}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenuAvatar}>My account</MenuItem>
        <MenuItem onClick={handleCloseMenuAvatar}>Logout</MenuItem> */}
      </Menu>
    </Box>
  );
};

export default MenuAvatar;
