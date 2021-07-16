/**
 *  Golf Scorecard v1.0.0
 *  Created by Chris Pajtas
 *
 *  Scorecard component that allows users to enter their score
 *
 * */
import React, { Component, ScrollView } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    InputGroup,
    Label,
    Input
} from 'reactstrap';

const Scorecard = (props) => {
    var playerInputs = [];
    var roundInputs = [];

    for (let i = 1; i <= props.settings[0]; i++) {
        for (let j = 1; j <= props.settings[1]; j++) {
            roundInputs.push(
                <Input name={`player${i}-round${j}`} />
            )
        }
        playerInputs.push(<Col> {roundInputs} </Col>);
        roundInputs = [];
    }

    function outputPlayerInputs(inputs) {
        return (
            <Col> {inputs} </Col>
            )
    }

    function outputInputs() {
        /*for (let i = 0; i < props.settings[0]; i++) {
            outputPlayerInputs(playerInputs[i]);           
        }*/
        return (playerInputs);
    }

    return (
        <div>
            <Container>

                <Row>
                    {playerInputs}
                </Row>
                 Players: {props.settings[0]} Rounds: {props.settings[1]}
            </Container>            
        </div>
    );
}

export default Scorecard;