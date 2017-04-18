import React, { Component } from 'react';
import './App.css';
import Toprow from './components/Toprow';
import Secondrow from './components/Secondrow';
import Numbers from './components/Numbers';
import Maths from './components/Maths';





class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="keys toprow" />
            <p>
              <Toprow value="mrc" />
              <Toprow value="m-" />
              <Toprow value="m+" />
              <Maths value="/" />
            </p>

            <p>
            <div className="keys secondrow" />
            <Numbers value="7" />
              <Numbers value="8" />
                <Numbers value="9" />
                <Maths value="*" />
              </p>
              <p>
              <div className="keys numbers" />
              <Numbers value="4" />
                <Numbers value="5" />
                <Numbers value="6" />
                  <Maths value="-" />
                  </p>
                <p>
                <div className="keys numbers" />
                  <Numbers value="1" />
                <Numbers value="2" />
                  <Numbers value="3" />
                  <Maths value="+" />

                  </p>
                <p>
                <div className="keys numbers" />
                  <Numbers value="0" />
                <Numbers value="." />
                  <Numbers value="C" />
                  <Numbers value="=" />

                  </p>
              </div>
            </div>
    );
  }
}

export default App;
