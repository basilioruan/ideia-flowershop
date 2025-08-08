import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import styles from './styles.module.css';

interface ImageCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageCarousel({ images, isOpen, onClose }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.carousel}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className={styles.imageContainer}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevImage}
            disabled={images.length <= 1}
          >
            <FaChevronLeft />
          </button>
          
          <div className={styles.imageWrapper}>
            <Image
              src={images[currentIndex]}
              alt={`Foto ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              className={styles.carouselImage}
            />
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextImage}
            disabled={images.length <= 1}
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
        
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}