// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=5`)
      .then(response => response.json())
      .then(data => {
        const user = data.results.find(profile => profile.login.uuid === id);
        setProfile(user);
      });
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{profile.name.first} {profile.name.last}</h1>
      <img src={profile.picture.large} alt="Profile" />
      <p><strong>Address:</strong> {profile.location.street.number} {profile.location.street.name}, {profile.location.city}, {profile.location.country}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
};

export default ProfilePage;
