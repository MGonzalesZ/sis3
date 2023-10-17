import React, { useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import "./GeneralStylesComponents.css";
function Schedule() {
  const [schedule, setSchedule] = useState([
    { day: "Lunes", startTime: "09:00", endTime: "17:00" },
    { day: "Martes", startTime: "09:00", endTime: "17:00" },
    { day: "Miercoles", startTime: "09:00", endTime: "17:00" },
    { day: "Jueves", startTime: "09:00", endTime: "17:00" },
    { day: "Viernes", startTime: "09:00", endTime: "17:00" },
    { day: "Sabado", startTime: "10:00", endTime: "14:00" }
  ]);

  const [editing, setEditing] = useState(null);

  const handleTimeChange = (day, field, value) => {
    const updatedSchedule = schedule.map((item) => {
      if (item.day === day) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setSchedule(updatedSchedule);
  };

  const handleEdit = (day) => {
    setEditing(day);
  };

  const handleSave = (day) => {
    // Update schedule data in the database
    setEditing(null);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario de inicio</th>
            <th>Horario de cierre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day) => (
            <tr key={day.day}>
              <td>{day.day}</td>
              {editing === day.day ? (
                <>
                  <td>
                    <Form.Control
                      type="time"
                      value={day.startTime}
                      onChange={(e) =>
                        handleTimeChange(day.day, "startTime", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="time"
                      value={day.endTime}
                      onChange={(e) =>
                        handleTimeChange(day.day, "endTime", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Button variant="success" onClick={() => handleSave(day)}>
                      Guardar
                    </Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{day.startTime}</td>
                  <td>{day.endTime}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleEdit(day.day)}
                    >
                      Editar
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Schedule;
