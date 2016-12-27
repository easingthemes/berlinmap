/**
*
* Map
*
*/

import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
// import { FormattedMessage } from 'react-intl';

import Marker from 'components/Marker';
// import messages from './messages';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lat: 59.955413,
      lng: 30.337844,
    };
  }

  _onClick(data) {
    // console.log(data);
    this.setState({
      lat: data.lat,
      lng: data.lng,
    });
  }

  render() {
    const props = this.props;
    return (
      <div style={{ height: '400px' }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyAiKz-WelqxFu2c6iT-fOECHC7gYK3qbkw',
            language: 'en',
          }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
          onClick={(data) => this._onClick(data)}
        >
          <Marker
            lat={this.state.lat}
            lng={this.state.lng}
            text={'A'}
          />
          <Marker
            {...props.greatPlaceCoords}
            text={'B'}
          />
        </GoogleMap>
      </div>
    );
  }
}

Map.defaultProps = {
  center: {
    lat: 59.938043,
    lng: 30.337157,
  },
  zoom: 9,
  greatPlaceCoords: {
    lat: 59.724465,
    lng: 30.080121,
  },
};
Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.object,
};

export default Map;
