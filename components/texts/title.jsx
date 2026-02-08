import "../../styles/texts.css";

export default function Title({ text, color }) {
  return <h1 style={{"--color": color}} className="title">{text}</h1>
}