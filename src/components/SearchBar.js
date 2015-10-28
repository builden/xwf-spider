import React from 'react';
import {Input, Button} from 'react-bootstrap';

export default class SearchBar extends React.Component {
  static propTyps = {
    onSearch: React.PropTypes.func.isRequired,
  }

  render() {
    const {onSearch} = this.props;
    const innerButton = (<Button bsStyle="warning" onClick={(e) => onSearch(this.refs.input.getValue())}>找一下</Button>);
    return (
      <form>
        <Input type="text" bsSize="large" ref="input"
               placeholder="输入小区名称" buttonAfter={innerButton}/>
      </form>
    );
  }
}