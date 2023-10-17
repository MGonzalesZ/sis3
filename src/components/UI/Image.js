import './btnstyle.css';

function Image(props) {
    return (
        <div className="contenedor-imagen" style={props.imgstyle}>
          <img src={props.src} alt="Descripción generica" className="imagen"/>
        </div>
      );
}

export default Image;