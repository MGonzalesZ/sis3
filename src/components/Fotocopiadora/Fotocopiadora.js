import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'font-awesome/css/font-awesome.min.css';
import { InfoCard } from './InfoCard';
import './index.css';
import { Carruselimg } from './Carruselimg';
import { Horario } from './Horario';
import { NavPer } from './NavPer';
import MFooter from '../UI/MFooter';
import { Parrafo } from './Parrafo';
import BarraPrincipal from '../../BarraPrincipal';
import MEspacio from '../UI/MEspacio';

export default function Fotocopiadora() {
  const scrollToSection = (event) => {
    event.preventDefault(); // Evita la redirección predeterminada

    // Obtiene el valor del atributo href del enlace y usa JavaScript para desplazarse a la sección
    const sectionId = event.target.getAttribute('href').substring(1); // Elimina el signo '#' del href
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplázate a la sección
    }
  };
  return (
    <div>
      <BarraPrincipal titulo="Fotocopiadora" />
      <NavPer />
      <MEspacio altura="120px"/>
      <div id="inicio" className="section"></div>
      <div id="nosotros" className="section">
        <Carruselimg></Carruselimg>
      </div>
      <section className="container">
        <div id="servicios" className="section">
          <h2>Servicios</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <InfoCard
                titulo="Material de Escritorio"
                descripcion="Tenemos una variedad de suministros de oficina, desde papel hasta bolígrafos."
                icond="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </div>

            <div className="col-md-4 mb-4">
              <InfoCard
                titulo="Fotocopias"
                descripcion="Realizamos fotocopias de documentos en blanco y negro o a color."
                icond="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </div>
            <div className="col-md-4 mb-4">
              <InfoCard
                titulo="Impresión"
                descripcion="Imprimimos documentos de alta calidad en diferentes formatos y tamaños."
                icond="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </div>
            <div className="col-md-4 mb-4">
              <InfoCard
                titulo="Servicio de Encuadernación"
                descripcion="Te ayudamos a darle un toque profesional a tus documentos."
                icond="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
              />
            </div>

            <div className="col-md-4 mb-4">
              <InfoCard
                titulo="Servicio de Escáner"
                descripcion="Digitalizamos documentos y fotos."
                icond="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </div>
          </div>
        </div>
        <div id="horario" className="section">
          <Parrafo texto=" Puedes encontrarnos en el subsuelo de la Torre Innovación, donde estaremos encantados de brindarte nuestros servicios de copiado e impresión. Nuestro horario de atención está detallado en la siguiente tabla para que puedas visitarnos en el momento que mejor te convenga."></Parrafo>

          <Horario id="horario"></Horario>
        </div>
      </section>

      <MFooter />
    </div>
  );
}
