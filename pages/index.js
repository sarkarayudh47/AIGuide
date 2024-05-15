import { useState } from "react";
import Question from "@/components/question";
import data from "@/components/data/data.json";

export default function Index() {
  const [subject, setSubject] = useState("");

  const handleChangeSubject = (event) => {
    setSubject(event.target.value)
  };
  return (
    <div>
      <select name="Questions" id="questions" onChange={handleChangeSubject}>
        <option value="English">English</option>
        <option value="Math">Math</option>
        <option value="Science">Science</option>
        <option value="Geog">Geog</option>
      </select>
      {data.map((question) => {
        if (question.subject == subject)
          return (
            <Question
              questionNo={question.questionNo}
              question={question.question}
              op1={question.op1}
              op2={question.op2}
              op3={question.op3}
              op4={question.op4}
            ></Question>
          );
      })}
    </div>
  );
}
