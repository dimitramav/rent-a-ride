import avatar from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";
const UserPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="panel">
        <div className="header">
          <img src={avatar}></img>
        </div>
        <div className="panel-element">Account</div>
        <div className="panel-element">
          Notifications
          <span className="badge  badge-light"> 3</span>
        </div>
        <div
          className="panel-element"
          onClick={() => {
            sessionStorage.clear();
            navigate("/login");
          }}
        >
          Log out
        </div>
      </div>
    </>
  );
};

export default UserPanel;
