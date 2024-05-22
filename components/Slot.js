import LogoImg from "../components/assets/quiz-logo.png";

export default function Slot(props) {
  const getSize = () => {
    return "col-span-" + props.size;
  };

  const handleChange = (event) => {
    props.setConsolidatedSlots((prevSlots) => {
      const newSlots = [...prevSlots];
      newSlots[props.unique].isDone = true;
      return newSlots;
    });
    props.formik.handleChange(event);
  };
  return (
    <div className={getSize()}>
      <div className="w-100 h-24 border border-red-800 ">{props.action}</div>
      {props.isDone ? (
        <></>
      ) : (
        <button
          className=" border border-red-800 "
          id={props.unique}
          value={JSON.stringify({...props.data, isDone:true})}
          onClick={handleChange}
        >
          MarkDone
        </button>
      )}
    </div>
  );
}
