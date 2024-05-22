import { useEffect, useState } from "react";
import LogoImg from "../components/assets/quiz-logo.png";
import Slot from "./Slot";
import SlotsData from "./data/SlotsData.json";
import { Formik, useFormik } from "formik";

export default function CalendarComp() {
  const [isReady, setIsReady] = useState(false);
  const [consolidatedSlots, setConsolidatedSlots] = useState();
  useEffect(() => {
    SlotsData.push({
      slotNo: -1,
      start: -1,
      end: SlotsData.length + 1,
      action: "EOF",
      isDone: false,
    });
	setIsReady(true)
    setConsolidatedSlots(consolidateSlots());
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {},
    onSubmit: (values) => {
		// need to un-consolidate slots and restructure data for backend
      console.log(values);
    },
  });
  const consolidateSlots = () => {
    let prev = SlotsData[0].action;
    let count = 1;
    let curr_start = 0;
    let unique = 0;
    const consolidatedSlots = [];
    SlotsData.map((slot) => {
      if (slot.action !== prev) {
        const con_slot = {
          start: curr_start,
          end: slot.end - 1,
          action: prev,
          isDone: false,
          slotNo: unique++,
        };
        consolidatedSlots.push(con_slot);
        curr_start = slot.start;
        prev = slot.action;
      }
    });
    return consolidatedSlots;
  };

  return (
    <div>
      <div> This is calendarComp</div>
      {isReady ? (
        <div className="grid grid-cols-12 gap-4 border border-black-200 p-5">
          {consolidatedSlots.map((slot) => {
            slot.length = slot.end - slot.start;
            return (
              <Slot
                unique={slot.slotNo}
                action={slot.action}
				data={slot}
                size={slot.length}
				isDone={slot.isDone}
                formik={formik}
				consolidatedSlots={consolidatedSlots}
				setConsolidatedSlots={setConsolidatedSlots}
              ></Slot>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      <button type="submit" onClick={formik.handleSubmit}>Submit</button>
    </div>
  );
}
