import avatar from "../assets/avatar.svg";
const UserPanel = () => {
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
        <div className="panel-element">Log out</div>
      </div>
    </>
  );
};

export default UserPanel;
