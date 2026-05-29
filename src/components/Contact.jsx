import React from "react";
import Section from "./Section";

const Contact = () => {
  return (
    <div className="pt-20 lg:pt-32">
      <Section
        title="Hör av dig till oss"
        text="    Har du frågor om utbildningen, letar du efter LIA-samarbeten, eller
          vill du bara nätverka? Tveka inte att höra av dig till oss på LinkedIn
          eller via mail."
      />

      {/* Contact Section: Karin */}
      <Section
        title="Karin Ekenberg"
        text="IT-säkerhetsstudent med fokus på incidenthantering och digital forensik. Connecta gärna med mig på LinkedIn för att utbyta erfarenheter kring labbar, SOC-miljöer och defensiv säkerhet."
        buttonText="Karin på LinkedIn"
        buttonStyle="btn-primary"
        /* Replace with your actual LinkedIn URL */
        buttonLink="https://www.linkedin.com/in/ditt-linkedin-namn"
        imageSrc="./src/assets/karin-ny.webp"
        imageAlt="Portrait of Karin"
      />

      {/* Contact Section: David */}
      <Section
        title="David"
        text="IT-säkerhetsstudent med sikte på cybersäkerhetsbranschen. Tveka inte att skicka iväg ett meddelande om du vill nätverka eller diskutera framtida projekt!"
        buttonText="David på LinkedIn"
        buttonStyle="btn-primary"
        /* Replace with his actual LinkedIn URL */
        buttonLink="https://www.linkedin.com/in/davids-linkedin-namn"
        imageSrc="./src/assets/david.webp"
        imageAlt="Portrait of David"
        /* Flips the layout so it zig-zags nicely! */
        reverse={true}
      />

      {/* General Email Section */}
      <Section
        title="Föredrar du mail?"
        text="Ibland är ett klassiskt mail det smidigaste sättet att nå fram. Klicka på knappen nedan för att öppna ditt mailprogram direkt."
        buttonText="Skicka e-post"
        buttonStyle="btn-warning"
        /* Triggers the default mail client on the user's device */
        buttonLink="mailto:hej@cybersakerhetskompassen.se"
        /* Reusing an existing image is a great green coding trick! */
        imageSrc="./src/assets/compass-image.webp"
        imageAlt="Cybersäkerhetskompassen logo"
      />
    </div>
  );
};

export default Contact;
