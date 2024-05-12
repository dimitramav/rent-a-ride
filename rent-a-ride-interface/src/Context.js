import { createContext } from "react";

const Context = createContext({
  startDate: {},
  setStartDate: () => {},
  endDate: {},
  setEndDate: () => {},
  cars: {},
  setCars: () => {},
});
export default Context;
