import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import PropTypes from "prop-types";

const Map = ({ markerPosition, onMarkerPositionChanged }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMVXk3_0h1Q5oU8WC5FRU4XZUOeZ2VniU",
  });

  const center = {
    lat: 52.520008,
    lng: 13.404954,
  };

  const markerPositionChanged = (position) => {
    markerPosition = { lat: position.lat(), lng: position.lng() };
    onMarkerPositionChanged(markerPosition);
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      options={{ gestureHandling: "none", disableDefaultUI: true }}
      zoom={3}
      center={center}
      mapContainerClassName={styles.mapContainer}
    >
      <Marker
        draggable
        position={markerPosition}
        onDragEnd={(e) => {
          markerPositionChanged(e.latLng);
        }}
      />
    </GoogleMap>
  );
};

Map.propTypes = {
  markerPosition: PropTypes.object,
  onMarkerPositionChanged: PropTypes.func,
};

Map.defaultProps = {
  markerPosition: {},
  onMarkerPositionChanged: () => {},
};

export default Map;
