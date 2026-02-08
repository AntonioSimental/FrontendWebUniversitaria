import SectionContainer from "../containers/sectionContainer";
import Subtitle from "../texts/subtitle";
import Paragraph from "../texts/paragraph";
import TextCard from "../containers/textCard";
import { texts } from "@/public/data/texts";
import "../../styles/sectionsStyles/aboutSection.css";

export default function AboutSection() {
  return (
    <div id="about">
      <SectionContainer direction="row" theme="#f5f5f5">
        <TextCard>
          <Subtitle text="About us" />
          <Paragraph align="justify" text={`▶${texts.about}}`}/>
        </TextCard>
        <div className="image__container">
          <img
            className="about__image"
            src="/images/imageAbout.png"
            alt="Image Not Found"
          />
        </div>
      </SectionContainer>
    </div>
  );
};