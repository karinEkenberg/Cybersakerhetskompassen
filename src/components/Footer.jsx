import React from "react";

const Footer = () => {
  return (
    // Huvudbehållaren för footern. Vi använder offwhite för bakgrunden.
    <footer className="w-full bg-(--color-offwhite) pt-12 pb-6 px-6 mt-12">
      {/* Maxbredd och centrering, flex-col på mobil, flex-row på större skärmar */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
        {/* Vänster sektion: Kompass (eller botten-sektion på mobil) */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          {/* Sätt in din kompassbild här. Byt src mot rätt sökväg. */}
          <img
            src="./src/assets/compass-image.png"
            alt="Cybersäkerhetskompassen Logotyp"
            className="w-32 md:w-48 object-contain"
          />
        </div>

        {/* Höger sektion: Rubrik och länk-kolumner */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          {/* Huvudrubrik för footern */}
          <h2 className="mb-6 md:text-left text-2xl md:text-3xl font-bold">
            Cybersäkerhetskompassen
          </h2>

          {/* Behållare för länkarna, uppdelad i 2 kolumner */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:text-left">
            {/* Kolumn 1 */}
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
              <a href="#" className="hover:underline text-sm md:text-base">
                Vilka är vi?
              </a>
              <a href="#" className="hover:underline text-sm md:text-base">
                Integritet & cookies
              </a>
              <a href="#" className="hover:underline text-sm md:text-base">
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skiljelinje och Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[--color-kompass-black] opacity-80 text-center md:text-left">
        <p className="text-small text-gray-600">
          © {new Date().getFullYear()} Cybersäkerhetskompassen
        </p>
      </div>
    </footer>
  );
};

export default Footer;
