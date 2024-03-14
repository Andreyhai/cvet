import React from 'react';

import "./FirstHeader.css";

import { Col, Row } from 'react-bootstrap';
const FirstHeader = () => {
  return (
    <header className={"firstHeader"}
      style={{
        // background: "#bc8f8f", 
        height: "fit-content",
        borderBottom: "1px solid black",
        padding: "5px"
        
      }}>
      
      <Row className='px-3 fs-3'>
        <Col className='text-left  headerTitle d-flex align-items-center'>Осуществляем доставку</Col>
        <Col className='text-center justify-content-center  text-amber-400 headerTitle d-flex align-items-center'>Цветочная лавка</Col>
        <Col className='text-end justify-content-end  text-amber-400 headerTitle d-flex align-items-center'>+7 (960) 469 09-21</Col>
      </Row>

    </header>
  );
};

export default FirstHeader;