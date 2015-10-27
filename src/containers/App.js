import React from 'react';
import NavMain from '../components/NavMain';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import {Grid, Row, Col, ButtonGroup, DropdownButton, MenuItem, Panel} from 'react-bootstrap';

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
              <ButtonGroup>
                <DropdownButton bsStyle="link" bsSize="large" title="南山" id={`dropdown-basic-${2}`} key={2}>
                  <MenuItem eventKey="1">福田</MenuItem>
                  <MenuItem eventKey="2" active>南山</MenuItem>
                  <MenuItem eventKey="3">罗湖</MenuItem>
                  <MenuItem eventKey="4">宝安</MenuItem>
                  <MenuItem eventKey="5">龙岗</MenuItem>
                  <MenuItem eventKey="6">龙华</MenuItem>
                  <MenuItem eventKey="7">盐田</MenuItem>
                  <MenuItem eventKey="8">光明</MenuItem>
                  <MenuItem eventKey="9">大鹏</MenuItem>
                  <MenuItem eventKey="10">坪山</MenuItem>
                </DropdownButton>
                <DropdownButton bsStyle="link" bsSize="large" title="小学" id="dropdown-size-large">
                  <MenuItem eventKey="1" active>小学</MenuItem>
                  <MenuItem eventKey="2">初中</MenuItem>
                  <MenuItem eventKey="3">不限</MenuItem>
                </DropdownButton>
              </ButtonGroup>
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
