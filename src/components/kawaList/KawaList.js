import serviceKawasaki from "../../services/service.kawasaki"

function KawaList() {
    const getKawa = () => {
        const allKawa = serviceKawasaki.getKawa();

        return (
            allKawa.map(c => {
                return (
                    <div className="kawa-list-item">
                        <div className="kawa-list-img">
                            <img src={`/assets/img/${c.img}`} alt="kawasaki motorcycle" />
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
                <div className="kawa-list-img">
                    {getKawa()}
                </div>
            </div>
        </>
    );
}

export default KawaList;