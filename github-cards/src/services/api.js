// Função para buscar dados de usuários e suas linguagens principais
export const fetchGitHubUsers = async (usernames) => {
  // Mapeia todos os usernames e busca seus dados e linguagens principais
  return Promise.all(
    usernames.map(async (username) => {
      // Busca os dados do perfil do usuário
      const userProfile = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());

      // Busca os repositórios públicos do usuário
      const repos = await fetch(userProfile.repos_url).then((res) => res.json());

      // Extrai as linguagens principais dos repositórios
      const languages = new Set();
      repos.forEach((repo) => {
        if (repo.language) {
          languages.add(repo.language); // Adiciona a linguagem se ela existir
        }
      });

      // Retorna os dados do usuário e suas linguagens principais
      return {
        ...userProfile,
        languages: Array.from(languages), // Converte Set para Array
      };
    })
  );
};
