import React from "react";
import "./BookList.scss";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div className="book-card" key={book.isbn}>
            <div className="book-image">
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                <img src={book.image} alt={book.title} />
              </a>
            </div>
            <div className="book-details">
              <h5>
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  {book.title}
                </a>
              </h5>
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
