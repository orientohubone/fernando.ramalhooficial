import React from 'react';

const TestComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Teste de Componente</h1>
        <p>Se você está vendo isso, o componente está funcionando!</p>
      </div>
    </div>
  );
};

export default TestComponent;
