import "../../styles/inputStyles/linkButton.css";
import Link from "next/link";

export default function LinkButton({ link, children }) {
  return (
    <Link className="link__button" href={link || "#"}>{children}</Link>
  );
}