import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Item from '../src/client/Components/Item';

describe('<Item />', () => {
  it('should exist', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper).to.exist;
  });

  // it('should have a working add to cart button', () => {
  //   const wrapper = mount(<Item addToCart={spy} />);
  //   const spy = sinon.spy();
  //     wrapper.find('button.cart_btn').simulate('click');
  //     expect(spy.calledOnce).to.equal(true);
  // });
});

/* additional things to test for: did the item receive all the props it requires? does the price conditionally change when the 
checkbox is marked? Does the color change? Does the add to cart button work? Do the images load? This could all be done using Jest
and Enzyme */