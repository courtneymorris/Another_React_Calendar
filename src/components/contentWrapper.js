import React from "react";

import CalendarWrapper from "./calendarWrapper";

export default function contentWrapper(props) {
  return (
    <div className="content-wrapper">
      <CalendarWrapper month={props.month} />
    </div>
  );
}
