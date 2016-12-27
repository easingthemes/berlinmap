/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import selectHeader from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}

const mapStateToProps = selectHeader();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
