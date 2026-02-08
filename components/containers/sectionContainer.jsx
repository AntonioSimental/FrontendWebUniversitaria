import "../../styles/containersStyles/sectionContainer.css";

export default function SectionContainer ({ children, theme, direction }) {
  return (
    <div style={{"--theme":theme, "--direction":direction}} className="section__container">
      {children}
    </div>
  );
}