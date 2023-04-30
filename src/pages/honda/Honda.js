import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HondaList from "../../components/hondaList/HondaList";
import "./Honda.css";

function Honda() {
    return (
        <>
            <Header></Header>
            <h1>HONDA</h1>
            <HondaList></HondaList>
            <Footer></Footer>
        </>
    );
}

export default Honda;