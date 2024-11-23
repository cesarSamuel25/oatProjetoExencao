// const container = document.querySelector(".container");
// const div = document.createElement('div');
// const img = document.createElement('img');
// const desc = document.createElement('p');


async function chamaApi(){
  await fetch('https://backend-ita-jobs-production.up.railway.app/api/enterprises', {method: 'GET', headers: {"Content-Type": "application/json"}, mode: 'no-cors'})
             .then((response) => response.json())
             .then((dados) => {return dados})
             //.catch(err => console.log(err));
}

async function criaCard(){
  const lista = await chamaApi();
  //await card();
  console.log('rodei')
  console.log(lista)
}

// async function card(){
//   await lista.forEach(dado => {
//     container.appendChild(div);
//     div.appendChild(img);
//     div.appendChild(desc);
//   });
// }

criaCard()