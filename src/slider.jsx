import React, { PropTypes } from 'react';
import GoldTagLine from './goldtagline.jsx'

const propTypes = {};

const defaultProps = {};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.goldPieces = this.goldPieces.bind(this);
  }

  goldPieces(){
    if(this.state){
      return this.state.value + "";
    }else{return "10";}
  }
  handleChange(event) {
    this.setState({value: event.target.value });
  }
  render() {
    return (
      <div>
      <GoldTagLine goldPieces = {this.goldPieces()}/>
      <input type="range" min="0" max="50" name="points" defaultValue="10" step="5" onChange={this.handleChange.bind(this)}></input>
      </div>   
    );
  }
}

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;