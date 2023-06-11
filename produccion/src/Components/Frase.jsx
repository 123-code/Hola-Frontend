import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography';

const Frase = () => {
  const fraseStyle = {
    fontSize: '2rem',

    textAlign: 'center',
    color: '#3b5998',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 700,
    marginTop: '20px',
    padding: '0 2rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    height: '100%', // Add this property to fill the remaining space
  };

  const mediaQueryStyle = `
    @media (max-width: 600px) {
      h2 {
        font-size: 1.5rem;
        padding: 1rem;
      }
    }
  `;

  return (
    <div>
      <Typography variant="h2" gutterBottom style={fraseStyle}>
        Recibir Terapia de lenguaje oportunamente puede marcar la diferencia
      </Typography>

      <style>{mediaQueryStyle}</style>
    </div>
  );
};

export default Frase;
