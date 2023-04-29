import serviceKtm from "../../services/service.ktm";

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
                        <p>{c.model} - {c.cc} - {c.cv} - {c.price}</p>
                    </div>
                );
            })
        );
    }

    return (
        <>
            <div className="ktm-main-container">
                <div className="ktm-list-img">
                    {getKTM()}
                </div>
            </div>
        </>
    );
}

export default KTMList;