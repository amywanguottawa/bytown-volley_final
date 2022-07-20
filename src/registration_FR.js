import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Registration_FR() {

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
          <p style={{textAlign:'left'}}><h3>Formulaire d'Inscription</h3></p>

            <Form.Group className="mb-3" controlId="formPersonalInformation">
              <Container>
              <p style={{textAlign:'left'}}><h5>Renseignements Personnels</h5></p>
                <Row>
                  <Col md={5}>
                    <Form.Label textAlign="text-left">Prénom</Form.Label>
                    <Form.Control
                    required 
                    id="firstName" 
                    type="text" 
                    placeholder="Prénom" />
                    <Form.Control.Feedback>Ça a l'air bien!</Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Nom de famille</Form.Label>
                    <Form.Control required id="lastName" type="lastName" placeholder="Nom de famille" />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control required id="address" type="address" placeholder="Adresse" />
                  </Col>
                  <Col md={4}>
                    <Form.Label>Ville/État</Form.Label>
                    <Form.Control required id="cityState" type="cityState" placeholder="Ville/État" />
                    <Form.Control.Feedback type="invalid">
                    Veuillez fournir une ville ou un État valide.
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control required id="postalZipCode" type="postalZipCode" placeholder="Code Postal" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Numéro de Téléphone</Form.Label>
                    <Form.Control required id="phoneNumber" type="phone" placeholder="Numéro de Téléphone" />
                    <Form.Control.Feedback type="invalid">
                    Veuillez fournir un numéro de téléphone valide.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPaymentInformation">
              <Container>
              <p style={{textAlign:'left'}}><h5>Informations de Carte de Débit/Crédit</h5></p>
                <Row>
                  <Col md={5}>
                    <Form.Label>Nom sur la Carte</Form.Label>
                    <Form.Control required id="fullName" type="fullName" placeholder="Nom sur la Carte" />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Numéro de Carte de Débit/Crédit</Form.Label>
                    <Form.Control required id="cardNumber" type="cardNumber" placeholder="Numéro de Carte de Débit/Crédit" />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Code de Sécurité</Form.Label>
                    <Form.Control required id="securityCode" type="securityCode" placeholder="Code de Sécurité" />
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Label>Date d'Expiration</Form.Label>
                    <Form.Control required id="expirationDate" type="expirationDate" placeholder="Moi/Anné" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Container>
              <Row className="justify-content-md-center">
                <Col>
                
                    <Button variant="primary"  type="submit">
                    S'Inscrire
                    
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

  export default Registration_FR;


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