import React from 'react';
import FacultyMapCarousel from './MapCarousel';
import floor1 from '../assets/1_floor.jpg';
import floor2 from '../assets/2_floor.jpg';
import floor3 from '../assets/3_floor.jpg';
import floor4 from '../assets/4_floor.jpg';

function MapSection() {
  const carouselImages = [
    floor1,
    floor2,
    floor3,
    floor4,
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 overflow-hidden">
      <h1>Ось мапа нашого факультету:</h1>
      <br/>
      <FacultyMapCarousel images={carouselImages} />
    </div>
  );
}

export default MapSection;
