// src/components/Roadmaps.jsx (eller vad din huvudfil heter)
import React, { useState, useEffect } from "react";
import Section from "./Section";
import InteractiveRoadmap from "./InteractiveRoadmap"; // Vi döper om din nya komponent!
import { client } from "../client";
import Map from "../assets/map.webp";

const Roadmaps = () => {
  // State för att spara datan från Sanity
  const [roadmaps, setRoadmaps] = useState([]);

  // useEffect för att hämta datan när sidan laddas
  useEffect(() => {
    // GROQ-query: "Hämta alla roadmaps och deras steg (title, content)"
    const query = '*[_type == "roadmap"]{_id, title, steps}';

    client
      .fetch(query)
      .then((data) => {
        setRoadmaps(data);
      })
      .catch((error) => console.error("Kunde inte hämta roadmaps:", error));
  }, []);

  return (
    <div className="">
      {/* 1. Din befintliga Intro-sektion */}
      <Section
        headingLevel="h1"
        title="Roadmaps"
        text="Vår roadmap är din guide genom cybersäkerhetens värld, med tydliga steg och resurser för att hjälpa dig att navigera och växa i branschen."
        imageSrc={Map}
        imageAlt="Illustration av en karta som symboliserar en roadmap"
      />

      {/* 2. Loopa ut de interaktiva roadmapsen från Sanity */}
      {roadmaps.map((roadmap) => (
        <InteractiveRoadmap
          key={roadmap._id}
          title={roadmap.title}
          steps={roadmap.steps}
        />
      ))}
    </div>
  );
};

export default Roadmaps;
