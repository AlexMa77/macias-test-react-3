
import { Paper, TextField, Typography } from "@mui/material";

export default function RegistroPage() {


  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registrar Nueva Categoría
      </Typography>
      
      <Typography variant="h8" fontWeight={10} gutterBottom>
        Nombre de la Categoría:
      </Typography>
        <br/>
      <TextField
        type="string"
      />
      <br/>
      <br/>

      <Typography variant="h8" fontWeight={10} gutterBottom>
        Descripción:
      </Typography>
        <br/>
        
      <TextField
        type="string"
      />
    <br/>
      <button sx={{ mt: 1 }}>
        Guardar Categoría
      </button>
      <br/>

      <Typography variant="h8" fontWeight={10} gutterBottom>
        Categoría agregada correctamente.
      </Typography>

    </Paper>
  );
}