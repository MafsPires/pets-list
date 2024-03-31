import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ width: '100%', maxHeight: 250, objectFit: 'cover' }}
      />
      <IconButton
        onClick={handlePreviousImage}
        style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)' }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onClick={handleNextImage}
        style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

export default ImageSlider;
