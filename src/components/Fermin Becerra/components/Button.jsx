import './btnstyle.css';

function Boton(props) {
    return (
          <button className="boton boton-inicio" style={props.style1}>{props.nombre}</button>
    );
}

export default Boton;