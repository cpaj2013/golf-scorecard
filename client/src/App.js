import './App.css';
import Scorecard from './components/Scorecard';
import RulesModal from './components/RulesModal';
import SetupModal from './components/SetupModal';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: [2,9]
        }
    }

    /**
     * Sets the settings of the scoreboard
     * 
     * @param {any} p number of players
     * @param {any} r number of rounds
     */
    setSettings = (p, r) => {
        this.setState({settings: [p, r]})
    }

    render() {
        const { settings } = this.state;
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col><SetupModal setSettings={this.setSettings}/></Col>
                        <Col><RulesModal /></Col>
                    </Row>
                    <Row>
                        <Col><Scorecard settings={settings} /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
