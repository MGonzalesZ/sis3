import DeporteItem from './DeporteItem';
import imgFutsal from './img/futsal22.jpg';

const DepZFutsal = () => {
  const ubicacion = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15301.897736613437!2d-68.13097295218753!3d-16.502129045736044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f212477bb26cb%3A0x36db2efb4300a924!2sCampus%20Deportivo%20Univalle!5e0!3m2!1ses!2sbo!4v1696532805056!5m2!1ses!2sbo"
      width="450"
      height="300"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  return (
    <DeporteItem titulo="Futsal" ubicacion={ubicacion} imgSrc={imgFutsal} />
  );
};
export default DepZFutsal;
