import React, { useState } from 'react';
import Contenedor from './components/Contenedor';
import Header from './components/Header';
import FormularioCrearProducto from './components/FormularioCrearProducto';
import TablaProductos from './components/TablaProductos';
import ModalEditarProducto from './components/ModalEditarProducto';

const App = () => {
  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);
  // Estado para almacenar el indice del producto seleccionado para editar
  const [indiceProductoSeleccionado, setIndiceProductoSeleccionado] = useState(null);

  // Funcion para agregar un nuevo producto a la lista
  const handleCrearProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  // Funcion para establecer el indice del producto seleccionado para editar
  const handleEditarProducto = (indice) => {
    setIndiceProductoSeleccionado(indice);
  };

  // Funcion para actualizar un producto existente en la lista
  const handleActualizarProducto = (productoActualizado) => {
    const productosActualizados = [...productos];
    productosActualizados[indiceProductoSeleccionado] = productoActualizado;
    setProductos(productosActualizados);
    setIndiceProductoSeleccionado(null);
  };

  // Funcion para eliminar un producto de la lista
  const handleEliminarProducto = (indice) => {
    const productosActualizados = [...productos];
    productosActualizados.splice(indice, 1);
    setProductos(productosActualizados);
  };

  return (
    <Contenedor>
      <Header />
      {/* Componente para agregar nuevos productos */}
      <FormularioCrearProducto onCreate={handleCrearProducto} />
      {/* Componente para mostrar la lista de productos */}
      <TablaProductos productos={productos} onEditar={handleEditarProducto} onEliminar={handleEliminarProducto} />
      {/* Componente modal para editar productos */}
      {indiceProductoSeleccionado !== null && (
        <ModalEditarProducto
          producto={productos[indiceProductoSeleccionado]}
          onUpdate={handleActualizarProducto}
          onCancel={() => setIndiceProductoSeleccionado(null)}
        />
      )}
    </Contenedor>
  );
};

export default App;
