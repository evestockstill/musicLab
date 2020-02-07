import React from 'react';
import { shallow } from 'enzyme';
import Albums from './Albums';

describe('Albums component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Albums match={{ params: { id: '1' }
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
