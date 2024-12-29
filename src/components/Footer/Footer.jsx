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
                    src="https://www.mrbooks.com/assets/template1/img/logoMrbMujerWhite.png?12"
                    alt="Logo MrBooks"
                  />
                </a>
              </div>
              <p className="follow-us">SÍGUENOS EN:</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/MrBooksEcuador/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/mrbooksec/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
                <a href="https://goo.gl/Cu2Zrg" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-youtube-play fa-2x"></i>
                </a>
                <a href="https://open.spotify.com/user/8jf4gz5gz5eg7uocykwzjmrse?si=93zACu_bSwSXHdDhY1ywmg" target="_blank" rel="noopener noreferrer">
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
                <li><a href="https://www.mrbooks.com/locales.html">Locales</a></li>
                <li><a href="https://www.mrbooks.com/quienes_somos.html">Quiénes Somos</a></li>
                <li><a href="https://www.mrbooks.com/contacto.html">Contáctenos</a></li>
                <li><a href="https://www.mrbooks.com/contacto.html">Ventas Corporativas</a></li>
                <li><a href="https://misterbooks.ecubill.com/portal/" target="_blank" rel="noopener noreferrer">Facturación Electrónica</a></li>
                <li><a href="https://www.mrbooks.com/noticias.html">Noticias</a></li>
                <li><a href="https://www.mrbooks.com/alcance_literario/ultima/publicacion.html">Alcance Literario</a></li>
                <li><a href="https://www.mrbooks.com/Pol%C3%ACticadeProtecciondeDatosPersonales.pdf" target="_blank" rel="noopener noreferrer">Política de protección de datos personales</a></li>
              </ul>
            </div>
          </div>

          {/* Por Qué Comprar */}
          <div className="col-lg-3">
            <div className="footer-widget">
              <h5>POR QUÉ COMPRAR</h5>
              <ul>
                <li><a href="https://www.mrbooks.com/guia_compras.html">Manual de compra online</a></li>
                <li><a href="https://www.mrbooks.com/bonobooks.html">BonoBooks</a></li>
                <li><a href="https://www.mrbooks.com/preguntas_frecuentes.html">Preguntas Frecuentes</a></li>
                <li><a href="https://www.mrbooks.com/condiciones_de_compra.html">Condiciones de compra</a></li>
                <li><a href="https://www.mrbooks.com/Terminos_y_condiciones_MrBooks.pdf" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></li>
                <li><a href="https://www.mrbooks.com/entregas_domicilio.html">Entregas a Domicilio</a></li>
              </ul>
            </div>
          </div>

          {/* Suscríbete a Nuestro Servicio */}
          <div className="col-lg-3">
            <div className="newslatter-item">
              <h5>SUSCRÍBETE A NUESTRA NEWSLETTER</h5>
              <p>Recibe información selecta, promociones, descuentos, alcance literario y muchas sorpresas.</p>
              <form action="https://www.mrbooks.com/contacto.html" method="get" className="subscribe-form">
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
