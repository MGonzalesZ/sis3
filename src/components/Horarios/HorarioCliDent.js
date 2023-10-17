"use client";

import React, { useState } from "react";
import { Table, Form, Container } from "react-bootstrap";
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

  const handleTimeChange = (day, field, value) => {
    const updatedSchedule = schedule.map((item) => {
      if (item.day === day) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setSchedule(updatedSchedule);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario de Inicio</th>
            <th>Horario de Cierre</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day) => (
            <tr key={day.day}>
              <td>{day.day}</td>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Schedule;
