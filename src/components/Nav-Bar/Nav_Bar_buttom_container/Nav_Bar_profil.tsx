import React from "react";
import "./Nav_Bar_profil.scss";

export default function Nav_Bar_profil() {
  return (
    <div className="Nav_Bar_profil_container">
      <img
        src="https://cdn.discordapp.com/attachments/1098012388218900592/1117621872788516914/d29f4527-27b3-4a31-b0c4-e1666cf47fd9.jpg"
        className="Nav_Bar_profil_pictures"
      />
      <div className="Nav_Bar_profil_data">
        <a className="Nav_Bar_username">Max Mustermann</a>
        <a className="Nav_Bar_nickname">@testman</a>
      </div>
    </div>
  );
}