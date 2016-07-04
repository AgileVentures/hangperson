var React = require("react");
var ReactDOM = require('react-dom');
import WordDisplay from './word_display.jsx';
import CorrectGuesses from './correct_guesses.js'
var $ = require("jquery");

$().ready(function(){
	if($('#app')){
		ReactDOM.render(
  			React.createElement(WordDisplay, {wordLength: '6', correctGuesses: new CorrectGuesses([])}),
  			document.getElementById('app')
   		);
	}
});
