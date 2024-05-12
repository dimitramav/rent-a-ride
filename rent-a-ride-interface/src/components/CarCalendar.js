import { DateRange } from "react-date-range";
import { useEffect, useState, useContext } from "react";
import Context from "../Context";
const CarCalendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const { setStartDate, setEndDate } = useContext(Context);

  const convertToYYYYMMDD = (dateString) => {
    const previousDay = new Date(dateString);
    previousDay.setDate(previousDay.getDate() + 1);
    const dateFormatted = previousDay.toISOString().split("T")[0];
    return dateFormatted;
  };
  useEffect(() => {
    if (state[0].startDate && state[0].endDate) {
      setStartDate(convertToYYYYMMDD(state[0].startDate));
      setEndDate(convertToYYYYMMDD(state[0].endDate));
    }
  });
  return (
    <DateRange
      staticRanges={[]}
      inputRanges={[]}
      className="calendar"
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      rangeColors={["#9bdbdd"]}
    />
  );
};
export default CarCalendar;
