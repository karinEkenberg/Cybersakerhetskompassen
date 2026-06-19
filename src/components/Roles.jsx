import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";

const Roles = () => {
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    const query =
      '*[_type == "role"]{_id, title, description, buttonText, buttonLink}';
    client
      .fetch(query)
      .then((data) => setRoles(data))
      .catch((error) => console.error("Kunde inte hämta data:", error));
  }, []);

  return (
    <div>
      <Section
        headingLevel="h1"
        title="Roller"
        text="Här utforskar vi olika karriärvägar, från offensiv sårbarhetsanalys till defensiv incidenthantering."
      />

      {roles === null ? (
        <div className="w-full bg-[#c0e1d2] px-6 py-8 lg:py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      ) : (
        <section className="w-full bg-[#c0e1d2] px-6 pb-10 lg:pb-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div key={role._id} className="flex h-full w-full">
                <Section
                  headingLevel="h2"
                  title={role.title}
                  text={role.description}
                  buttonText={role.buttonText}
                  buttonLink={role.buttonLink}
                  isCard={true}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Roles;
