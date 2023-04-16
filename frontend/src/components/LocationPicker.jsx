import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Tooltip,
} from "react-leaflet";

import React from "react";
import { Button, Grid } from "@mui/material";

function LocationPickerMarker({
  latitude,
  longitude,
  onLocationChange,
  onAttachMap,
}) {
  const map = useMapEvent("click", (ev) => {
    const { lat, lng } = ev.latlng;
    if (onLocationChange) onLocationChange(lat, lng);
  });

  if (map && onAttachMap) onAttachMap(map);

  return (
    <Marker position={[+latitude, +longitude]}>
      <Tooltip direction="top">
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
      </Tooltip>
    </Marker>
  );
}

export default function LocationPicker({ onLocationChange }) {
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);

  const mapRef = React.useRef(null);

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setLat(lat);
        setLng(lng);

        if (onLocationChange) onLocationChange({ lat, lng });

        if (mapRef.current) {
          mapRef.current.flyTo({ lat, lng }, mapRef.current.getZoom());
        }
      });
    }
  };

  const handleRecenter = () => {
    if (lat && lng && mapRef.current) {
      mapRef.current.flyTo({ lat, lng }, mapRef.current.getZoom());
    }
  };

  const handleLocationChange = (lat, lng) => {
    setLat(lat);
    setLng(lng);

    if (onLocationChange) onLocationChange({ lat, lng });
  };

  const handleAttachMap = (map) => {
    mapRef.current = map;
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <MapContainer
          center={{ lat: 13.0039, lng: 77.592 }}
          zoom={10}
          scrollWheelZoom={true}
          style={{
            height: "400px",
            width: "100%",
            border: "2px solid #322323",
            marginTop: "1rem",
            position: "relative",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationPickerMarker
            latitude={lat}
            longitude={lng}
            onLocationChange={handleLocationChange}
            onAttachMap={handleAttachMap}
          />
        </MapContainer>
      </Grid>
      <Grid item xs={6} p="5px">
        <Button
          variant="contained"
          fullWidth
          onClick={handleRecenter}
          type="button"
        >
          Recenter
        </Button>
      </Grid>
      <Grid item xs={6} p="5px">
        <Button
          variant="contained"
          fullWidth
          onClick={handleUserLocation}
          type="button"
        >
          Current Location
        </Button>
      </Grid>
    </Grid>
  );
}
