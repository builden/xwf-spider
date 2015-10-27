import React from 'react';
import {Navbar, NavBrand} from 'react-bootstrap';

export default class NavMain extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <NavBrand><a href="#">美一间</a></NavBrand>
      </Navbar>
    );
  }
}