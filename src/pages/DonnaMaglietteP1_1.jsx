
import "./DonnaMaglietteP1_1.css"

import d_maglietta_1_1 from "../Components/Img/d_maglietta_1_1.jpg";


function DonnaMaglietteP1_1() {

    return (
        <>
            <div className="contenitore_prod">

                <div className="riga1_prodM">
                    <div className="m1c">
                        <img src={d_maglietta_1_1} alt="d_maglietta_1_1" className="m1"></img>

                    </div>

                    <div className="m1c">
                        <div className="riga1_r1_prodM">
                            <p className="des"> Maglietta a maniche corte <br /> 9,99 €</p>
                        </div>
                        <div className="riga1_r1_prodM">
                            <div class="quant">
                                <button className="meno" ></button>
                                <input type="number" value="0" min="1" max="10" />
                                <button class="piu" ></button>
                            </div>
                        </div>
                        <div className="riga1_r1_prodM">

                            <button> Aggiungi al carrello</button>
                        </div>

                    </div>
                </div>
            </div>


        </>



    );
}

export default DonnaMaglietteP1_1;