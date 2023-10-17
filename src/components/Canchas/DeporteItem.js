import React from 'react';
import deportesImg from './img/Univ.jpg';
import './DeporteItem.css';
import Fecha from './Otros/Fecha';
import BarraPrincipal from '../../BarraPrincipal';
import MTitulo from '../UI/MTitulo';
import C2l from '../UI/Tarjeta2l';
import C2r from '../UI/Tarjeta2r';
import Card1 from '../UI/Tarjeta1';

import 'bootstrap/dist/css/bootstrap.css';
import MFooter from '../UI/MFooter';
import MEspacio from '../UI/MEspacio';
import MTarjetaDeporte from './MTarjetaDeporte';
import MCartaDeporte from './MCartaDeporte';
import MCartaContacto from './MCartaContacto';

function DeporteItem(props) {
  const imgDeportes = props.imgSrc;
  return (
    <div>
      <BarraPrincipal titulo={props.titulo} />
      <MEspacio altura="20px" />
      <Card1
        titulo="Introduccion"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
        ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
        cursus. Nulla aliquet porttitor lacus luctus accumsan. Arcu odio ut
        sem nulla pharetra diam sit. Dui id ornare arcu odio ut. Ornare
        suspendisse sed nisi lacus sed. Adipiscing tristique risus nec
        feugiat in fermentum posuere urna nec. Pharetra et ultrices neque
        ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
        vel."
        nombre="Ver mas"
        src={imgDeportes}
      />

      <MTarjetaDeporte
        titulo="Ubicacion"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
      ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
      cursus. Nulla aliquet porttitor lacus luctus accumsan.Pharetra et ultrices neque
      ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
      vel."
        ubicacion={props.ubicacion}
      />
      <div className="contenedor">
        <MCartaDeporte
          titulo="Requisitos"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
          ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
          cursus. Nulla aliquet porttitor lacus luctus accumsan.Pharetra et ultrices neque
          ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
          vel.Nulla aliquet porttitor lacus luctus accumsan."
        />
        <MCartaDeporte
          titulo="Horarios"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui id
          ornare arcu odio ut sem nulla pharetra. At auctor urna nunc id
          cursus. Nulla aliquet porttitor lacus luctus accumsan.Pharetra et ultrices neque
          ornare aenean. Mus mauris vitae ultricies leo integer malesuada nunc
          vel.Nulla aliquet porttitor lacus luctus accumsan."
        />
        <MCartaContacto
          titulo="Contacto"
          src={deportesImg}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

      <MFooter />
    </div>
  );
}
export default DeporteItem;
