// src/pages/Profile.js
import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'NG CREATION',
    email: 'ng@example.com',
    address: ' 123 Main St, New York, NY',
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <section className="profile">
      <h2>User Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editMode}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </label>
        <label>
          Address
          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            disabled={!editMode}
          />
        </label>
        {editMode ? (
          <button type="submit">Save</button>
        ) : (
          <button type="button" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        )}
      </form>
    </section>
  );
}

export default Profile;
