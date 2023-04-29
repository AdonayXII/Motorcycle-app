import serviceHonda from "../../services/service.honda";

function HondaList() {
    const getHonda = () => {
        const allHonda = serviceHonda.getHonda();

        return (
            allHonda.map(c => {
                return (
                    <div className="honda-list-item">
                        <div className="honda-list-img">
                            <img src={`/assets/img/${c.img}`} alt="honda motorcycle"></img>
                        </div>
                        <p>{c.model} - {c.cc} - {c.cv} - {c.price}</p>
                    </div>
                );
            })
        );
    }

    return (
        <>
            <div className="honda-main-container">
                <div className="honda-list-img">
                    {getHonda()}
                </div>
            </div>
        </>
    );
}

export default HondaList;