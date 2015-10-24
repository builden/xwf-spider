import React from 'react';
import {Button} from 'react-bootstrap';

class LoadingButton extends React.Component {
  static defaultProps = {
    bsSt: 'aaa',
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    isLoading: false,
  }

  handleClick = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    const isLoading = this.state.isLoading;
    console.log(this.props.bsStyle);
    console.log(this.props.bsSt);
    return (
      <Button
        bsStyle="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
        >
        {isLoading ? 'Loading...' : 'Loading state'}
      </Button>
    );
  }
}

export default LoadingButton;
