import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  return (
    <div className="header-wrapper">
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        className="icon"
        onClick={() => props.handleMonthChange("previous")}
      />
      <h1>{props.monthName}</h1>
      <FontAwesomeIcon
        icon={faArrowAltCircleRight}
        className="icon"
        onClick={() => props.handleMonthChange("next")}
      />
    </div>
  );
}
