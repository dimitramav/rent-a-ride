import logo from "../full-logo.png";
const CarList = () => {
  return (
    <div className="sidebar">
      <div className="brand">
        <img
          src={logo}
          width="200"
          height="200"
          class="d-inline-block align-top"
          alt=""
        />
      </div>
    </div>
  );
};
export default CarList;
