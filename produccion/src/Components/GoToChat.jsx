import React from 'react';

const ChatBotButton = () => {
  return (
    <button 
      className="chatbot-btn"
      style={{
        position: 'fixed',
        bottom: '20px', 
        right: '20px',
        backgroundColor: '#00b300',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '26px',
        zIndex: '999'  
      }}
    >
      <span role="img" aria-label="robot">
        🤖
      </span>
    </button>
  );
}

export default ChatBotButton;