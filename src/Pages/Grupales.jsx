
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
//'/contactform' 
const Grupales = () => {
  const navigate=useNavigate();
  
    return (
      <Paper elevation={3}>
        
           <Typography gutterBottom variant="h5" component="div">
                Terapias Grupales: 
          </Typography>
          <div style={{ display: "flex", backgroundColor:"#D3D3D3" }}>
             <Card sx={{ Width: 500,marginRight: "30px",  marginLeft: "30px" ,alignItems:"center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio3-1.fna.fbcdn.net/v/t39.30808-6/315667530_562319742568947_2175342464516064659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LWO6n2dkBIwAX_U2SU5&_nc_ht=scontent.fuio3-1.fna&oh=00_AfB-0dgE4TEFNWjlxXAZyOw_OoZ0S8zcP0oX9h6MnPZ_rQ&oe=64603FA6"
          alt="green iguana"
        />  
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
            Terapias grupales para desarrollar habilidades sociales
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>  
      </CardActions>
    </Card>


    <Card sx={{ Width: 400,marginLeft: "30px",alignItems:"center",marginRight:"30px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio3-1.fna.fbcdn.net/v/t39.30808-6/315234901_551827440284844_2863205950929666644_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SUT4myfot_wAX8Q1oUO&_nc_ht=scontent.fuio3-1.fna&oh=00_AfCM1gkkk_7xMqagAe9AazIqPsNXf7PyazGsSOKI-t5I0Q&oe=6460F84C"
          alt="terapias grupales"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
           Nos adaptamos a las necesidades de cada paciente, para brindar un servicio de calidad.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
    </div>
    <Divider light />
    <Typography gutterBottom variant="h5" component="div">
                Terapias Grupales
    </Typography>
    <Divider light />
    <Typography gutterBottom variant="h6" component="div">
                Contamos con horarios en la mañana y en la tarde

    </Typography>


<Button  onClick={()=>{navigate('/contactform')}}variant="contained">Contáctanos</Button>
          </Paper>
           
      
    );
}//
export default Grupales;