import React, { useState } from "react";
import Nav_Link from "./Link";
import { IDropdown } from "./Link";
import styles from "./GroupBox.module.scss";

export default function Nav_Bar_GroupBox() {
  return (
    <div className={styles.nav_bar_groupbox}>
      <Nav_Link path="/home" name="Home" icon="material-symbols:home-outline" />
      <Nav_Link path="/games" name="Games" icon="ion:game-controller-outline" />
      <Nav_Link
        path="/matches"
        name="Matches"
        icon="ri:sword-line"
        data={[{ path: "dashboard/matches", name: "Manage Matches" }]}
      />
      <Nav_Link
        path="/teams"
        name="Teams"
        icon="fluent:people-team-24-regular"
        data={[{ path: "dashboard/teams", name: "Manage Teams" }]}
      />
      <Nav_Link
        path="/events"
        name="Events"
        icon="ic:outline-calendar-month"
        data={[{ path: "dashboard/events", name: "Manage Events" }]}
      />
    </div>
  );
}
