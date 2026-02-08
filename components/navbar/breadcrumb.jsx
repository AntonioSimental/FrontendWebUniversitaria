"use client"

import { usePathname } from "next/navigation";
import "../../styles/breadcrumb.css"

export default function BreadCrumb() {
  const pathSegments = usePathname().split("/").filter(Boolean);
  return (
    <div className="nav__breadcrumb">
      <p>inicio</p>
      {pathSegments.map((segments, index) => {
        return <p key={index}>&nbsp; &gt; {segments}</p>
      })}
    </div>
  );
}