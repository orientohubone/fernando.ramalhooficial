import React from 'react';

const SimpleTest: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>TESTE SIMPLES</h1>
      <p>Se você está vendo isso, a rota está funcionando!</p>
      <p>URL: /capacidade/marcas-guias</p>
    </div>
  );
};

export default SimpleTest;
