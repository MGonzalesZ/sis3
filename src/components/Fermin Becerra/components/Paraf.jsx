import './btnstyle.css';

function Paraf(props) {
    return(
    <div className="contenedor" style={props.pstyle}>
        <p>{props.desc}</p>
    </div>
    );
}

export default Paraf;