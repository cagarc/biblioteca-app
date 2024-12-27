import React from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookCard/BookList";
import books from "../../mock-data/books.json"; // Asegúrate de que este archivo exista.
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="home">
        <h2 className="text-center">Lista de Libros</h2>
        <BookList books={books} />
      </main>
    </div>
  );
};

export default Home;
