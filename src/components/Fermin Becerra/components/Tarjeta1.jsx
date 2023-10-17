import Image from "@/components/Image";
import Titulo from "@/components/Tittle";
import Paraf from "@/components/Paraf";
import Boton from "./Button";
import './btnstyle.css';
function Card1(props) {
    const tstyle = {
        width: "100%",
        height: "250px",
    };
    const bstyle = {
        backgroundColor: "#9f0342",
    };
    const fstyle = {
        fontSize: "50px",
        fontWeight: "500",
        fontFamily: "Lucida Console, Courier New, monospace",
    };
    const pstyle = {
        margin: "25px",
        maxWidth: "100%",
        fontSize: "20px",
        fontWeight: "100",
        fontFamily: "Lucida Console, Courier New, monospace",
    };

    return(
        <div className="contenedor" style={{backgroundColor: "#9f0342", tstyle}}>
            <div className="contenedor2">
                <Titulo titulo={props.titulo} fontstyle={fstyle}/>
                <Paraf desc={props.desc} pstyle={pstyle}/>
                <Boton nombre={props.nombre} style1={bstyle}/>
            </div>
            <Image src={props.src} imgstyle={tstyle}/>
        </div>
    );
}

export default Card1;