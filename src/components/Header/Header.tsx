import { Popup } from "semantic-ui-react";
import Avatar from "../../assets/SVGs/Avatar.png";
import { ReactComponent as Logo } from "../../assets/SVGs/DataDig.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header flex flex-justify-between height-8 width-100">
      <div className="site-logo flex flex-align-center">
        <Logo className="margin-l-6 width-40 padding-b-1" onClick={() => navigate("/dashboard")} />
      </div>
      <div className="avatar flex flex-align-center flex-justify-end">
        <Popup
          className="popup"
          trigger={<img className="" src={Avatar} alt="" />}
          on="click"
        //   content={
        //     // <ul className="popup-content">
        //     //   <li onClick={handleLogout}>Logout</li>
        //     // </ul>
        //   }
          position="bottom center"
        />
      </div>
    </div>
  );
}

export default Header;
