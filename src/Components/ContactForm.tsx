import {useState} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';

export function ContactForm(){
  const [FormData,setFormData]=useState({
    name:'', 
    city:'', 
    phone:'', 
    comment:''
  }) 
  const handleChange=(e:any)=>{
    setFormData({
      ...FormData,
      [e.target.name]:e.target.value
    })
  }
  return(
    <>
    <Paper elevation={3}>
    <Typography gutterBottom variant="h5" component="div">
       Contactate con nosotros:
    </Typography>
    <Card sx={{ maxWidth: 600 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="400"
      image="https://images.squarespace-cdn.com/content/v1/591a23a25016e1fdd9e011c8/1618876013114-C524U0LUNNGCYLFQQB8G/Carly-28.jpg?format=1500w"
      alt="green iguana"
    />
   <CardContent>
  <Typography variant="body2" color="text.secondary">
    Llena el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
  </Typography>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <TextField id="standard-basic" label="Nombre" variant="standard" />
    <TextField id="standard-basic" label="Ciudad" variant="standard" />
    <TextField id="standard-basic" label="Telefono" variant="standard" />
    <TextField
      id="filled-multiline-flexible"
      label="Comentario"
      multiline
      maxRows={4}
      variant="filled"
    />
  </div>
</CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Guardar
    </Button>
  </CardActions>
</Card>
</Paper>
    </>
  )

}