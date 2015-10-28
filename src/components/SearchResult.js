import React from 'react';
import { Panel } from 'react-bootstrap';

const bsStyles = ['primary', 'success', 'info', 'warning', 'danger'];
export default class SearchResult extends React.Component {
  static propTypes = {
    results: React.PropTypes.array.isRequired,
  }

  render() {
    const {results} = this.props;
    console.log(results);
    return (
      <div>
        {results.map((result, idx) =>
          <Panel header={result.header} bsStyle={bsStyles[idx % 5]} key={idx}>
            {result.ctx.join('，')}
          < /Panel>
        )}
      </div>
    );
  }
}