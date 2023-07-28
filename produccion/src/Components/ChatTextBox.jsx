import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import { BiPaperPlane } from "react-icons/bi";

const inputStyle = {
    padding: '12px 16px',
    border: '1px solid #ddd', 
    flexGrow: 1,
    borderRadius: '24px',
    fontSize: '16px',
    color: '#8696a0',
    outline: 'none',
    width:'400px'
  }

  export const sendButtonStyle = {
    backgroundColor: '#128C7E',
    borderRadius: '50%',
    border: 'none',
    height: 40,
    width: 40, 
    
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer' 
  };


export default  function TextBox(){
    const [question,setquestion] = useState('');
    const [answer,setanswer] = useState('');


    const SubmitQuestion = async (e) => {
        e.preventDefault();
        const response = await axios.post('https://123-code-laughing-space-robot-ppxqpr7g9pvc76wr-5000.preview.app.github.dev/chatbotresponse', {
            question
          });
    
          setanswer(response.data);

    }






    function handleChange(e) {
        setquestion(e.target.value);
      }

    return(
        <>
        <div>
            <form onSubmit={SubmitQuestion}>
            <input value={question}
            onChange={(e) => setquestion(e.target.value)}
            style={inputStyle}
            placeholder="Escribe un mensaje..."
            >
            </input>
            <button style={sendButtonStyle}> <BiPaperPlane/> </button>
            </form>
           
            <div>{answer.response}</div>
        </div>


        
        </>
    )

}