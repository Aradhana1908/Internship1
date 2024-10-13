import React, { useState } from "react";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [editId, setEditId] = useState(null);

  const addProfile = () => {
    if (editId) {
      const updatedProfiles = profiles.map((profile) =>
        profile.id === editId
          ? { id: editId, name, photo, description, address }
          : profile
      );
      setProfiles(updatedProfiles);
      setEditId(null);
    } else {
      const newProfile = {
        id: profiles.length + 1,
        name,
        photo,
        description,
        address,
      };
      setProfiles([...profiles, newProfile]);
    }
    clearForm();
  };

  const editProfile = (profile) => {
    setEditId(profile.id);
    setName(profile.name);
    setPhoto(profile.photo);
    setDescription(profile.description);
    setAddress(profile.address);
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  const clearForm = () => {
    setName("");
    setPhoto("");
    setDescription("");
    setAddress("");
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={addProfile}>
        {editId ? "Update Profile" : "Add Profile"}
      </button>

      <div className="profiles-list">
        <h3>Profiles</h3>
        {profiles.map((profile) => (
          <div key={profile.id} className="profile">
            <p>
              <strong>Name:</strong> {profile.name}
            </p>
            <p>
              <strong>Photo:</strong>{" "}
              <img src={profile.photo} alt={profile.name} width="50" />
            </p>
            <p>
              <strong>Description:</strong> {profile.description}
            </p>
            <p>
              <strong>Address:</strong> {profile.address}
            </p>
            <button onClick={() => editProfile(profile)}>Edit</button>
            <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
