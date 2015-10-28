import React from 'react';
import NavMain from '../components/NavMain';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import ConditionGroup from '../components/ConditionGroup';
import SearchResult from '../components/SearchResult';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectArea, selSchtype } from '../actions';
import areaSchools from '../../db/area-schools.json';
import schoolVillage from '../../db/school-village.json';

class App extends React.Component {
  onSearch = (text) => {
    console.log(this.props);
  }

  render() {
    const { dispatch, area, schtype } = this.props;
    const results = [];
    results.push({header: schtype, ctx: areaSchools[area][schtype]});
    return (
      <div>
        <NavMain />
        <Logo/>
        <Grid>
          <Row>
            <Col md={8} mdOffset={2} xs={12}><SearchBar onSearch={this.onSearch}/></Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <ConditionGroup area={area} schtype={schtype}
                              onSelectArea={ (area) => dispatch(selectArea(area)) }
                              onSelectSchtype={ (schtype) => dispatch(selSchtype(schtype)) }/>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2} xs={12}>
              <SearchResult results={results}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { area, schtype } = state;
  return {
    area,
    schtype,
  };
}
export default connect(mapStateToProps)(App);
