const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const idade = document.querySelector('.idade');
const genero = document.querySelector('.genero');
const cadastrar = document.querySelector('.cadastrar')

var pessoa = []

if (localStorage.getItem('pessoas')) {
  pessoa = (JSON.parse(localStorage.getItem('pessoas')));
}

function criaCadastro(n, e, s, i, g){
  pessoa.push({
    "nome" : n,
    "email" : e,
    "senha" : s,
    "idade" : i,
    "genero" : g
  });
}

function salvar(){
  localStorage.pessoas = JSON.stringify(pessoa);
}

cadastrar.addEventListener('click', () => {
   criaCadastro(nome.value, email.value, senha.value, idade.value, genero.value)
   salvar()
})