import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Registration() {
  const [validated, setValidated] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }
    
    setValidated(true);
  };
  return (
    
    <Container style={{textAlign:'left'}}>
      
      <Row>
        <Col xs={7}>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <p style={{textAlign:'left'}}><h3>Registration Form</h3></p>

            <Form.Group className="mb-3" controlId="formPersonalInformation">
              <Container>
              <p style={{textAlign:'left'}}><h5>Personal Information</h5></p>
                <Row>
                  <Col md={5}>
                    <Form.Label textAlign="text-left">First Name</Form.Label>
                    <Form.Control
                    required 
                    id="firstName" 
                    type="text" 
                    placeholder="First name" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required id="lastName" type="lastName" placeholder="Last Name" />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control required id="address" type="address" placeholder="Address" />
                  </Col>
                  <Col md={4}>
                    <Form.Label>City/State</Form.Label>
                    <Form.Control required id="cityState" type="cityState" placeholder="City/State" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid City/State.
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Postal/Zip Code</Form.Label>
                    <Form.Control required id="postalZipCode" type="postalZipCode" placeholder="Postal/Zip Code" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control required id="phoneNumber" type="phone" placeholder="Phone Number" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid phone number.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPaymentInformation">
              <Container>
              <p style={{textAlign:'left'}}><h5>Debit/Credit Card Information</h5></p>
                <Row>
                  <Col md={5}>
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control required id="fullName" type="fullName" placeholder="Full Name" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Debit/Credit Card Number</Form.Label>
                    <Form.Control required id="cardNumber" type="cardNumber" placeholder="Debit/Credit Card Number" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control required id="securityCode" type="securityCode" placeholder="Security Code" />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control required id="expirationDate" type="expirationDate" placeholder="MM/YY" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Container>
              <Row className="justify-content-md-center">
                <Col>
                
                    <Button variant="primary"  type="submit">
                    Register
                    
                    </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  ></MyVerticallyCenteredModal>

                </Col>
              </Row>
            </Container>
          </Form>

        </Col>

        <Col>
          <Image src= "registration.png" fluid></Image>
        </Col>


      </Row>

      <br/>
    </Container>
    
  );
}

export default Registration;
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body style={{textAlign:'center'}}>
        <h4>Registration Confirmed!</h4>
        <p>
          Check out our programs and start registering for games!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


