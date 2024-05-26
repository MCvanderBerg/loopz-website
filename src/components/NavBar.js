import logo from "../assets/loopzLogoTemp.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

  const onNavigate = (location) => {
    navigate(location);
  };

  const handleClick = () => {
    logout();
  };

  if (!session) {
    return <></>;
  }

  return (
    <nav className="navBar">
      <img src={logo} alt="" className="logo" />
      <button onClick={() => onNavigate(Router.events)}>Events</button>
      <button onClick={() => onNavigate(Router.myEvents)}>MyEvents</button>
      <button onClick={() => onNavigate(Router.categories)}>Categories</button>
      <button onClick={() => onNavigate(Router.maps)}>Maps</button>
      {/* <p onClick={() => onClick(Router.Account)}>{user && user.email_address}</p> */}
      <div>
        <button onClick={handleClick} className="logout">Log out</button>
      </div>
    </nav>
  );
};

export default NavBar;
