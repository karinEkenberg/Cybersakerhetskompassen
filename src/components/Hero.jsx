// src/components/Hero.jsx
import React from "react";
import Compass from "../assets/compass-image.webp";

const Hero = () => {
  return (
    <section className="w-full bg-(--color-offwhite) relative z-0 shadow-md">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-5xl mx-auto px-6 pt-32 pb-12 lg:pt-24 lg:pb-24">
        {/* Text and buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="mb-4">
            Cybersäkerhets-
            <br className="hidden lg:block" />
            kompassen
          </h1>
          <p className="mb-8 text-lg">Vi slussar IT-säkerhetsstudenter rätt</p>

          <div className="flex gap-4">
            <button className="btn-primary">Börja här</button>
            <button className="btn-warning">Roadmaps</button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Compass}
            alt="3D compass for cybersecurity"
            className="w-32 lg:w-[360px] object-contain"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
