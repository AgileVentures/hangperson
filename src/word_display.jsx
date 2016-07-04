import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class WordDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	var underscores = [];
  	for(var i = 0; i < this.props.wordLength; i++){
      var bestGuessForPosition = this.props.correctGuesses.forPosition(i+1);
  		if(i === 0){
        if(bestGuessForPosition){
  			   underscores.push(bestGuessForPosition);
        }else{
            underscores.push("_")
        }   
  		}else{
         if(bestGuessForPosition){
           underscores.push(" "+bestGuessForPosition);
        }else{
            underscores.push(" _")
        }  
  		}
   	}
    return(
      <div>{underscores}</div>
    );
  }
}


WordDisplay.propTypes = propTypes;
WordDisplay.defaultProps = defaultProps;

export default WordDisplay;
