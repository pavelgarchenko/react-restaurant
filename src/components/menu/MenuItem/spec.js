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
    let wrapper;
    beforeEach(() => {
      const props = {
        name: "Test Name",
        price: 1,
        tableStatusData: [false],
        selectedTable: 0
      };
      wrapper = setup(props);
    });

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, "menu-item");
      expect(component.length).toBe(1);
    }); // Should render without errors

    it('Should display text in format "${price} {name}"', () => {
      const component = findByTestAttr(wrapper, "menu-item");
      expect(component.text()).toBe('$1 Test Name');
    }); // Should display text in format "${price} {name}"
    
    describe('Disabled', () => {
      describe('When table NOT TOGGLED', () => {
       
        it('When table NOT SELECTED', () => {
          const props = {
            name: "Test menu item",
            price: 1,
            tableStatusData: [false], // is NOT toggled
            selectedTable: 1 // 2nd table is selected
          };
          const wrapper = setup(props);
          const component = findByTestAttr(wrapper, "menu-item");
          expect(component.prop('disabled')).toBe(true);
        }); // When table NOT SELECTED

        it('When table SELECTED', () => {
          const props = {
            name: "Test menu item",
            price: 1,
            tableStatusData: [false], // is NOT toggled
            selectedTable: 0 // is selected
          };
          const wrapper = setup(props);
          const component = findByTestAttr(wrapper, "menu-item");
          expect(component.prop('disabled')).toBe(true);
        }); // When table SELECTED
      }); // When table NOT TOGGLED

      describe('When table TOGGLED', () => {
       it('When table NOT SELECTED', () => {
         const props = {
           name: "Test menu item",
           price: 1,
           tableStatusData: [true], // is toggled
           selectedTable: 1 // 2nd table is selected
         };
         const wrapper = setup(props);
         const component = findByTestAttr(wrapper, "menu-item");
         expect(component.prop('disabled')).toBe(true);
       }); // When table NOT SELECTED
      }); // When table TOGGLED
    }); // Disabled
    
    describe('Enabled', () => {
      it('When table TOGGLED and SELECTED', () => {
        const props = {
          name: "Test menu item",
          price: 1,
          tableStatusData: [true], // toggled
          selectedTable: 0 // table is selected
        };
        const wrapper = setup(props);
        const component = findByTestAttr(wrapper, "menu-item");
        expect(component.prop('disabled')).toBe(false);
      }); // When table TOGGLED and SELECTED
    }); // Enabled
  }); // Has Props
}); // MenuItem Component

