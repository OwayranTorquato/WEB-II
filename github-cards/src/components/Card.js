import React from 'react';
import { CardContainer, ProfileImage, UserName, UserBio, GitHubLink } from './Card.styles';


const Card = ({ name, profilePicture, technologies, githubLink }) => {
  return (
    <CardContainer> 
      <ProfileImage src={profilePicture} alt={`${name}'s profile`} />
      <UserName>{name}</UserName>
      <UserBio>{technologies}</UserBio>
      <GitHubLink href={githubLink} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </GitHubLink>
    </CardContainer>
  );
};

export default Card;
