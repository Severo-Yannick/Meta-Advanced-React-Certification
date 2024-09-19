import { useState } from "react";
import usePrevious from "./Hooks/usePrevious"

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    switch(day) {
      case "Monday":
        return setDay("Tuesday");
      case "Tuesday":
        return setDay("Wednesday");
      case "Wednesday":
        return setDay("Thursday");
      case "Thursday":
        return setDay("Friday");
      case "Friday":
        return setDay("Monday");
      default:
        console.error("Invalid day");
    }
  };

  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
