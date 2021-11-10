import './titlebar.css';
import { Menu } from './Menu.js';

function TitleBar() {
    return (
        <div className="titlebar">
            {Title("DH Viewer")}
            {Menu()}
        </div>
    );
}

function Title(title) {
    return (
        <div onClick={onTitleClick} style={{float: "left"}}>
            <p className="title">
                {title}
            </p>
        </div>
    );
}

function onTitleClick(){
    console.log("User clicked the title");
    // window.location.href ='https://alextac.com';
}

export default TitleBar;