import React from 'react';

const Contenedor = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-xl w-full bg-white p-8 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default Contenedor;
