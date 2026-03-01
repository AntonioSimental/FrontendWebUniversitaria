import SectionContainer from "@/components/containers/sectionContainer";
import RenderPromises from "@/components/containers/renderPromises";
import RenderAsync from "@/components/containers/renderAsync";
import "../../../../styles/pagesStyles/software.css";
import LinkButton from "@/components/inputs/linkButton";
import Paragraph from "@/components/texts/paragraph";

export default function SoftwarePage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <h3 className="title__page">Software</h3>
      <div className="software__container">
        <RenderAsync link="https://pokeapi.co/api/v2/pokemon/charizard" />
        <RenderPromises
          link1="https://digimon-api.vercel.app/api/digimon/name/Agumon"
          link2="https://digimon-api.vercel.app/api/digimon/name/Angewomon"
          link3="https://pokeapi.co/api/v2/pokemon/pikachu"
          link4="https://restcountries.com/v3.1/name/United States"
        />
      </div>
      <LinkButton link="/facultades/ingenierias">
        <Paragraph color="#f00" text="Back" />
      </LinkButton>
    </SectionContainer>
  );
}
