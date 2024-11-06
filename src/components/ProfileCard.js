// src/components/ProfileCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ProfileCard = ({ profile }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={profile.picture.large} alt="Profile" />
        <Card.Body>
          <Card.Title>{profile.name.first} {profile.name.last}</Card.Title>
          <Link to={`/profile/${profile.login.uuid}`}>
            <Button variant="primary">View More</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
