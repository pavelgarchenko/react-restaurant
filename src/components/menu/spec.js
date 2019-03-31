import React from "react";
import { shallow } from "enzyme";

import Menu from './index';
import { findByTestAttr } from '../../../utils/tests/index'; 

const setup = (props={}) => {
  const component = shallow(<Menu {...props} />);
  return component;
};


describe('Menu Component', () => {
  
  let component;
  beforeEach(() => {
    component  = setup();
  })
    
  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, "menu-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it('Should have 12 menu items', () => {
    const wrapper = findByTestAttr(component, "menu-wrapper");
    expect(wrapper.children().length).toBe(12);
  });
});
