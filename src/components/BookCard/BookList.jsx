import React from "react";
import { Link } from "react-router-dom"; // Usar Link para la navegación
import "./BookList.scss";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div className="book-card" key={book.isbn}>
            <div className="book-image">
              {/* Usar Link para cambiar la URL sin recargar la página */}
              <Link to={`/books/${book.isbn}`}>
                <img src={book.image} alt={book.title} />
              </Link>
            </div>
            <div className="book-details">
              <h5>{book.title}</h5>
              <p className="author">{book.author}</p>
              <p>
                <b>Idioma:</b> {book.language}
              </p>
              <p>
                <b>ISBN:</b> {book.isbn}
              </p>
              <p>
                <b>Editorial:</b> {book.publisher}
              </p>
              <div className="price">
                <span>${book.price}</span>
                {book.oldPrice && (
                  <span className="old-price">${book.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
    </div>
  );
};

export default BookList;
