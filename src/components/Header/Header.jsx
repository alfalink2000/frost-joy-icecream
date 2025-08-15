import { useState, useEffect } from "react";
import { GiIceCreamCone } from "react-icons/gi";
import { FiMapPin, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto de cambio de color al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo con icono de helado */}
          <div className={styles.logo}>
            <GiIceCreamCone className={styles.logoIcon} />
            <span>Frost & Joy</span>
          </div>

          {/* Navegación principal */}
          <nav className={styles.nav}>
            <a href="#flavors" className={styles.navLink}>
              Sabores
            </a>
            <a href="#gallery" className={styles.navLink}>
              Galería
            </a>
            <a href="#testimonials" className={styles.navLink}>
              Opiniones
            </a>
            <a href="#contact" className={styles.navLink}>
              Contacto
            </a>
          </nav>

          {/* Botón CTA - Visible solo en desktop */}
          <button className={styles.ctaButton}>
            <FiMapPin className={styles.ctaIcon} />
            Visítanos
          </button>

          {/* Menú móvil (hamburguesa) */}
          <button
            className={styles.mobileButton}
            onClick={toggleMenu}
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú móvil desplegable */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            <a
              href="#flavors"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Sabores
            </a>
            <a
              href="#gallery"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Galería
            </a>
            <a
              href="#testimonials"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Opiniones
            </a>
            <a
              href="#contact"
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Contacto
            </a>

            {/* Botón CTA dentro del menú móvil */}
            <button className={styles.mobileCtaButton} onClick={closeMenu}>
              <FiMapPin className={styles.ctaIcon} />
              Visítanos
            </button>

            {/* Indicador de scroll para móvil */}
            <div className={styles.scrollIndicator}>
              <FiChevronDown className={styles.scrollIcon} />
              <span>Desplázate</span>
            </div>
          </div>
        </div>
      </header>

      {/* Efecto de helado derritiéndose */}
      {scrolled && <div className={styles.meltingEffect}></div>}
    </>
  );
};

export default Header;
