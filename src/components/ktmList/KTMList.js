import serviceKtm from "../../services/service.ktm";
import "./KTMList.css";

function KTMList() {
    const getKTM = () => {
        const allKTM = serviceKtm.getKTM();

        return (
            allKTM.map(c => {
                return (
                    <div className="ktm-list-item">
                        <div className="ktm-list-img">
                            <img src={`/assets/img/${c.img}`} alt="KTM motorcycle" />
                        </div>
                        <div className="ktm-list-info">
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
            <div className="ktm-main-container">
                <div className="ktm-list-images">
                    {getKTM()}
                </div>
            </div>
        </>
    );
}

export default KTMList;