import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch sample profiles
    fetch('https://randomuser.me/api?results=5')
      .then((response) => response.json())
      .then((data) => setProfiles(data.results))
      .catch((error) => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div className="home-page">
      <h1>Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.picture.medium} alt={profile.name.first} />
            <h3>{profile.name.first} {profile.name.last}</h3>
            <p>{profile.email}</p>
            <Link to={`/profile/${index}`} className="view-more">
              View More
            </Link>
          </div>
        ))}
      </div>
      <div className="info-text">
        <h2>About This Page</h2>
        <p>
          Welcome to the profile page! Here you can view the profiles of all users in the system.
          Click on "View More" to see additional details about each individual. This page is designed
          to give you quick access to important information and allow you to interact with other users.
        </p>
        <p>
          If you're looking for more details about any user, simply click their profile to access their
          full information and get in touch. We hope you find this page helpful and user-friendly!
        </p>
      </div>
    </div>
  );
}

export default HomePage;
