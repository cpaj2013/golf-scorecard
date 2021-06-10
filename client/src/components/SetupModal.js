/**
 *  Golf Scorecard v1.0.0
 *  Created by Chris Pajtas
 *
 *  Setup modal component that lets user manage settings
 *
 * */

import React, { useState, Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

const SetupModal = (props) => {
    const {
        className
    } = props;

    const [players, setPlayers] = useState(2);

    const [rounds, setRounds] = useState(9);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>Setup</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader>
                    Game Setup
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            <Label for="numPlayers">Number of Players</Label>
                            <Input type="select" onChange={e => setPlayers(e.target.value)} name="numPlayers" id="numPlayersSelect">
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Input>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="numRounds">Number of Rounds</Label>
                            <Input type="select" onChange={e => setRounds(e.target.value)} name="numRounds" id="numRoundsSelect">
                                <option>9</option>
                                <option>18</option>
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={e => {
                        props.setSettings(players, rounds);
                        e.preventDefault();
                        toggle();
                    }}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                 
                </ModalFooter>
           
            </Modal>
        </div>
    );
}

export default SetupModal;