import React from "react";
import { shallow } from "enzyme";

import Header from './index';
import { findByTestAttr } from '../../../utils/tests/index'; 

const setup = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component  = setup();
  })

  describe('Nested', () => {

    it('It should pass', () => {
      // console.log(component.debug());
      expect(1).toBe(1);
    });
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, "header");
    
    expect(wrapper.length).toBe(1);
  });
  
  it('Should render number of tables', () => {
    const wrapper = findByTestAttr(component, "tables-number");
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
  });
});