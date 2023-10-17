import './btnstyle.css';
import Image from "@/components/Image";
import Titulo from "@/components/Tittle";
import Paraf from "@/components/Paraf";
import Boton from "./Button";

function Carta(props) {
    const tstyle = {
        height: "300px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "auto",
        maxWidth: "100%",
    };
    const bstyle = {
        backgroundColor: "#9f0342",
    };
    const fstyle = {
        fontSize: "30px",
        fontWeight: "500",
        fontFamily: "Lucida Console, Courier New, monospace",
    };
    const pstyle = {
        maxWidth: "100%",
        fontSize: "15px",
        fontWeight: "100",
        fontFamily: "Lucida Console, Courier New, monospace",
    };
return(
    <div className="card">
        <Image src={props.src} imgstyle={tstyle}/>
        <Titulo titulo={props.titulo} fontstyle={fstyle}/>
        <Paraf desc={props.desc} pstyle={pstyle}/>
        <Boton nombre={props.nombre} style1={bstyle}/>
    </div>
);
}

export default Carta;