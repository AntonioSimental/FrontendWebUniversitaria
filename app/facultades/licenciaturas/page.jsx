import SectionContainer from "@/components/containers/sectionContainer";
import Subtitle from "@/components/texts/subtitle";
import ScrollContainer from "@/components/containers/scrollContainer";
import LinkButton from "@/components/inputs/linkButton";
import TextCard from "@/components/containers/textCard";
import Paragraph from "@/components/texts/paragraph";
import SpaceNavbar from "@/components/containers/spaceNavbar";
import { texts } from "@/public/data/texts";
import "../../../styles/imageStyles.css";

export default function LicenciaturasPage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <SpaceNavbar/>
      <Subtitle text="Bachelor’s Degree" />
      <ScrollContainer theme="#EEF2F7">
        <LinkButton link="/facultades/licenciaturas/economy">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageLic2.png"
              alt="Image Not Found"
            />
            <Subtitle text="Bachelor’s Degree in Business Economic Management" />
            <Paragraph text={texts.descriptions.lic1}/>
          </TextCard>
        </LinkButton>

        <LinkButton link="/facultades/licenciaturas/finance">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageLic1.png"
              alt="Image Not Found"
            />
            <Subtitle text="Bachelor’s Degree in Corporate Finance" />
            <Paragraph text={texts.descriptions.lic2}/>
          </TextCard>
        </LinkButton>

        <LinkButton link="/facultades/licenciaturas/capital">
          <TextCard theme="#D6E2F0" shadow={true}>
            <img
              className="image__16-9"
              src="/images/imageLic3.png"
              alt="Image Not Found"
            />
            <Subtitle text="Bachelor’s Degree in Human Capital Management" />
            <Paragraph text={texts.descriptions.lic3}/>
          </TextCard>
        </LinkButton>
      </ScrollContainer>

      <LinkButton link="/facultades">
        <Paragraph color="#f00" text="Go Back"/>
      </LinkButton>
    </SectionContainer>
  );
}