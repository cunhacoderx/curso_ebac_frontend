async function carregarDadosGithub() {
  try {
    const resposta = await fetch('https://api.github.com/users/leonardocunha-dev');
    const dados = await resposta.json();

    document.getElementById('avatar').src = dados.avatar_url;
    document.getElementById('name').textContent = dados.name;
    document.getElementById('login').textContent = `@${dados.login}`;
    document.getElementById('repos').textContent = dados.public_repos;
    document.getElementById('seguidores').textContent = dados.followers;
    document.getElementById('seguindo').textContent = dados.following;
    document.getElementById('profileLink').href = dados.html_url;
  } catch(erro) {
    console.error('Erro ao carregar os dados do Github', erro);
  }
}

carregarDadosGithub();
