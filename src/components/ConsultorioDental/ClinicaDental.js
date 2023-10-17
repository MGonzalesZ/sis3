import bg1Img from './img/bg1.jpg';
import intro from './img/intro.jpg';
import About from './about';
import Services from './services';
import Header from './header';
import BarraPrincipal from '../../BarraPrincipal';
import MTitulo from '../UI/MTitulo';
import MFooter from '../UI/MFooter';
import MEspacio from '../UI/MEspacio';

export default function ClinicaDental() {
  return (
    <div>
      <BarraPrincipal titulo="Clínica Odontológica" />
      {/* <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3"></span>
          <span className="site-heading-lower">Clínica Odontológica</span>
        </h1>
      </header> */}
      <MEspacio altura="10px" />
      <Header></Header>
      <MEspacio altura="100px" />
      <section className="page-section clearfix">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src={intro}
              alt="..."
            />
            <div
              className="intro-text left-0 text-center p-5 rounded"
              style={{ backgroundColor: '#dfbcc6' }}
            >
              <h2 className="section-heading mb-4">
                {/* <span className="section-heading-upper">UNIVALLE</span> */}
                <span className="section-heading-lower">
                  Clínica Odontológica
                </span>
              </h2>
              <p className="mb-3">
                es una sólida institución que presta asistencia odontológica
                preventiva y curativa en general. Atiende y aplica tratamientos
                para mejorar la salud oral de la población con un servicio de
                Calidad y Calidez, enfocado a la clínica y a la cirugía dental
                en niños, adolescentes, jóvenes y adultos, a través de
                especialistas odontólogos formados con trayectoria y renombre.
              </p>
              <div className="intro-button mx-auto">
                <a
                  className="btn btn-primary btn-xl"
                  href="#!"
                  style={{ backgroundColor: '#762d3d' }}
                >
                  ¡Visítanos!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MFooter />
    </div>
  );
}
