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

    var roundLabels = [];

    var numPlayers = props.settings[0];
    var numRounds = props.settings[1];

    for (let i = 1; i <= numPlayers; i++) {
        for (let j = 1; j <= numRounds; j++) {
            if (i == 1) {
                playerInputs.push(<Col>Round {j}</Col>)
            }
            roundInputs.push(
                <Col><Input class="form-control form-control-sm m-3" name={`player${i}-round${j}`} /></Col>
            )
        }
        playerInputs.push(<Col>{roundInputs} </Col>);
        roundInputs = [];
    }

    // Outputs the labels for the round number
    for (let i = 1; i <= numRounds; i++) {
        roundLabels.push(<Row class="w-8 bg-warning"> <p class="h-25">Round {i}</p></Row>)
    }

    function outputInputs() {
        /*for (let i = 0; i < props.settings[0]; i++) {
            outputPlayerInputs(playerInputs[i]);           
        }*/
        return (playerInputs);
    }

    return (
        <div>
            { //class="container-fluid d-inline"
            }
            <Container class="d-table">
                {
                    // to do
                    // add name box, add labels for rounds
                }
               
                <Row>
                 
               
                    {playerInputs}
                </Row>
                   
             
                 Players: {numPlayers} Rounds: {numRounds}
            </Container>            
        </div>
    );
}

export default Scorecard;