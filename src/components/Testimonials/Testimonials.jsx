import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "El mejor helado artesanal que he probado. ¡Volví 3 veces en una semana! La textura es increíble y los sabores son auténticos.",
    author: "Carla M.",
    rating: 5,
    location: "Buenos Aires",
    date: "Enero 2023",
  },
  {
    id: 2,
    text: "Mi familia y yo somos fanáticos de Frost & Joy. Los helados veganos de chocolate son los favoritos de mis hijos. ¡100% recomendados!",
    author: "Martín G.",
    rating: 4,
    location: "Córdoba",
    date: "Marzo 2023",
  },
  // ... otros testimonios
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Lo que dicen <span className={styles.highlight}>nuestros fans</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Más de 1,000 clientes felices en el último año
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <div className={styles.testimonialsCarousel}>
          <button
            className={styles.carouselButtonPrev}
            onClick={prevTestimonial}
            aria-label="Testimonio anterior"
          >
            &larr;
          </button>

          <div className={styles.testimonialsWrapper}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeTestimonial}
              />
            ))}
          </div>

          <button
            className={styles.carouselButtonNext}
            onClick={nextTestimonial}
            aria-label="Siguiente testimonio"
          >
            &rarr;
          </button>
        </div>

        {/* Indicadores */}
        <div className={styles.carouselIndicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === activeTestimonial ? styles.active : ""
              }`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
