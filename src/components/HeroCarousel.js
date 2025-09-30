// src/components/HeroCarousel.js
import { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/young-handsome-doctor-with-stethoscope-clinic_1303-19761.jpg?semt=ais_hybrid&w=740&q=100',
      alt: 'Hero Image 1 - Orthopaedic Care',
      text: 'Expert Orthopaedic Surgeon in South Delhi',
    },
    {
      image: 'https://img.freepik.com/premium-psd/closeup-medical-professional-injecting-knee-joint-with-hyaluronic-acid_161754-119760.jpg?semt=ais_incoming&w=740&q=100',
      alt: 'Hero Image 2 - Joint Replacement',
      text: 'Rediscover Mobility with Advanced Treatments',
    },
    {
      image: 'https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071448.jpg',
      alt: 'Hero Image 3 - Sports Injury Recovery',
      text: 'Get Back in the Game with Specialized Care',
    },
    {
      image: 'https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995036.jpg?semt=ais_hybrid&w=740&q=100',
      alt: 'Hero Image 4 - Happy Patients',
      text: '70K+ Happy Patients and Counting',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden mb-8">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;