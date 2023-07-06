import React, { useEffect, useState } from "react";
import "./Nav-Bar.scss";
import { Outlet } from "react-router-dom";
import Nav_Bar_top_content from "./Nav_Bar_buttom_container/Nav-Bar_top_content.tsx";
import Nav_Bar_searchbar from "./Nav_Bar_buttom_container/Nav_Bar_searchbar.tsx";
import Nav_Bar_GroupBox from "./Nav_Bar_buttom_container/Nav_Bar_GroupBox.tsx";
import Nav_Link from "./Nav_Bar_buttom_container/Nav_Link.tsx";
import Nav_Bar_profil from "./Nav_Bar_buttom_container/Nav_Bar_profil.tsx";
import Nav_Bar_Authentication from "./Nav_Bar_buttom_container/Nav_Bar_authentication.tsx";
import ScreenWidthDetector from "../../helper/ScreenWidthDetector.tsx";

export default function Nav_Bar() {
  return (
    <div className="content">
      <Big_Nav_Bar />
      <div style={{ color: "black" }}>
        <ScreenWidthDetector />
      </div>
      <Outlet />
    </div>
  );
}

export function Big_Nav_Bar() {
  return (
    <div className="Nav-Bar_container">
      <Nav_Bar_top_content />
      <Nav_Bar_searchbar />
      <Nav_Bar_GroupBox />
      <Nav_Link
        path="/settings"
        icon="fluent:settings-24-regular"
        name="Settings"
        data={[
          { path: "/settings/account", name: "Your Account" },
          {
            path: "settings/security_and_account_access",
            name: "Security and Account access",
          },
        ]}
      />
      {/* <Nav_Bar_profil /> */}
      <Nav_Bar_Authentication />
    </div>
  );
}
