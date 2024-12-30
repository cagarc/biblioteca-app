import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-image">
        <Link to={`/books/${book.isbn}`}>
          <img src={book.image} alt={book.title} />
        </Link>
      </div>
      <div className="book-details">
        <h5>
          <Link to={`/books/${book.isbn}`}>{book.title}</Link>
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
          {book.oldPrice && <span className="old-price">${book.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
