import React, { Components } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
)

{/* <MyMapComponent isMarkerShown={false} />// Just only Map */}

class GoogleMaps extends Component {
  render() {
    return(
      <MyMapComponent isMarkerShown />// Map with a Marker
    )
  }
}

export default GoogleMaps;