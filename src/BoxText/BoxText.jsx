import React from 'react';

const BoxText = ({ text }) => {
  return (
    <div style={{ backgroundColor: '#333', color: 'white', padding: '20px', borderRadius: '8px' }}>
      <h2>{text}</h2>
      <p>Este es el contenido seleccionado.</p>
    </div>
  );
};

export default BoxText;