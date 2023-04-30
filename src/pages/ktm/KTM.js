import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import KTMList from "../../components/ktmList/KTMList";
import "./KTM.css";

function KTM() {
    return (
        <>
            <Header></Header>
            <h1>KTM</h1>
            <KTMList></KTMList>
            <Footer></Footer>
        </>
    );
}

export default KTM;