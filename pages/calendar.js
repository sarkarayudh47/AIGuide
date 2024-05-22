import { useState } from "react";
import CalendarComp from "@/components/CalendarComp";

export default function Calendar() {
  const [subject, setSubject] = useState("");

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  return (
    <div>
      <CalendarComp></CalendarComp>
    </div>
  );
}
