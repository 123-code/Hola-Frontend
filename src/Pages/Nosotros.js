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
      <div style={{display:"flex"}}>
      <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
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

    <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Marisol Ramos       </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Silvana         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Kassandra         </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card> 

    <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Judith        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card> 

       <Card sx={{ maxWidth: 345,marginRight: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/286808079_5920019728027585_1680475780360255580_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=4ShK6kvNbh4AX_FUk_h&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBCCligyKYta1_DCtSjB2Rhvs4an5aIjrL68lGEZRvDpg&oe=645F5483"
          alt="terapia de lenguaje Ambato"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
Cristina        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      </div>

      <Typography gutterBottom variant="h1" component="div">
               Equipo Hola Terapia De lenguaje
        </Typography>
     
       </Paper>
      
      
       </body>
    
        </>
    )
}
export default Nosotros;