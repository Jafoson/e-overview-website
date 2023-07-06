import { Icon } from "@iconify/react/dist/iconify.js";
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export interface IDropdown {
  path: string;
  name: string;
}

interface INavLink {
  path: string;
  name: string;
  icon: string;
  data?: Array<IDropdown>;
}

export default function Nav_Link({ path, name, icon, data }: INavLink) {
  const [isDropdown, setDropdown] = useState(false);

  return (
    <div
      className={isDropdown ? "Nav_Link_wrapper_active" : "Nav_Link_wrapper"}
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
            isPending ? "Nav_Link" : isActive ? "Nav_Link_active" : "Nav_Link"
          }
        >
          <Icon icon={icon} className="nav_button" />
          <h2>{name}</h2>
        </NavLink>
        {data && (
          <div
            className={
              isDropdown ? "dropdown_button_active" : "dropdown_button"
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
              className="dropdown_menu"
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
  return (
    <NavLink
      to={elementData.path}
      className={({ isActive, isPending }) =>
        isPending ? "Nav_Link" : isActive ? "Nav_Link_active" : "Nav_Link"
      }
    >
      <div className="nav_button"></div>
      <h2>{elementData.name}</h2>
    </NavLink>
  );
}
