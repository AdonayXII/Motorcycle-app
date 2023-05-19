import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./KtmNews.css";

function KtmNews() {
    return (
        <>
            <html>
                <header><Header></Header></header>
                <body>
                    <div className="introduction-ktm">
                        <h1>KTM 890 SMT 2023: Supermoto Tourer</h1>
                        <p>El regreso de la saga SMT a la gama de la firma austriaca es un hecho. Vuelve uno de los modelos más míticos totalmente mejorado</p>
                    </div>
                    <div className="information-ktm">
                        <h2>Versatilidad ergonómica</h2>
                        <p> El manillar es graduable hasta en seis posiciones diferentes (en un rango de 30 mm) y el depósito, de 15,8 litros, posee una forma estilizada y específica para desempeñar un papel importante en la comodidad del piloto. La forma del depósito desplaza al piloto aún más "dentro" de la moto, con una zona de contacto amplia y cómoda, pero lo suficientemente compacta como para que pueda moverse con libertad. Al mismo tiempo, el asiento de una sola pieza estilo Supermoto y la cúpula ahumada optimizada aerodinámicamente completan el diseño, junto con el concepto de guardabarros doble con un protector antisalpicaduras bajo anclado a las botellas de la horquilla.</p>
                        <p>A nivel de bastidor cuenta con una estructura de acero al cromo-molibdeno con una geometría más cerrada. Esto hace que sea ligera y ágil en movimiento, pero también garantiza una tremenda estabilidad a altas velocidades. Además, su amortiguador está más inclinado para reducir la altura del asiento y acomodar un basculante más largo, lo que contribuye a una posición de conducción inclinada hacia delante, así como a una mayor estabilidad en línea recta.</p>
                        <img src="890_SMT.png" width={370}></img>
                        <h2>Conducción inmejorable</h2>
                        <p>La sensación que produce es de una moto exepcional: ágil, rápida, sensible y potente. La moto cuenta con suspensiones WP APEX totalmente ajustables (horquilla invertida de cartucho abierto de 43 mm con 180 mm de recorrido, al igual que el amortiguador) y unos neumáticos Michelin PowerGP especialmente seleccionados por sus especificaciones altamente deportivas.</p>
                        <p>La instrumentación TFT de 5" de última generación, con conectividad y acceso a las posibilidades de navegación a través de la App KTMconnect, es totalmente personalizable y presenta una interfaz y menús muy fáciles de usar. Desde ella se accede a tres modos de conducción estándar (RAIN, STREET, SPORT), que se pueden ampliar con un ajuste opcional TRACK que permite al piloto alternar diferentes modos de aceleración y control de tracción (MTC) a través de 10 niveles.</p>
                        <h2>Sistema de frenos</h2>
                        <p>Como contrapartida a todo este potencial, la KTM 890 SMT puede detenerse gracias a un potente sistema de frenos formado por unas pinzas de cuatro pistones mordiendo un disco delantero de 320 mm y una pinza de doble pistón y un disco de 260 mm detrás. Un excelente conjunto que además se ve complementado por un avanzado sistema de ABS en curva que, a su vez, incluye un divertido modo ABS Supermoto.</p>
                    </div>
                    <footer><Footer></Footer></footer>
                </body>
            </html>
        </>
    );
}

export default KtmNews;