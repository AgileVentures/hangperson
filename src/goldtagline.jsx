import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class GoldTagLine extends React.Component {
  constructor(props) {
    super(props);
    this.goldText = this.goldText.bind(this);
  }
  goldText(){
    if(this.props.goldPieces){
      return this.props.goldPieces+" "+ "pieces of gold!";
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