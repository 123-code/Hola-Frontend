import React,{useState} from 'react';

const AgregarComment = ({setcomment}) => {
    let[username,setusername]=useState('');

    let [comment,setComment]=useState('');

// sending post request to server to add comment.
const addquestion = async()=>{
  const result = await fetch(`/api/questions`,{
  method:'post',
  body:JSON.stringify({ username,text:comment }),
  headers:{
    'Content-Type':'application/json',

  }
 
  });
  const body = await result.json();
  setComment(body);
  setusername("");
  setComment("");
}
    
    return (
        <>
         
        <div class="flex justify-center">
  <div class="mb-3 xl:w-96">

<label>
  Nombre:
  
  <input type="text" value={username} onChange={(event)=>setusername(event.target.value)}/>

</label>
<div>
    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
      > 
      Pregunta: </label>
    
</div> 
    <textarea 
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Tu pregunta aquí"
      value={comment} onChange={(event)=>setComment(event.target.value)}/>

  </div>
  <button> Preguntar </button>
</div>




        </>
    );
};
export default AgregarComment;
