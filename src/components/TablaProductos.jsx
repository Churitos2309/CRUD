import React from 'react';

const TablaProductos = ({ productos, onEditar, onEliminar }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Nombre</th>
          <th className="px-4 py-2">Precio</th>
          <th className="px-4 py-2">Cantidad</th>
          <th className="px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapea la lista de productos y renderiza una fila para cada producto */}
        {productos.map((producto, index) => (
          <tr key={index} className="border-b">
            {/* Muestra el nombre, precio y cantidad del producto */}
            <td className="px-4 py-2">{producto.nombre}</td>
            <td className="px-4 py-2">{producto.precio}</td>
            <td className="px-4 py-2">{producto.cantidad}</td>
            {/* Botones de editar y eliminar */}
            <td className="px-4 py-2">
              <button onClick={() => onEditar(index)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2">
                Editar
              </button>
              <button onClick={() => onEliminar(index)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;
