import Footer from "../../components/footer/Footer";
import ForumList from "../../components/forumList/ForumList";
import Header from "../../components/header/Header";

function Forum(){
    return(
        <>
            <html>
                <header><Header></Header></header>
                <body>
                    <ForumList></ForumList>
                    <footer><Footer></Footer></footer>
                </body>
            </html>
        </>
    );
}

export default Forum;