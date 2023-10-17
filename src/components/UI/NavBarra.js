import './btnstyle.css';
// import { Link } from 'react-router-dom';

function Navbarra(props) {
  const { title, links } = props;
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-title">{title}</span>
      </div>
      <div className="navbar-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
              {/* <Link to={link.url}>{link.text}</Link> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbarra;
