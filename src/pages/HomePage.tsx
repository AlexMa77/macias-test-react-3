import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h3" fontWeight={10} gutterBottom>
        Bienvenido a la Gestión de Categorías
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Sistema para listar, crear categorías y realizar cálculos geométricos y de IVA.
      </Typography>
      <center>
          <img src="https://picsum.photos/id/1071/800/300"/>
      </center>
    <Paper sx={{ p: 3, borderRadius: 0 }}> 
      <Typography sx={{ mt: 0 }}>
            Listado de categorías.
      </Typography>
      <Typography sx={{ mt: 0 }}>
            Ahora se llena dinámicamente con personajes de Star Wars (con foto).
      </Typography>
    </Paper>
    <br/>
    <Paper sx={{ p: 3, borderRadius: 0 }}> 
      <Typography sx={{ mt: 0 }}>
            Crear Categoría.
        </Typography>
      <Typography sx={{ mt: 0 }}>
        Agrega nuevas categorías matemáticas o temáticas.
      </Typography>
    </Paper>
    <br/>
    <Paper sx={{ p: 3, borderRadius: 0 }}> 
      <Typography sx={{ mt: 0 }}>
            Cálculos Básicos
        </Typography>
      <Typography sx={{ mt: 0 }}>
        Realiza áreas y cálculo de IVA.
      </Typography>
    </Paper>
    <br/>
    <Paper>
      <Typography sx={{ mt: 0 }}>
        Sistema listo para gestionar categorías y cálculos básicos.      
        </Typography>
    </Paper>
    <br/>
    <Paper>
      <Typography sx={{ mt: 0 }}>
        Recuerda ingresar al menos una categoría antes de usar las demás funciones.
      </Typography>
    </Paper>
    </Paper>
    
  );
}

