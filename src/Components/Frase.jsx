import React from 'react'

const Frase = () => {
  return (
    <>
      <div>
        <h1 className="font-mono">
          Recibir Terapia de lenguaje oportunamente puede marcar la diferencia
        </h1>
        <style>
          {`
            @media (max-width: 800px) {
              h1 {
                font-size: 1rem;
                padding: 2rem 1rem;
              }
            }
          `}
        </style>
      </div>
    </>
  )
}

export default Frase;

