import React from "react";
import { StyledBadge } from "./Style";
import { Avatar as AvatarMUI } from "@mui/material";
import { AvatarProps } from "./Types";

const Avatar: React.FC<AvatarProps> = ({ src, height, width, active }) => {
  const init: AvatarProps = {
    src: src ? src : "/img/avatar.png",
    height: height ? height : 47,
    width: width ? width : 47,
    active: active ? active : false,
  };

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant={init.active ? "dot" : "standard"}
    >
      <AvatarMUI
        alt="Remy Sharp"
        sx={{ width: init.width, height: init.height }}
        src={init.src}
      />
    </StyledBadge>
  );
};

export default Avatar;
