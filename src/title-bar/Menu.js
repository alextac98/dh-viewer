import gh_icon_dark from "./gh-icons/gh-icon-dark.png";
import gh_icon_light from "./gh-icons/gh-icon-light.png";
import './titlebar.css'

export function Menu(){
    return (
        <div className="menu">
            {GHIconLink()}
        </div>
    );
}

function GHIconLink(isDarkMode = false){
    let img;
    if (isDarkMode) {
        img = gh_icon_dark;
    } else {
        img = gh_icon_light;
    }

    return(
        <div className="GHIconLink" onClick={onGHLogoClick}>
            <img 
                style={{width:"100%"}}
                src={img} 
                alt="Visit my GitHub Project!"
            />
        </div>
    );
}

function onGHLogoClick(){
    window.location.href = "https://github.com/alextac98/dh-viewer";
}