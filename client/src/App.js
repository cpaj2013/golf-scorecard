import './App.css';
import {
    Scorecard,
    Options,
    RulesModal,
    SetupModal
} from './components';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="App">
          <Container>
              <Row>
                  <Col>Text<RulesModel /></Col>
                  <Col>Text<SetupModal /></Col>
              </Row>
              <Scorecard />
          </Container>
      </div>
  );
}

export default App;
