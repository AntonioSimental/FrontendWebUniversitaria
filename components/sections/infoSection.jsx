import SectionContainer from "../containers/sectionContainer";
import TextContainer from "../containers/textCard";
import Subtitle from "../texts/subtitle";
import ListItem from "../texts/listItem";
import "../../styles/sectionsStyles/infoSection.css";

export default function InfoSection() {
  return (
    <div id="info">
      <SectionContainer direction="row" theme="#eee">
        <TextContainer theme="#ddd" shadow={true}>
          <Subtitle text="Engineering programs available" color="#555" />
          <ul>
            <ListItem text="Ingeniería en Desarrollo de Software" color="#555" />
            <ListItem text="Ingeniería en Innocación Digital" color="#555" />
            <ListItem text="Ingeniería en Róbotica" color="#555" />
          </ul>
          <img className="image__info" src="/images/imageInfo1.png" alt="" />
        </TextContainer>

        <TextContainer theme="#ddd" shadow={true}>
          <Subtitle text="Economic and Administrative Sciences" color="#555" />
          <ul>
            <ListItem text="Licenciatura en Gestión económica empresarial" color="#555" />
            <ListItem text="Licenciatura en Finanzas Corporativas" color="#555" />
            <ListItem text="Licenciatura en Capital Humano" color="#555" />
          </ul>
          <img className="image__info" src="/images/imageInfo2.png" alt="" />
        </TextContainer>
      </SectionContainer>
    </div>
  );
}