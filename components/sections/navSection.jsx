"use client";

import { usePathname } from "next/navigation";
import NavLink from "@/components/inputs/navLink";
import BreadCrumb from "@/components/navbar/breadcrumb";
import NavBar from "@/components/navbar/navbar";
import { useState } from "react";

export default function NavSection() {
  const pathname = usePathname();
  const hideFooter = pathname.startsWith("/facultades");
  const [state, setState] = useState(false);
  return (
    <NavBar>
      {hideFooter ? (
        <></>
      ) : (
        <>
          <button onClick={() => setState(!state)} className="burger__button">
            | | |
          </button>
          <NavLink display={state ? "block" : ""} link="#home" text="🏠Main" />
          <NavLink
            display={state ? "block" : ""}
            link="#about"
            text="📘About"
          />
          <NavLink
            display={state ? "block" : ""}
            link="#info"
            text="📋Information"
          />
          <NavLink
            display={state ? "block" : ""}
            link="/facultades"
            text="Next page →"
          />
          <BreadCrumb />
        </>
      )}
    </NavBar>
  );
}
