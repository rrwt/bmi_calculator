import React from 'react';


export default class Calc extends React.PureComponent {
  render() {
    const {value, type} = this.props;
    console.log('calc')

    return(
      <div>
        <label>{ type === 'h' ? 'Height(cm)': 'Weight(kg)'}</label>
        <input
          type="number"
          step="0.01"
          value={value}
          onChange={ this.props.onChange }
        />
      </div>
    );
  }
}
