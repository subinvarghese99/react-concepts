import React, { Component } from 'react';

import Alert, { DismissableAlert, AnimatedAlert } from './ui-components/Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showAlert: true
    };

    this.toogleAlert = this.toogleAlert.bind(this);
  }

  toogleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    });
  }

  render() {
    return (
      <div className="container">
        <Alert type="success" toggleAlert={this.toogleAlert} show={this.state.showAlert}>
          <small>small message</small>
        </Alert>
        <DismissableAlert type="info" toggleAlert={this.toogleAlert} show={this.state.showAlert} message="Dismissable" />
        <AnimatedAlert type="warning" toggleAlert={this.toogleAlert} show={this.state.showAlert} message="Animated" />        
      </div>
    );
  }
}

export default App;
