//Vamos a traer las class y id
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const button = document.querySelector("#button")

button.addEventListener("click", function(e){
   e.preventDefault()
   const datos = {
    username: userName.value,
    password: password.value,
   }
   console.log(datos)
})


