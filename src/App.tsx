import './App.css'
import {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid2' 
import HydrologyTable from './components/HydrologyTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import DataHour from './interface/DataHour'

function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 

  const [dataHour, changeData] = useState<DataHour[]>([]);

  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const data = await response.json();
        changeData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [url]);


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student apellidos='Sandoval Bernitta' nombres='David Elias' paralelo='101'></Student>

        </Grid>
        
        {/* HydrologyTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <HydrologyTable data={dataHour}></HydrologyTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
