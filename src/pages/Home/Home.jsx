import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookCard/BookList";
import booksData  from "../../mock-data/books.json"; // Asegúrate de que este archivo exista.
import "./Home.scss";
import Footer from '../../components/Footer/Footer';
import { useParams } from "react-router-dom"
import BookDetailsPage from "../../components/BookCard/BookDetailsPage"; 

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const { isbn } = useParams(); // Obtener el isbn de la URL

  // Manejar cambios en la barra de búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // Filtrar libros según el término de búsqueda
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
    // Aquí puedes hacer cualquier efecto que quieras cuando cambie el isbn
  }, [isbn]);

  return (
    <div>
       {/* Pasar el callback al componente Header */}
      <Header onSearch={handleSearch}/>
      <main className="home">
        {/* Mostrar detalles del libro si el isbn está presente */}
        {isbn ? (
          <BookDetailsPage isbn={isbn} /> // Mostrar detalles si el isbn está en la URL
        ) : (
          <>
            <h2 className="text-center">Lista de Libros</h2>
            <BookList books={filteredBooks} /> {/* Mostrar la lista de libros */}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
