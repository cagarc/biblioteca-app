import React, { useState } from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookCard/BookList";
import booksData  from "../../mock-data/books.json"; // Asegúrate de que este archivo exista.
import "./Home.scss";
import Footer from '../../components/Footer/Footer';

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");

  // Manejar cambios en la barra de búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filtrar libros según el término de búsqueda
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
       {/* Pasar el callback al componente Header */}
      <Header onSearch={handleSearch}/>
      <main className="home">
        <h2 className="text-center">Lista de Libros</h2>
        <BookList  books={filteredBooks} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
