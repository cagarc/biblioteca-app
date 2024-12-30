import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const { cart } = useCart(); 

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="header-section">
      {/* Parte superior con redes sociales */}
      <div className="header-top">
        <div className="container d-flex justify-content-between">
          <div className="ht-left">
            <div className="links">
              <i className="fa fa-map-marker" title="Locales"></i>
              <a href="https://www.mrbooks.com/locales.html">Locales</a>
            </div>
            <div className="links">
              <i className="fa fa-file-code-o" title="Facturación Electrónica"></i>
              <a href="https://misterbooks.ecubill.com/portal/" target="_blank" rel="noopener noreferrer">
                Facturación Electrónica
              </a>
            </div>
            <div className="links">
              <i className="fa fa-check-square-o" title="Trabaja con Nosotros"></i>
              <a href="https://www.mrbooks.com/oferta_laboral.html">Trabaja con Nosotros</a>
            </div>
          </div>
          <div className="ht-right">
            <div className="top-social">
              <a href="https://www.facebook.com/MrBooksEcuador/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" title="Facebook"></i>
              </a>
              <a href="https://www.instagram.com/mrbooksec/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" title="Instagram"></i>
              </a>
              <a href="https://goo.gl/Cu2Zrg" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-play" title="YouTube"></i>
              </a>
              <a href="https://open.spotify.com/user/8jf4gz5gz5eg7uocykwzjmrse?si=93zACu_bSwSXHdDhY1ywmg" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-spotify" title="Spotify"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Parte principal con logo, botones y buscador */}
      <div className="container mt-4">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-lg-3">
            <a href="https://www.mrbooks.com/home.html" className="brand-wrap">
              <img
                src="assets/books/logo00.png"
                alt="Relatos de papel"
                className="d-block"
              />
            </a>
          </div>

          {/* Botones */}
          <div className="col-lg-4 nav-right">
            <a href="https://www.mrbooks.com/iniciar_sesion.html" className="btn btn-light">
              <i className="fa fa-user"></i> INGRESAR
            </a>
            <a href="https://www.mrbooks.com/lista_de_deseos.html" className="btn btn-light">
              <i className="fa fa-heart"></i>
              <span>0</span>
            </a>
            <Link to="/checkoutPage" className="btn btn-light">
              <i className="fa fa-shopping-cart"></i>
              <span>{cart.length}</span>
            </Link>
          </div>
        </div>

        {/* Buscador */}
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center">
            <div className="buscadorSecciones">
              <input
                type="text"
                className="form-control"
                placeholder="Comienza tu búsqueda"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
