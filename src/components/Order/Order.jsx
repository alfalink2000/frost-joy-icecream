import { useState, useEffect } from "react";
import {
  FaIceCream,
  FaUser,
  FaEnvelope,
  FaCheck,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import styles from "./Order.module.css";

const Order = ({ flavors = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    flavor: "",
    message: "",
    quantity: 1,
    deliveryOption: "pickup",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deliveryOptions = [
    { value: "pickup", label: "Recoger en tienda" },
    { value: "delivery", label: "Envío a domicilio" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Por favor ingresa tu nombre";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor ingresa tu correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor ingresa un correo válido";
    }

    if (formData.deliveryOption === "delivery" && !formData.address) {
      newErrors.address = "Por favor ingresa tu dirección";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simular envío a API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Resetear formulario después de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        flavor: "",
        message: "",
        quantity: 1,
        deliveryOption: "pickup",
        address: "",
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <section id="order" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <FaCheck className={styles.successIcon} />
            <h2 className={styles.sectionTitle}>¡Pedido Confirmado!</h2>
            <p className={styles.successText}>
              Gracias {formData.name}, tu pedido de{" "}
              {formData.flavor || "helado"} ha sido recibido.
            </p>
            <p className={styles.successDetails}>
              Te enviaremos un correo a {formData.email} con los detalles.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <FaIceCream className={styles.titleIcon} />
            <span>¿Listo para </span>
            <span className={styles.highlight}>un gusto?</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Pide tu helado ahora o ven a disfrutarlo en nuestra heladería
          </p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.orderForm}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>
                  <FaUser className={styles.inputIcon} />
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: María González"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.inputField} ${
                    errors.name ? styles.error : ""
                  }`}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>
                  <FaEnvelope className={styles.inputIcon} />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: maria@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.inputField} ${
                    errors.email ? styles.error : ""
                  }`}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="flavor" className={styles.inputLabel}>
                  <FaIceCream className={styles.inputIcon} />
                  Sabor de helado
                </label>
                <select
                  id="flavor"
                  name="flavor"
                  value={formData.flavor}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  <option value="">Elige tu sabor favorito</option>
                  {flavors.map((f, i) => (
                    <option key={i} value={f.name}>
                      {f.name} — {f.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="quantity" className={styles.inputLabel}>
                  Cantidad
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.deliveryOptions}>
              {deliveryOptions.map((option) => (
                <div key={option.value} className={styles.deliveryOption}>
                  <input
                    type="radio"
                    id={option.value}
                    name="deliveryOption"
                    value={option.value}
                    checked={formData.deliveryOption === option.value}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <label htmlFor={option.value} className={styles.radioLabel}>
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

            {formData.deliveryOption === "delivery" && (
              <div className={styles.inputGroup}>
                <label htmlFor="address" className={styles.inputLabel}>
                  <FaMapMarkerAlt className={styles.inputIcon} />
                  Dirección de envío
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Ej: Calle Principal #123"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className={`${styles.inputField} ${
                    errors.address ? styles.error : ""
                  }`}
                />
                {errors.address && (
                  <span className={styles.errorMessage}>{errors.address}</span>
                )}
              </div>
            )}

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                Notas adicionales
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="¿Alguna instrucción? (ej: extra toppings, sin nueces, alergias)"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className={styles.textareaField}
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.buttonLoader}></span>
              ) : (
                <>
                  Pedir Ahora
                  <span className={styles.buttonPrice}>
                    {formData.flavor
                      ? `$${(
                          flavors
                            .find((f) => f.name === formData.flavor)
                            ?.price.replace("$", "") * formData.quantity
                        ).toFixed(2)}`
                      : "--"}
                  </span>
                </>
              )}
            </button>
          </form>

          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Visítanos</h3>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Avenida Helada 456, Ciudad Fresca</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:5559876543">(555) 987-6543</a>
            </div>
            <div className={styles.contactItem}>
              <FaClock className={styles.contactIcon} />
              <span>Lunes a Domingo: 10:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
