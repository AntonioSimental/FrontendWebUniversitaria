import SectionContainer from "@/components/containers/sectionContainer";
import Subtitle from "@/components/texts/subtitle";
import ScrollContainer from "@/components/containers/scrollContainer";
import LinkButton from "@/components/inputs/linkButton";
import TextCard from "@/components/containers/textCard";
import Paragraph from "@/components/texts/paragraph";
import SpaceNavbar from "@/components/containers/spaceNavbar";
import { texts } from "@/public/data/texts";
import "../../../styles/imageStyles.css";

export default function IngenieriasPage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <SpaceNavbar/>
      <Subtitle text="Engineering" />
      <ScrollContainer theme="#EEF2F7">
        <LinkButton link="/facultades/ingenierias/software">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageIngenieria1.png"
              alt="Image Not Found"
            />
            <Subtitle text="Software Development Engineering" />
            <Paragraph text={texts.descriptions.ing1}/>
          </TextCard>
        </LinkButton>

        <LinkButton link="/facultades/ingenierias/innovation">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageIngenieria2.png"
              alt="Image Not Found"
            />
            <Subtitle text="Digital Innovation Engineering" />
            <Paragraph text={texts.descriptions.ing2}/>
          </TextCard>
        </LinkButton>

        <LinkButton link="/facultades/ingenierias/robotics">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageIngenieria3.png"
              alt="Image Not Found"
            />
            <Subtitle text="Robotics Engineering" />
            <Paragraph text={texts.descriptions.ing3}/>
          </TextCard>
        </LinkButton>
      </ScrollContainer>

      <LinkButton link="/facultades">
        <Paragraph color="#f00" text="Go Back"/>
      </LinkButton>
    </SectionContainer>
  );
}