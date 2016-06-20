import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class GoldTagLine extends React.Component {
  constructor(props) {
    this.goldText = this.goldText.bind(this);
    super(props);
  }
  goldText(){
    if(this.prop.goldPieces){
      return this.prop.goldPieces+" "+ "pieces of gold!";
    }else{return "";}
  }
  render() {
    const text = this.goldText();
    return (
      <h5>{text}</h5>
    );
  }
}

GoldTagLine.propTypes = propTypes;
GoldTagLine.defaultProps = defaultProps;

export default GoldTagLine;