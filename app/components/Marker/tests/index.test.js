import Marker from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const renderComponent = (props = {}) => shallow(
  <Marker {...props} />
);

describe('<Marker />', () => {
  it('should render an <span> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('span');
  });
});
