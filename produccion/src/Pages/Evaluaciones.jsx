
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
//'/contactform' 
const Evaluaciones= () => {
  const navigate=useNavigate();

  const styles = {
    maxWidth: 365,
    marginRight: "30px",
    marginLeft: "100px",
    alignItems: "center",
    '@media (max-width: 800px)': {
      card: {
        width: '90%',
        marginRight: '5px',
        marginLeft: '5px',
      },
      cardMedia: {
        height: '100px',
        width: '100%',
        objectFit: 'cover',
      },
    },
  }
  
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', padding: '20px' }}>
 <Paper elevation={3}>
        
        <Typography gutterBottom variant="h5" component="div">
                Evaluaciones: 
       </Typography>
       <div style={{ display: "flex"}}>
          <Card sx={{ styles }}>
   <CardActionArea>
     <CardMedia
       component="img"
       sx={styles.cardMedia}
       image="https://i.ibb.co/Dz7XwwH/Evaluaciones1.jpg"
       alt="evaluaciones"
     />  
     <CardContent>
      
       <Typography variant="body2" color="text.secondary">
         Evaluacviones para analizar condicion actual e iniciar tratamiento
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>  
   </CardActions>
 </Card>


 <Card sx={{ styles }}>
   <CardActionArea>
     <CardMedia
       component="img"
        sx={styles.cardMedia}
       image="https://i.ibb.co/YDPjcTk/Graduacion.jpg"
       alt="terapias personalizadas"
     />
     <CardContent>
      
       <Typography variant="body2" color="text.secondary">
       la evaluación nos ayuda a personalizar tu tratamiento.
       </Typography>
     </CardContent>
   </CardActionArea>
   <CardActions>

   </CardActions>
 </Card>
 </div>
 <Divider light />

 <Divider light />
 <Typography gutterBottom variant="h6" component="div">
             Reserva una evaluacion y comienza tu tratamiento con nosotros:

 </Typography>


<Button  onClick={()=>{navigate('/contactform')}}variant="contained">Contáctanos</Button>
       </Paper>
      </div>
     
           
      
    );
}//
export default Evaluaciones;