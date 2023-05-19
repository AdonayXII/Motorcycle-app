import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Home.css";

function Home() {
    return (
        <>
            <html>
                <header><Header></Header></header>
                <body>
                    <div>
                        <p>¡Bienvenidos a "Find Your Dream"!</p>
                        <p>En un mundo donde la movilidad es clave, sabemos que encontrar la moto perfecta puede ser un desafío. Es por eso que estamos emocionados de presentarte nuestra innovadora aplicación, "Find Your Dream". Diseñada pensando en los entusiastas de las motocicletas, nuestra plataforma te ayuda a descubrir tu moto ideal de manera rápida y sencilla.</p>
                        <p>Con "Find Your Dream", puedes dejar de perder tiempo buscando en innumerables sitios web y foros. Nuestra aplicación centraliza toda la información relevante sobre motocicletas en un solo lugar. Ya sea que estés buscando una moto deportiva de alta velocidad, una motocicleta todo terreno resistente o una elegante moto de crucero, estamos aquí para ayudarte a encontrar tu sueño sobre dos ruedas.</p>
                        <p>¿Cómo funciona? Es fácil. Simplemente ingresa tus preferencias y criterios en nuestra aplicación. Puedes especificar el estilo de moto que deseas, la potencia del motor, la cilindrada, la marca o cualquier otra característica importante para ti. Luego, nuestro potente algoritmo de búsqueda se pondrá a trabajar, analizando una vasta base de datos que incluye modelos actuales y anteriores, opiniones de expertos y comentarios de usuarios. Con esta información detallada, "Find Your Dream" te proporcionará una lista de opciones que se ajusten perfectamente a tus necesidades y deseos.</p>
                    </div>
                    <footer><Footer></Footer></footer>
                </body>
            </html>
        </>
    );
}

export default Home;