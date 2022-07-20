import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactUs() {
    return (

      
      <Container>
        <br />
            <Row md={4}>
                <Col>
                    <Image src= "rideau_sports_centre.png" fluid></Image>
                </Col>
                <Col>
                    <p style={{textAlign:'left'}}>
                        <h4>Contact Information</h4> <br/>
                        <h6>Email</h6>
                        bytown.volley@gmail.com
                        <br/><br/>
                        <h6>Main Telephone Number</h6> 
                        613-874-0032
                    </p>
                </Col>
                <Col>
                   <Form>
                        <Form.Group className="mb-3" controlId="formFeedback">
                            <Container style={{textAlign:'left'}}>
                            <p><h6>We want to hear your feedback!</h6></p>
                                <Row>
                                    <Form.Label textAlign="text-left">Email Address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Email address"/>
                                </Row>
                                <Row>
                                    <Form.Label textAlign="text-left">Feedback</Form.Label>
                                    <textarea rows="5" cols="60" id="feedback" type="feedback" placeholder="Enter text here"></textarea>
                                </Row>
                            </Container>
                            <Form.Text className="text-muted">
                            Thank you for providing us your feedback!
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <br />
            <Row md={4}>
                <Col>
                    <Image src= "shefford_park.png" fluid></Image>
                </Col>
                <Col>
                    <p style={{textAlign:'left'}}>
                        <h4>Our Locations:</h4> <br/>
                        <h6>Shefford Park</h6>
                        813 Shefford, Ottawa, On
                        <br/>
                        613-545-5342
                        <br/><br/>
                        <h6>Kanata Courts</h6> 
                        1565 Maple Grove, Kanata, On
                        <br/>
                        613-249-5409
                    </p>
                </Col>
                <Col>
                    <p style={{textAlign:'left'}}>
                        <br/><br/>
                        <h6>Rideau Sports Center</h6>
                        1 Donald St., Ottawa, On
                        <br/>
                        613-673-9875
                        <br/><br/>
                        <h6>Carlingwood YMCA</h6> 
                        2121 Carling Ave., Ottawa, On
                        <br/>
                        613-763-2988
                    </p>
                </Col>
                <Col>
                    <p style={{textAlign:'left'}}>
                        <br/><br/>
                        <h6>Taggart YMCA</h6>
                        190 Argyle Ave., Ottawa, On
                        <br/>
                        613-009-1214
                    </p>
                </Col>
            </Row>
        </Container>
    );
  }
  
  export default ContactUs;