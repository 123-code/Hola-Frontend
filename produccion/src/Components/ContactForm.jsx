import { useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '', 
    comment: '',
  });
 

const GOLANG_POST_API = "https://backend-5.hop.sh/reserves"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const SubmitData = async()=>{
    try{
      await axios.post(GOLANG_POST_API,formData)
    }catch(err){
      console.error(err)
    }
 

  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(formData);
    // Send the form data to your server or process it as needed.
    SubmitData()
  };

  return (
    <>
     <Typography gutterBottom variant="h5" component="div">
          Contactate con nosotros:
        </Typography>
      <Paper elevation={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ maxWidth: 600 }}>
          <form onSubmit={handleSubmit}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/310979442_517482633719325_8368007389971193705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qnQRZUw60O4AX_nhxCz&_nc_ht=scontent.fuio13-1.fna&oh=00_AfCI737JzhtH1rUP2RR4O4FxAk8XlGoXmg6O8RPxk_V_Lg&oe=647C19ED"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Llena el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    id="name"
                    name="name"
                    label="Nombre"z
                    variant="standard"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <TextField
                    id="city"
                    name="city"
                    label="Ciudad"
                    variant="standard"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <TextField
                    id="phone"
                    name="phone"
                    label="Telefono"
                    variant="standard"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    id="comment"
                    name="comment"
                    label="Comentario"
                    multiline
                    maxRows={4}
                    variant="filled"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button type="submit" size="small" color="primary">
                Guardar
              </Button>
            </CardActions>
          </form>
        </Card>
      </Paper>
    </>
  );
}