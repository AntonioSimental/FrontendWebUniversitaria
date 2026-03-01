import NavBar from "@/components/navbar/navbar";
import NavLink from "@/components/inputs/navLink";
import BreadCrumb from "@/components/navbar/breadcrumb";
import "../../styles/rootLayout.css";

export default function RootLayoutFacultades({ children }) {
  return (
      <div>
        <NavBar>
          <NavLink display="block" link="/" text="🏠Back to Home" />
          <BreadCrumb />
        </NavBar>
        {children}
      </div>
  );
}