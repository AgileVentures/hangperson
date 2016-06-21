import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Slider from '../src/slider.jsx';
import GoldTagLine from '../src/goldtagline.jsx'
import {expect} from 'chai';

describe("slider", function() {
  it("defaults to 10 pieces of gold", function() {
    expect(shallow(<Slider />).contains(<GoldTagLine goldPieces="10"/>)).to.be.true;
  });
  it("changes description when slider is moved", function(){
    const slider = shallow(<Slider />);
    slider.find("input").simulate('change', {target: {value: 15}})
    expect(slider.contains(<GoldTagLine goldPieces="15"/>)).to.be.true;
  });
});
