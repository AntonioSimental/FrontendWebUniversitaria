import SectionContainer from "@/components/containers/sectionContainer";
import Subtitle from "@/components/texts/subtitle";
import TextCard from "@/components/containers/textCard";
import ScrollContainer from "@/components/containers/scrollContainer";
import LinkButton from "@/components/inputs/linkButton";
import Paragraph from "@/components/texts/paragraph";
import "../../styles/sectionsStyles/facultades.css";

export default function Factultades() {
  return (
    <div>
      <SectionContainer theme="#f5f5f5">
        <Subtitle text="Faculties" />

        <ScrollContainer theme="#EEF2F7">
          <LinkButton link="/facultades/ingenierias">
            <TextCard theme="#D6E2F0" shadow={true}>
              <Paragraph text="Engineering" />
              <img
                className="image__facultades"
                src="/images/imageFacultades1.png"
                alt=""
              />
            </TextCard>
          </LinkButton>

          <LinkButton link="/facultades/licenciaturas">
            <TextCard theme="#D6E2F0" shadow={true}>
              <Paragraph text="	Bachelor's Degrees" />
              <img
                className="image__facultades"
                src="/images/imageFacultades2.png"
                alt=""
              />
            </TextCard>
          </LinkButton>
        </ScrollContainer>
      </SectionContainer>
    </div>
  );
}