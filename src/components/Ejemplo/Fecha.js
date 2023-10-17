import React from 'react';
import './Fecha.css';

class Fecha extends React.Component {
  state = {
    curDT: new Date().toLocaleString(),
  };
  render() {
    return (
      <div className="fecha-act">
        <p>Fecha y hora actuales : {this.state.curDT}</p>
      </div>
    );
  }
}

export default Fecha;
