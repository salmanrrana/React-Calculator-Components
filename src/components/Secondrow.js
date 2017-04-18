import React, { Component } from 'react';

class Secondrow extends Component {
  render(){
    return (
      <input value={ this.props.value } type="button" className="button gray" />
    );
  }
}

export default Secondrow;
