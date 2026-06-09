import React from "react";
import Section from "../components/Section";
import Handshake from "../assets/handshake.webp";
// import HeroImage from "../assets/network-hero.webp";
// import PortfolioImage from "../assets/portfolio-guide.webp";
// import LiasokImage from "../assets/lia-search.webp";
// import WebinarImage from "../assets/webinars.webp";

const Network = () => {
  return (
    <>
      <Section
        title="Nätverk, CV & Karriär"
        text="Vägen till den första LIA-platsen handlar om mer än bara tekniska verktyg. Här samlar vi handfasta råd om hur en bygger ett starkt professionellt nätverk, slipar sitt CV utan branscherfarenhet och paketerar sina praktiska labbar på rätt sätt för att hitta rätt roll i branschen."
        imageSrc={Handshake}
        imageAlt="Professional networking and career guidance illustration"
        priority={true}
      />

      <Section
        title="CV & Portföljguide: Paketera din kunskap"
        text="Att söka LIA utan branscherfarenhet handlar om att flytta fokuset från vad en inte har gjort till vad en faktiskt kan göra. Genom att bygga en portfölj där en dokumenterar sina egna labbar och grupparbeten visar en sin tekniska förståelse i praktiken. Vi går igenom hur en bäst strukturerar sina projekt på GitHub så att en rekryterare snabbt kan bilda sig en uppfattning om ens kompetens."
        // imageSrc={PortfolioImage}
        imageAlt="Laptop displaying a developer portfolio and code repository"
        priority={false}
      />

      <Section
        title="LIA & Jobbsök: Strategier och intervjutips"
        text="Vägen till en bra arbetsplats går oftast via ett riktat och metodiskt sökande. Här får en konkreta tips på hur en kan navigera bland olika typer av arbetsplatser, oavsett om målet är konsultvärlden eller en in-house-verksamhet. Vi kikar även på hur en förbereder sig för kompetensbaserade intervjuer, där en lär sig att vinkla sina skolprojekt och laborationer till konkreta bevis på problemlösningsförmåga och ansvarstagande."
        // imageSrc={LiasokImage}
        imageAlt="Person planning career steps and preparing for job interviews"
        priority={false}
      />

      <Section
        title="Det digitala fikarummet: Webbinarier & Seminarier"
        text="Nätverkande behöver inte innebära stela eller påtvingade mingel. Genom att delta på öppna digitala seminarier, webbinarier och säkerhetskonferenser kan en enkelt plocka upp de senaste branschtrenderna. Detta ger dessutom en helt naturlig dörröppnare för att ta kontakt med yrkesverksamma på LinkedIn efteråt, vilket gör det smidigt att bygga relationer i sin egen takt."
        // imageSrc={WebinarImage}
        imageAlt="People participating in an online cybersecurity webinar"
        priority={false}
        buttonText="Hitta webbinarier hos EC-Council →"
        buttonLink="https://www.eccouncil.org/cybersecurity-exchange/cyber-talks/"
        buttonStyle="text-emerald-600 underline hover:text-emerald-800 font-medium"
      />
    </>
  );
};

export default Network;
