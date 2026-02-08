import "../../styles/containersStyles/textContainer.css";

export default function TextCard({ children, theme, shadow }) {
  return (
    <div style={{"--theme": theme}} className={`text__container ${shadow ? "shadow": ""}`}>{children}</div>
  );
}