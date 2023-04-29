import serviceKawasaki from "../../services/service.kawasaki";
import "./kawasaki_List.css"

function kawasakiList() {
    const getKawaMotor = () => {
        const allKawaMotorcycles = serviceKawasaki.getKawaMotor();
        
        return (
            allKawaMotorcycles.map(c => {
                return (
                    <div className="kawa-list-item">
                        <div className="kawa-list-img">
                            <img src={`/assets/img/${c.img}`} alt="moto"></img>
                        </div>
                        <p>{c.model} - {c.cc} - {c.cv} - {c.price}</p>
                    </div>
                );
            })
        );
    }

    return (
        <>
            <div className="kawa-main-container">
                <div className="kawa-list-container">
                    {getKawaMotor()}
                </div>
            </div>
        </>
    );

}

export default kawasakiList;