import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';

const Personalized = () => {
  const navigate = useNavigate();

  const styles = {
    maxWidth: 365,
    marginRight: "30px",
    marginLeft: "100px",
    alignItems: "center",
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
      <h1 style={{ color: 'orange', textAlign: 'center' }}>Evaluaciones</h1>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D3D3D3', padding: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <div style={{ display: "flex", marginBottom: '20px' }}>
            <Card sx={styles.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={styles.cardMedia}
                  image="https://pbs.twimg.com/media/E17XByHXMAEUuNM?format=jpg&name=medium"
                  alt="green iguana"
                  style={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" style={{ textAlign: 'justify' }}>
                    Terapias personalizadas, se ajustan a las necesidades de cada paciente, en nuestro consultorio o a domicilio.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
            </Card>
          </div>

          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', marginTop: '20px' }}>
            Terapias Personalizadas para todo tipo de dificultades
          </Typography>

          <Typography gutterBottom variant="h6" component="div" style={{ textAlign: 'center' }}>
            Contamos con horarios en la mañana y en la tarde
          </Typography>
          <Button onClick={() => { navigate('/contactform') }} variant="contained" style={{ display: 'block', margin: '20px auto' }}>Contáctanos</Button>
        </Paper>
      </div>
    </>
  );
}


export default Personalized;
