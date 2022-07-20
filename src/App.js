import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/Image";


function App() {

  return (

    <div className="App">

      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Row>
            <Col>
              <Image src= "bytown_volley_logo.png" width={80} height={80}></Image>
            </Col>
            <Col style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Navbar.Brand href="#" >ByTown Volley</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>


      <Container fluid="md">
        <br />
        <Tabs />
      </Container>


      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
