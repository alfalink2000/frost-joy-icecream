import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { GiIceCreamScoop } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Fondo con efecto parallax */}
      <div
        className={styles.heroBackground}
        style={{ transform: `translateY(${scrollPosition * 0.3}px)` }}
      />

      {/* Contenido principal */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Frost & <span className={styles.titleBold}>Joy</span>
        </h1>

        <p className={styles.subtitle}>
          Helados artesanales hechos con{" "}
          <span className={styles.highlight}>amor</span>, leche{" "}
          <span className={styles.highlight}>fresca</span> y frutas de{" "}
          <span className={styles.highlight}>temporada</span>.
        </p>

        <button
          className={styles.ctaButton}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span>Ver Sabores</span>
          <GiIceCreamScoop
            className={`${styles.ctaIcon} ${
              isHovering ? styles.ctaIconHover : ""
            }`}
          />
        </button>
      </div>

      {/* Indicador de scroll personalizado - Versión mejorada */}
      <div className={styles.scrollIndicator}>
        <FiChevronDown className={styles.scrollIcon} />
        <span className={styles.scrollText}>Desliza para descubrir</span>
      </div>

      {/* Elementos decorativos */}
      <div className={styles.icecreamDeco1}></div>
      <div className={styles.icecreamDeco2}></div>
    </section>
  );
};

export default Hero;
