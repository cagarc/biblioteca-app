import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo y Redes Sociales */}
          <div className="col-lg-3">
            <div className="footer-left">
              <div className="footer-logo">
                <a href="#">
                  <img
                    src="/assets/books/logo00.png"
                    alt="Logo MrBooks"
                  />
                </a>
              </div>
              <p className="follow-us">SÍGUENOS EN:</p>
              <div className="footer-social">
                <a  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook fa-2x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
                <a  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-play fa-2x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-spotify fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Mapa del Sitio */}
          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>MAPA DEL SITIO</h5>
              <ul>
                <li><a>Locales</a></li>
                <li><a>Quiénes Somos</a></li>
                <li><a>Contáctenos</a></li>
                <li><a>Ventas Corporativas</a></li>
                <li><a target="_blank" rel="noopener noreferrer">Facturación Electrónica</a></li>
                <li><a >Noticias</a></li>
                <li><a >Alcance Literario</a></li>
                <li><a target="_blank" rel="noopener noreferrer">Política de protección de datos personales</a></li>
              </ul>
            </div>
          </div>

          {/* Por Qué Comprar */}
          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>POR QUÉ COMPRAR</h5>
              <ul>
                <li><a >Manual de compra online</a></li>
                <li><a  >BonoBooks</a></li>
                <li><a >Preguntas Frecuentes</a></li>
                <li><a >Condiciones de compra</a></li>
                <li><a target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></li>
                <li><a >Entregas a Domicilio</a></li>
              </ul>
            </div>
          </div>

          {/* Suscríbete a Nuestro Servicio */}
          <div className="col-lg-3">
            <div className="newslatter-item">
              <h5>SUSCRÍBETE A NUESTRA NEWSLETTER</h5>
              <p>Recibe información selecta, promociones, descuentos, alcance literario y muchas sorpresas.</p>
              <form  method="get" className="subscribe-form">
                <input type="email" placeholder="Correo electrónico" name="correo" />
                <button type="submit">SUSCRIBIRME</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de Autor y Métodos de Pago */}
      <div className="copyright-reserved">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                Mr.Books &copy; | 2024 Todos los derechos reservados
              </div>
              <div className="payment-pic">
                <img
                  height="40px"
                  src="https://www.mrbooks.com/assets/template1/img/payment-method.png"
                  alt="Métodos de pago"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
