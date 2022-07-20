import './titlebar.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Menu } from './Menu.js';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AboutUs } from '../about-us/AboutUs.js'

function TitleBar() {
    return (
        <Router>
            <div>
                <Navbar bg="light" >
                    <Title title="DH Viewer" href="#home"/>
                    <Menu/>
                </Navbar>
            </div>
            <Routes>
                {/* <Route path="/" element={<Dashboard />}>
                    <Route
                    path="messages"
                    element={<DashboardMessages />}
                    />
                    <Route path="tasks" element={<DashboardTasks />} />
                </Route> */}
                <Route path="aboutUs" element={<AboutUs />} />
                </Routes>
        </Router>
        // <div className="titlebar">
        //     <Title title="DH Viewer"/>
        //     {Menu()}
        // </div>
    );
}

function Title(props) {
    return (
        <Navbar.Brand href={props.href} className="h1">
            {props.title}
        </Navbar.Brand>
    );
}



function onTitleClick(){
    console.log("User clicked the title");
}

export default TitleBar;