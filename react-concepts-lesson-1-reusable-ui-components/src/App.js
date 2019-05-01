import React, { Component } from 'react';

import Alert from './ui-components/Alert';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Alert
          type="success"
          message="Sign up successful."
        />
        <Alert
          type="info"
          message="Database is almost full."
        />
      </div>
    );
  }
}

export default App;
