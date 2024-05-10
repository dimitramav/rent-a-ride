import CarList from "../components/CarList";
import CarMap from "../components/CarMap";
import UserPanel from "../components/UserPanel";
import logo from "../full-logo.png";
const HomePage = () => {
  return (
    <div className="wrapper">
      <a href="/">
        <img id="logo" src={logo} width="150" height="150" alt="" />
      </a>

      {/* <Navbar></Navbar> */}
      <CarList></CarList>
      <CarMap></CarMap>
      <UserPanel></UserPanel>
    </div>
  );
};

export default HomePage;
