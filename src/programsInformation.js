import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import {Row} from 'react-bootstrap';
import CardGroup from "react-bootstrap/esm/CardGroup";
import Image from "react-bootstrap/Image";


function ProgramsInformation() {
    

    return (
        
        <Container style={{textAlign:'left'}}>
            <h3>Programs Offered</h3>
            <h5>Outdoor (Beach)</h5>
            <p>Beach volleyball is a team sport played by two teams of two or four players on a sand court.</p>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img as={Image} variant="top" src="beach_coed_doubles.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Co-Ed Doubles</Card.Title>
                        <Card.Text>
                                Teams of 2 (must be one Women and one Men) <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img as={Image} variant="top" src="beach_men_doubles.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Men's Doubles</Card.Title>
                        <Card.Text>
                                Teams of 2 Men <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.43m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img as={Image} variant="top" src="beach_women_doubles.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Women's Doubles</Card.Title>
                        <Card.Text>
                                Teams of 2 Women <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card style={{ width: '8rem' }}>
                <Card.Img as={Image} variant="top" src="beach_coed_fours.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Co-Ed Fours</Card.Title>
                        <Card.Text>
                                Teams of 4 (must have a minimum of 2 Women on the court) <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img as={Image} variant="top" src="beach_men_fours.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Men's Fours</Card.Title>
                        <Card.Text>
                                Teams of 4 Men <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.43m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img as={Image} variant="top" src="beach_women_fours.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Women's Fours</Card.Title>
                        <Card.Text>
                                Teams of 4 Women <br/>
                                Court size: 16m x 8m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>


            <br/>
            <h5>Indoor (Gymnasium)</h5>
            <p>Indoor volleyball is a team sport played by two teams of six players on a gym court.</p>
            <CardGroup>
                <Card style={{ width: '8rem' }}>
                <Card.Img as={Image} variant="top" src="indoor_coed_sixes.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Co-Ed Sixes</Card.Title>
                        <Card.Text>
                                Teams of 6 (must have a minimum of 2 Women on the court) <br/>
                                Court size: 18m x 9m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img as={Image} variant="top" src="indoor_men_sixes.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Men's Sixes</Card.Title>
                        <Card.Text>
                                Teams of 6 Men <br/>
                                Court size: 18m x 9m <br/>
                                Net height: 2.43m
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img as={Image} variant="top" src="indoor_women_sixes.png" height={475}/>
                    <Card.Body>
                        <Card.Title>Women's Sixes</Card.Title>
                        <Card.Text>
                                Teams of 6 Women <br/>
                                Court size: 18m x 9m <br/>
                                Net height: 2.24m
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <br/>
            <h5>Game Rules</h5>
            <Row>
                <h6>The Serve:</h6>
                <p>
                    The Service can be done anywhere behind the back line. Your foot cannot touch or go passed (under or over) the line while serving.
                    <br/>The ball can touch the net.
                </p>
            </Row>
            <Row>
                <h6>Serve Reception:</h6>
                <p>
                    Must be taken cleanly. No lift is allowed. No volleys allowed on serve reception.(top tiers)
                    <br/>If receiving players cannot see server, you can ask the opponent to move so your view is not obstructed.
                    <br/>If the ball in the same motion hits you in the arms/chest/shoulders twice, it only counts as ONE contact.
                </p>
            </Row>
            <Row>
                <h6>Setting:</h6>
                <p>
                    If done with a volley: cannot be a double touch, but players are allowed to hold the ball longer for better control.
                    <br/>If the set goes over the net and the volley was clean, it's good.
                    <br/>If the player's intention is to volley the ball over the net, the player must be square to the direction he is sending the ball. (forward or backward)
                </p>
            </Row>
            <Row>
                <h6>Hitting:</h6>
                <p>
                    Open hand tips are not allowed.
                    <br/>When hitting, contact with ball must be crisp.
                    <br/>Roll shots are ok.
                </p>
            </Row>
            <Row>
                <h6>Blocking:</h6>
                <p>
                    The block counts as a hit, the team only has two more hits before they must send it over.
                    <br/>The blocking player can block the ball and then pop it up but this counts as two hits.
                </p>
            </Row>

        </Container>

        
    );
  }

  
  
  export default ProgramsInformation;