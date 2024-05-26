import "./NavBar.css";
import logo from "../assets/loopzLogoTemp.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Router } from "../types/Types";
import { useAuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

const NavBar = () => {
  const navigate = useNavigate();
  const { session } = useAuthContext() || {};

  let user = null;
  if (session) {
    user = session.user;
  }

  const { logout } = useLogout();

  const onClick = (location) => {
    navigate(location);
  };

  const handleClick = () => {
    logout();
  };

  const { pathname } = useLocation();
  const noNavBarRequired = [Router.Login, Router.Signup];

  if (noNavBarRequired.includes(pathname)) {
    return <></>;
  }

  return (
    <nav className="navBar">
      <img src={logo} alt="" className="logo" />
      <p onClick={() => onClick(Router.Events)}>Events</p>
      <p onClick={() => onClick(Router.MyEvents)}>MyEvents</p>
      <p onClick={() => onClick(Router.Categories)}>Categories</p>
      <p onClick={() => onClick(Router.Maps)}>Maps</p>
      {/* <p onClick={() => onClick(Router.Account)}>{user && user.email_address}</p> */}
      <div>
        <button onClick={handleClick}>Log out</button>
      </div>
    </nav>
  );
};

export default NavBar;
