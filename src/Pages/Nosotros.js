import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Nosotros = ()=>{
    return(
        <>
       <body className="bg-green-500" >
       <Typography gutterBottom variant="h5" component="div">
                Nuestro Equipo
        </Typography>
       <Paper elevation={3}>
      
       <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://m.facebook.com/terapiadelenguajeambato/photos/a.1888876034475328/2550628001633458/?type=3&source=57&__tn__=EH-R"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Maria F Martinez          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
       </Paper>
      

       </body>
        </>
    )
}
export default Nosotros;