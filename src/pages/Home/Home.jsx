import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookCard/BookList";
import booksData  from "../../mock-data/books.json"; // Asegúrate de que este archivo exista.
import "./Home.scss";
import Footer from '../../components/Footer/Footer';
import { useParams,useNavigate  } from "react-router-dom"
import BookDetailsPage from "../../components/BookCard/BookDetailsPage"; 

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const { isbn } = useParams(); // Obtener el isbn de la URL
  const navigate = useNavigate();
  const [inactive, setInactive] = useState(false);

  // Manejar cambios en la barra de búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
    resetInactivityTimer();
  };

    // Temporizador para detectar la inactividad
    useEffect(() => {
      const inactivityTimer = setTimeout(() => {
        setInactive(true); // Si el temporizador llega a 5 minutos, activar inactividad
        navigate("/not-food"); // Redirigir a la página "Not Food"
      }, 300000); // 300000ms = 5 minutos
  
      return () => {
        clearTimeout(inactivityTimer); // Limpiar el temporizador cuando el componente se desmonte o se reinicie
      };
    }, [navigate]);

  // Reiniciar el temporizador cada vez que el usuario realiza una acción
  const resetInactivityTimer = () => {
    setInactive(false); // Reiniciar el estado de inactividad
    // Establecer de nuevo el temporizador de inactividad
    clearTimeout();
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
