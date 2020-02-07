import React from 'react';
import { shallow } from 'enzyme';
import TracksList from './TracksList';

describe('TracksList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<TracksList match={{ params: { id: '1' }
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
