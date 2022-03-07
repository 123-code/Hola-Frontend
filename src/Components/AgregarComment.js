import React,{useState} from 'react';

const AgregarComment = () => {
    let[agregado,setagregado]=useState(false);

    let [comment,setComment]=useState(null);

    
    return(
        <>
        <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
      >Agregar pregunta </label
    >
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
    ></textarea>
  </div>
</div>

<button onClick={()=>setagregado(agregado=true),()=>setComment(comment)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Preguntar
</button>

<h2>{agregado? "Comentario Agregado":""}</h2>
        </>
    )
}
export default AgregarComment;
