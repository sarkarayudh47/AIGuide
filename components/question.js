import { useEffect, useState } from "react";
import Option from "./Option";

export default function Question(props) {
  console.log("In Question ");
  console.log(props.formik.values);
  return (
    <>
      <div class="border border-red-900 p-2 my-1">
        <div> Question: {props.question}</div>
        <div class="border border-white p-2">
          <ul>
            {props.answers.map((option, index) => {
              return (
                <Option
                  formik={props.formik}
                  option={option}
                  questionNo={"question" + props.index}
                ></Option>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
