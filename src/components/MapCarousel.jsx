import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Ensure you have this package installed
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const FacultyMapCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Map floor ${index + 1}`} className='carousel-image'/>
        </div>
      ))}
    </Carousel>
  );
};

export default FacultyMapCarousel;
