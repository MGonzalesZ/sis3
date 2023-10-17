import Cartas from './Carta';
import './btnstyle.css';

function ConCar() {
    return (
        <div className="contenedor">
            <Cartas titulo="Ubicacion" desc="Haga clic para ver nuestra ubicacion" nombre="Ir a mapas" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <Cartas titulo="Datos" desc="Puedes venir a la universidad o contactarnos por Teams." nombre="Ver contactos" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
            <Cartas titulo="Referencias" desc="Obtenga las referencias de Univalle" nombre="referencias" src="https://hesolutions.com.pk/wp-content/uploads/2019/01/picture-not-available.jpg"/>
        </div>
    );
}

export default ConCar;