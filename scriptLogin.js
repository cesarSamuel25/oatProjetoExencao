const email = document.querySelector('.email')
const senha = document.querySelector('.senha')
const entrar = document.querySelector('.ENTRAR')


let pessoa = [];

if (localStorage.getItem('pessoas')) {
  pessoa = (JSON.parse(localStorage.getItem('pessoas')));
}

entrar.addEventListener('click', () => {
  verificaLogin(email.value, senha.value)
})


function verificaLogin(email, senha){
  if(verificaArray(email, senha) === true){
    console.log('OK')
    window.location.href = "/html/maimPage.html";
  }else{
    alert('Email ou senha invalidos!')
  }
}

function verificaArray(email, senha){
  for(let index in pessoa){
    if(pessoa[index].email == email && pessoa[index].senha == senha){
      return true;
    }
  }
}