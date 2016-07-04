import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LetterGuessBox from '../src/letter_guess_box.jsx'
import {expect} from 'chai';

describe("letter_guess_box", function() {
  it("prompts the player to enter a letter", function() {
    const letter_guess_box = shallow(< LetterGuessBox/>);
    expect(letter_guess_box.text()).to.contain("Guess a letter");
  });
  it("allows user to enter a letter", function() {
    const letter_guess_box = shallow(< LetterGuessBox/>);
    letter_guess_box.find("input").simulate('change', {target: {value: "A"}});
  });
});
