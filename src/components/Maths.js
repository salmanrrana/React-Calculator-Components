import React, { Component } from 'react';

class Maths extends Component {
  render(){
    return (
      <input value={ this.props.value } type="button" className="button pink" />
    );
  }
}

export default Maths;
