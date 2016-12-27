/**
*
* Marker
*
*/

import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


function Marker(props) {
  return (
    <span>
      <RaisedButton label={props.text || 'test'} />
    </span>
  );
}

Marker.propTypes = {
  text: PropTypes.string,
};

export default Marker;
