import { useEffect, useState } from "react";
import Option from "./Option";

export default function Question(props) {
  const [radio, setRadio] = useState();

  const handleChange = (val) => {
    console.log("I'm changing");
    setRadio(val);
  };
  console.log("In Question ")

  console.log(props.formik.values);
  return (
    <>
      <div> Question: {props.question}</div>
      <ul>
        {props.answers.map((option, index) => {
          return (
            <Option
              index={props.index}
              formik={props.formik}
              option={option}
              handleChange={handleChange}
              isRadio={radio}
              questionNo={"question"+props.index}
            ></Option>
          );
        })}
      </ul>
    </>
  );
}
