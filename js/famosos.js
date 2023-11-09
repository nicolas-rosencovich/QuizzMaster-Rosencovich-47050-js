//Traemos el form
const formFamosos = document.querySelector("#formFamosos")
//Traemos el input
const inputFamosos = document.querySelector("#inputFamosos")
//Traemos div de info
const infoFamosos = document.querySelector("#infoFamosos")

//Activamos el formulario del listener del submit

formFamosos.addEventListener("submit", (event)=>{
    event.preventDefault();
    //Variable la cual nos saca el valor del input
    const famosos = inputFamosos.value
cargarFamoso(famosos)
})

//Funcion en la que hacemos funcionar al fetch
function cargarFamoso(famosos){
fetch(`https://api.potterdb.com/v1/characters/${famosos}`)//: Recuperar un único personaje por su ID.
.then((response)=>response.json())
//Acá ponemos el resultado del json                                                                                                                                    
//En el cual usaremos el DOM para que nos muestre el div

//IMPORTANTE Los ID deben proporcionarse como UUID o slugs.(cuando buscamos en el input)(en minúsculas también)

.then((infoResultado)=>{
    console.log(infoResultado)
    infoFamosos.innerHTML =  `<h1 class = "h1Fetch">Personajes de Harry Potter </h1>
    <img src="${infoResultado.data.attributes.image}" alt="Esta es la imagen de ${infoResultado} class="imgFetch">
     <p> Apodos:${infoResultado.data.attributes.alias_names[1]}<p/>         <p>fecha de nacimiento ${infoResultado.data.attributes.born}<p/>        <p>Patronus: ${infoResultado.data.attributes.patronus} <p/>       <p>Tipo de sangre: ${infoResultado.data.attributes.blood_status} <p/>
    
    <p>Casa: ${infoResultado.data.attributes.house} <p/>       <p>Miembros de la familia: ${infoResultado.data.attributes.family_members[3]} <p/>    <p>Romances: ${infoResultado.data.attributes.romances} <p/>
    `
})

//Hacemos un catch para que nos agarre todos los errores
.catch((error)=>{
    //alert("Disculpa. Este personaje no fué encontrado")

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este personaje no fué encontrado!',
        footer: '  Los ID deben proporcionarse como UUID o slugs',
        
      }) 
    console.log("Este personaje no pudo ser encontrado" + error)
})
}