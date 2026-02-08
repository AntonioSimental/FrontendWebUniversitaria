import "../../styles/texts.css";

export default function Subtitle({ text, color }) {
  return <h2 style={{"--color": color}} className="subtitle">{text}</h2>
}