import "../../styles/inputStyles/navLink.css";
import Link from "next/link";

export default function NavLink({ link, text }) {
  return (
    <Link className="nav__link" href={link}>{text}</Link>
  );
}