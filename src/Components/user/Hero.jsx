import React, { useEffect, useState } from "react";

const heroImages = [
  // "/assets/Home-Page-Banner-The-Power-Of-Discipline-Buy-Online-Bookbins-01.jpg",
//  "/assets/Home-Page-Banner-The-New-Rules-Of-The-Business-Buy-Online-Bookbins-01.jpg",
 "/assets/Home-Page-Banner-Harry-Potter-Box-Set-Buy-Online-Bookbins-01.jpg"
  
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % heroImages.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay
      <div className="absolute inset-0  bg-opacity-40 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Welcome to BookBloom
        </h1>
        <p className="text-lg md:text-xl font-medium text-white">
          Discover your next great read — books that help your mind bloom
        </p>
        */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
