import React, { Component } from "react";
import Section from "./Section";

export default class Error extends Component {
  render() {
    return (
      <Section
        title="Sidan kunde inte hittas"
        text="Hoppsan hejsan, sidan du försöker hitta finns inte! Försök att gå tillbaka till startsidan."
        isSubpage={true}
      />
    );
  }
}
