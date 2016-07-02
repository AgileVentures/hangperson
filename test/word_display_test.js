import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WordDisplay from '../src/word_display.jsx'
import {expect} from 'chai';

describe("word_display", function() {
  it("displays 6 underscores when initialized with a 6 letter word and 0 correct guesses", function() {
    const word_display = shallow(<WordDisplay wordLength="6"/>);
    expect(word_display.text()).to.equal("_ _ _ _ _ _");
  });
  it("displays 8 underscores when initialized with a 8 letter word and 0 correct guesses", function() {
    const word_display = shallow(<WordDisplay wordLength="8"/>);
    expect(word_display.text()).to.equal("_ _ _ _ _ _ _ _");
  });
});

