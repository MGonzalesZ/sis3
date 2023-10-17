import MTitulo from './components/UI/MTitulo';
import Navbarra from './components/UI/NavBarra';
import './BarraPrincipal.css';
import MEspacio from './components/UI/MEspacio';

function BarraPrincipal(props) {
  const links = [
    { url: '/PlataformaAtencion', text: 'Plataforma Atencion' },
    { url: '/ConsultorioDental', text: 'Clínica Odontológica' },
    { url: '/Canchas', text: 'Canchas' },
    { url: '/NAF', text: 'NAF' },
    { url: '/Fotocopiadora', text: 'Fotocopiadora' },
    { url: '/ConsultasReservas', text: 'Consultas-Reservas' },
  ];
  return (
    <div>
      <div className="superior">
        <Navbarra title="Sistema de informacion" links={links} />
        <MTitulo titulo={props.titulo} />
      </div>
      <MEspacio altura="60px" />
    </div>
  );
}

export default BarraPrincipal;
