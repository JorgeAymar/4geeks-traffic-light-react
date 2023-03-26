import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Semaforo = () => {
  const [luzActiva, setLuzActiva] = useState('');
  const [activo, setActivo] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [luzPurpura, setLuzPurpura] = useState(false);

  const cambiarLuzActiva = (color) => {
    setLuzActiva(color);
  };

  const luzClassName = (color) => {
    return `luz ${color} ${luzActiva === color ? 'activa' : ''}`;
  };

  const activarSemaforo = () => {
    if (!activo) {
      setActivo(true);
      const id = setInterval(() => {
        setLuzActiva((prevLuz) => {
          switch (prevLuz) {
            case 'rojo':
              return 'amarillo';
            case 'amarillo':
              return 'verde';
            case 'verde':
            default:
              return 'rojo';
          }
        });
      }, 3000);
      setIntervalId(id);
    }
  };

  const desactivarSemaforo = () => {
    if (activo) {
      setActivo(false);
      clearInterval(intervalId);
      setIntervalId(null);
      setLuzActiva('');
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const alternarLuzPurpura = () => {
    setLuzPurpura(!luzPurpura);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="light-container">
            <div className={luzClassName('rojo')} onClick={() => cambiarLuzActiva('rojo')}></div>
            <div className={luzClassName('amarillo')} onClick={() => cambiarLuzActiva('amarillo')}></div>
            <div className={luzClassName('verde')} onClick={() => cambiarLuzActiva('verde')}></div>
            {luzPurpura && (
              <div
                className={luzClassName('purpura')}
                onClick={() => cambiarLuzActiva('purpura')}
              ></div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-3 p-5">
        <div className="botones">
          <button onClick={activarSemaforo} disabled={activo} className="btn btn-primary">
            Activar
          </button>
          <button onClick={desactivarSemaforo} disabled={!activo} className="btn btn-danger">
            Desactivar
          </button>
          <button onClick={alternarLuzPurpura} className="btn btn-info">
            {luzPurpura ? 'Quitar púrpura' : 'Añadir púrpura'}
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default Semaforo;
