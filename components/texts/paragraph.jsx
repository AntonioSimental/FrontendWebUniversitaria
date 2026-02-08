import "../../styles/texts.css";

export default function Paragraph({ text, color, align }) {
  return <p style={{"--color": color, "--align":align}} className="paragraph">{text}</p>
}