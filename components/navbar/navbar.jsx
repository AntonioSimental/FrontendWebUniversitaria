import "../../styles/navbar.css";

export default function NavBar({ children }) {
  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img className="nav__icon" src="/images/logoIcon.png" alt="" />
      </div>
      <div className="navbar">{children}</div>
    </nav>
  );
}
