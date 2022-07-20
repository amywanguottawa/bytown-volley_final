import { Col, Row, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Dtable from './table.js';

function BrowsePrograms() {
    return (
        
        <Container style={{textAlign:'left'}}>
            <Row>
                <h3><p style={{textAlign:'left'}}>Register for a game!</p></h3>
            </Row>
          
              
        <Dtable></Dtable>
        <br />

        </Container>
      
    );
  }
 {/* <option>Co-Ed Doubles</option>
                                        <option>Men Doubles</option>
                                        <option>Women Doubles</option>
                                        <option>Co-Ed Fours</option>
                                        <option>Men Fours</option>
                                        <option>Women Fours</option>
                                        <option>Co-Ed Sixes</option>
                                        <option>Men Sixes</option>
                                        <option>Women Sixes</option> */}
  
  
  export default BrowsePrograms;