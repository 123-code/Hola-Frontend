import React from "react";

const TxtCards=()=>{

const CardJson = {
    "titles":{
        "Title1":"Pregunta en el Foro",
        "Title2":"Conoce a Nuestro Equipo ",
        "Title3":"Ponte en contacto con Nosotros",
        "Title4":"Consulta por nuestro material de venta"
        },
        "contents":{
            "text1": "Responde a tus dudas relacionadas a la terapia de lenguaje",
            "text2": "Conoce a nuestro equipo de profesionales",
            "text3": "Contactanos y Agenda una evaluacion!",
            "text4": "Encuentra el material que necesites"
        }

}
return(
    <>
    <header>
    <div className = "header">
 {Object.keys(CardJson.titles).map((title,index)=>{return(<><h2 key={index}>{title[index]}</h2></>)})}
     </div>
    </header>

    <body>
    <div className = "Body">
 {Object.keys(CardJson.contents).map((content,index)=>{return(<><p key={index}>{content[index]}</p></>)})}
     </div>
    </body>
     </>
)

}
export default TxtCards;


export function Card(){
    return(
        <>
        {TxtCards()}
        </>
    )
}