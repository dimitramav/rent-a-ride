import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import App from "./App";
import Context from "./Context";
const Root = () => {
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [cars, setCars] = useState([]);

  return (
    // 2. Wrap the components with Context Provider
    <Context.Provider
      value={{ startDate, setStartDate, endDate, setEndDate, cars, setCars }}
    >
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>{" "}
      </React.StrictMode>
    </Context.Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
