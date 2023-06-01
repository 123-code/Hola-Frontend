
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
      <Paper elevation={3}>
        
           <Typography gutterBottom variant="h5" component="div">
                Terapias Grupales: 
          </Typography>
          <div style={{ display: "flex", backgroundColor:"#D3D3D3" }}>
             <Card sx={{ Width: 500,marginRight: "30px",  marginLeft: "30px" ,alignItems:"center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={styles.cardMedia}
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/315234901_551827440284844_2863205950929666644_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hrGBgSO3CN0AX_rxEJs&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAk0iTcQjTjACPulfJrwcv56SC2yCYnvOm3zHIDZ8qbmQ&oe=647CA7CC"
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
          sx={styles.cardMedia}
      
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/196655714_4751639298198973_6857031917582852375_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1ojgInJR1eEAX-59mlR&_nc_ht=scontent.fuio13-1.fna&oh=00_AfDLxgaoCTczHbI6wrz-hUlUIlg52Fmhq-uGjkylgbBUzg&oe=649F2B0A"
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