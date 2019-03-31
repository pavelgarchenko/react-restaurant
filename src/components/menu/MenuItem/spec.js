import React from "react";
import { shallow } from "enzyme";

import MenuItem from './MenuItem';
import { findByTestAttr } from '../../../../utils/tests/index'; 

const setup = (props={}) => {
  const component = shallow(<MenuItem {...props} />);
  return component;
};


describe('MenuItem Component', () => {

  describe('Has Props', () => {  
    let component;
    let props;
    beforeEach(() => {
      props = {
        name: "Test Name",
        price: 1,
        tableStatusData: Array(16).fill(false),
        selectedTable: 0
      };
      component = setup(props);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, "menu-item");
      expect(wrapper.length).toBe(1);
    }); // Should render without errors

    it('Should display text in format "${price} {name}"', () => {
      const wrapper = findByTestAttr(component, "menu-item");
      expect(wrapper.text()).toBe('$1 Test Name');
    }); // Should display text in format "${price} {name}"
    
    describe('Disabled', () => {
      describe('When table NOT TOGGLED', () => {
       
        it('When table NOT SELECTED', () => {
          props['tableStatusData'][0] = false // is NOT toggled
          props['selectedTable'] = 1 // 2nd table is selected
          component = setup(props);
          const wrapper = findByTestAttr(component, "menu-item");
          expect(wrapper.prop('disabled')).toBe(true);
        }); // When table NOT SELECTED

        it('When table SELECTED', () => {
          props['tableStatusData'][0] = false // is NOT toggled
          props['selectedTable'] = 0 // is selected
          component = setup(props);
          const wrapper = findByTestAttr(component, "menu-item");
          expect(wrapper.prop('disabled')).toBe(true);
        }); // When table SELECTED
      }); // When table NOT TOGGLED

      describe('When table TOGGLED', () => {
        it('When table NOT SELECTED', () => {
          props['tableStatusData'][0] = true // is toggled
          props['selectedTable'] = 1 // 2nd table is selected
          component = setup(props);
          const wrapper = findByTestAttr(component, "menu-item");
          expect(wrapper.prop('disabled')).toBe(true);
        }); // When table NOT SELECTED
      }); // When table TOGGLED
    }); // Disabled
    
    describe('Enabled', () => {
      it('When table TOGGLED and SELECTED', () => {
        props['tableStatusData'][0] = true // is toggled
        props['selectedTable'] = 0 // table is selected
        component = setup(props);
        const wrapper = findByTestAttr(component, "menu-item");
        expect(wrapper.prop('disabled')).toBe(false);
      }); // When table TOGGLED and SELECTED
    }); // Enabled
  }); // Has Props
}); // MenuItem Component

