// const container = document.querySelector(".container");
// const div = document.createElement('div');
// const img = document.createElement('img');
// const desc = document.createElement('p');

// URL da API que queremos consumir
const apiUrl = 'https://backend-ita-jobs-production.up.railway.app/api/enterprises';

// Fazer a requisição GET para a API
fetch(apiUrl)
  .then(response => {
    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }
    // Converter a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Trabalhar com os dados da resposta
    console.log(data);
  })
  .catch(error => {
    // Tratar erros da requisição
    console.error('Erro na requisição:', error);
  });



// async function card(){
//   await lista.forEach(dado => {
//     container.appendChild(div);
//     div.appendChild(img);
//     div.appendChild(desc);
//   });
// }