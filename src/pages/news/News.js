import "./News.css"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function News(){
    return(
        <>
            <html>
                <header>
                    <Header></Header>
                </header>
                <body>
                    <h1><a href="News.xml">RSS</a></h1>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </body>
            </html>
        </>
    );
}

export default News;