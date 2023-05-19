import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./HondaNews.css";

function HondaNews() {
    return (
        <>
            <html>
                <header><Header></Header></header>
                <body>
                    <div className="introduction-honda">
                        <h1>CL500 2023</h1>
                        <p>Cada día es un reto. Y la Honda CL500 aparece para vivirlo instensamente. El estilo Scrambler, la sencillez en las formas, la posibilidad de personalización, la facilidad de conducción, todo ello hace de este estilo una moto versátil, divertida y apta para el día a día o… ¡para dar la vuelta al Mundo!</p>
                    </div>
                    <div className="information-honda">
                        <div>
                            <h2>La historia de las Honda CL</h2>
                            <img src="cl500.png" alt="Imagen de la cl500" width={240}></img>
                        </div>
                        <p>¿No lo crees? Hace ya algunas décadas, los moto aventureros optaban por este tipo de motos aparecidas antes de las trail, Se trataba de motos de mecánica sencilla, previsibles y fáciles de conducir, capaces de cruzar continentes y de llegar a lugares que, en ocasiones, ni aparecen en las guías de viaje. Las Scrambler dieron lugar a las trail, al aumentar de cilindrada, de prestaciones... pero eso fue ya en los años setenta del pasado siglo XX. Antes fueron las Scrambler… La primera Scrambler de Honda apareció en 1962, y se trataba de una bicilíndrica de solo 247 cc. Su nombre: CL72 Scrambler 250 y fue en años posteriores aumentando de cilindrada, 305 cc la CL77, aparecieron incluso una de 90 cc, de 125 cc (estas monocilíndricas), varías 160 cc, 175 cc, e incluso una CL450 de 444 cc. Habían nacido las Scrambler de Honda. Muy poaiblemente fue la primera marca en utilizar esta denominación: Scrambler. Pues ya adelantaba que la primera apareció en 1962.</p>
                        <h2>Motor bicilíndrico</h2>
                        <p>El motor CL500 es un bicilíndrico en línea ya presente en otras motos de la marca, con pocas diferencias al de esta moto. Su cilindrada es de 471cc y tiene 4 vávulas por cilindro junto con refrigeración líquida.
                            Con 47CV a 8.500rpm y un par máximo de 43.3Nn a 6.250rpm.
                        </p>
                        <h2>Sensaciones</h2>
                        <p>Tras los primeros kilómetros de conducción ya percibes que se trata de una moto muy fácil y predecible, tanto para moverse por ciudad como para viajar con ella por carretera. Aunque pueden parecer pocos, los 47 CV de la Honda CL500 dan para mucho. Recordemos que los moto-aventureros de hace años viajaban con motos de 600 cc, como la Honda Dominator de menos de 50 CV, cruzando continentes e incluso ¡dando la vuelta al Mundo! Y en la CL500 con más de 250 km de autonomía teórica gracias a los 12 litros de capacidad del depósito y a la media de consumo a los 100 km, pues Honda declara 3,6 km a los 100 km.</p>
                        <h2>Personaliza la como quieras</h2>
                        <p>Los packs de personalización son útiles para disponer de la moto que realmente necesitas. El pack Adventure cuesta 335 € e incluye un guardabarros delantero elevado, una placa para el dorsal en el lado izquierdo, protectores de manos y estriberas rally más dentadas, el pack Travel, por 453 € incluye una alforja de 14 litros con su soporte, puños calefactables, protector del depósito, maneta de freno ajustable y toma de 12 V.
                            También puedes optar solo por elegir los componentes individuales que creas imprescindibles: puños calefactables, asiento alto de color marrón, la toma de 12 V, los protectores de manos, la visera para el faro, un baúl de 38 litros, etc, etc. Es el modo de disfrutar al máximo de ella en cualquier situación.</p>
                    </div>
                    <footer><Footer></Footer></footer>
                </body>
            </html>
        </>
    );
}

export default HondaNews;