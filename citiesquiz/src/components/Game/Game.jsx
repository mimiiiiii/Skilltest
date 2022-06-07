import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import FlexBox from "../UI/FlexBox/FlexBox";
import Info from "../UI/Info/Info";
import Map from "../UI/Map/Map";

import cities from "../../json/capitalCities.json";

import styles from "./Game.module.scss";

const Game = () => {
  const [citiesCount, setCitiesCount] = useState(0);
  const [km, setKm] = useState(1500);
  const [location, setLocation] = useState(cities.capitalCities[0]);
  let markerPosition = {
    lat: 52.520008,
    lng: 13.404954,
  };

  useEffect(() => {
    if (citiesCount < cities.capitalCities.length)
      setLocation(cities.capitalCities[citiesCount]);
  }, [citiesCount]);

  useEffect(() => {
    if (km < 0) {
      setCitiesCount(0);
      setKm(1500);
      setLocation(cities.capitalCities[0]);
      return alert("Game Over");
    }
  }, [km]);

  const calculateDistance = (mk1, mk2) => {
    const R = 6371.071; // Radius of the Earth in km
    const rlat1 = mk1.lat * (Math.PI / 180); // Convert degrees to radians
    const rlat2 = mk2.lat * (Math.PI / 180); // Convert degrees to radians
    const difflat = rlat2 - rlat1; // Radian difference (latitudes)
    const difflon = (mk2.lng - mk1.lng) * (Math.PI / 180); // Radian difference (longitudes)

    const d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d.toFixed(0);
  };

  const calculate = () => {
    const distance = calculateDistance(location.position, markerPosition);
    setKm(km - distance);
    if (citiesCount < cities.capitalCities.length - 1)
      setCitiesCount(citiesCount + 1);
  };

  return (
    <FlexBox justifyContent="center">
      <FlexBox className={styles.container}>
        <FlexBox
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
        >
          <Info
            type="secondary"
            label="cities placed"
            labelBefore={citiesCount}
          />
          <Info type="secondary" label="kilometers left" labelBefore={km} />
          <Info
            type="primary"
            label=" Select the location of"
            labelBefore={location.capitalCity}
          />
          <Map
            markerPosition={markerPosition}
            onMarkerPositionChanged={(position) => (markerPosition = position)}
          />
          <FlexBox alignSelf="flex-end">
            <Button label="place" onClick={() => calculate()} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Game;
