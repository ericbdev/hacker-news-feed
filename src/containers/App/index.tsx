import * as React from 'react';

import PageInterface from '../../interfaces/PageInterface';

class App extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default App;
