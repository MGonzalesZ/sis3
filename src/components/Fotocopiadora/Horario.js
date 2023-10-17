export function Horario() {
  return (
    <div className="container">
      <h2>Horarios de Atención</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario de Mañana</th>
            <th>Horario de Tarde</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunes</td>
            <td>8:00 AM - 12:00 PM</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Martes</td>
            <td>8:00 AM - 12:00 PM</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Miércoles</td>
            <td>8:00 AM - 12:00 PM</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Jueves</td>
            <td>8:00 AM - 12:00 PM</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Viernes</td>
            <td>8:00 AM - 12:00 PM</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Sábado</td>
            <td>9:00 AM - 1:00 PM</td>
            <td>Cerrado</td>
          </tr>
          <tr>
            <td>Domingo</td>
            <td>Cerrado</td>
            <td>Cerrado</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
