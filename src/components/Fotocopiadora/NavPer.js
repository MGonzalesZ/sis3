export function NavPer() {
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
    <nav
      className="navbar navbar-expand-lg navbar-dark py-lg-4"
      id="mainNav"
      style={{ backgroundColor: '#762d3d' }}
    >
      <div className="container">
        <a
          href="#inicio"
          className="navbar-brand text-uppercase fw-bold d-lg-none"
          onClick={scrollToSection}
        >
          Fotocopiadora
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
              <a
                className="nav-link text-uppercase"
                href="#inicio"
                onClick={scrollToSection}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase"
                href="#nosotros"
                onClick={scrollToSection}
              >
                Sobre nosotros
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase"
                href="#servicios"
                onClick={scrollToSection}
              >
                Servicios
              </a>
            </li>
            <li className="nav-item px-lg-4">
              <a
                className="nav-link text-uppercase"
                href="#horario"
                onClick={scrollToSection}
              >
                Horarios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
