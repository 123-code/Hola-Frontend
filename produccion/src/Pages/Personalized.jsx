
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
//'/contactform' 
const Personalized = () => {
  const navigate=useNavigate();

  const styles = {
    maxWidth: 365,marginRight: "30px",  marginLeft: "100px" ,alignItems:"center",
    '@media (max-width: 600px)': {
      card: {

        width: '90%',
        marginRight: '5px',
        marginLeft: '5px',

      },
      cardMedia: {
        height: '100px',
      },
    },
  }
  
    return (
      <>
      
     
      <h1 style={{color:'orange'}}> Terapias Personalizadas </h1>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', padding: '20px' }}>
 <Paper elevation={3}>
        
        
       <div style={{ display: "flex"}}>
          <Card sx={{styles}}>
   <CardActionArea>
     <CardMedia 
       component="img"
       sx={styles.cardMedia}
       image="https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/142410704_4336052596424314_5658935811337539101_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pU3kREvI-U0AX84M4D7&_nc_ht=scontent.fuio13-1.fna&oh=00_AfCbfZgwDJO5dvtmbkq9n-XdAneouB5FO_Qn03SbB9fQiQ&oe=6480EE6C"
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
 </div>
 <Divider light />
 <Typography gutterBottom variant="h5" component="div">
             Terapias Personalizadas para todo tipo de dificultades 
 </Typography>
 <Divider light />
 <Typography gutterBottom variant="h6" component="div">
             Contamos con horarios en la mañana y en la tarde

 </Typography>


<Button  onClick={()=>{navigate('/contactform')}}variant="contained">Contáctanos</Button>
       </Paper>
      </div>
      </>  
           
      
    );
}//
export default Personalized;