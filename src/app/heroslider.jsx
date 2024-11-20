"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import img1 from "@/app/assets/about1.jpeg";
import img2 from "@/app/assets/about2.jpeg";
import img3 from "@/app/assets/about3.png";

const Heroslider = () => {
  const slides = [
    { id: 1, title: "Slide 1", description: "Description for Slide 1", imgSrc: img1 },
    { id: 2, title: "Slide 2", description: "Description for Slide 2", imgSrc: img2 },
    { id: 3, title: "Slide 3", description: "Description for Slide 3", imgSrc: img3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-center h-full bg-white mt-10">
        <h1 className="text-black font-black text-center  text-lg md:text-[60px] text-nowrap leading-none tracking-tighter">
          ( NEBULA ACCELERATOR )
        </h1>
        <p className="text-black text-sm md:text-2xl font-semibold mt-2">
          EST. 2024
        </p>
      </div>
    <div className="relative w-screen h-screen mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative min-w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.imgSrc}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            {/* Centered Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={slide.imgSrc}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-gray-700">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full text-3xl z-10"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full text-3xl z-10"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Heroslider;