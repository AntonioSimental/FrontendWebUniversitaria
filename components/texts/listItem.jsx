import "../../styles/texts.css";

export default function ListItem({ text, color }) {
  return <li style={{"--color":color}} className="list__item">{text}</li>
}