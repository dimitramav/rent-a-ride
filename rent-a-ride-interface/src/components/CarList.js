import { useState } from "react";

import user from "../assets/user.svg";
const car = {
  id: 7,
  model: "Audi Q7",
  plateNo: "STU901",
  pictureUrl:
    "https://www.motortrend.com/uploads/sites/10/2020/11/2021-audi-a7-sportback-premium-plus-4wd-5door-hatchback-angular-front.png?fit=around%7C875:492",
  leaser: {
    id: 2,
    userName: "test2",
    password: "$2a$10$lW1Qj4Aw0ZOL2R6A1MCgDOye4UhdjNNgeGjCo0PDGevHsWQp9PNse",
    firstName: "Otho",
    lastName: "Plaunch",
    mobilePhone: "720394982",
    email: "oplaunch1@multiply.com",
    age: 30,
    comments: [],
    userRoles: ["ROLE_LEASER"],
  },
  fromDate: "2024-05-20",
  toDate: "2024-05-30",
  available: true,
};

const CarList = () => {
  let cars = Array(10).fill(car);
  const [active, setActive] = useState("");
  const [cardContent, setCardContent] = useState(undefined);
  let carsList = cars.map((car, index) => {
    return (
      <>
        <div
          id={index}
          key={index}
          className={
            "list-element " + (active === index.toString() ? "active" : "")
          }
          onClick={(e) => {
            setActive(e.target.id);
            setCardContent(car);
          }}
        >
          <span>{car.model + index}</span>
          <span>{car.plateNo}</span>
        </div>
      </>
    );
  });
  let cardElement = cardContent !== undefined && car !== undefined && (
    <div className="card-element">
      <img src={cardContent.pictureUrl}></img>
      <span>
        <img className="icon" src={user}></img>{" "}
        <label>
          <b>Owned by</b>
        </label>
        <a href="/">
          {car.leaser.userName} {car.leaser.lastName}
        </a>
      </span>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-3"></div>
          <div className="col-6 " align="center">
            <button className="btn btn-primary">Book now</button>
          </div>
          <div className="col-3">
            <button
              className="cancel-button"
              onClick={() => setCardContent(undefined)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="custom-list">
        <div className="list-element header">
          <span>Model</span>
          <span>Plate No</span>
        </div>
        {carsList}
      </div>
      {cardContent !== undefined && car !== undefined && cardElement}
    </>
  );
};
export default CarList;
