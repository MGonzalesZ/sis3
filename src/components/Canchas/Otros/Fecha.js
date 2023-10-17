import React from 'react';
import './Fecha.css';

function Fecha() {
  let state = {
    curDT: new Date().toLocaleString(),
  };

  return (
    <div className="fecha-act">
      <p>Fecha y hora actuales : {state.curDT}</p>
    </div>
  );
}

export default Fecha;
