import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import TextBox from '../Components/ChatTextBox.jsx'
import './chat.css';

export default function Chat(){
    return(
        <div className="chat">
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h2" gutterBottom>
        Hola Chat
      </Typography>


      <Typography variant="h4" gutterBottom>
        Pregunta a holachat, tus dudas relacionadas a la terapia de lenguaje
      </Typography>
        </div>


        <TextBox></TextBox>
        <div>
          
        </div>
<div>© HolaTL 2023</div>
        <div>

        </div>
        </div>
    )

}