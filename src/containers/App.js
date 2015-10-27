import React from 'react';
import NavMain from '../components/NavMain';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import ConditionGroup from '../components/ConditionGroup';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavMain />
        <Logo/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2} xs={12}><SearchBar/></Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <ConditionGroup />
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <Panel header="育才小学" bsStyle="primary">
                <a href="#">小区1</a>，<a href="#">小区2</a>，<a href="#">小区3</a>
              </Panel>

              <Panel header="育才中学" bsStyle="success">
                Panel content
              </Panel>

              <Panel header="学校3" bsStyle="info">
                Panel content
              </Panel>

              <Panel header="学校四" bsStyle="warning">
                Panel content
              </Panel>

              <Panel header="学校5" bsStyle="danger">
                Panel content
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
