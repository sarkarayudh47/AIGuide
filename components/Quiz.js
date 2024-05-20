import { useState, useEffect } from "react";
import Question from "./Question.js";
import data from "./data/data.json";
import subjectList from "./data/subjectList.json";
import SubjectQuiz from "./SubjectQuiz.js";
export default function Quiz() {
  useEffect(() => {
    data.sort(() => Math.random() - 0.5);
    data.map((question)=>{
      question.answers.sort(() => Math.random() - 0.5);
    })
  }, []);
  const [subject, setSubject] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [rerender, setRerender] = useState(false);
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
    setRerender(false);
  };
  const handleRender = () => {
    if (subject !== "" && numberOfQuestions >= 0) setRerender(true);
  };
  const handleChangeNumber = (event) => {
    setNumberOfQuestions(event.target.value);
    setRerender(false);
  };

  return (
    <div>
      <div>
        <label htmlFor="questions">Please Give Subject</label>
        <select name="Questions" id="questions" onChange={handleChangeSubject}>
          <option value="">Select a subject</option>
          {subjectList.map((subjectItem) => {
            return (
              <option key={subjectItem.key} value={subjectItem.subject}>
                {subjectItem.subject}
              </option>
            );
          })}
        </select>
        <div>Subject Currently selected is {subject}</div>
        <div>Select number of questions: </div>
        <input
          type="number"
          onChange={handleChangeNumber}
          value={numberOfQuestions}
        ></input>
        {(subject !== "" && numberOfQuestions > 0) ? (
          <button onClick={handleRender}>Click me to render question</button>
        ) : (
          <></>
        )}
      </div>
      {rerender ? (
        <SubjectQuiz
          data={data
            .filter((question) => {
              return question.subject === subject;
            })
            .splice(0, numberOfQuestions)}
        ></SubjectQuiz>
      ) : (
        <></>
      )}
    </div>
  );
}
