import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ address }) => {
  const city = `${address.city}, ${address.state}, ${address.pincode}`;
  const [coordinates, setCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; //to track component mount status

    const fetchCoordinates = async () => {
      try {
        console.log("useEffect");
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
        );

        const data = await response.json();

        if (isMounted) {
          if (data.length > 0) {
            const { lat, lon } = data[0];
            console.log(lat, lon);

            setCoordinates([lat, lon]);
            setLoading(false);
          } else {
            setCoordinates([]);
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching geocoding data:", error);
          setError("Error fetching coordinates");
        }
      }
    };

    fetchCoordinates();

    return () => {
      isMounted = false;
    };
  }, [city]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {coordinates.length > 0 && (
        <MapContainer
          center={coordinates}
          zoom={coordinates.length > 0 ? 13 : 1}
          style={{ height: "320px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {coordinates.length > 0 && (
            <Marker position={coordinates}>
              <Popup>{city}</Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
