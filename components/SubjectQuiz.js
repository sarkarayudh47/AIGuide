import { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import Question from "./Question.js";
export default function Quiz(props) {
  console.log("In SubjectQuiz");
  console.log(props.data);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    onSubmit: (values) => {
      handlePostCall(checkAnswers(values));
    },
  });

  const handlePostCall = async (correct) => {
    try {
      const response = await fetch("http://localhost:8080/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correct: correct, total: props.data.length }),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Optionally display a success message to the user
      } else {
        console.error("Failed to submit form:", response.statusText);
        // Optionally display an error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally display an error message to the user
    }
  };

  const checkAnswers = (values) => {
    let correct = 0;
    console.log("inside checkAnswers:", values);
    props.data.map((question, index) => {
      console.log("Your Answer is : ", values["question" + index].answer);
      console.log("Correct Answer is : ", question.correctAns);
      if (question.correctAns === values["question" + index].answer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div class="border-8 p-5 border-yellow-900">
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
