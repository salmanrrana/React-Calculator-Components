import React, { Component } from 'react';

class Toprow extends Component {
  render(){
    return (
      <input value={ this.props.value } type="button" className="button gray" />
    );
  }
}

export default Toprow;
