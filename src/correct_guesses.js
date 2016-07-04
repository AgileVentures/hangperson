class CorrectGuesses {
  constructor(correctGuessesArray) {
    this.correctGuessesArray = correctGuessesArray;
  }

  forPosition(position){
  	var letter;
    this.correctGuessesArray.forEach(guess => {
    	if(guess.positions.includes(position)){
    		letter = guess.letter;
    	}
    });
    if(letter === undefined){
    	return false;
    }
  	return letter;
  }

 
}

export default CorrectGuesses;