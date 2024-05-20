import { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import Question from "./Question.js";
export default function Quiz(props) {
  console.log("In SubjectQuiz");
  console.log(props.data);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      "question":{}
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {props.data.map((question, index) => {
            console.log(question);
            return (
              <Question
                formik={formik}
                index={index}
                question={question.question}
                answers={question.answers}
              ></Question>
            );
          })}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
