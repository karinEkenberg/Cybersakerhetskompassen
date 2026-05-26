// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    // Full-width section holding the background color
    <section className="w-full bg-(--color-offwhite) relative z-0 mb-12">
      {/* Inner wrapper constrains content width and centers it */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32 pb-12 lg:pt-24 lg:pb-24">
        {/* Text and buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="mb-4">
            Cybersäkerhets-
            <br className="hidden lg:block" />
            kompassen
          </h1>
          <p className="mb-8 text-lg">Vi slussar IT-säkerhetsstudenter rätt</p>
          {/* Button group */}
          <div className="flex gap-4">
            <button className="btn-primary">Börja här</button>
            <button className="btn-warning">Certifikat</button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="./src/assets/compass-image.png"
            alt="3D compass for cybersecurity"
            className="w-32 lg:w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
