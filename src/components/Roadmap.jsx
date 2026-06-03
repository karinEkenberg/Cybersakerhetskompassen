import React, { useState, useEffect } from "react";
import Section from "./Section";
import { client } from "../client";
import Map from "../assets/map.webp";

const Roadmap = () => {
  return (
    <div>
      <Section
        headingLevel="h1"
        title="Roadmaps"
        text="Vår roadmap är din guide genom cybersäkerhetens värld, med tydliga steg och resurser för att hjälpa dig att navigera och växa i branschen."
        imageSrc={Map}
        imageAlt="Illustration av en karta som symboliserar en roadmap"
      />
    </div>
  );
};

export default Roadmap;
