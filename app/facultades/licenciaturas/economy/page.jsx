"use client"

import SectionContainer from "@/components/containers/sectionContainer";
import TextCard from "@/components/containers/textCard";
import Subtitle from "@/components/texts/subtitle";
import Paragraph from "@/components/texts/paragraph";
import LinkButton from "@/components/inputs/linkButton";
import  "../../../../styles/imageStyles.css";
import "../../../../styles/inputStyles/button.css";
import "../../../../styles/carrersStyles.css";
import { useState } from "react";

export default function EconomyPage() {
  const [ state, setState  ] = useState(false);
  
  function showCard() {
    setState(!state);
  }

  return (
    <SectionContainer theme="#f5f5f5">
      <TextCard shadow={true} theme="#EEF2F7">
        <img className="image__16-9" src="/images/imageLic2.png" alt="" />
        <Subtitle text="Bachelor’s Degree in Business Economic Management" />
        <button className="button__form" onClick={showCard}>Sign up now</button>
      </TextCard>

      <LinkButton link="/facultades/licenciaturas">
        <Paragraph text="Go Back" color="#f00" />
      </LinkButton>

      {state && (
        <div className="container__hidden">
          <TextCard theme="#333">
            <Paragraph text="404 ERROR" color="#f00"/>
            <Paragraph text="Content not Available" color="#f00"/>
            <button className="button__cancel" onClick={showCard}>Close</button>
          </TextCard>
        </div>
      )}
    </SectionContainer>
  );
}