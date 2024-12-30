import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Asegúrate de tener el contexto de carrito
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart(); // Obtenemos los productos del carrito y la función para limpiar el carrito
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cardNumber && formData.cardExpiry && formData.cardCVC) {
      setPaymentSuccess(true);
      clearCart(); // Limpiamos el carrito después de la compra
      setTimeout(() => navigate("/"), 3000); // Redirige a la página principal después de 3 segundos
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0); // Calcula el total de la compra

  if (paymentSuccess) {
    return (
      <div className="checkout checkout--success">
        <h2 className="checkout__message">¡Pago exitoso!</h2>
        <p className="checkout__redirect">Redirigiendo a la página principal...</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1 className="checkout__title">Confirmar Compra</h1>
      <div className="checkout__container">
        <div className="checkout__cart">
          <h3 className="checkout__cart-title">Productos en el carrito</h3>
          <ul className="checkout__cart-list">
            {cart.map((product, index) => (
              <li key={index} className="checkout__cart-item">
                <span className="checkout__cart-name">{product.title}</span>
                <span className="checkout__cart-price">${product.price}</span>
              </li>
            ))}
          </ul>
          <div className="checkout__total">
            <h3>Total: ${total}</h3>
          </div>
        </div>

        <div className="checkout__form">
          <h3 className="checkout__form-title">Información del Cliente</h3>
          <form onSubmit={handleSubmit} className="checkout__form-content">
            <label className="checkout__form-label">
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>
            <label className="checkout__form-label">
              Dirección:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>
            <label className="checkout__form-label">
              Teléfono:
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>

            <h3 className="checkout__form-subtitle">Información de la Tarjeta</h3>
            <label className="checkout__form-label">
              Número de Tarjeta:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>
            <label className="checkout__form-label">
              Fecha de Expiración:
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>
            <label className="checkout__form-label">
              CVC:
              <input
                type="text"
                name="cardCVC"
                value={formData.cardCVC}
                onChange={handleChange}
                required
                className="checkout__form-input"
              />
            </label>

            <button type="submit" className="checkout__form-button">
              Realizar Pago
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
