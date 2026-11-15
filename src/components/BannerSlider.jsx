import React, { useState, useEffect } from 'react';
import { IconChevronLeft, IconChevronRight, IconSparkles } from './Icons';
import { BANNERS } from '../data/products';

export default function BannerSlider({ onSelectCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % BANNERS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide(prev => (prev === 0 ? BANNERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % BANNERS.length);
  };

  return (
    <section className="slider-section">
      <div className="slider-container">
        {BANNERS.map((banner, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={banner.id}
              className={`slide-item ${isActive ? 'active' : ''}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="slide-backdrop-overlay"></div>
              
              <div className="slide-content">
                <div className="slide-badge">
                  <IconSparkles size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {banner.badge}
                </div>
                <h2 className="slide-title">{banner.title}</h2>
                <h3 className="slide-subtitle">{banner.subtitle}</h3>
                <p className="slide-desc">{banner.desc}</p>
                <button 
                  className="slide-action-btn"
                  onClick={() => onSelectCategory(banner.category)}
                >
                  {banner.buttonText} &rarr;
                </button>
              </div>
            </div>
          );
        })}

        {/* Navigation arrows */}
        <button className="slide-nav-btn slide-nav-prev" onClick={handlePrev} aria-label="Oldingi banner">
          <IconChevronLeft size={22} />
        </button>
        <button className="slide-nav-btn slide-nav-next" onClick={handleNext} aria-label="Keyingi banner">
          <IconChevronRight size={22} />
        </button>

        {/* Dot indicators */}
        <div className="slider-indicators">
          {BANNERS.map((_, idx) => (
            <div
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
