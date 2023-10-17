import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./GeneralStylesComponents.css";
import Image from 'next/image'

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Buscando "${searchTerm}"...`);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1>Gestión de Horarios</h1>
        </Col>
        <Col md={4}>
          <Form onSubmit={handleSearchSubmit} className="d-flex">
            <Form.Control
              type="text"
              name="query"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <Button type="submit">Buscar</Button>
          </Form>
        </Col>
        <Col md={2}>
          <Image
            alt="Clínica Dental"
            className="img-fluid"
            width="70"
            height="70"
          />
        </Col>
      </Row>
      <Row>
        <p>
          "¡Bienvenido a nuestra plataforma de gestión de horarios! En este
          espacio, te brindamos la capacidad de tomar el control absoluto de tus
          horarios de una manera simple y efectiva. Nuestra herramienta te
          permite modificar y personalizar los horarios de una tabla de manera
          rápida y conveniente"
        </p>
      </Row>
    </Container>
  );
};

export default SearchForm;
