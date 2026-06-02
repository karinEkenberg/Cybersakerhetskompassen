import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client"; // Se till att sökvägen stämmer

const Roles = () => {
  // Här sparar vi datan vi får från Sanity
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const query =
      '*[_type == "role"]{_id, title, description, buttonText, buttonLink}';

    client
      .fetch(query)
      .then((data) => {
        setRoles(data);
      })
      .catch((error) => console.error("Kunde inte hämta data:", error));
  }, []);

  return (
    <div>
      <Section
        headingLevel="h1"
        title="Roller"
        text="Här utforskar vi olika karriärvägar, från offensiv sårbarhetsanalys
          till defensiv incidenthantering."
      />

      {roles.map((role, index) => (
        <Section
          key={role._id}
          headingLevel="h2"
          title={role.title}
          text={role.description}
          buttonText={role.buttonText}
          buttonLink={role.buttonLink}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Roles;
