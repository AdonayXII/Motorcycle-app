import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import KTMList from "../../components/ktmList/KTMList";
import "./KTM.css";

function KTM() {
    return (
        <>
            <html>
                <header>
                    <Header></Header>
                </header>
                <body>
                    <h1>KTM</h1>
                    <KTMList></KTMList>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </body>
            </html>
        </>
    );
}

export default KTM;