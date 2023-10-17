import Cartas from '../UI/MCarta';
import '../UI/btnstyle.css';

function ConCar() {
  return (
    <div className="contenedor">
      <Cartas
        titulo="Ubicacion"
        desc="Haga clic para ver nuestra ubicacion"
        nombre="Ir a mapas"
        src="https://framerusercontent.com/images/Q8Ihh7lqZUcGLT2RUFuNGspBr1E.png"
      />
      <Cartas
        titulo="Datos"
        desc="Puedes venir a la universidad o contactarnos por Teams."
        nombre="Ver contactos"
        src="https://framerusercontent.com/images/1QHnRutK9fRpraCQ5ixVLaLkkQ.png"
      />
      <Cartas
        titulo="Referencias"
        desc="Obtenga las referencias de Univalle"
        nombre="referencias"
        src="https://framerusercontent.com/images/3mZKrtGkEiqueXzAfkXAp7Gte4.jpg"
      />
    </div>
  );
}

export default ConCar;
