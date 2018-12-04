import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App', ()=> {

  it('should match the snapshot with all data passed in correctly', ()=> {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

});

