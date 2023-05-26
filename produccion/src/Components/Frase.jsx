import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography'

const Frase = () => {
  return (
    <>
      <div>
        <Typography variant="h2" gutterBottom>
        Recibir Terapia de lenguaje oportunamente puede marcar la diferencia
      </Typography>
        <h1 className="font-mono">
         
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
