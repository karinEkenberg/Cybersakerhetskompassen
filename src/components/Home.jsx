import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import KarinAndDavid from "../assets/karin-and-david.webp";
import Ladder from "../assets/climbing-ladder.webp";
import Books from "../assets/books.webp";
import Matching from "../assets/matching.webp";
import Coder from "../assets/coder.webp";
import Handshake from "../assets/handshake.webp";
import Certificates from "../assets/certificates-illustration.webp";

const Home = () => {
  return (
    <>
      <Hero />
      <Section
        title="För studenter av studenter"
        text="Idén till Cybersäkerhetskompassen föddes ur vår egen förvirring i början av utbildningen. Det saknades en tydlig bild av vilka inriktningar som faktiskt finns – och ju längre in i studierna vi kommer, desto fler dörrar upptäcker vi öppnas. Även om det självklart är bra att ha en bred grundkunskap, vill vi underlätta ingången i branschen för andra. Vi vill hjälpa studenter att navigera rätt tidigt, så att dyrbar tid kan läggas där den gör mest nytta. Vi har helt enkelt byggt den sajt vi själva hade önskat fanns när vi började."
        buttonText="Läs mer"
        buttonStyle="btn-primary"
        imageSrc={KarinAndDavid}
        imageAlt="Students collaborating on projects"
        reverse={true}
      />
      <Section
        title="Karriärvägar & Cyberroller"
        text="Säkerhetsbranschen är bred och det kan vara svårt att veta vilken dörr en ska knacka på. Här kartläggs olika specialistroller – från defensiv incidenthantering i ett SOC-team till offensiv sårbarhetsanalys och pentest. Hitta den roadmap som passar dina mål bäst."
        buttonText="Utforska roller"
        buttonStyle="btn-primary"
        imageSrc={Ladder}
        imageAlt="Visual map or compass showing digital career paths"
      />

      <Section
        title="Cyber Lexikon"
        text="IT-säkerhet är fullt av akronymer, tekniska termer och komplexa principer. I vårt lexikon rätas frågetecknen ut. Här bryts svåra teoretiska koncept och säkerhetsbegrepp ner till enkla, pedagogiska förklaringar så att en lätt kan förstå helhetsbilden."
        buttonText="Öppna lexikonet"
        buttonStyle="btn-primary"
        imageSrc={Books}
        imageAlt="Book or screen with a padlock representing security terms"
        reverse={true}
      />

      <Section
        title="Hitta din matchning"
        text="Är du osäker på om du vill gräva djupt i digital forensik eller arbeta mer in-house med incidentrespons? Gör vårt matchmaking-test för att matcha dina personliga intressen, programmeringskunskaper och styrkor mot rätt typ av framtida utmaning."
        buttonText="Gör testet"
        buttonStyle="btn-warning"
        imageSrc={Matching}
        imageAlt="Interactive quiz or puzzle pieces fitting together"
      />

      <Section
        title="Praktiska labbar & Projekt"
        text="Teori i all ära, men det är i terminalen det händer. Här samlas dokumentation och genomgångar från praktiska labbar, SOC-övervakning och automatiserade miljöer. Perfekt inspiration för hur en kan vinkla sina praktiska erfarenheter i en kompetensbaserad intervju."
        buttonText="Se labbar"
        buttonStyle="btn-primary"
        imageSrc={Coder}
        imageAlt="Linux terminal or network security dashboard"
        reverse={true}
      />

      <Section
        title="Nätverk & Arbetsliv"
        text="Vägen ut i arbetslivet handlar mycket om kontakter. Vi tipsar om hur en kan bygga upp ett starkt professionellt nätverk på LinkedIn och GitHub utan konsultroller, och hur en bäst hittar och rankar potentiella LIA-platser på företag som tar cybersäkerhet på allvar."
        buttonText="Hitta nätverk"
        buttonStyle="btn-primary"
        imageSrc={Handshake}
        imageAlt="Two corporate professionals shaking hands"
      />

      <Section
        title="Certifikat eller praktiska projekt?"
        text="Många undrar om dyra certifikat är ett krav för att få första jobbet inom cybersäkerhet. Efter att ha lyssnat på branschen i Sverige är budskapet tydligt: certifikat skadar absolut inte och kan ge fördelar, men det väger sällan lika tungt som praktisk kunskap. Dessutom är det standard att arbetsgivaren betalar för certifieringar väl på plats. Vi uppmuntrar därför inte studenter att lägga tusenlappar ur egen ficka. Satsa hellre på att bygga egna projekt och labbar att visa upp i en portfolio."
        buttonText="Se våra labbar"
        buttonStyle="btn-primary"
        imageSrc={Certificates}
        imageAlt="Illustration showing alternative career building over expensive certificates"
        reverse={true}
      />
    </>
  );
};

export default Home;
