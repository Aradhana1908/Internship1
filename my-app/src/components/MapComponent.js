import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ClipLoader } from "react-spinners";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFyeWFwMTIiLCJhIjoiY20yMjd2ZmRsMDQ1YjJpcXMzOXNraG5xeCJ9.OlDY7bLzA0AliaoI088D7Q";

function MapComponent({ lat, lng }) {
  const mapContainer = useRef(null);
  const [loading, setLoading] = useState(true);
  const [mapInstance, setMapInstance] = useState(null); // Track map instance

  useEffect(() => {
    if (
      typeof lat !== "number" ||
      typeof lng !== "number" ||
      isNaN(lat) ||
      isNaN(lng)
    ) {
      console.error("Invalid latitude or longitude", { lat, lng });
      return;
    }

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 8,
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    map.on("load", () => {
      setLoading(false);
    });

    setMapInstance(map); // Save map instance for reset functionality

    return () => map.remove();
  }, [lat, lng]);

  // Function to reset the map's center to initial coordinates
  const handleReset = () => {
    if (mapInstance) {
      mapInstance.flyTo({ center: [lng, lat], zoom: 8 });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <div
          className="loading-indicator"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
        </div>
      )}
      <div ref={mapContainer} style={{ height: "400px", width: "100%" }} />

      {/* Reset Button */}
      <button
        onClick={handleReset}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Reset Map
      </button>
    </div>
  );
}

export default MapComponent;
