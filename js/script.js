const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");

// function handleKeyUp(event){
//   const target = event.target;

//   if(!target.checkValidity()){
//     target.classList.add("invalido");
//     target.setCustomValidity("escreva corretamente esse campo")
//     target.nextElementSibling.innerText = target.validationMessage;
//   }
//   console.log(event.target.checkValidity());
//   if(event.target.checked){
//     console.log(event.target.value);

//   }
 
//   document.body.style.background = event.target.value;
// }

// contato.addEventListener("change", handleKeyUp);

const dados = {};
function handleChange(event){

  dados[event.target.name] = event.target.value;
  console.log(dados);
}


contato.addEventListener("change", handleChange);
