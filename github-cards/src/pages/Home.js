import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchGitHubUsers } from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';

const Home = () => {
  const [users, setUsers] = useState([]);
  const usernames = ['OwayranTorquato', 'MayllaOliv', 'Eduardo-Silva-Rodrigues', 'kakacarlos2324', 'EduardaCicatt0'];

  useEffect(() => {
    fetchGitHubUsers(usernames).then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <GlobalStyles />
      <h1>GitHub User Cards</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name || user.login}
            profilePicture={user.avatar_url}
            technologies={user.languages.length > 0 ? user.languages.join(', ') : 'No languages available'}
            githubLink={user.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
