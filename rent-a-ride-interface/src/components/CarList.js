import { useState, useContext, useEffect } from "react";
import axios from "axios";
import user from "../assets/user.svg";
import Context from "../Context";
import { ip } from "../config";
const CarList = () => {
  const [active, setActive] = useState("");
  const [cardContent, setCardContent] = useState(undefined);
  const { startDate, endDate, cars, setCars } = useContext(Context);
  useEffect(() => {
    var token = JSON.parse(sessionStorage.token);
    if (token) {
      axios({
        // Endpoint to send files
        url: `${ip}/car/all`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        // Attaching the form data
      })
        // Handle the response from backend here
        .then((res) => {
          if (res.data) {
            setCars(res.data);
          }
        })

        // Catch errors if any
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      var token = JSON.parse(sessionStorage.token);
      if (token) {
        axios({
          // Endpoint to send files
          url: `${ip}/car/available/${startDate}/${endDate}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          // Attaching the form data
        })
          // Handle the response from backend here
          .then((res) => {
            if (res.data) {
              setCars(res.data);
            }
          })

          // Catch errors if any
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [startDate, endDate]);

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
  let cardElement = cardContent !== undefined && (
    <div className="card-element">
      <img src={cardContent.pictureUrl}></img>
      <span>
        <img className="icon" src={user}></img>{" "}
        <label>
          <b>Owned by</b>
        </label>
        <a href="/">
          {cardContent.leaser.userName} {cardContent.leaser.lastName}
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
      {cardContent !== undefined && cardElement}
    </>
  );
};
export default CarList;
