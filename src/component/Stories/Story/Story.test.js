import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Story from './Story';
import Comment from '../../Comment/Comment';
configure({ adapter: new Adapter() });

describe('<Story />', () => {
  it('should print comments when expended', () => {
    const wrapper = shallow(<Story story={{ id: 1, kids: [1, 2] }} />);
    wrapper.find('div.card-header').simulate('click');
    expect(wrapper.find(Comment).length).toEqual(2);
  });
});
