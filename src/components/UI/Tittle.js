import React from 'react';

function Titulo(props) {
  return (
    <center>
      <p className="title" style={props.fontstyle}>
        {props.titulo}
      </p>
    </center>
  );
}

export default Titulo;
