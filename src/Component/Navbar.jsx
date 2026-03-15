import React from "react";
import UpperNavbar from "./UpperNavbar";
import LowerNavbar from "./LowerNavbar";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div className="all-navbars">
      <UpperNavbar />
      <LowerNavbar />
    </div>
  );
}
