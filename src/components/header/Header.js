import "./Header.css"

function Header() {
    return (
        <>
            <div className="topHeader">
                <div className="logo">
                    <img src="logo-app.svg" width={100} height={90}></img>
                </div>
                <div className="text">
                    <a href="/home">FIND YOUR DREAM</a>
                </div>
            </div>
            <div className="bottomHeader">
                <a href="/kawasaki">Kawasaki</a>
                <a href="/honda">Honda</a>
                <a href="/ktm">KTM</a>
            </div>
        </>
    );
}

export default Header;