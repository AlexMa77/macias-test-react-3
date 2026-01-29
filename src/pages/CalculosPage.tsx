import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function CalculosPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setc] = useState(0);
  const [d, setd] = useState(0);
  const [e, sete] = useState(0);

  const resultTriangulo = useMemo(() => a * b/2, [a, b]);
  const resultRectangulo = useMemo(() => c * d, [c, d]);
  const resultIva = useMemo(() => e * 0.12, [e]);

  return (
    <Paper sx={{ p: 2, borderRadius: 10 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Cálculos Matemáticos y Comerciales
      </Typography>

      <Typography variant="h7" fontWeight={900} gutterBottom>
        Área de Triángulo
      </Typography>
      <br/>

      <Typography variant="h7" fontWeight={10} gutterBottom>
        Base:
      </Typography>
      <br/>
      <br/>

      <TextField
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <br/>
      <Typography variant="h7" fontWeight={10} gutterBottom>
        Altura:
      </Typography>
      <br/>
      <br/>
      <TextField
        label="B"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Área del Triángulo: <strong>{resultTriangulo}</strong>
      </Typography>

      <br/>


      <Typography variant="h7" fontWeight={900} gutterBottom>
        Área de Rectángulo
      </Typography>
      <br/>

      <Typography variant="h7" fontWeight={10} gutterBottom>
        Largo:
      </Typography>
      <br/>
      <br/>

      <TextField
        type="number"
        value={c}
        onChange={(e) => setc(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <br/>
      <Typography variant="h7" fontWeight={10} gutterBottom>
        Ancho:
      </Typography>
      <br/>
      <br/>
      <TextField
        label="B"
        type="number"
        value={d}
        onChange={(e) => setd(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Área del Rectángulo: <strong>{resultRectangulo}</strong>
      </Typography>

    <br/>

      <Typography variant="h7" fontWeight={900} gutterBottom>
        Cálculo de IVA (12%)
      </Typography>
      <br/>

      <Typography variant="h7" fontWeight={10} gutterBottom>
        Valor del producto o servicio:
      </Typography>
      <br/>
      <br/>

      <TextField
        type="number"
        value={e}
        onChange={(e) => sete(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />
      <br/>
      
      <Typography sx={{ mt: 1 }}>
        IVA calculado: <strong>{resultIva}</strong>
      </Typography>
    </Paper>
  );
  
}

