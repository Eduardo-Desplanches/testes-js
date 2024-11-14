//fetch é uma promise
const cep = fetch('https://viacep.com.br/ws/05767340/json/');

const doc = fetch("./doc.txt");

// formas de continuar com then e return

// doc.then((resolucao) => {
//   resolucao.text().then((body)=>{
//     const conteudo = document.querySelector(".conteudo");
//  conteudo.innerText = body;
//   });
// });

// doc.then(resolucao =>{
//   return resolucao.text();
// }).then((body)=>{
//   const conteudo = document.querySelector(".conteudo");
//   conteudo.innerText = body;
// })

cep.then(resolucao => resolucao.json())
.then(body=>{
  console.log(body);
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body.logradouro
});

const background = fetch('./style.css');

background.then(resolucao => resolucao.text())
.then(body=>{
  const conteudo1 = document.querySelector('.conteudo1');
  const style = document.createElement('style');
  style.innerHTML = body
  conteudo1.appendChild(style);
})

const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre.then(resolucao => resolucao.text())
.then(body=>{
  div.innerHTML = body;
  const titulo = div.querySelector("h1");
  document.querySelector('.conteudo1').innerText = titulo.innerText;
  console.log(titulo);
})
