import React from "react";

const TxtCards=(CardText)=>{
   return(
       <>
       {CardText.map((props,index)=>{
           return(
               <>
               <div className="Title">
                   <h1 key={index}>{props.titles}</h1>
               </div>

               <div className="Body">
                   <h2 key = {index}>{props.contents}</h2>
               </div>

               </>
           )
       })
       
       }
       
       </>
   ) 
}
export default TxtCards;


