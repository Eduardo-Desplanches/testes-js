// const promessa = new Promise((resolve, reject) => {
//   let condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Eduardo", idade: 19 });
//     }, 1000);
//   } else {
//     reject("um erro ocorreu na promise");
//   }
// });

// const retorno = promessa
//   .then(resolucao => {
//     resolucao.profissão = "Programador";
//     return resolucao;
//   })

//   .then(resolucao => {
//     console.log(resolucao);
//   }, rejeitada => {
//     console.log(rejeitada);
//   }) // catch ajuda ver o erro. Nesse caso está oculto como se fosse outro argumento.
//   .finally(()=>{
//     console.log("acabou");
//   });// finally() não depedende se é resolvida ou rejeitada a promise, por isso não traz um valor.
// console.log(retorno);


const login = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('Usuário Logado');
  }, 1000)
})

const dados = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve('Dados carregados');
  }, 1500)
})

const carregouTudo = Promise.all([login, dados]); // espera os dois

carregouTudo.then((resolucao)=>{
  console.log(resolucao);
})

const carregouPrimeiro = Promise.race([login, dados]); //  carrega o primeiro como se fosseu corrida;

carregouPrimeiro.then((resolucao)=>{
  console.log(resolucao);
})