import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  shadowSize: [41, 41],
});

const Map = ({ ipData }) => {
  const position = [ipData.location.lat, ipData.location.lng];

  const MapViewUpdater = ({ position }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo(position, 15, { duration: 2 });
    }, [position, map]);
    return null;
  };
  return (
    <section className="map-component relative z-10">
      <div id="map">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle
            center={position}
            radius={500}
            pathOptions={{
              color: "blue",
              fillColor: "blue",
              fillOpacity: 0.1,
            }}
          />
          <Marker position={position} icon={DefaultIcon}>
            <Popup>🐻🍻🎉</Popup>
          </Marker>
          <MapViewUpdater position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
