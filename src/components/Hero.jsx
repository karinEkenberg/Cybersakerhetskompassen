import React from "react";
import HeroCompass from "../assets/hero-compass-image.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // ÄNDRING HÄR: Fixade Tailwind-syntaxen för bakgrundsfärgen
    <section className="w-full bg-[var(--color-offwhite)] relative z-0 shadow-md mb-14">
      {/* ÄNDRING HÄR: Tog bort pt-32 eftersom Nav nu tar hand om höjden */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="mb-4">
            Cybersäkerhets-
            <br className="hidden lg:block" />
            kompassen
          </h1>
          <p className="mb-8 text-lg">Vi slussar IT-säkerhetsstudenter rätt</p>

          <div className="flex gap-4">
            <Link to="/matchmaking" className="btn-primary">
              Börja här
            </Link>
            <Link to="/roadmaps" className="btn-warning">
              Roadmaps
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={HeroCompass}
            alt="3D compass for cybersecurity"
            className="w-32 lg:w-[360px] object-contain"
            fetchPriority="high"
            width="500"
            height="500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
