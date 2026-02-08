import "../../styles/sectionsStyles/footer.css";
import TextCard from "../containers/textCard";
import Paragraph from "../texts/paragraph";

export default function Footer() {
  return (
    <footer className="footer__container">
      <TextCard>
        <Paragraph text="🌐 Social" color="#bbb" />
        <Paragraph text="Facebook" color="#fff" />
        <Paragraph text="Instagram" color="#fff" />
        <Paragraph text="Twitter" color="#fff" />
      </TextCard>
      <TextCard>
        <Paragraph text="✉ Contact" color="#bbb" />
        <Paragraph text="Phone" color="#fff" />
        <Paragraph text="Email" color="#fff" />
      </TextCard>
      <TextCard>
        <Paragraph text="ℹ Disclamer" color="#bbb" />
        <Paragraph text="Copyright &copy;" color="#fff" />
      </TextCard>
      <img className="footer__item" src="/images/logoIcon.png" alt="Footer Icon" />
    </footer>
  );
}