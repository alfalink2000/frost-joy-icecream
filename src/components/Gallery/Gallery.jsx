import { useState } from "react";
import styles from "./Gallery.module.css";
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const gallery = [
  {
    id: 1,
    src: "https://placehold.co/600x400/ffe6e6/ff8a8a?text=Helado+1",
    alt: "Cono de helado de vainilla con sprinkles",
    category: "conos",
  },
  {
    id: 2,
    src: "https://placehold.co/600x400/e6f7ff/8ac4ff?text=Helado+2",
    alt: "Sundae de chocolate con frutas",
    category: "sundaes",
  },
  // ... otras imágenes
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Todos" },
    { id: "conos", name: "Conos" },
    { id: "sundaes", name: "Sundaes" },
    { id: "special", name: "Especiales" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

  const handleNext = () => {
    const currentIndex = gallery.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % gallery.length;
    setSelectedImage(gallery[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = gallery.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedImage(gallery[prevIndex]);
  };

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Nuestro <span className={styles.highlight}>Mundo Helado</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Descubre la experiencia Frost & Joy a través de nuestras creaciones
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className={styles.categoryFilters}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className={styles.galleryGrid}>
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.galleryImage}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <FiZoomIn className={styles.zoomIcon} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className={styles.lightbox}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              <FiX />
            </button>
            <button className={styles.navButtonPrev} onClick={handlePrev}>
              <FiChevronLeft />
            </button>
            <div className={styles.lightboxContent}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className={styles.lightboxImage}
              />
              <p className={styles.lightboxCaption}>{selectedImage.alt}</p>
            </div>
            <button className={styles.navButtonNext} onClick={handleNext}>
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
