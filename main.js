let pessoaAtual;

if (localStorage.getItem('pessoas')) {
    pessoaAtual = (JSON.parse(localStorage.getItem('pessoaAtual')));
}

const nav = document.querySelector('.nav');

nav.innerHTML += `<p>Bem vindo, ${pessoaAtual.nome}<br><a href="loginPage.html" class="sair">Sair</a></p>`