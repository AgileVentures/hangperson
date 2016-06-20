import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Slider from '../src/slider.jsx';
import GoldTagLine from '../src/goldtagline.jsx'
import {expect} from 'chai';

describe("slider", function() {
  it("slides", function() {
    expect(shallow(<Slider />).contains(<GoldTagLine goldPieces="10"/>)).to.be.true;
  });
});
