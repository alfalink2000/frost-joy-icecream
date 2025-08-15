import { useState } from "react";
import styles from "./FlavorCard.module.css";

const FlavorCard = ({ flavor, isFeatured }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`${styles.flavorCard} ${isFeatured ? styles.featured : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ribbon para sabores destacados */}
      {isFeatured && <div className={styles.featuredRibbon}>Destacado</div>}

      {/* Contenido principal */}
      <div
        className={styles.flavorIcon}
        style={{
          backgroundColor: flavor.color,
          transform: isHovered ? "rotate(10deg)" : "rotate(0)",
        }}
      >
        <span className={styles.emoji}>{flavor.icon}</span>
      </div>

      <h3 className={styles.flavorName}>{flavor.name}</h3>
      <p className={styles.flavorDescription}>{flavor.description}</p>

      {/* Detalles expandibles */}
      <button
        className={styles.detailsButton}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Menos detalles" : "Más detalles"}
      </button>

      {showDetails && (
        <div className={styles.flavorDetails}>
          <h4>Ingredientes:</h4>
          <ul>
            {flavor.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.flavorFooter}>
        <span className={styles.flavorPrice}>{flavor.price}</span>
        <button className={styles.addButton}>Añadir +</button>
      </div>
    </div>
  );
};

export default FlavorCard;
