import React from 'react';
import {Input, Button} from 'react-bootstrap';

const innerButton = (
  <Button bsStyle="warning">找一下</Button>
);

export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <Input type="text" bsSize="large" placeholder="输入小区名称" buttonAfter={innerButton} />
      </form>
    );
  }
}