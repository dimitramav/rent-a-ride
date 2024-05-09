import logo from "../full-logo.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-dark  bg-dark justify-content-between p-4">
      <a class="navbar-brand" href="/">
        <img
          src={logo}
          width="100"
          height="100"
          class="d-inline-block align-top"
          alt=""
        />
        <h3>Rent A Ride</h3>
      </a>
      <a class="navbar-brand" href="#">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          alt=""
        />
      </a>
    </nav>
  );
};

export default Navbar;
