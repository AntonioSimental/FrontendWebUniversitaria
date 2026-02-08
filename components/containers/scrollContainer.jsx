import "../../styles/containersStyles/scrollContainer.css";

export default function ScrollContainer({ children, theme }) {
  return (
    <div style={{"--theme":theme}} className="scroll__container">{children}</div>
  );
}