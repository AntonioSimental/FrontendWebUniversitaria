import "../../styles/sectionsStyles/homeSection.css";
import SectionContainer from "@/components/containers/sectionContainer";
import Title from "../texts/title";
import Subtitle from "../texts/subtitle";
import Paragraph from "../texts/paragraph";
import TextCard from "../containers/textCard";
import { texts } from "../../public/data/texts";

export default function HomeSection() {
  return (
    <div id="home">
      <SectionContainer theme="#333c">
        <img className="imageMain" src="/images/imagePatito.png" alt="" />
        <Title text="Duckling University" color="#f5f5f5"/>
        <Subtitle text='"Trascending the wifi"' color="#ddd"/>
        <TextCard theme="none">
          <Paragraph align="center" color="#ddd" text={texts.welcome}/>
        </TextCard>
      </SectionContainer>
    </div>
    );
}