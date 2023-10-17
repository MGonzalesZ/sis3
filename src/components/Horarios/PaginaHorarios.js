import Searchother from './Searchother';
import HorarioCliDent from './HorarioCliDent';
import BarraPrincipal from '../../BarraPrincipal';
import MEspacio from '../UI/MEspacio';
import Header from '../ConsultorioDental/header';
import MTitulo from '../UI/MTitulo';
import MFooter from '../UI/MFooter';

function PaginaHorarios() {
  return (
    <div>
      <BarraPrincipal titulo="Clinica Odontológica" />
      <MEspacio altura="10px" />
      <MTitulo titulo="Horarios" />
      <MEspacio altura="80px" />
      <Header />
      <MEspacio altura="150px" />
      <Searchother></Searchother>

      <HorarioCliDent></HorarioCliDent>
      <MFooter/>
    </div>
  );
}

export default PaginaHorarios;
