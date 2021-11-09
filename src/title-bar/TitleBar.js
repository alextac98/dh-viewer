import './titlebar.css'

function TitleBar() {
    return (
        <div className="titlebar">
            {Title("DH Viewer")}
        </div>
    );
}

function Title(title) {
    return (
        <div onClick={onTitleClick}>
            <text className="title">
                {title}
            </text>
        </div>
    );
}

function onTitleClick(){
    console.log("User clicked the title");
    // window.location.href ='https://alextac.com';
}

export default TitleBar;