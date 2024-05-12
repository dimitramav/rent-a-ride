import CarList from "../components/CarList";
import CarMap from "../components/CarMap";
import UserPanel from "../components/UserPanel";
import logo from "../full-logo.png";
import CarCalendar from "../components/CarCalendar";
const HomePage = () => {
  return (
    <div className="wrapper">
      <a href="/">
        <img id="logo" src={logo} width="100" height="100" alt="" />
      </a>

      {/* <Navbar></Navbar> */}
      <CarCalendar></CarCalendar>
      <CarList></CarList>
      <CarMap></CarMap>
      <UserPanel></UserPanel>
    </div>
  );
};

export default HomePage;
