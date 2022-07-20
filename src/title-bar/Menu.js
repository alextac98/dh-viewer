import './titlebar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { DarkMode } from "@mui/icons-material";
// import { Link } from "@mui/material";
// import { Button } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import gh_icon_dark from "./gh-icons/gh-icon-dark.png";
import gh_icon_light from "./gh-icons/gh-icon-light.png";


export function Menu(){
    return (
        <Nav>
            <MenuItem name="About Us" href="#aboutUs"/>
            {/* <MenuItem name="Resources" />
            <MenuItem name="Dark Mode"/> */}
            {/* {GHIconLink()} */}
        </Nav>
    );
}

function GHIconLink(isDarkMode = true){
    let img;
    if (isDarkMode) {
        img = gh_icon_dark;
    } else {
        img = gh_icon_light;
    }

    return(
        <Navbar.Text className="GHIconLink" onClick={onGHLogoClick}>
            <img 
                style={{width:"100%"}}
                src={img} 
                alt="Visit my GitHub Project!"
            />
        </Navbar.Text>
    );
}

function onGHLogoClick(){
    window.location.href = "https://github.com/alextac98/dh-viewer";
}

function MenuItem(props){
    return(
        <NavLink as={Link} to={props.href} className="m-1" >
            {props.name}
        </NavLink>
    );
}

export default Menu;