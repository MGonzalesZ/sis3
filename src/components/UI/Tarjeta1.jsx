import Image from './Image';
import Titulo from './Tittle';
import Paraf from './Paraf';
import Boton from './Button';
import './btnstyle.css';
function Card1(props) {
  const tstyle = {
    width: '100%',
    height: '250px',
  };
  const bstyle = {
    backgroundColor: '#dfbcc6',
    color: '#762d3d',
  };
  const fstyle = {
    fontSize: '40px',
    fontWeight: '500',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const pstyle = {
    margin: '20px',
    maxWidth: '100%',
    fontSize: '20px',
    fontWeight: '100',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const istyle = {
    width: '30%',
  };

  return (
    <div className="contenedorf" style={{ backgroundColor: '#762d3d', tstyle }}>
      <div className="contenedor2">
        <Titulo titulo={props.titulo} fontstyle={fstyle} />
        <Paraf desc={props.desc} pstyle={pstyle} />
        <Boton nombre={props.nombre} style1={bstyle} />
      </div>
      <Image src={props.src} imgstyle={istyle} />
    </div>
  );
}

export default Card1;
