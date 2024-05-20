export default function Question(props) {

  return (
    <div class="border border-black p-2">
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
