import { Header } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

const renderComponent = (props = {}) => shallow(
  <Header {...props} />
);

describe('<Header />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('div');
  });
});
