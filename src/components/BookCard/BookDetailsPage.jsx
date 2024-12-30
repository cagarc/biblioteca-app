import React, { useState, useEffect } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import booksData from "../../mock-data/books.json"; // Importa tu archivo JSON con los libros
import { useCart } from "../../context/CartContext"; 
import "./BookDetailsPage.scss";

const BookDetailsPage = () => {
  const { isbn } = useParams(); // Obtiene el isbn desde la URL
  const [book, setBook] = useState(null);
  const { cart, addToCart } = useCart(); // Usar el carrito y la función addToCart
  const [isAdded, setIsAdded] = useState(false); // Para mostrar el mensaje de confirmación
  const navigate = useNavigate(); // Usamos useNavigate para redirigir a otra página
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar si se está cargando

  // Temporizador de inactividad
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/"); // Redirigir al listado de libros después de 5 minutos (300000ms)
    }, 2000); // 5 minutos de inactividad

    // Limpiar el temporizador si el componente se desmonta o si el usuario interactúa
    return () => clearTimeout(timeoutId);
  }, [navigate]);


  useEffect(() => {
    const selectedBook = booksData.find((b) => b.isbn === isbn);
    setBook(selectedBook);
    setIsLoading(false);
  }, [isbn]);

  const handleAddToCart = () => {
    addToCart(book); // Agregar el libro al carrito
    setIsAdded(true); // Mostrar el mensaje de confirmación
    setTimeout(() => setIsAdded(false), 2000); // Ocultar el mensaje después de 2 segundos
  };


  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner">
          <div className="circle"></div>
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  return (
    <div className="book-details-page">
      <div className="book-details-container">
        <div className="book-image">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <p className="author">{book.author}</p>
          <p><b>Idioma:</b> {book.language}</p>
          <p><b>ISBN:</b> {book.isbn}</p>
          <p><b>Editorial:</b> {book.publisher}</p>
          <p><b>Precio:</b> ${book.price}</p>
          <div className="line"></div>
          <div className="buttons">
          <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al carrito</button>
          <button className="btn btn-secondary">Agregar a lista</button>
          </div>
          {isAdded && <p className="confirmation-message">¡Libro agregado al carrito!</p>}

        </div>
      </div>

      {/* Reseña del libro */}
      <div className="book-review">
        <h3>Reseña</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
