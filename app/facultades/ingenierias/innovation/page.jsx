import SectionContainer from "@/components/containers/sectionContainer";
import RenderPromises from "@/components/containers/renderPromises";
import RenderAsync from "@/components/containers/renderAsync";
import "../../../../styles/pagesStyles/software.css";
import LinkButton from "@/components/inputs/linkButton";
import Paragraph from "@/components/texts/paragraph";

export default function InnovationPage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <h3 className="title__page">Innovation</h3>
      <div className="software__container">
        <RenderAsync link="https://pokeapi.co/api/v2/pokemon/rattata" />
        <RenderPromises
          link1="https://digimon-api.vercel.app/api/digimon/name/Tentomon"
          link2="https://digimon-api.vercel.app/api/digimon/name/Palmon"
          link3="https://pokeapi.co/api/v2/pokemon/Snorlax"
          link4="https://restcountries.com/v3.1/name/Brazil"
        />
      </div>
      <LinkButton link="/facultades/ingenierias">
        <Paragraph color="#f00" text="Back" />
      </LinkButton>
    </SectionContainer>
  );
}
