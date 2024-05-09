import CarList from "../components/CarList";
import CarMap from "../components/CarMap";
import Navbar from "../components/Navbar";
const HomePage = () => {
  return (
    <div className="wrapper">
      {/* <Navbar></Navbar> */}
      <div className="map-container">
        <CarList></CarList>
        <CarMap></CarMap>
      </div>
    </div>
  );
};

export default HomePage;
