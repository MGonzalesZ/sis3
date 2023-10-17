'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './GeneralStylesComponents.css';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Buscando "${searchTerm}"...`);
  };

  return (
    <Container>
      <div className=".Div-Section">
        <Row>
          <Col md={4}>
            <h1>Horarios</h1>
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
          {/* <Col md={2}>
            <img
              alt="Clínica Dental"
              className="img-fluid"
              width="70"
              height="70"
            />
          </Col> */}
        </Row>
        <Row>
          <p>
            "¡Bienvenido a la página de horarios de nuestra clínica dental!
            Estamos encantados de poder brindarte acceso a la información
            esencial sobre nuestros horarios de atención. Aquí, puedes explorar
            los horarios de citas disponibles para tu próxima visita a nuestra
            clínica."
          </p>
        </Row>
      </div>
    </Container>
  );
};

export default SearchForm;
