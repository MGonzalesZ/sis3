import './btnstyle.css';

function Footer(props) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>{props.texto}</p>
            <p>{props.derechos}</p>
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;