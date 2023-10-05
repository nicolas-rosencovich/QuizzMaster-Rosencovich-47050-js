//Vamos a traer el switchTema
const switchTema = document.querySelector(".switchTema")
switchTema.addEventListener('click', (event)=>{
let checked = event.target.checked;
document.body.classList.toggle(".bodyDark")
if(checked ==true){

}
})



