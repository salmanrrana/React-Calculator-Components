import React, { Component } from 'react';

class Numbers extends Component {
  render(){
    return (
      <input value={ this.props.value } type="button" className="button black" />
    );
  }
}

export default Numbers;
