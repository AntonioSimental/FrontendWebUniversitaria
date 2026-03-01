import { Montserrat } from "next/font/google";
import "../styles/rootLayout.css";
import NavSection from "@/components/sections/navSection";

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
        <NavSection />
        {children}
      </body>
    </html>
  );
}
