import React from 'react';
import { shallow } from 'enzyme';
import Titles from '../Components/Titles';

it('renders welcome message', () => {
  const wrapper = shallow(<Titles />);
  const welcome = <h1 className="title-container__title">Weather finder</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});