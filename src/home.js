import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function Home() {
    return (
      <Container fluid="md" style={{textAlign:'left'}}>
        <br/>
        <Row>
            <Col sm={8}>
            <p>
            Men’s, women’s and co-rec volleyball drop-in games are offered in the winter, spring, summer and fall.
            
            <br />
            <br />
            <h5>Summer 2022</h5>
            Bytown Volley operates 32 indoor volleyball courts and 46 beach volleyball courts at 2 locations
            in the Ottawa area.
            <br />
            <br />
            <b>Want to play? Register now!</b>
            <br />
            <b>Already registered? Take a look at our programs offered and book your slot.</b></p>
            </Col>
            <Col md={4}>
             <Image src='home.png' fluid>

             </Image>
            </Col>
        </Row>
        <br/>

        
      
      
      </Container>
    );
  }
  
  export default Home;