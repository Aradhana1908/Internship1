import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  const [showMap, setShowMap] = useState(false);

  if (!profile) return <div>Profile not found</div>;

  const handleMapToggle = () => {
    setShowMap((prev) => !prev);
  };

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p className="desc">
        <strong>{profile.description}</strong>
      </p>
      <p>
        <strong>Contact:</strong> {profile.contact}
      </p>
      <p>
        <strong>Interests:</strong> {profile.interests.join(", ")}
      </p>
      <p>
        {" "}
        <strong>Address:</strong>
        {profile.address}
      </p>
      <button onClick={handleMapToggle}>
        {showMap ? "Hide Map" : "Show on Map"}
      </button>
      {showMap && (
        <MapComponent lat={profile.latitude} lng={profile.longitude} />
      )}
    </div>
  );
};

export default ProfileDetails;
