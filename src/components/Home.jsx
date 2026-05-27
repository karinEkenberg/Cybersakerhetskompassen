import React from "react";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <Hero />
      {/* You can easily inject more sections for the landing page here later, like an About or Feature section */}
      <Section
        title="För studenter av studenter"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sidan anpassar sig och fyller i denna text dynamiskt via props."
        buttonText="Läs mer"
        buttonStyle="btn-primary"
        imageSrc="./src/assets/students-working.webp"
        imageAlt="Students collaborating on projects"
      />
      {/* Section 1: Roles & Roadmaps */}
      <Section
        title="Karriärvägar & Cyberroller"
        text="Säkerhetsbranschen är bred och det kan vara svårt att veta vilken dörr en ska knacka på. Här kartläggs olika specialistroller – från defensiv incidenthantering i ett SOC-team till offensiv sårbarhetsanalys och pentest. Hitta den roadmap som passar dina mål bäst."
        buttonText="Utforska roller"
        buttonStyle="btn-primary"
        imageSrc="./src/assets/climbing-ladder.webp"
        imageAlt="Visual map or compass showing digital career paths"
      />

      {/* Section 2: Cyber Lexicon */}
      <Section
        title="Cyber Lexikon"
        text="IT-säkerhet är fullt av akronymer, tekniska termer och komplexa principer. I vårt lexikon rätas frågetecknen ut. Här bryts svåra teoretiska koncept och säkerhetsbegrepp ner till enkla, pedagogiska förklaringar så att en lätt kan förstå helhetsbilden."
        buttonText="Öppna lexikonet"
        buttonStyle="btn-primary"
        imageSrc="./src/assets/books.webp"
        imageAlt="Book or screen with a padlock representing security terms"
        reverse={true}
      />

      {/* Section 3: Matchmaking */}
      <Section
        title="Hitta din matchning"
        text="Är du osäker på om du vill gräva djupt i digital forensik eller arbeta mer in-house med incidentrespons? Gör vårt matchmaking-test för att matcha dina personliga intressen, programmeringskunskaper och styrkor mot rätt typ av framtida utmaning."
        buttonText="Gör testet"
        buttonStyle="btn-warning"
        imageSrc="./src/assets/matching.webp"
        imageAlt="Interactive quiz or puzzle pieces fitting together"
      />

      {/* Section 4: Labs & Portfolio */}
      <Section
        title="Praktiska labbar & Projekt"
        text="Teori i all ära, men det är i terminalen det händer. Här samlas dokumentation och genomgångar från praktiska labbar, SOC-övervakning och automatiserade miljöer. Perfekt inspiration för hur en kan vinkla sina praktiska erfarenheter i en kompetensbaserad intervju."
        buttonText="Se labbar"
        buttonStyle="btn-primary"
        imageSrc="./src/assets/coder.webp"
        imageAlt="Linux terminal or network security dashboard"
        reverse={true}
      />

      {/* Section 5: Network & LIA */}
      <Section
        title="Nätverk & Arbetsliv"
        text="Vägen ut i arbetslivet handlar mycket om kontakter. Vi tipsar om hur en kan bygga upp ett starkt professionellt nätverk på LinkedIn och GitHub utan konsultroller, och hur en bäst hittar och rankar potentiella LIA-platser på företag som tar cybersäkerhet på allvar."
        buttonText="Hitta nätverk"
        buttonStyle="btn-primary"
        imageSrc="./src/assets/handshake.webp"
        imageAlt="Two corporate professionals shaking hands"
      />
    </>
  );
};

export default Home;
