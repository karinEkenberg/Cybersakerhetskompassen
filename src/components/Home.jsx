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
        imageSrc="./src/assets/students-working.jpg"
        imageAlt="Students collaborating on projects"
      />
    </>
  );
};

export default Home;
