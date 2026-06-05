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
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="max-w-5xl mx-auto mb-6 h-48 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
        </div>
      ) : (
        roles.map((role, index) => (
          <Section
            key={role._id}
            headingLevel="h2"
            title={role.title}
            text={role.description}
            buttonText={role.buttonText}
            buttonLink={role.buttonLink}
            reverse={index % 2 !== 0}
          />
        ))
      )}
    </div>
  );
};

export default Roles;
