// src/components/Integrity.jsx
import React from "react";
import Section from "./Section";

const Integrity = () => {
  return (
    <Section title="Integritet & Grön kod" isSubpage={true}>
      {/* Everything inside here becomes the 'children' prop inside Section.jsx */}
      <div className="flex flex-col gap-6 text-gray-800 w-full">
        <p>
          På Cybersäkerhetskompassen tar vi både digital och miljömässig
          hållbarhet på största allvar. Därför gör vi saker lite annorlunda:
        </p>

        <ul className="list-disc pl-6 flex flex-col gap-4">
          <li>
            <strong>Inga kakor (Cookies):</strong> Vi använder varken
            spårningskakor, tredjepartscookies eller irriterande popups. Din
            surfhistorik är din ensak.
          </li>
          <li>
            <strong>Ingen analys:</strong> Vi kör inga tunga analysverktyg (som
            Google Analytics) i bakgrunden. Det betyder att ingen data skickas
            vidare, vilket minimerar vår attackyta och skyddar din integritet.
          </li>
          <li>
            <strong>Grön kod:</strong> Genom att skippa trackers, onödiga skript
            och tjänster som står och snurrar i onödan, minskar vi kraftigt
            plattformens klimatavtryck. Vi laddar bara exakt den kod som krävs
            för att sidan ska fungera.
          </li>
        </ul>

        <p className="mt-4">
          Vi samlar inte in någon personlig data om dig när du besöker vår
          plattform. Information är makt, och vi anser att din data hör hemma
          hos dig.
        </p>
      </div>
    </Section>
  );
};

export default Integrity;
