// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    // Main container with max width and padding
    <section className="flex flex-col-reverse bg-(--color-offwhite) lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:py-24">
      {/* Text and buttons section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 lg:w-1/2">
        <h1 className="mb-4">
          Cybersäkerhets-
          <br className="hidden lg:block" />
          kompassen
        </h1>
        <p className="mb-8 text-lg">Vi slussar IT-säkerhetsstudenter rätt</p>

        {/* Buttons container */}
        <div className="flex gap-4">
          <button className="btn-primary">Börja här</button>
          <button className="btn-warning">Certifikat</button>
        </div>
      </div>

      {/* Image section */}
      <div className="lg:w-1/2 flex justify-center">
        {/* Update the src path when you have exported the compass image */}
        <img
          src="./src/assets/compass-image.png"
          alt="3D kompass för cybersäkerhet"
          className="w-32 lg:w-[450px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
