import React, {PureComponent} from 'react';

import Show from './show';
import Calc from './calc';


export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      height: 182,
      weight: 90
    };

    this.resetData = this.resetData.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  resetData() {
    this.setState({
      height: 182,
      weight: 90,
    });
  }

  changeValue(type, e) {
    this.setState({
      [type]: e.target.value,
    });
  }

  render () {
    const {height, weight} = this.state;
    console.log("app");

    return (
      <div>
        <h2><center>BMI Healthy Weight Calculator</center></h2>
        <br/>
        <center>
          <Show height={height} weight={weight} />
          <Calc
            value={height}
            type='h'
            onChange={(e) => this.changeValue('height', e) }
          />
          <Calc
            value={weight}
            type='w'
            onChange={(e) => this.changeValue('weight', e) }
          />
          <button onClick={this.resetData}>Reset</button>
        </center>
      </div>
    );
  };
}
