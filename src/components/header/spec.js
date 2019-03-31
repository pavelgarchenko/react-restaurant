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
  let props;
  beforeEach(() => {
    props = {
      tableStatusData: Array(16).fill(false)
    }
    component  = setup(props);
  })

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });
  
  describe('Available Tables', () => {

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, "available-tables");
      expect(wrapper.length).toBe(1);
    });

    it('Should render correct text', () => {
      const wrapper = findByTestAttr(component, "available-tables");
      expect(wrapper.text()).toBe('Available Tables: 16 / 16');
    });

    it('Should render number of available tables', () => {
      const wrapper = findByTestAttr(component, "tables-number");
      expect(wrapper.length).toBe(1);
    });

    describe('When ALL tables available', () => {
      it('Should render 16 / 16 available tables', () => {
        const wrapper = findByTestAttr(component, "tables-number");
        expect(wrapper.text()).toBe('16 / 16');
      });
    }); // When ALL tables available

    describe('When NONE of the tables are available', () => {
      it('Should render 0 / 16 available tables', () => {
        props['tableStatusData'] = Array(16).fill(true);
        component  = setup(props);
        const wrapper = findByTestAttr(component, "tables-number");
        expect(wrapper.text()).toBe('0 / 16');
      }); //Should render 0 / 16 available tables
    }); // When NO tables available
  }); // Available Tables

  describe('Money Earned' ,() => {
    // TODO: write tests
  }); // Money Earned

}); // Header Component