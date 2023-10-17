import Searchother from './Searchother';
import HorarioCliDent from './HorarioCliDent';
import BarraPrincipal from '../../BarraPrincipal';
import MEspacio from '../UI/MEspacio';
import Header from '../ConsultorioDental/header';
import MTitulo from '../UI/MTitulo';

function PaginaHorarios() {
  return (
    <div>
      <BarraPrincipal titulo="Clinica Odontológica" />
      <MEspacio altura="10px" />
      <MTitulo titulo="Horarios" />
      <Header />
      <MEspacio altura="50px" />
      <Searchother></Searchother>

      <HorarioCliDent></HorarioCliDent>
    </div>
  );
}

export default PaginaHorarios;
