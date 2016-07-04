import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class LetterGuessBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.setState({value: event.target.value });
  }
  render() {
    return (
      <div>
        Guess a letter
      </div>
    );
  }
}

LetterGuessBox.propTypes = propTypes;
LetterGuessBox.defaultProps = defaultProps;

export default LetterGuessBox;
