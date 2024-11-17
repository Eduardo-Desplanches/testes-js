const imagem = fetch("./produtos1.jpg");

imagem
  .then((resolucao) => resolucao.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });

// const conteudo = document.querySelector(".conteudo");
// fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
//   const cloneResponse = response.clone();
//   response.json().then((json) => {
//     console.log(json);
//   });
//   cloneResponse.text().then((text) => {
//     console.log(text);
//   });
// });

const conteudo1 = document.querySelector(".conteudo1");
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((r) => {
    const r2 = r.clone();
    r.text().then((text) => {
      console.log(text);
    });
    r2.json().then((json) => {
      console.log(json);
    });
    console.log(r);
  })
  .then((body) => {
    console.log(body);
  });

const cep = fetch("https://viacep.com.br/ws/01001000/json/");

cep.then((response) => {
  response.headers.forEach(console.log);
});

const cep1 = fetch("./docs.txt");

cep1.then((response) => {
  console.log(response.status);
  console.log(response.url);
  console.log(response.type); // basic próprio servidor, cors requisão para outro servidor
  if (response.status === 404) {
    console.log("Página não existe");
  }
});

// const array = ['item 1' , 'item 2 ', 'item 3'];
// array.forEach(console.log);
