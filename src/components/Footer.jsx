import React from "react";
import Compass from "../assets/compass-image.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-(--color-offwhite) pt-12 pb-6 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={Compass}
            alt="Cybersäkerhetskompassen Logotyp"
            className="w-32 md:w-48 object-contain"
          />
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <h2 className="mb-6 md:text-left text-2xl md:text-3xl font-bold">
            Cybersäkerhetskompassen
          </h2>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:text-left">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Snabblänkar</h3>
              <a href="#" className="hover:underline text-sm md:text-base">
                Certifikat
              </a>
              <a href="#" className="hover:underline text-sm md:text-base">
                Certifikat
              </a>
              <a href="#" className="hover:underline text-sm md:text-base">
                Certifikat
              </a>
            </div>

            {/* Kolumn 2 */}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg mb-2">Om plattformen</h3>
              <a
                href="/om-oss"
                className="hover:underline text-sm md:text-base"
              >
                Vilka är vi?
              </a>
              <a
                href="/integritet"
                className="hover:underline text-sm md:text-base"
              >
                Integritet & Grönt
              </a>
              <a
                href="/kontakta-oss"
                className="hover:underline text-sm md:text-base"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[--color-kompass-black] opacity-80 text-center md:text-left">
        <p className="text-small">
          © {new Date().getFullYear()} Cybersäkerhetskompassen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
