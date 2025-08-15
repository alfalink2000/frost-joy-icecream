import { useState } from "react";
import FlavorCard from "./FlavorCard";
import styles from "./Flavors.module.css";

const flavors = [
  {
    id: 1,
    name: "Vainilla Orgánica",
    description: "Suave y cremosa, con vainas reales de Madagascar.",
    color: "#FEF3C7",
    icon: "🍦",
    price: "$4.50",
    featured: true,
    ingredients: ["Vainilla Madagascar", "Leche orgánica", "Yemas de huevo"],
  },
  {
    id: 2,
    name: "Chocolate Belga",
    description: "Intenso y sedoso, con cacao 70% de origen belga.",
    color: "#D1FAE5",
    icon: "🍫",
    price: "$5.00",
    ingredients: ["Cacao belga", "Leche entera", "Azúcar de caña"],
  },
  // ... otros sabores
];

const Flavors = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "featured", name: "Destacados" },
    { id: "fruity", name: "Frutales" },
    { id: "vegan", name: "Veganos" },
  ];

  return (
    <section id="flavors" className={styles.flavorsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Nuestros{" "}
            <span className={styles.highlight}>Sabores Artesanales</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Hechos con ingredientes naturales y mucho amor
          </p>
        </div>

        {/* Filtros por categoría */}
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                selectedCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de sabores */}
        <div className={styles.flavorsGrid}>
          {flavors.map((flavor) => (
            <FlavorCard
              key={flavor.id}
              flavor={flavor}
              isFeatured={flavor.featured}
            />
          ))}
        </div>

        {/* CTA adicional */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            Ver todos los sabores
            <span className={styles.ctaArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flavors;
