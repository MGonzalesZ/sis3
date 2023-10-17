import './NAFstyle.css';

export function NAFschedule() {
  return (
    <div className="horaDiv">
      <div className="horaCont">
        <h1 style={{ textAlign: 'center' }}>Horario de atención</h1>

        <table className="horario">
          <thead>
            <tr>
              <th>Día</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lunes</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Martes</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Miércoles</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Jueves</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Viernes</td>
              <td>9:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>10:00 AM - 2:00 PM</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>Cerrado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
