import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Nav_Bar_searchbar() {
  return (
    <div id="searchbar">
      <div>
        <Icon className="search_icon" icon="material-symbols:search" />
        <input className="search_textfield" placeholder="Search..." />
      </div>
    </div>
  );
}
