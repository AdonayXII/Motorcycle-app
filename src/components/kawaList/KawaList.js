import serviceKawasaki from "../../services/service.kawasaki"
import "./KawaList.css";

function KawaList() {
    const getKawa = () => {
        const allKawa = serviceKawasaki.getKawa();

        return (
            allKawa.map(c => {
                return (
                    <div className="kawa-list-item">
                        <div className="kawa-list-img">
                            <img src={`/assets/img/${c.img}`} alt="Kawasaki motorcycle" width={250} height={200}/>
                        </div>
                        <div className="kawa-list-info">
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
            <div className="kawa-main-container">
                <div className="kawa-list-images">
                    {getKawa()}
                </div>
            </div>
        </>
    );
}

export default KawaList;