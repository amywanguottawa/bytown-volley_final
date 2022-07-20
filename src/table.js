import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import Modal from 'react-bootstrap/Modal';
import filterFactory, { textFilter, selectFilter, dateFilter, Comparator } from "react-bootstrap-table2-filter";
import { Button, Collapse, ModalTitle } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';

var day;
var league;
var location;
var court;

function DataList() {
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const [modalShow, setModalShow] = React.useState(false);

    const leagueOptions = {
        0: 'Co-Ed doubles',
        1: 'Co-Ed fours'
    };
    const locationOptions = {
        0: 'Shefford Park',
        1: 'Kanata Courts',
        2: 'Rideau Sport Center',
        3: 'Carlingwood YMCA',
        4: 'Taggart YMCA'

    };

    const [programList, setProgramList] = useState([]);

    const selectRow = {
        mode: 'radio',
        bgColor: 'lightblue',
        clickToSelect: true,
        hideSelectAll: true,
        selected: [],
        onSelect: (row, isSelected, rowIndex) => {
            day = row.day;
            league = row.league;
            location = row.location;
            court = row.court;
            if (isSelected) {
                setButtonDisabled(false);
            }
            else {
                setButtonDisabled(true);
            }




        }
    };
    const columns = [
        {
            dataField: 'day',
            text: 'Day',
            sort: true,
            filter: dateFilter({ comparators: [Comparator.EQ],
                withoutEmptyComparatorOption: true,
                placeholder: 'Day',
                comparatorStyle: { display: 'none' }, 
                style: { display: 'inline-grid' },  // custom the style on date filter

                
                })
        },
        {
            dataField: 'league', text: 'League',
            sort: true,
            filter: textFilter()

        },
        {
            dataField: 'location', text: 'Location',
            sort: true,
            filter: textFilter()
        },
        {
            dataField: 'court', text: 'Court', sort: true,
            filter: textFilter()

        },
        {
            dataField: 'price', text: 'Price', sort: true,
        },


    ]

    useEffect(() => {
        fetch("./programs.json")
            .then(response => response.json())
            .then(result => setProgramList(result))
            .catch(error => console.log(error));
    }, [])
    return <div>
        <BootstrapTable
            bootstrap4
            keyField="court"
            columns={columns}
            data={programList}
            filter={filterFactory()}
            selectRow={selectRow}

        />
        <Button variant="primary" onClick={() => setModalShow(true)} disabled={buttonDisabled}>
            Register
        </Button>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        ></MyVerticallyCenteredModal>
    
    </div>
}
export default DataList;
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
            <Modal.Body style={{ textAlign: 'left' }}>
                <h4 style={{ textAlign: 'center' }} >You are Registering for:</h4>
                

                <Container>
                    <Row>
                        <Col sm={3}>
                            <b>League:</b>
                            <br></br>
                            <b>Location:</b>
                            <br></br>
                            <b>Court:</b>
                            <br></br>
                            <b>Day:</b>
                        </Col>

                        <Col sm={9}>
                            {league}
                            <br></br>
                            {location}
                            <br></br>
                            {court}
                            <br></br>
                            {day}
                        </Col>
                    </Row>


                </Container>


            </Modal.Body>
            <Modal.Footer class="text-center">
                <Container>
                  
                    <Button onClick={props.onHide} variant="danger">Cancel</Button>
                       
                    <Button style={{ marginLeft: '50px' }}onClick={props.onHide} variant="success">Confirm</Button>

                </Container>

                <em>** Your card will be charged once you press Confirm</em>
            </Modal.Footer>
            <br/>
        </Modal>
    );
}

