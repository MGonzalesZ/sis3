import './btnstyle.css';

const MTitulo = (props) => {
  return (
    <header>
      <h1 className="site-heading text-center text-faded d-none d-lg-block">
        <span className="site-heading-upper text-primary mb-3"></span>
        <span className="site-heading-lower">{props.titulo}</span>
      </h1>
    </header>
  );
};

export default MTitulo;
