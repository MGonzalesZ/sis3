// import Link from 'next/link';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-4"
        style={{ backgroundColor: '#762d3d' }}
      >
        <div className="container">
          <a
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            href="index.html"
          >
            Clínica Odontológica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link
                  to="/ConsultorioDental"
                  className="nav-link text-uppercase"
                >
                  Clinica Dental
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  to="/ConsultorioDental/about"
                  className="nav-link text-uppercase"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  to="/ConsultorioDental/services"
                  className="nav-link text-uppercase"
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link to="/Horarios" className="nav-link text-uppercase">
                  Horarios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
