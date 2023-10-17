import React from 'react';
import { Link } from 'react-router-dom';
import './Canchas.css';
import deportesImg from './img/deportes.png';
import futsalImg from './img/futsal.jpg';
import volleyImg from './img/volley.jpg';
import basquetImg from './img/basquet.jpg';
import BarraPrincipal from '../../BarraPrincipal';
import Card1 from '../UI/Tarjeta1';
import MCarta from '../UI/MCarta';

import 'bootstrap/dist/css/bootstrap.min.css';
import MEspacio from '../UI/MEspacio';
import '../UI/btnstyle.css';
import MFooter from '../UI/MFooter';
import Titulo from '../UI/Tittle';

const Canchas = () => {
  const initial_deportes = [
    {
      id: 'd1',
      titulo: 'Futsal',
      imagen: { futsalImg },
    },
    {
      id: 'd2',
      titulo: 'Volley',
      imagen: { volleyImg },
    },
    {
      id: 'd3',
      titulo: 'Basquet',
      imagen: { basquetImg },
    },
  ];
  const texto =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus. Amet volutpat consequat mauris nunc congue. Justo laoreet sit amet cursus. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Neque sodales ut etiam sit amet nisl purus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Tristique magna sit amet purus gravida quis. Elit duis tristique sollicitudin nibh sit amet commodo. Tellus elementum sagittis vitae et leo duis. Sed viverra tellus in hac habitasse platea. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Arcu dictum varius duis at. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Ornare massa eget egestas purus viverra accumsan in nisl. Eget nullam non nisi est sit amet facilisis magna. Ac odio tempor orci dapibus ultrices. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi.';
  const fstyle2 = {
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  return (
    <div className="canchas">
      <BarraPrincipal titulo="Canchas" />
      <Card1
        titulo="Bienvenido"
        desc={texto}
        nombre="Ir al siu"
        src={deportesImg}
      />

      <Titulo titulo="Deportes" fontstyle={fstyle2} />
      <div className="row">
        <div className="contenedor">
          <MCarta
            titulo={initial_deportes[0].titulo}
            desc="Haga clic para ir a detalle"
            nombre="Ir a Futsal"
            src={futsalImg}
            link="/futsal"
          />

          <MCarta
            titulo={initial_deportes[1].titulo}
            desc="Haga clic para ir a detalle"
            nombre="Ir a Volley"
            src={volleyImg}
            link="/volley"
          />

          <MCarta
            titulo={initial_deportes[2].titulo}
            desc="Haga clic para ir a detalle"
            nombre="Ir a Basquet"
            src={basquetImg}
            link="/basquet"
          />
        </div>
      </div>
      <MFooter />
    </div>
  );
};
export default Canchas;
