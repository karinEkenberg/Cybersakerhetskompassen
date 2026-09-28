import React, { useState, useEffect } from "react";
import Section from "./Section";
import InteractiveRoadmap from "./InteractiveRoadmap";
import RoleNav from "./RoleNav";
import { client } from "../client";
import Map from "../assets/map.webp";

const Roadmaps = () => {
  const [roadmaps, setRoadmaps] = useState(null);

  useEffect(() => {
    const query = '*[_type == "roadmap"]{_id, title, steps}';
    client
      .fetch(query)
      .then((data) => setRoadmaps(data))
      .catch((error) => console.error("Kunde inte hämta roadmaps:", error));
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
      {/* 1. Sidhuvud */}
      <Section
        headingLevel="h1"
        title="Roadmaps"
        text="Vår roadmap är din guide genom cybersäkerhetens värld, med tydliga steg och resurser för att hjälpa dig att navigera och växa i branschen."
        imageSrc={Map}
        imageAlt="Illustration av en karta som symboliserar en roadmap"
        priority={true}
        imageWidth="296"
        imageHeight="154"
      />

      {/* 2. Sektion med exakt samma struktur och avstånd som på roller-sidan */}
      {roadmaps === null ? (
        <div className="w-full bg-[#c0e1d2] px-6 py-8 lg:py-12">
          <div className="max-w-5xl mx-auto flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-48 bg-gray-200 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      ) : (
        <section className="w-full bg-[#c0e1d2] px-6 pb-10 lg:pb-14 flex flex-col gap-8">
          {/* Navigationsruta */}
          <RoleNav title="Utforska roadmaps" />

          {/* Roadmaps med samma avstånd som rollkorten */}
          <div className="max-w-5xl mx-auto flex flex-col gap-8 w-full">
            {roadmaps.map((roadmap) => (
              <div
                key={roadmap._id}
                id={slugify(roadmap.title)}
                className="scroll-mt-24 w-full"
              >
                <InteractiveRoadmap
                  title={roadmap.title}
                  steps={roadmap.steps}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Roadmaps;
