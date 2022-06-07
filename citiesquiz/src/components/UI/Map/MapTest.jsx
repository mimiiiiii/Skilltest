import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMVXk3_0h1Q5oU8WC5FRU4XZUOeZ2VniU",
  });

  const [markerPosition, setMarkerPosition] = useState();

  const center = {
    lat: 48.806863,
    lng: 8.015643,
  };

  const markerPositionChanged = (position) => {
    setMarkerPosition(position);
	//Position ist undefined 
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={4.5}
      center={center}
      mapContainerClassName={styles.mapContainer}
    >
      <Marker
        draggable
        position={{
          lat: 48.806863,
          lng: 8.015643,
        }}
        onDragEnd={(e) => {
          markerPositionChanged(e.latLng);
        }}
      />
    </GoogleMap>
  );
};

export default Map;