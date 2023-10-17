import Titulo from '../UI//Tittle';

import Doubleb from '../UI/DoubleButton';
import Card1 from '../UI/Tarjeta1';
import Paraf from '../UI/Paraf';
import C2r from '../UI/Tarjeta2r';
import C2l from '../UI/Tarjeta2l';
import ConCar from './ConjuntoCartas';
import Footer from '../UI/Footer';
import BarraPrincipal from '../../BarraPrincipal';
import MTitulo from '../UI/MTitulo';
import MFooter from '../UI/MFooter';

function Plataforma() {
  const fstyle = {
    fontSize: '60px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const fstyle2 = {
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };

  return (
    <div>
      <BarraPrincipal titulo="Plataforma de atencion" />

      <Card1
        titulo="Bienvenido"
        desc="Estamos encantados de darte la bienvenida a nuestro espacio virtual diseñado exclusivamente para satisfacer tus necesidades académicas y brindarte el apoyo que necesitas durante tu trayecto educativo."
        nombre="Ir al siu"
        src="https://framerusercontent.com/images/6pVuQvX6xdB3XLndYeXPpdKeA.png?scale-down-to=512"
      />

      <C2l
        titulo="Plan de Pagos"
        desc="Descubre nuestro flexible plan de pagos universitarios. ¡Educa sin preocupaciones!"
        nombre="Ver mas"
        image="https://framerusercontent.com/images/4Kjnpu4oOCA0oWLpsBVPYrODRE.jpg?scale-down-to=512"
      />
      <C2r
        titulo="Inscripciones"
        desc="Inscripciones abiertas: ¡Prepárate para tu futuro académico en Univalle"
        nombre="Ver mas"
        image="https://framerusercontent.com/images/EjZ9HQTX6LKDLu6DTh9qo9o8kM.png?scale-down-to=512"
      />
      <C2l
        titulo="Carreras"
        desc="Explora nuestras emocionantes carreras universitarias. ¡Elige tu camino!"
        nombre="Ver mas"
        image="https://framerusercontent.com/images/jkzNytuMjsnRfaMeEhatziN6cw.jpg?scale-down-to=512"
      />
      <C2r
        titulo="Credenciales"
        desc="Consigue tus credenciales de entrada a Univalle hoy mismo."
        nombre="Ver mas"
        image="https://framerusercontent.com/images/owsUEqPT5m4aFgBeVv6AlTQfHQ.jpg"
      />
      <C2l
        titulo="Solvencia"
        desc="Asegura tu solvencia en Univalle Tu inversión en el futuro."
        nombre="Ver mas"
        image="https://framerusercontent.com/images/kB3vRDR3ICFqHC9sQGS3mkcNsY.jpg?scale-down-to=512"
      />
      <C2r
        titulo="Horarios"
        desc="Revisa los horarios para visitarnos."
        nombre="Ver mas"
        image="https://framerusercontent.com/images/k85UjfKkov66wjwAAkSMOYlxFQ.jpg?scale-down-to=512"
      />
            <C2l
        titulo="Reservas"
        desc="Requisitos para realizar las reservas de sala de estudio"
        nombre="Ver mas"
        image="https://framerusercontent.com/images/kB3vRDR3ICFqHC9sQGS3mkcNsY.jpg?scale-down-to=512"
      />

      <Titulo titulo="Contactos" fontstyle={fstyle2} />
      <Paraf desc="¿Necesitas ayuda o información? Contáctanos para asistencia personalizada en Univalle. Estamos aquí para ayudarte." />

      <ConCar />

      <MFooter />
    </div>
  );
}

export default Plataforma;
