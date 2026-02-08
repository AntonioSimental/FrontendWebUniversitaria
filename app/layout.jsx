import { Montserrat } from "next/font/google";
import "../styles/rootLayout.css";
import NavLink from "@/components/inputs/navLink";
import BreadCrumb from "@/components/navbar/breadcrumb";
import NavBar from "@/components/navbar/navbar";


export const metadata = {
  visualViewport: "width=device-width, initial-scale=1.0",
  title: "Universidad patito",
  icons: {
    icon: "/favicon.png"
  }
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar>
          <NavLink link="#home" text="🏠Main" />
          <NavLink link="#about" text="📘About" />
          <NavLink link="#info" text="📋Information" />
          <NavLink link="/facultades" text="Next page →" />
          <BreadCrumb/>
        </NavBar>
        {children}
      </body>
    </html>
  );
}
