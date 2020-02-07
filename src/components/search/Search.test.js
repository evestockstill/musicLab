import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './Search';

describe('SearchBar component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<SearchBar query='test query' onQueryChange={() => {}} onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
