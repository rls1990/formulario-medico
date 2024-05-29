import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { ControlPoint } from "@mui/icons-material";

const rows: GridRowsProp = [
  { id: 1, col1: "Pedro", col2: "12/4/2024" },
  { id: 2, col1: "Pedro1", col2: "12/4/2024" },
  { id: 3, col1: "Pedro2", col2: "12/4/2024" },
];

const handleModifyClick = (id: number) => {
  console.log(`Modify button clicked for row with id ${id}`);
  // Add your modify logic here
};

const handleDeleteClick = (id: number) => {
  console.log(`Delete button clicked for row with id ${id}`);
  // Add your delete logic here
};

const columns: GridColDef[] = [
  { field: "col1", headerName: "Nombre", width: 150 },
  { field: "col2", headerName: "Fecha", width: 150 },
  {
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
  },
];

const TableAdmin = () => {
  const navigate = useNavigate();

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
          }}
        />
      </div>
    </div>
  );
};

export default TableAdmin;
