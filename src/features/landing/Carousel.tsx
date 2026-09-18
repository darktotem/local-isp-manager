import { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import carouselData from '../../data/carousel.json'; 
import '../../styles/Carousel.css';

export interface SlideData {
  id: number;
  badge: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const slides: SlideData[] = carouselData;

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-banner">
      {/* Dynamic Slide Rendering */}
      {slides.map((slide, index) => {
        const isActive = activeSlide === index;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'hero-slide--active' : ''}`}
          >
            <div className="hero-overlay" />

            <div className="hero-container">
              <div className="hero-content">
                <span className="hero-badge">{slide.badge}</span>

                <h1 className="hero-headline">{slide.headline}</h1>

                <p className="hero-subheadline">{slide.subheadline}</p>

                <div className="hero-actions">
                  <a href={slide.ctaLink}>
                    <Button variant="primary" size="lg">
                      {slide.ctaText}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Pagination Dots */}
      <div className="hero-dots" role="tablist" aria-label="Hero banner pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${activeSlide === index ? 'hero-dot--active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={activeSlide === index}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;