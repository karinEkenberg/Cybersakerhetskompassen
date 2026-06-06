import React from "react";
import Section from "./Section";
import KarinAndDavid from "../assets/karin-and-david.webp";
import Mail from "../assets/mail.webp";

const Contact = () => {
  return (
    <div>
      <Section
        headingLevel="h1"
        title="Hör av dig till oss"
        text="    Har du frågor om utbildningen, letar du efter LIA-samarbeten, eller
          vill du bara nätverka? Tveka inte att höra av dig till oss på LinkedIn
          eller via mail."
      />

      <Section
        title="Karin Ekenberg"
        text="IT-säkerhetsstudent med fokus på incidenthantering och digital forensik. Connecta gärna med mig på LinkedIn för att utbyta erfarenheter kring labbar, SOC-miljöer och defensiv säkerhet."
        buttonText="Karin på LinkedIn"
        buttonStyle="btn-primary"
        buttonLink="https://www.linkedin.com/in/karin-ekenberg-webbutvecklare/"
        imageSrc={KarinAndDavid}
        imageAlt="Portrait of Karin"
      />

      <Section
        title="David"
        text="IT-säkerhetsstudent med sikte på cybersäkerhetsbranschen. Tveka inte att skicka iväg ett meddelande om du vill nätverka eller diskutera framtida projekt!"
        buttonText="David på LinkedIn"
        buttonStyle="btn-primary"
        buttonLink="https://www.linkedin.com/in/david-lindskog-098b10149/"
        imageSrc={KarinAndDavid}
        imageAlt="Portrait of David"
        reverse={true}
      />

      <Section
        title="Föredrar du mail?"
        text="Ibland är ett klassiskt mail det smidigaste sättet att nå fram. Klicka på knappen nedan för att öppna ditt mailprogram direkt."
        buttonText="Skicka e-post"
        buttonStyle="btn-warning"
        buttonLink="mailto:hej@cybersakerhetskompassen.se"
        imageSrc={Mail}
        imageAlt="Illustration of an email app icon"
      />
    </div>
  );
};

export default Contact;
