import React, { useRef, useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import carMarker from "../assets/car-marker.svg";
import personMarker from "../assets/person-marker.svg";
import Context from "../Context";
const CarMap = () => {
  const mapRef = useRef(null);
  const athensCenter = [37.9838, 23.7275];
  const { cars } = useContext(Context);
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

  const [markerElements, setMarkerElements] = useState();
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

  useEffect(() => {
    if (cars !== undefined) {
      const markers = cars.map((car, index) => {
        return (
          <Marker
            position={{ lat: car.latitude, lng: car.longitude }}
            icon={carIcon}
            key={index}
          >
            <Tooltip direction={"top"} permanent={true}>
              {car.model}
            </Tooltip>
          </Marker>
        );
      });

      setMarkerElements(markers);
    }
  }, [cars]);
  console.log(position);
  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[athensCenter[0], athensCenter[1]]}
      zoom={14}
      ref={mapRef}
      closePopupOnClick={false}
      style={{ height: "inherit", width: "inherit" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      ></TileLayer>
      {markerElements}
      {position && (
        <Marker
          position={{ lat: position.latitude, lng: position.longitude }}
          icon={personIcon}
        ></Marker>
      )}
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default CarMap;
