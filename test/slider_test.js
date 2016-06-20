import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Slider from '../src/slider.jsx';
import {expect} from 'chai';

describe("slider", function() {
  it("slides", function() {
    expect(shallow(<Slider />).contains()).to.be.true;
  });
});
