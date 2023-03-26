import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Semaforo = () => {
    const [lightState, setLightState] = useState('red');
  
    useEffect(() => {
      const timer = setInterval(() => {
        switch (lightState) {
          case 'red':
            setLightState('green');
            break;
          case 'green':
            setLightState('yellow');
            break;
          case 'yellow':
            setLightState('red');
            break;
          default:
            setLightState('red');
        }
      }, 3000);
  
      return () => {
        clearInterval(timer);
      };
    }, [lightState]);
  
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div className="light-container">
              <div className={`light ${lightState === 'red' ? 'red' : 'red-off'}`}></div>
              <div className={`light ${lightState === 'yellow' ? 'yellow' : 'yellow-off'}`}></div>
              <div className={`light ${lightState === 'green' ? 'green' : 'green-off'}`}></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Semaforo;
  