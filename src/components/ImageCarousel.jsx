import React, { useState, useEffect } from "react";

const images = [
  "https://fumeimg-21439.kxcdn.com/fumeimg/brand/254369/banneravif.avif",
  "https://fumeimg-21439.kxcdn.com/fumeimg/brand/253801/bt1bannerljpeg.jpg",
  "https://fumeimg-21439.kxcdn.com/fumeimg/brand/254368/bt1bannerljpeg.jpg"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-20 overflow-hidden relative rounded-3xl shadow-xl h-[600px]">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
