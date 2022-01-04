import React from "react";

import CalendarBox from "./calendarBox";
import DayOfWeek from "./dayOfWeek";

export default function calendarWrapper(props) {
  const renderCalendarBoxes = () => {
    const calendarBoxesArray = [];

    for (let i = 1; i <= props.month.start_day; i++) {
      const date =
        props.month.days_in_previous_month - props.month.start_day + i;
      calendarBoxesArray.push(
        <CalendarBox key={`P-${i}`} date={date} overflow />
      );
    }

    for (let i = 1; i <= props.month.days_in_month; i++) {
      calendarBoxesArray.push(
        <CalendarBox
          key={`${props.month.id}-${i}`}
          date={i}
          month={props.month}
        />
      );
    }

    for (
      let i = 1;
      i <= 42 - props.month.days_in_month - props.month.start_day;
      i++
    ) {
      calendarBoxesArray.push(<CalendarBox key={`N-${i}`} date={i} overflow />);
    }

    return calendarBoxesArray;
  };

  return (
    <div className="calendar-wrapper">
      <DayOfWeek day="Sunday" />
      <DayOfWeek day="Monday" />
      <DayOfWeek day="Tuesday" />
      <DayOfWeek day="Wednesday" />
      <DayOfWeek day="Thursday" />
      <DayOfWeek day="Friday" />
      <DayOfWeek day="Saturday" />
      {renderCalendarBoxes()}
    </div>
  );
}
