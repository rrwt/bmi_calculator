import React from 'react';


export default class Bmi extends React.PureComponent {
  calculateBMI(height, weight) {
    return weight * 10000 / (height * height);
  }

  getEq(bmi) {
    if(bmi < 22){
      return "underweight";
    }
    else if (bmi >= 22 && bmi < 25) {
      return "normal";
    }
    else if (bmi >= 25 && bmi < 28) {
      return "overweight";
    }
    else {
      return "obese";
    }
  }

  render() {
    console.log('bmi')
    const {height, weight} = this.props;
    const bmi = this.calculateBMI(height, weight);
    return (
      <div>
        <h3>BMI = <b>{bmi}</b></h3>
        <h4>{this.getEq(bmi)}</h4>
      </div>
    );
  }
}
