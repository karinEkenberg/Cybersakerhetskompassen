import React, { useState, useEffect } from "react";
import Section from "./Section";
import InteractiveRoadmap from "./InteractiveRoadmap";
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

  return (
    <div>
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
      {roadmaps === null ? (
        <div className="w-full bg-[#c0e1d2] px-6 py-8 lg:py-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="max-w-5xl mx-auto h-48 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
        </div>
      ) : (
        roadmaps.map((roadmap) => (
          <InteractiveRoadmap
            key={roadmap._id}
            title={roadmap.title}
            steps={roadmap.steps}
          />
        ))
      )}
    </div>
  );
};

export default Roadmaps;
