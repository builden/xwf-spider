import React from 'react';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

const areas = ['福田', '南山', '罗湖', '宝安', '龙岗', '龙华', '盐田', '光明', '大鹏', '坪山'];
const schtypes = ['小学', '初中', '不限'];

export default class ConditionGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areaKey: 0,
      schtypeKey: 0,
    };
  }

  onSelectArea = (event, eventKey) => {
    if (this.state.areaKey !== eventKey) {
      this.setState({ areaKey: eventKey });
    }
  }

  onSelectSchType = (event, eventKey) => {
    if (this.state.schtypeKey !== eventKey) {
      this.setState({ schtypeKey: eventKey });
    }
  }

  render() {
    const {areaKey, schtypeKey} = this.state;
    return (
      <ButtonGroup>
        <DropdownButton bsStyle="link" bsSize="large" title={areas[areaKey]} id={`dropdown-area`} key={0}>
          {areas.map((area, i) =>
            <MenuItem eventKey={i} active={(i === areaKey)} key={i} onSelect={this.onSelectArea}>{area}</MenuItem>
          )}
        </DropdownButton>
        <DropdownButton bsStyle="link" bsSize="large" title={schtypes[schtypeKey]} id="dropdown-schtype" key={1}>
          {schtypes.map((schtype, i) =>
            <MenuItem eventKey={i} active={(i === schtypeKey)} key={i} onSelect={this.onSelectSchType}>{schtype}</MenuItem>
          )}
        </DropdownButton>
      </ButtonGroup>
    );
  }
}