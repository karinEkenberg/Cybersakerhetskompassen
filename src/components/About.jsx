import React from "react";
import Section from "./Section";
import KarinAndDavid from "../assets/karin-and-david.webp";

const About = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <Section
        headingLevel="h1"
        title="Vilka är vi?"
        imageSrc={KarinAndDavid}
        imageAlt="Karin and David, creators of Cybersäkerhetskompassen"
        text="Vi är Karin och David, två IT-säkerhetsstudenter som brinner för att göra vägen in i branschen lite rakare. När vi själva började studera insåg vi snabbt hur rörigt det kan vara att förstå skillnaden mellan defensiv incidenthantering, offensiv sårbarhetsanalys och allt däremellan. Därför skapade vi Cybersäkerhetskompassen. Vi tror på att bygga praktisk kunskap, göra egna labbar och dela erfarenheter, snarare än att en ska behöva köpa dyra certifikat. Vi har helt enkelt byggt den plattform vi själva hade önskat fanns när vi började!"
        buttonText="Kontakta oss"
        buttonStyle="btn-primary"
      />
    </div>
  );
};

export default About;
