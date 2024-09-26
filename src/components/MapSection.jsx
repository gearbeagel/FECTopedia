import React from 'react';
import FacultyMapCarousel from './MapCarousel';

function MapSection() {
  const carouselImages = [
    '/1_floor.jpg',
    '/2_floor.jpg',
    '/3_floor.jpg',
    '/4_floor.jpg',
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 mt-16 overflow-hidden">
      <h1 className="text-3xl">Ось мапа нашого факультету:</h1>
      <br />
      <FacultyMapCarousel images={carouselImages} />
    </div>
  );
}

export default MapSection;
