import "./NavBar.css"
import logo from "../assets/loopzLogoTemp.png"
import {Link, Outlet, useNavigate} from "react-router-dom";
import { Router } from "../types/Types";

const NavBar = () => {
    const navigate = useNavigate()

    const onClick = (location) => {

        navigate(location)
    }
    return (
        <>
            <nav className="navBar">
                <img src={logo} alt="" className="logo"/>
                <p onClick={() => onClick(Router.Events)}>Events</p>
                <p onClick={() => onClick(Router.MyEvents)}>MyEvents</p>
                <p onClick={() => onClick(Router.Categories)}>Categories</p>
                <p onClick={() => onClick(Router.Maps)}>Maps</p>
                <p onClick={() => onClick(Router.Account)}>Account</p>
                <img src={logo} alt="" className="logo"/>
            </nav>
            <Outlet/>
        </>
    )
};

export default NavBar;