import SectionContainer from "@/components/containers/sectionContainer";
import RenderPromises from "@/components/containers/renderPromises";
import RenderAsync from "@/components/containers/renderAsync";
import "../../../../styles/pagesStyles/software.css";
import LinkButton from "@/components/inputs/linkButton";
import Paragraph from "@/components/texts/paragraph";

export default function EconomyPage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <SectionContainer theme="#f5f5f5">
        <h3 className="title__page">Economy</h3>
        <div className="software__container">
          <RenderAsync link="https://pokeapi.co/api/v2/pokemon/squirtle" />
          <RenderPromises
            link1="https://digimon-api.vercel.app/api/digimon/name/MetalGreymon"
            link2="https://digimon-api.vercel.app/api/digimon/name/Garurumon"
            link3="https://pokeapi.co/api/v2/pokemon/Kakuna"
            link4="https://restcountries.com/v3.1/name/Russia"
          />
        </div>
        <LinkButton link="/facultades/licenciaturas">
          <Paragraph color="#f00" text="Back" />
        </LinkButton>
      </SectionContainer>
    </SectionContainer>
  );
}
