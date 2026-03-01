import "../../styles/inputStyles/navLink.css";
import Link from "next/link";

export default function NavLink({ link, text, display }) {
  return (
    <Link style={{"--display": display}} className="nav__link" href={link}>{text}</Link>
  );
}