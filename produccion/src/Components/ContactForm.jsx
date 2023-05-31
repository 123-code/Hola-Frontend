import { useState } from 'react';
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
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(formData);
    // Send the form data to your server or process it as needed.
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
                image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/318079689_571246121676309_7433697377703804802_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=L3zAu8DpFaAAX8SsU4l&_nc_ht=scontent.fuio13-1.fna&oh=00_AfB2JE3rk8dsVfWPfVu4xLhKpMZXC46N3W-Akoa-k8sVGQ&oe=645EABA3"
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
                    label="Nombre"
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