import styles from "./TestimonialCard.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`${styles.testimonialCard} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.quoteIcon}>
        <FaQuoteLeft />
      </div>

      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`${styles.star} ${
              i < testimonial.rating ? styles.filled : ""
            }`}
          >
            ★
          </span>
        ))}
      </div>

      <blockquote className={styles.testimonialText}>
        {testimonial.text}
      </blockquote>

      <div className={styles.testimonialFooter}>
        <div>
          <p className={styles.testimonialAuthor}>{testimonial.author}</p>
          <p className={styles.testimonialMeta}>
            {testimonial.location} • {testimonial.date}
          </p>
        </div>
        <div className={styles.authorDeco}></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
