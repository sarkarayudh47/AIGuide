import { useState } from "react";

export default function Question(props) {
  return (
    <>
      <div>{props.questionNo}. Question: {props.question}</div>
      <div>1. {props.op1}</div>
      <div>2. {props.op2}</div>
      <div>3. {props.op3}</div>
      <div>4. {props.op4}</div>
    </>
  );
}
