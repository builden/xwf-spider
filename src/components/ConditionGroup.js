import React from 'react';
import {ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

const areas = ['福田', '南山', '宝安', '龙岗', '龙华', '盐田', '光明', '大鹏', '坪山'];
const schtypes = ['小学', '初中', '不限'];

export default class ConditionGroup extends React.Component {
  static propTypes = {
    area: React.PropTypes.string.isRequired,
    schtype: React.PropTypes.string.isRequired,
    onSelectArea: React.PropTypes.func.isRequired,
    onSelectSchtype: React.PropTypes.func.isRequired,
  }

  render() {
    const {area, schtype, onSelectArea, onSelectSchtype} = this.props;
    const activeAreaIdx = areas.indexOf(area);
    const activeSchtypeIdx = schtypes.indexOf(schtype);
    return (
      <ButtonGroup>
        <DropdownButton bsStyle="link" bsSize="large" title={area} id={`dropdown-area`} key={0}>
          {areas.map((ar, i) =>
            <MenuItem eventKey={i}
                      active={(i === activeAreaIdx)}
                      key={i}
                      onSelect={(e) => onSelectArea(e.target.text)}>
                      {ar}
            </MenuItem>
          )}
        </DropdownButton>
        <DropdownButton bsStyle="link" bsSize="large" title={schtype} id="dropdown-schtype" key={1}>
          {schtypes.map((st, i) =>
            <MenuItem eventKey={i}
                      active={(i === activeSchtypeIdx)}
                      key={i}
                      onSelect={(e) => onSelectSchtype(e.target.text)}>
                      {st}
            </MenuItem>
          )}
        </DropdownButton>
      </ButtonGroup>
    );
  }
}