import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardTitle, Row, Col, Card, Container } from 'react-materialize'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
export default function Film({Films}) {
  const [film, setFilm] = useState([]);
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <Container className="center">
    <Row>
      {Films.map((film) => (
        <Col s={12} m={6} l={4} key={film.id}>
          <Card className="filmcard" style={{border: '3px solid #2c82c9', backgroundColor: theme.backgroundColor, color: theme.color}}>
            <a href='#popup1' id='openPopup' onClick={()=>{setFilm(film)}}>
              <CardTitle image={film.img}></CardTitle>
            </a>
            <h5>{film.title}</h5>
            <p>Year: {film.year}</p>
            <p>Nation: {film.nation}</p>
            <p>
              <button className="button">
                <Link style={{color: 'white'}} to={`/detail/${film.id}`}>Detail</Link>
              </button>
            </p>
          </Card>
        </Col>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={film.img} />
          <h2>{film.title}</h2>
          <a className="close" href="#/">
            &times;
          </a>
          <div className="content">{film.info}</div>
        </div>
      </div>
    </Row>
  </Container>
  );
}