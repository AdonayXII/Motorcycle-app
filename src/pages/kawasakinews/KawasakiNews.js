import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./KawasakiNews.css";

function KawasakiNews() {
    return (
        <>
            <html>
                <header><Header></Header></header>
                <body>
                    <div className="introduction-kawa">
                        <h1>Kawasaki Experience 2023</h1>
                        <p>El 1 de Abril, en el Kawasaki Xperience, tienes una cita en la que te sentirás piloto por un día, ya que podrás probar toda la gama 2023 de Kawasaki de carretera en un entorno inigualable: el Circuit de Barcelona-Catalunya.</p>
                    </div>
                    <div className="information-kawa">
                        <h2>Información</h2>
                        <h3>Habrán dos tipos de Test:</h3>
                        <ul>
                            <li>Test en circuito: Para los más deportivos de la gama</li>
                            <li>Test Combinado: (circuito + recorrido externo): Para los modelo más Touring de la gama</li>
                        </ul>
                        <h2>También habrán muchos más como:</h2>
                        <ul>
                            <li>Inicio a técnicas de Conducción, prueba ABS y KRTC de la mano de los monitores de la Escuela FAST Parcmotor.</li>
                            <li>Kawasaki Fun & Ride: 2 niveles de prueba para no iniciados y expertos con los monitores del Noyes Camp y la Z125 Pro.</li>
                            <li>Box KRT Tour: Descubre los secretos del Box Oficial del Kawasaki Racing Team con una visita guiada.</li>
                            <li>Paella party: Disfruta de una paella, acompañándola de tu bebida favorita en la zona Hospitality del KRT.</li>
                        </ul>
                        <div>
                            <h2>Inscripciones</h2>
                            <a href="https://www.kawasakixperience.es/">¡INSCRIBETE AQUÍ!</a>
                        </div>
                    </div>
                    <footer><Footer></Footer></footer>
                </body>
            </html>
        </>
    );
}

export default KawasakiNews;