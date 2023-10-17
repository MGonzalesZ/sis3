import { Link } from 'react-router-dom';
import '../UI/btnstyle.css';
import Image from '../UI/Image';
import Titulo from '../UI/Tittle';
import Paraf from '../UI/Paraf';
import Boton from '../UI/Button';

function MCartaContacto(props) {
  const tstyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    maxWidth: '50%',
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
      <Titulo titulo={props.titulo} fontstyle={fstyle} />
      <Image src={props.src} imgstyle={tstyle} width="10px" />
      <Paraf desc={props.desc} pstyle={pstyle} />
    </div>
  );
}

export default MCartaContacto;
