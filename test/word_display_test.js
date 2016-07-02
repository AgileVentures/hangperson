import React from 'react';
import { shallow, mount, render } from 'enzyme';
import WordDisplay from '../src/word_display.jsx'
import {expect} from 'chai';

describe("word_display", function() {
  it("displays 6 underscores when initialized with a 6 letter word and 0 correct guesses", function() {
    const word_display = shallow(<WordDisplay />);
  });
});

