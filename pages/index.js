import { useState } from "react";
import Question from "@/components/Question";
import data from "@/components/data/data.json";
import Header from "@/components/Header";
import Quiz from "@/components/Quiz";

export default function Index() {
  const [subject, setSubject] = useState("");

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  return (
    <div>
      <Header />
      <main>
        <Quiz />
      </main>
    </div>
  );
}
