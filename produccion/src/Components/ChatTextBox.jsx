import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'
import LocalForage from 'localforage';
import { BiPaperPlane } from "react-icons/bi";
import { Circles } from 'react-loader-spinner'
import ChatBubble from './ChatBubble'

const inputStyle = {
    padding: '12px 16px',
    border: '1px solid #ddd', 
    flexGrow: 1,
    borderRadius: '24px',
    fontSize: '16px',
    color: '#8696a0',
    outline: 'none',
    width:'400px',
    alignItems: 'center',
  
  }

  export const sendButtonStyle = {
    backgroundColor: '#FF7F50',
    borderRadius: '10%',
    border: 'none',
    height: 40,
    width: 40, 
    
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer' 
  };


export default  function TextBox(){
  const db = LocalForage.createInstance({
    name: 'myChatslocal'
  });

    const [question,setquestion] = useState('');
    const [qhistory,setqhistory]= useState('');
    const [answer,setanswer] = useState('');
    const [loading, setLoading] = useState(false);


            const SubmitQuestion = async (e) => {
                e.preventDefault();
                setLoading(true);
                const response = await axios.post('https://python-backend-production.up.railway.app/chatbotresponse', {
                    question
                  });
                  setLoading(false);
                  setanswer(response.data);
                  

            }
            return(
            <>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
         
           
           
          
          <div>
          {!question && <ChatBubble message={"Hola! soy Holachat, puedes preguntarme tus dudas relacionadas a la terapia de lenguaje."} isUser={true} />}
          {question &&  <ChatBubble message={question}isUser={false} />}
       
            {answer.response && <ChatBubble message={answer.response} isUser={true} />}
          </div>
           </div>

          <div>
           
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>{loading && <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            
          />}</div>

          <form style={{display: 'flex', alignItems: 'center'}} onSubmit={SubmitQuestion}>
            <input value={question}
            onChange={(e) => setquestion(e.target.value)}
            style={inputStyle}
            placeholder="Escribe un mensaje..."
            >
            </input>
            <button style={sendButtonStyle}> <BiPaperPlane/> </button>
            </form>

            
        
          </>
          )

          }