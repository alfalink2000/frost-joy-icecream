import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}></div>

      <div className={styles.footerContent}>
        {/* Sección logo y contacto */}
        <div className={styles.footerSection}>
          <div className={styles.logoContainer}>
            <span className={styles.logoIcon}>🍦</span>
            <h3 className={styles.footerTitle}>
              Frost & <span className={styles.logoHighlight}>Joy</span>
            </h3>
          </div>
          <p className={styles.footerTagline}>
            Donde cada cucharada es una sonrisa congelada.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Avenida Helada 456, Ciudad Fresca</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <a href="tel:5559876543">(555) 987-6543</a>
            </div>
          </div>
        </div>

        {/* Sección horarios */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>
            <FaClock className={styles.sectionIcon} />
            Horarios
          </h4>
          <div className={styles.schedule}>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleDays}>Lunes - Viernes:</span>
              <span>10:00 AM - 10:00 PM</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.scheduleDays}>Sábado - Domingo:</span>
              <span>9:00 AM - 11:00 PM</span>
            </div>
            <div className={styles.scheduleNote}>
              Último pedido: 30 minutos antes del cierre
            </div>
          </div>
        </div>

        {/* Sección redes sociales y newsletter */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Síguenos</h4>
          <div className={styles.socialLinks}>
            <a
              href="#"
              className={`${styles.socialLink} ${styles.facebook}`}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className={`${styles.socialLink} ${styles.instagram}`}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className={`${styles.socialLink} ${styles.tiktok}`}
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>

          <form className={styles.newsletterForm}>
            <label htmlFor="email" className={styles.newsletterLabel}>
              Suscríbete a nuestro newsletter
            </label>
            <div className={styles.newsletterInputGroup}>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                OK
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer inferior */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>
            &copy; {new Date().getFullYear()} Frost & Joy. Todos los derechos
            reservados.
          </p>
          <div className={styles.legalLinks}>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
