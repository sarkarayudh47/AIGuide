export default function Question(props) {
  const onChange = () => {
    props.formik.handleChange;
    props.handleChange(props.questionNo + ".answer");
  };

  console.log("Inside option");
  console.log(props.formik?.values[props.questionNo]);
  return (
    <div>
      <li>
        <input
          type="radio"
          id={props.questionNo + ".answer"}
          value={props.option}
          onChange={props.formik.handleChange}
          checked={
            props.formik?.values[props.questionNo]?.answer === props.option
          }
        ></input>
        <label htmlFor="num1">{props.option}</label>
      </li>
    </div>
  );
}
