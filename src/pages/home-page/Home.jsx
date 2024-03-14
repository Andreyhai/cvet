import React from 'react';


import { Col, Row } from 'react-bootstrap';
import FirstHeader from '../../components/headers/first-header/FirstHeader';
import SecondHeader from '../../components/headers/second-header/SecondHeader';
import MyCard from '../../components/card/Card';
import MyComponent from '../../components/MyComponent/MyComponent'

import { PATHS } from '../../utils/PATHS';

import imageSrc from "./../../assets/images/image copy.png";
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    
      <>
      <FirstHeader />
      <SecondHeader />

      <Row style={{
        height: "1000px",
        marginTop: "10vh"
      }}>
        <Col xs lg="2" style={{background: "#FEEFDA", padding: "0"}}>
        <aside>
          <div className='text-center p-2 fs-4 mb-4'>
            Каталог
          </div>
          
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          Букеты
          </div>
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          Горшки
          </div>
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          Горшечные ц.
          </div>
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          что-то
          </div>
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          что-то
          </div>
          <div style={{
            background: "#F0E1CC",
            padding: "5px 0 5px 0",
            textAlign: "center",
            marginBottom: "10px"
          }}>
          что-то
          </div>
        </aside>
      </Col>
      <Col xs lg="10" className='d-flex gap-5 flex-wrap justify-content-center' style={{
        padding: "0 50px 0 50px"
      }}>
      {
        PATHS.map((card, index) => {
          
          return <MyCard 
          src={card} 
          title={"Букет “Чёткие розы”"} 
          price={"10000$"}
          
          />
        })
      }
      {/* <div style={{width: "100%", display: "flex", justifyContent: "center", marginBottom: "50px"}}>
      <div className='d-flex gap-1 align-items-center'>
      <svg width="6" height="31" viewBox="0 0 6 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 30L1 15.5L5 1" stroke="#FADFB7"/>
</svg>

        <div style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FADFB7"
        }}>1</div>
        <div style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FADFB7"
        }}>2</div>
        <div className='d-flex align-items-center justify-content-center' style={{
          background: "rgba(217, 217, 217, 0.3)",
          width: "40px",
          height: "40px",
        }}>
        <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FADFB7"/>
          <circle cx="9.5" cy="2.5" r="2.5" fill="#FADFB7"/>
          <circle cx="15.5" cy="2.5" r="2.5" fill="#FADFB7"/>
        </svg>

        </div>
        <div style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FADFB7"
        }}>99</div>
        <svg width="6" height="31" viewBox="0 0 6 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5 15.5L1 30" stroke="#FADFB7"/>
</svg>

      </div>
      </div> */}
      
      </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
      </>
  );
};

export default Home;