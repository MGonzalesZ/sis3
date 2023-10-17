import './CanchasAccesos.css';
import Carta from '../UI/MCarta';
// import Image from 'next/image';

const DeportesAccesos = (props) => {
  return (
    <div className="deporte-item">
      <Carta
        titulo={props.titulo}
        desc="Haga clic para ir a detalle"
        nombre="Ir a deporte"
        src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"
      />
      <center>
        <h4>{props.titulo}</h4>
        <img src={`images/${props.imagen}`} alt={props.titulo} />
      </center>
    </div>
  );
};
export default DeportesAccesos;
