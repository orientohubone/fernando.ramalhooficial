import React from 'react';

interface SimpleLegalViewProps {
  type: string;
  onClose: () => void;
}

const SimpleLegalView: React.FC<SimpleLegalViewProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-4">
        PÁGINA LEGAL: {type.toUpperCase()}
      </h1>
      <p className="text-white mb-8">
        Esta é uma página de teste para verificar se o roteamento está funcionando.
      </p>
      <button 
        onClick={onClose}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        VOLTAR
      </button>
    </div>
  );
};

export default SimpleLegalView;
