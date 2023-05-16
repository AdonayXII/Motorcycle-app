import serviceHonda from "../../services/service.honda";
import "./HondaList.css";

function HondaList() {
    const getHonda = () => {
        const allHonda = serviceHonda.getHonda(); 

        return (
            allHonda.map(c => {
                return (
                    <div className="honda-list-item">
                        <div className="honda-list-img">
                        <img src={`/assets/img/${c.img}`} alt="Honda motorcycle" width={250} height={200}/>
                        </div>
                        <div className="honda-list-info">
                            <p>{c.model}</p>
                            <p>{c.cc}</p>
                            <p>{c.cv}</p>
                            <p>{c.price}</p>
                        </div>
                    </div>
                );
            })
        );
    }

    return (
        <>
            <div className="honda-main-container">
                <div className="honda-list-images">
                    {getHonda()}
                </div>
            </div>
        </>
    );
}

export default HondaList;