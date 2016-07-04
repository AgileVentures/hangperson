import CorrectGuesses from '../src/correct_guesses.js'
import {expect} from 'chai';

describe("CorrectGuesses", function(){
	it("returns false if position was not correctly guessed", function(){
		const correctGuesses = new CorrectGuesses([{letter: 'b', positions: [1,2]}, {letter: 'c', positions: [4,5]}]);
		expect(correctGuesses.forPosition(3)).to.be.false;
	});
	it("returns c when position 5 was correctly guessed as b", function(){
		const correctGuesses = new CorrectGuesses([{letter: 'b', positions: [1,3]}, {letter: 'c', positions: [4,5]}]);
		expect(correctGuesses.forPosition(5)).to.eql('c')
	});
});