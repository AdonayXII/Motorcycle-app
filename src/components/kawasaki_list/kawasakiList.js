import serviceKawasaki from "../../services/service.kawasaki";
import "./kawasakiList.css"

function kawasakiListList() {
    const getKawaMotor = () => {
        const allKawaMotorcycles = serviceKawasaki.getKawaMotor();
    }

    return (

        allKawaMotorcycles.map(c => {
            return (
                <div>
                    <div>
                        
                    </div>
                </div>
            );
        })

    );

}