import SectionContainer from "@/components/containers/sectionContainer";
import Subtitle from "@/components/texts/subtitle";
import Paragraph from "@/components/texts/paragraph";

export default function NotFoundPage() {
  return (
    <SectionContainer theme="#f5f5f5">
      <Subtitle text="404 Error" color="#f00" />
      <Paragraph
        text="Invalid route please try with another route"
        color="#f00"
      />
    </SectionContainer>
  );
}
