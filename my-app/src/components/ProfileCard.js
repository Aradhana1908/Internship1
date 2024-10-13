import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  const handleSummaryClick = () => {
    setShowMap((prev) => !prev);
  };
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`}>View Details</Link>
      <button onClick={handleSummaryClick}>Summary</button>
      {showMap && (
        <MapComponent lat={profile.latitude} lng={profile.longitude} />
      )}
    </div>
  );
};

export default ProfileCard;
