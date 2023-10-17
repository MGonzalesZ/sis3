import Boton from './Button';
import './btnstyle.css';

function Doubleb() {
    const mystyle = {
        color: "#ffffff",
        backgroundColor: "#440d20",
    };
    const mystyle1 = {
        color: "#000000",
        backgroundColor: "#762d3d",
    };
    return (
        <div className="contenedor">
            <Boton nombre="Iniciar Sesion" style1={mystyle}/>
            <Boton nombre="Registrarse" style1={mystyle1}/>
        </div>
    );
}

export default Doubleb;