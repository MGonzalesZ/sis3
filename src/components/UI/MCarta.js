import { Link } from 'react-router-dom';
import './btnstyle.css';
import Image from './Image';
import Titulo from './Tittle';
import Paraf from './Paraf';
import Boton from './Button';

function MCarta(props) {
  const scrollHaciaLaCabecera = () => {
    window.scrollTo(0, 0); // Desplaza hacia la parte superior
  };
  const tstyle = {
    height: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    maxWidth: '100%',
  };
  const bstyle = {
    backgroundColor: '#762d3d',
  };
  const fstyle = {
    fontSize: '30px',
    fontWeight: '500',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const pstyle = {
    maxWidth: '100%',
    fontSize: '15px',
    fontWeight: '100',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  return (
    <div className="card">
      <Image src={props.src} imgstyle={tstyle} />
      <Titulo titulo={props.titulo} fontstyle={fstyle} />
      <Paraf desc={props.desc} pstyle={pstyle} />
      <Link to={props.link} onClick={scrollHaciaLaCabecera}>
        <Boton nombre={props.nombre} style1={bstyle} />
      </Link>
    </div>
  );
}

export default MCarta;
