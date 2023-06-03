
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
       image="https://scontent.fuio3-1.fna.fbcdn.net/v/t39.30808-6/217950567_4855310554498513_1245182365633625463_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OKkY5ZoXPRoAX--JjJJ&_nc_ht=scontent.fuio3-1.fna&oh=00_AfBXH0ZrTcMRWciHEGXpSwXznWuBVL8lOwBQ4LlphKqR6A&oe=647FECA9"
       alt="green iguana"
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
       image="https://scontent.fuio3-1.fna.fbcdn.net/v/t1.6435-9/186472620_4692708794092024_714445075193775763_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=uHpEA1xBg1AAX_Mj1Tk&_nc_ht=scontent.fuio3-1.fna&oh=00_AfBVEL2xBoLh-Mjeteos3U9PAgn4RzI526KD7e92VuKjxw&oe=64A33BF2"
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