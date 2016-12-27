import Map from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const renderComponent = (props = {}) => shallow(
  <Map {...props} />
);

describe('<Map />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });
});
