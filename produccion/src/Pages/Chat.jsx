import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import TextBox from '../Components/ChatTextBox.jsx'

export default function Chat(){
    return(
        <>
        <div>
        <Typography variant="h2" gutterBottom>
        Hola Chat
      </Typography>
        </div>


        <TextBox></TextBox>

        
        </>
    )

}