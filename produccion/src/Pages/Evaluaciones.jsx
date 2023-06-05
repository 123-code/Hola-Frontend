
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
    '@media (max-width: 600px)': {
      card: {
        width: '90%',
        marginRight: '15px',
        marginLeft: '15px',
      },
      cardMedia: {
        height: '100px',
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
          <Card sx={{ maxWidth: 365,marginRight: "30px",  marginLeft: "100px" ,alignItems:"center" }}>
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


 <Card sx={{ maxWidth: 345,marginLeft: "30px",alignItems:"center",marginRight: "30px"  }}>
   <CardActionArea>
     <CardMedia
       component="img"
        sx={styles.cardMedia}
       image="https://scontent.fuio4-1.fna.fbcdn.net/v/t39.30808-6/285519312_5899338756762349_5944444394375018805_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YZds0pwdWTUAX8Oik9S&_nc_ht=scontent.fuio4-1.fna&oh=00_AfBM3u7WiH-zB1RBIWMhAspoyByyuL-0Ws1fAgU5dkLZtQ&oe=6482B7E3"
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