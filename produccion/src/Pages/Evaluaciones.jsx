import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';

const Evaluaciones = () => {
  const navigate = useNavigate();

  const styles = {
    maxWidth: 365,
    marginRight: '30px',
    marginLeft: '100px',
    alignItems: 'center',
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
  };

  return (
    <>
    <h1 style={{color:'orange'}}> Evaluaciones </h1>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', padding: '20px' }}>
      <Paper elevation={3}>

        <div style={{ display: 'flex' }}>
          <Card sx={styles}>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={styles.cardMedia}
                image="https://i.ibb.co/Dz7XwwH/Evaluaciones1.jpg"
                alt="evaluaciones"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Evaluaciones para analizar condición actual e iniciar tratamiento
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </div>
        <Divider light />
        <Typography gutterBottom variant="h6" component="div">
          Reserva una evaluación y comienza tu tratamiento con nosotros:
        </Typography>
        <Button onClick={() => navigate('/contactform')} variant="contained" style={{ marginTop: '10px' }}>
          Contáctanos
        </Button>
      </Paper>
    </div>
    </>
  
  );
};

export default Evaluaciones;