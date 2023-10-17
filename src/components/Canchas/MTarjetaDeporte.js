import Image from '../UI/Image';
import Titulo from '../UI/Tittle';
import Paraf from '../UI/Paraf';
import Boton from '../UI/Button';
import '../UI/btnstyle.css';

function MTarjetaDeporte(props) {
  const tstyle = {
    borderRadius: '20px',
    height: '350px',
    backgroundColor: '#dfbcc6',
  };
  const bstyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#762d3d',
    color: '#dfbcc6',
  };
  const fstyle = {
    textAlign: 'left',
    color: 'grey',
    fontSize: '40px',
    fontWeight: '500',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };
  const pstyle = {
    textAlign: 'left',
    color: 'grey',
    fontSize: '20px',
    fontWeight: '100',
    fontFamily: 'Lucida Console, Courier New, monospace',
  };

  return (
    <div className="contenedorf" style={tstyle}>
      {/* <Image src={props.image} imgstyle={tstyle} /> */}
      <div>{props.ubicacion}</div>
      <div className="contenedor3">
        <Titulo titulo={props.titulo} fontstyle={fstyle} />
        <Paraf desc={props.desc} pstyle={pstyle} />
      </div>
    </div>
  );
}

export default MTarjetaDeporte;
