import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistList artists={[{ id: 1, name: 'test name' }, { id: 2, name: 'test name2' }]} match={{ params: { id: '1' }
    }} loading={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
