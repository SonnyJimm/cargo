/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
// import {Link} from "react-router-dom";
// import {OverlayTrigger, Tooltip} from "react-bootstrap";
import { MyCartDropdown } from "./dropdowns/MyCartDropdown";
export function StickyToolbar() {
  return (
    <>
      <ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
          <MyCartDropdown/>
      </ul>
    </>
  );
}
