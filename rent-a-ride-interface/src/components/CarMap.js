import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import carMarker from "../assets/car-marker.svg";
import personMarker from "../assets/person-marker.svg";

const CarMap = () => {
  const mapRef = useRef(null);
  const athensCenter = [37.9838, 23.7275];

  let carIcon = L.icon({
    iconSize: [40, 40],
    iconUrl: carMarker,
    iconRetinaUrl: carMarker,
  });

  let personIcon = L.icon({
    iconSize: [20, 20],

    iconUrl: personMarker,
    iconRetinaUrl: personMarker,
    className: "blinking",
  });

  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        function (e) {
          console.log(e);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  console.log(position);
  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[athensCenter[0], athensCenter[1]]}
      zoom={23}
      ref={mapRef}
      style={{ height: "inherit", width: "inherit" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      ></TileLayer>

      <Marker
        position={{ lat: athensCenter[0], lng: athensCenter[1] }}
        icon={carIcon}
      >
        <Tooltip sticky>car 1 lalalal</Tooltip>
      </Marker>
      {position && (
        <Marker
          position={{ lat: position.latitude, lng: position.longitude }}
          icon={personIcon}
        >
          <Tooltip sticky>my location</Tooltip>
        </Marker>
      )}
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default CarMap;
