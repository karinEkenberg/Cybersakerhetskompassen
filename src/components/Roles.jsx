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

  const slugify = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-åäö]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

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
        <section className="w-full bg-[#c0e1d2] px-6 pb-10 lg:pb-14 flex flex-col gap-8">
          <div
            className="w-full max-w-5xl mx-auto bg-[var(--color-offwhite)] rounded-md p-6 md:p-8"
            style={{ boxShadow: "6px 6px 0px rgba(43, 43, 43, 0.2)" }}
          >
            <h2 className="text-xl font-bold mb-6 text-kompass-black">
              Utforska roller
            </h2>
            <div className="flex flex-wrap gap-3">
              {roles.map((role) => (
                <a
                  key={`nav-${role._id}`}
                  href={`#${slugify(role.title)}`}
                  className="bg-[var(--color-offwhite)] border-2 border-[var(--color-primary-hover)] text-gray-800 rounded-md py-2 px-4 font-medium transition-all duration-200 hover:border-[var(--color-warning-red)]  cursor-pointer block text-sm md:text-base"
                >
                  {role.title}
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {roles.map((role) => (
              <div
                key={role._id}
                id={slugify(role.title)}
                className="flex h-full w-full scroll-mt-24"
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
