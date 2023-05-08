
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
//'/contactform' 
const Personalized = () => {
  const navigate=useNavigate();
  
    return (
      <Paper elevation={3}>
        
           <Typography gutterBottom variant="h5" component="div">
                Terapias Personalizadas:
          </Typography>
          <div style={{ display: "flex" }}>
             <Card sx={{ maxWidth: 345,marginRight: "50px",alignItems:"center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://m.facebook.com/terapiadelenguajeambato/photos/a.1888876034475328/2550628001633458/?type=3&source=57&__tn__=EH-R"
          alt="green iguana"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
            Terapias personalizadas, se ajustan a las necesidades de cada paciente, en nuestro consultorio o a domicilio.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 345,marginLeft: "30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.squarespace-cdn.com/content/v1/591a23a25016e1fdd9e011c8/1618876013114-C524U0LUNNGCYLFQQB8G/Carly-28.jpg?format=1500w"
          alt="green iguana"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
            María F Martinez
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
    </div>

    <Typography gutterBottom variant="h5" component="div">
                Terapias Personalizadas para todo tipo de dificultades 
    </Typography>

    <Typography gutterBottom variant="h6" component="div">
                Contamos con horarios en la mañana y en la tarde

    </Typography>


<Button  onClick={()=>{navigate('/contactform')}}variant="contained">Contactanos</Button>
          </Paper>
           
      
    );
}//
export default Personalized;