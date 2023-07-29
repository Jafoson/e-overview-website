import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Link.module.scss";
import { ThemeContext } from "../../../contexts/ThemeContext";

export interface IDropdown {
  path: string;
  name: string;
}

interface INavLink {
  path: string;
  name: string;
  icon: string;
  data?: Array<IDropdown>;
  style?: React.CSSProperties;
}

export default function Nav_Link({ path, name, icon, data, style }: INavLink) {
  const [isDropdown, setDropdown] = useState(false);
  const getThemeContext = useContext(ThemeContext);

  return (
    <div
      style={style}
      className={
        isDropdown
          ? `${styles.Nav_Link_wrapper_active} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
          : styles.Nav_Link_wrapper
      }
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          alignItems: "center",
        }}
      >
        <NavLink
          to={path}
          className={({ isActive, isPending }) =>
            isPending
              ? `${styles.Nav_Link} ${
                  getThemeContext.theme === "light" ? styles["light"] : ""
                }`
              : isActive
              ? `${styles.Nav_Link_active} ${
                  getThemeContext.theme === "light" ? styles["light"] : ""
                }`
              : `${styles.Nav_Link} ${
                  getThemeContext.theme === "light" ? styles["light"] : ""
                }`
          }
        >
          <Icon
            icon={icon}
            className={`${styles.nav_button} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`}
          />
          <h2>{name}</h2>
        </NavLink>
        {data && (
          <div
            className={
              isDropdown
                ? `${styles.dropdown_button_active} ${
                    getThemeContext.theme === "light" ? styles["light"] : ""
                  }`
                : `${styles.dropdown_button} ${
                    getThemeContext.theme === "light" ? styles["light"] : ""
                  }`
            }
            onClick={() => {
              // if (isDropdown == false) {
              //   let datas: IDropdown = { path: "/test", name: "test" };
              //   setdata(pre);
              // }
              setDropdown(!isDropdown);
              console.log(isDropdown);
            }}
          >
            <Icon
              className={styles.dropdown_menu}
              icon="iconamoon:arrow-right-2-light"
            />
          </div>
        )}
      </div>
      {isDropdown &&
        data?.map((element) => <DropDown_Link elementData={element} />)}
    </div>
  );
}

interface IDopdownLink {
  elementData: IDropdown;
}

function DropDown_Link({ elementData }: IDopdownLink) {
  const getThemeContext = useContext(ThemeContext);

  return (
    <NavLink
      to={elementData.path}
      className={({ isActive, isPending }) =>
        isPending
          ? `${styles.Nav_Link} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
          : isActive
          ? `${styles.Nav_Link_active} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
          : `${styles.Nav_Link} ${
              getThemeContext.theme === "light" ? styles["light"] : ""
            }`
      }
    >
      <div
        className={`${styles.nav_button} ${
          getThemeContext.theme === "light" ? styles["light"] : ""
        }`}
      ></div>
      <h2>{elementData.name}</h2>
    </NavLink>
  );
}
