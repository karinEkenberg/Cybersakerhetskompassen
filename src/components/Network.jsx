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
        headingLevel="h1"
        text="Vägen till den första LIA-platsen handlar om mer än bara tekniska verktyg. Här samlar vi handfasta råd om hur en bygger ett starkt professionellt nätverk, slipar sitt CV utan branscherfarenhet och paketerar sina praktiska labbar på rätt sätt för att hitta rätt roll i branschen."
        imageSrc={Handshake}
        imageAlt="Professional networking and career guidance illustration"
        priority={true}
      />

      <Section
        title="CV & Portfolio: Fokusera på rätt färdigheter"
        text="Att bygga ett starkt CV utan branscherfarenhet handlar om att lyfta fram de praktiska verktyg och egenskaper som företagen faktiskt efterfrågar i vardagen. Erfarenheterna från klassen över visar att det ofta är de praktiska grunderna som avgör."
        priority={false}
      >
        <ul className="space-y-4 mt-2 text-gray-800 leading-relaxed list-disc pl-5">
          <li>
            <strong>Behärska de "tråkiga" men livsviktiga verktygen:</strong>{" "}
            Oavsett om en hamnar på ett stort företag eller en kommun sker en
            enorm del av det dagliga arbetet i Office-paketet. Att ha goda
            kunskaper i <em>Excel</em> för riskanalyser och datastrukturering är
            ett enormt plus.
          </li>
          <li>
            <strong>Visa upp din dokumentationsförmåga:</strong> Branschen lider
            ofta av bristfällig dokumentation. Förmågan att skapa struktur, rita
            tydliga dataflödesdiagram och skriva instruktioner är extremt
            eftertraktat. Lägg med exempel på teknisk dokumentation i din
            portfolio!
          </li>
          <li>
            <strong>Var ärlig med din profil:</strong> Företag värdesätter ett
            genuint intresse och viljan att experimentera i egna hemmaslabb
            framför ett uppblåst CV. Var ärlig med vad du kan och visa ditt
            driv.
          </li>
        </ul>
      </Section>

      <Section
        title="Klivet ut i arbetslivet: Hantera den första tiden"
        text="De första veckorna på en ny arbetsplats kan kännas överväldigande med interna system, nya förkortningar och branschjargong. Här är de bästa mentala verktygen från de som precis har gjort resan."
        priority={false}
      >
        <ul className="space-y-4 mt-2 text-gray-800 leading-relaxed list-disc pl-5">
          <li>
            <strong>Normalisera "Imposter Syndrome" (Bedragarsyndrom):</strong>{" "}
            Att känna sig otillräcklig i början är nästan universellt. Kom ihåg
            att en är på sin LIA för att lära sig, inte för att redan vara
            expert. Det finns en 100-procentig acceptans för att göra misstag,
            det är då en ska göra dem!
          </li>
          <li>
            <strong>Etablera en prestigelös frågekultur:</strong> Gå in med
            inställningen att du inte kan allt. Det är alltid bättre att fråga
            en extra gång än att gissa. De som växer snabbast i sin roll är de
            som vågar ställa de "dumma" frågorna till alla, oavsett titel.
          </li>
          <li>
            <strong>Hitta rätt driv i din roll:</strong> I skarpa miljöer finns
            det sällan färdiga checklistor. Du förväntas ofta själv kunna
            identifiera problem, söka lösningar och styra din egen tid på ett
            ansvarsfullt sätt.
          </li>
        </ul>
      </Section>

      <Section
        title="Kommunikation, rapportering och gemenskap"
        text="Cybersäkerhet handlar i slutändan om människor. Att lösa det tekniska problemet är bara halva jobbet – resten handlar om hur väl en kan förmedla det till andra och hur en fungerar i gruppen."
        priority={false}
      >
        <ul className="space-y-4 mt-2 text-gray-800 leading-relaxed list-disc pl-5">
          <li>
            <strong>Kommunikation trumfar ren teknik:</strong> Framgång bygger
            på tvärfunktionellt samarbete. En måste kunna förklara komplexa
            tekniska sårbarheter och motivera säkerhetsåtgärder för kunder eller
            kollegor som helt saknar teknisk bakgrund.
          </li>
          <li>
            <strong>Rapporteringen är slutprodukten:</strong> Den verkliga
            färdigheten ligger i att kunna sammanställa sina tekniska fynd i en
            professionell rapport med konkreta, affärsmässiga rekommendationer.
          </li>
          <li>
            <strong>Hitta en bra arbetskultur:</strong> Det sociala sammanhanget
            gör att en lär sig snabbare. Håll utkik efter arbetsplatser som har
            en bra gemenskap och kultur, oavsett om det innebär ett biljardbord
            på kontoret eller gemensamma aktiviteter på fritiden.
          </li>
        </ul>
      </Section>

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
