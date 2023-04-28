import "./Header.css"

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="logo-app.svg"></img>
                </div>
                <div className="text">
                    <p>FIND UR DREAM</p>
                </div>
                <div className="menu">
                    <p>menu</p>
                </div>
            </div>
        </>
    );
}

export default Header;