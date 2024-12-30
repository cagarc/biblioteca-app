import React from 'react';
import './NotFoodPage.scss'; // Estilos específicos para esta página

const NotFoodPage = () => {
  return (
    <div className="not-food">
      <div className="not-food__message">
      <h1>Pantalla no disponible</h1>
      <p>Por favor, recargue la página para continuar navegando.</p>
      </div>
      <div className="not-food__image">
        <img
          src="https://www.example.com/path-to-your-image.jpg" // Reemplaza con la URL de la imagen que quieras mostrar
          alt="No Food"
        />
      </div>
      <div className="not-food__actions">
        <button onClick={() => window.location.href = '/'}>Volver al inicio</button>
      </div>
    </div>
  );
};

export default NotFoodPage;
