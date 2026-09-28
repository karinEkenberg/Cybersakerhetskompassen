import React, { useState, useEffect } from "react";
import Section from "./Section";
import RoleNav from "./RoleNav";
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

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-åäö]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <div lang="sv">
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
        <section className="w-full bg-[#c0e1d2] px-6 pb-10 lg:pb-14 flex flex-col gap-8">
          {/* Återanvänd navigationsbox */}
          <RoleNav title="Utforska roller" />

          {/* Rollkorten */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {roles.map((role) => (
              <div
                key={role._id}
                id={slugify(role.title)}
                className="flex h-full w-full min-w-0 scroll-mt-24 [&_h2]:[overflow-wrap:anywhere] [&_h2]:[word-break:break-word] [&_h2]:hyphens-auto [&_p]:[overflow-wrap:anywhere]"
              >
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
