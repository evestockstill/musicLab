import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Lyrics match={{ params: { id: '1' } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
