/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { ControlPoint } from "@mui/icons-material";
import { GridBaseColDef } from "@mui/x-data-grid/internals";
import { FormularioFields } from "../../context/formularioContext/Types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { FormularioContext } from "../../context/formularioContext/FormularioContext";

let rows: GridRowsProp = [];
const columns: GridColDef[] = [];

const initTable = () => {
  if (columns.length === 0) {
    console.log("init");
    let count: number = 6;

    for (const field in FormularioFields) {
      if (count-- > 0) {
        const headerName = field[0].toLocaleUpperCase() + field.substring(1);

        const col: GridBaseColDef = { field, headerName, width: 150 };

        const index = columns.findIndex((val) => val.field === field);
        if (index === -1) columns.push(col);
      }
    }
  }
};

const TableAdmin = () => {
  const [ignore, setIgnore] = useState(-1);
  const { verifyAccessToken } = useContext(UserContext);
  const { getFormularios, formularios } = useContext(FormularioContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIgnore(1);
  }, []);

  const handleModifyClick = (id: number) => {
    console.log(`Modify button clicked for row with id ${id}`);
    navigate(`formulario/upd/${id}`);
    // Add your modify logic here
  };

  const handleDeleteClick = (id: number) => {
    console.log(`Delete button clicked for row with id ${id}`);
    navigate(`formulario/del/${id}`);
    // Add your delete logic here
  };

  const actionsCol: GridBaseColDef = {
    field: "actions",
    type: "actions",
    headerName: "Acciones",
    width: 160,
    renderCell: (params) => (
      <div>
        <IconButton
          aria-label="update"
          onClick={() => handleModifyClick(params.row.id)}
        >
          <EditIcon color="primary" />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => handleDeleteClick(params.row.id)}
        >
          <DeleteIcon sx={{ color: pink[500] }} />
        </IconButton>
      </div>
    ),
  };

  initTable();

  const index = columns.findIndex((val) => val.field === "actions");
  if (index === -1) columns.push(actionsCol);
  else {
    columns[index] = actionsCol;
  }

  // if (columns.length > 0) {
  //   const index = columns.findIndex((val) => {
  //     if (val.field === "actions") console.log(val);
  //   });
  //   console.log(index);
  //   columns[index] = actionsCol;
  // } else {
  //   initTable();
  // }

  useEffect(() => {
    if (ignore == 1) {
      verifyAccessToken && verifyAccessToken();
      console.log("ok");
    }
  }, [ignore]);

  useEffect(() => {
    if (!formularios) {
      getFormularios && getFormularios();
    } else {
      rows = [...formularios];
    }
  }, [formularios]);

  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <Box sx={{ width: "100%" }} display="flex">
          <Button
            sx={{ p: 2, m: 3 }}
            variant="outlined"
            startIcon={<ControlPoint />}
            onClick={() => navigate("formulario")}
          >
            Adicionar
          </Button>
        </Box>

        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            "& .MuiDataGrid-cell:focus-within": {
              outline: "none",
            },
            "& .MuiDataGrid-scrollbar": {
              left: 0,
            },
          }}
        />
      </div>
    </div>
  );
};

export default TableAdmin;
