import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

export const UserBio = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

export const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const TechItem = styled.li`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #333;
`;

export const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #555;
  }
`;
