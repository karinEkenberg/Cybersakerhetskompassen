import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";
import MatchingImage from "../assets/matching.webp";

const Matching = () => {
  const [roles, setRoles] = useState(null);
  const [selectedTraits, setSelectedTraits] = useState([]);

  useEffect(() => {
    const rolesQuery =
      '*[_type == "matching"] { _id, roleTitle, description, traits, interviewTip }';

    client
      .fetch(rolesQuery)
      .then((rolesData) => {
        setRoles(rolesData);
      })
      .catch(console.error);
  }, []);

  const availableTraits = [
    "Programmering",
    "Utredning",
    "Problemlösning",
    "Logganalys",
    "Strukturerad",
    "Kreativ",
    "Webbutveckling",
    "Nätverk",
  ];

  const handleTraitClick = (trait) => {
    setSelectedTraits((prev) =>
      prev.includes(trait) ? prev.filter((t) => t !== trait) : [...prev, trait],
    );
  };

  const filteredRoles = roles?.filter((role) => {
    if (selectedTraits.length > 0) {
      return selectedTraits.every((trait) => role.traits?.includes(trait));
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#c0e1d2]">
      <Section
        headingLevel="h1"
        title="Hitta din väg"
        text="Säkerhetsbranschen är enorm. Välj dina starkaste egenskaper nedan för att se vilka roller som matchar din profil."
        imageSrc={MatchingImage}
        imageAlt="Illustration av matchning"
        priority={true}
        imageWidth="500"
        imageHeight="500"
      />

      <div className="w-full px-6 pb-12 lg:pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 bg-[var(--color-offwhite)] p-8 rounded-md shadow-[4px_4px_0px_rgba(43,43,43,0.15)]">
            <div className="mb-6 border-b border-gray-300 pb-4">
              <h2 className="text-2xl font-bold text-[var(--color-kompass-black)]">
                Välj dina egenskaper
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {availableTraits.map((trait) => (
                <button
                  key={trait}
                  onClick={() => handleTraitClick(trait)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors border-2 ${
                    selectedTraits.includes(trait)
                      ? "bg-[#dca4a4] text-[var(--color-kompass-black)]"
                      : "bg-transparent border-[var(--color-primary-hover)] text-gray-700 hover:border-[#dca4a4]"
                  }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          {roles === null ? (
            <p className="text-center py-10">Laddar roller...</p>
          ) : filteredRoles?.length === 0 ? (
            <p className="text-center py-10 text-gray-700 font-medium">
              Inga roller matchade alla valda egenskaper. Testa att välja bort
              någon egenskap!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredRoles?.map((role) => (
                <article
                  key={role._id}
                  className="bg-[var(--color-offwhite)] p-8 rounded-md shadow-[4px_4px_0px_rgba(43,43,43,0.15)] flex flex-col"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[var(--color-kompass-black)]">
                    {role.roleTitle}
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
                    {role.description}
                  </p>

                  {role.interviewTip && (
                    <div className="bg-[#c0e1d2]/30 p-4 rounded-md border-l-4 border-[#c0e1d2]">
                      <h4 className="font-bold text-[var(--color-kompass-black)] mb-2">
                        Intervjutips
                      </h4>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {role.interviewTip}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Matching;
