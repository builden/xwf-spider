import React from 'react';
import {Image} from 'react-bootstrap';

export default class Logo extends React.Component {
  render() {
    return (
      <Image id="logo" src="src/img/logo.png" responsive width="175"/>
    );
  }
}
