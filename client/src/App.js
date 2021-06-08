import './App.css';
import Scorecard from './components/Scorecard';
import RulesModal from './components/RulesModal';
import SetupModal from './components/SetupModal';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col><SetupModal /></Col>
                        <Col><RulesModal /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
