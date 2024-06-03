
import "./DonnaMaglietteP1_1.css";
import Taglia from "../Components/Taglia/Taglia";

import d_maglietta_1_1 from "../Components/Img/d_maglietta_1_1.jpg";
import d_maglietta_1_2 from "../Components/Img/d_maglietta_1_2.jpg";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Tooltip } from 'react-tooltip';

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

                        <div className="riga1_r2_prodM">
                            <img src={d_maglietta_1_1} alt="d_maglietta_1_1" className="c_m1"></img>
                            <img src={d_maglietta_1_2} alt="d_maglietta_1_1" className="c_m1"></img>
                        </div>

                        <div className="riga1_r3_prodM">
                            <div className="taglia">Taglia</div>
                            <p className="taglia">
                                <Taglia></Taglia>
                            </p>
                        </div>

                        <div className="riga1_r4_prodM">
                            <div class="quant">
                                <button className="meno"><FontAwesomeIcon icon={faMinus} /></button>
                                <input type="number" value="0" min="1" max="10" className="number" />
                                <button className="piu"><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <div class="quant">
                                <button className="car"> Aggiungi al carrello</button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>



    );
}

export default DonnaMaglietteP1_1;