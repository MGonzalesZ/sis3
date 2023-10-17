import products1 from './img/products-01.jpg';
import products2 from './img/products-02.jpg';
import products3 from './img/products-03.jpg';
import Header from './header';
import BarraPrincipal from '../../BarraPrincipal';
import MTitulo from '../UI/MTitulo';
import MEspacio from '../UI/MEspacio';

function Servicios() {
  return (
    <div>
      <BarraPrincipal titulo="Clinica Odontológica" />
      <MEspacio altura="10px" />
      <MTitulo titulo="Servicios" />
      <Header></Header>

      <section className="page-section">
        <div className="container">
          {/* Primer servicio */}
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div
                className="bg-faded p-5 d-flex ms-auto rounded"
                style={{ backgroundColor: '#dfbcc6' }}
              >
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Limpieza &</span>
                  <span className="section-heading-lower">Blanqueamiento</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={products1}
              alt="..."
            />
            <div className="product-item-description d-flex me-auto">
              <div
                className="bg-faded p-5 rounded"
                style={{ backgroundColor: '#f7eaef' }}
              >
                <p className="mb-0">
                  La limpieza dental ayuda a prevenir la caries dental, la
                  enfermedad de las encías y otros problemas dentales. Es
                  recomendable hacerse una limpieza dental al menos una vez al
                  año.
                </p>
              </div>
            </div>
          </div>

          {/* Segundo servicio */}
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div
                className="bg-faded p-5 d-flex me-auto rounded"
                style={{ backgroundColor: '#dfbcc6' }}
              >
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Extracciones</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={products2}
              alt="..."
            />
            <div className="product-item-description d-flex ms-auto">
              <div
                className="bg-faded p-5 rounded"
                style={{ backgroundColor: '#f7eaef' }}
              >
                <p className="mb-0">
                  En el consultorio dental, ofrecen el servicio de extracciones
                  dentales para aquellos pacientes que necesiten extraer un
                  diente de su boca. Las extracciones dentales pueden ser
                  necesarias debido a infecciones dentales causadas por ciertos
                  medicamentos, enfermedades de las encías, dientes fracturados,
                  caries dentales y muelas del juicio mal colocadas.
                </p>
              </div>
            </div>
          </div>

          {/* Tercer servicio */}
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div
                className="bg-faded p-5 d-flex ms-auto rounded"
                style={{ backgroundColor: '#dfbcc6' }}
              >
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Curaciones</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={products3}
              alt="..."
            />
            <div className="product-item-description d-flex me-auto">
              <div
                className="bg-faded p-5 rounded"
                style={{ backgroundColor: '#f7eaef' }}
              >
                <p className="mb-0">
                  El consultorio dental ofrece curaciones dentales para eliminar
                  la caries del diente y prevenir que la infección provoque
                  mayores complicaciones y dolor. Existen dos tipos de
                  curaciones. Es importante que los pacientes visiten a un
                  dentista general por lo menos una vez al año, no solo para la
                  limpieza de los dientes sino para un control que asegure la
                  salud oral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="footer text-faded text-center py-5"
        style={{ backgroundColor: '#440d20' }}
      >
        <div className="container">
          <p className="m-0 small">Copyright &copy; CupOfLu 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Servicios;
