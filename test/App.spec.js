import React from 'react';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';

import App from '../src/client/Components/App';

describe('<App />', () => {
  it('should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  })

  it('should render out the correct amount of <Item /> components', () => {
    const wrapper = shallow(<App />);
    // debounce to allow ajax request to respond
    setTimeout(() => {
      expect(wrapper.find('Item')).to.have.length(6);
    }, 500)
  })
});