import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./SecondHeader.css";
import Index from '../../../firebase/index.js';
import Dropdown from '../../drop-down/DropDown.jsx';

const SecondHeader = () => {

  const [status, setStatus] = useState(true)
  
  return (
    <header className='xxx'
      style={{
        background: "#FFF7EA", 
        height: "fit-content",
        borderBottom: "3px solid #C0C0C0",
        padding: "5px",
        width: "95%",
        margin: "0 auto",
      }}>
      {/* <Container className='align-items-end'> */}

      <Row className='secondHeader text-light justify-content-center ' style={{
        // minWidth: "1000px"

      }}>
        <Col className='logo w-auto ingrid-darling-regular' xs lg={2}>
          Cvetochnaya Lavka
        </Col>


 
  <Col className='lg:d-none list px-3 d-flex align-items-center justify-content-center   align-items-end' style={{color: "#916D6D"}}>

          <div className='non px-3 d-flex align-items-center justify-content-center katt'>
            Главная
          </div>

          <div className='non px-3 d-flex align-items-center justify-content-center katt'>
            О нас
          </div>

          <div className='non px-3 d-flex align-items-center justify-content-center katt'>
            Каталог
          </div>

        </Col>



        <Col className='d-flex align-items-center justify-content-between  xx' >
        <input
          className='myInput'
          type='text'
          placeholder='купить землю'
        />

{/* <Index /> */}

          <svg className='svgshka' onClick={e => setStatus(!status)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><g id="_01_align_center" data-name="01 align center"><path d="M24,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836ZM20.164,13H5.419L4.478,5H21.607Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></g></svg>
          <Dropdown />
        </Col>
      </Row> 

      {/* </Container> */}
    </header>
  );
};

export default SecondHeader;