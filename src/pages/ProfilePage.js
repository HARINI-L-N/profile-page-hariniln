import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch sample profiles again (could be optimized)
    fetch('https://randomuser.me/api?results=5')
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.results[parseInt(id)]);
      })
      .catch((error) => console.error('Error fetching profile:', error));
  }, [id]);

  if (!profile) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <h1>Profile Details</h1>
      <div className="profile-card">
        <img src={profile.picture.large} alt="Profile" />
        <h3>{profile.name.first} {profile.name.last}</h3>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.location.street.number} {profile.location.street.name}, {profile.location.city}, {profile.location.state}, {profile.location.country}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
