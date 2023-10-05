
let currentQuestion ;
let score = 0;
let lives = 7; // Set the initial number of lives to 3
let currentQuestions;



//Empezar preguntas random
const randomButton = document.querySelector("#randomButton")
 randomButton.addEventListener("click", () => {
  startGame('random')
 })

//Empezar preguntas rock
const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click",() => {
  startGame('rock')
})

//Empezar con las preguntas de futbol
const footballButton = document.querySelector("#footballButton");
footballButton.addEventListener("click", () => {
  startFootballGame('futbol')
})

//Empezar con las preguntas de programacion
const programacionButton = document.querySelector("#programacionButton");
programacionButton.addEventListener("click", () => {
  startGame('programacion')
})

const cocinaButton =document.querySelector("#cocinaButton");
cocinaButton.addEventListener("click", () => {
  startGame('cocina')
})


/* //Hacer los botones de resupuesta (CONSULTAR CON TUTOR)

let answerBtn = document.querySelectorAll(".answer");
answerBtn.addEventListener("click",() => {
  checkAnswer(this.textContent)
}
) */

function showResults() {
    const gameContainer = document.getElementById("gameContainer");
    const livesContainer = document.getElementById("livesContainer");
   

    //Prueba de sacar
    if (lives > 0) {
      gameContainer.innerHTML = `<h1>¡Juego completado!</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;
    } else {
      gameContainer.innerHTML = `<h1>¡Perdiste!</h1><p>Tu puntaje final: ${score}</p>`;
    }
  
    // Display heart icons for remaining lives
    const heartIcons = document.getElementById("heartIcons");
    heartIcons.innerHTML = "";
    for (let i = 0; i < lives; i++) {
      const heartIcon = document.createElement("span");
      heartIcon.innerHTML = "<i class='fa-regular fa-heart fa-xl ' style='color: #a0b5eb;'></i>"; // Heart emoji
      heartIcons.appendChild(heartIcon);
    }
    livesContainer.style.display = "block";
  }

function startGame(section) {
    if (section === "random") {
        currentQuestions = randomQuestions;
    } else if (section === "rock") {
        currentQuestions = rockArgentinoQuestions;
    } else if (section === "programacion") {
      currentQuestions == programacionQuestions;}



    const optionsDiv = document.querySelector(".options");
    const gameContainer = document.getElementById("gameContainer");
    optionsDiv.style.display = "none";
    gameContainer.style.display = "block";

    displayQuestion();
    updateLives(); // Agregamos esta función para mostrar las vidas iniciales
}


 function displayQuestion() {
    const questionText = document.getElementById("questionText");
 questionText.textContent = currentQuestions[currentQuestion].text; 
 
    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestions[currentQuestion].answers[i];
    }
}


//LA parte de laas preguntas
const randomQuestions = [
    {
        text: "¿Cuál es la capital de Japón?",
        answers: ["Tokio", "Kioto", "Osaka", "Seúl"],
        correctAnswer: "Tokio"
      },
      {
        text: "¿Quién pintó 'La noche estrellada'?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Frida Kahlo"],
        correctAnswer: "Vincent van Gogh"
      },
      {
        text: "¿Cuál es el símbolo químico del oro?",
        answers: ["Ag", "Au", "Fe", "Cu"],
        correctAnswer: "Au"
      },
      {
        text: "¿En qué año se descubrió América?",
        answers: ["1492", "1776", "1519", "1812"],
        correctAnswer: "1492"
      },
      {
        text: "¿Quién escribió 'Cien años de soledad'?",
        answers: ["Gabriel García Márquez", "Pablo Neruda", "Julio Cortázar", "Isabel Allende"],
        correctAnswer: "Gabriel García Márquez"
      },
      {
        text: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Marte", "Venus", "Júpiter", "Urano"],
        correctAnswer: "Júpiter"
      },
      {
        text: "¿Qué famosa pintora mexicana fue conocida por sus autorretratos?",
        answers: ["Frida Kahlo", "Diego Rivera", "Salvador Dalí", "Pablo Picasso"],
        correctAnswer: "Frida Kahlo"
      },
      {
        text: "¿Cuál es el río más largo del mundo?",
        answers: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"],
        correctAnswer: "Nilo"
      },
      {
        text: "¿Qué elemento químico es conocido por el símbolo 'Fe'?",
        answers: ["Hierro", "Oxígeno", "Plata", "Flúor"],
        correctAnswer: "Hierro"
      },
      {
        text: "¿En qué país se encuentra la Torre Eiffel?",
        answers: ["Reino Unido", "Italia", "Francia", "Alemania"],
        correctAnswer: "Francia"
      },
      {
        text: "¿Cuál es el animal terrestre más rápido del mundo?",
        answers: ["Guepardo", "León", "Elefante", "Rinoceronte"],
        correctAnswer: "Guepardo"
      },
      {
        text: "¿Quién fue el primer presidente de los Estados Unidos?",
        answers: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "John Adams"],
        correctAnswer: "George Washington"
      },
      {
        text: "¿Qué instrumento musical es conocido como el 'rey de los instrumentos'?",
        answers: ["Guitarra", "Piano", "Violín", "Órgano"],
        correctAnswer: "Órgano"
      },
      {
        text: "¿Cuál es el océano más grande del mundo?",
        answers: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"],
        correctAnswer: "Océano Pacífico"
      },
      {
        text: "¿Qué famosa científica polaca ganó dos premios Nobel en diferentes campos?",
        answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        correctAnswer: "Marie Curie"
      },
      {
        text: "¿En qué año comenzó la Primera Guerra Mundial?",
        answers: ["1914", "1918", "1939", "1945"],
        correctAnswer: "1914"
      },
      {
        text: "¿Qué ciudad es conocida como la 'Ciudad de los Rascacielos'?",
        answers: ["Chicago", "Los Ángeles", "Nueva York", "Miami"],
        correctAnswer: "Nueva York"
      },
      {
        text: "¿Cuál es el número atómico del hidrógeno?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "1"
      },
      {
        text: "¿Cuál es el país más grande de América del Sur?",
        answers: ["Brasil", "Argentina", "Colombia", "Perú"],
        correctAnswer: "Brasil"
      },
      {
        text: "¿Cuál es el famoso lema de Nike?",
        answers: ["Just Do It", "Live Your Best Life", "Think Different", "Have a Break, Have a Kit Kat"],
        correctAnswer: "Just Do It"
      },
    // Agrega más preguntas generales aquí...
  ];
  
  // Define las preguntas de rock argentino
  const rockArgentinoQuestions = [
    {
      text: "¿Qué banda de rock argentino lanzó el álbum 'La Historia'?",
      answers: ["Los Pericos", "Los Enanitos Verdes", "Los Auténticos Decadentes", "Los Fabulosos Cadillacs"],
      correctAnswer: "Los Fabulosos Cadillacs"
    },
    {
      text: "¿Cuál de estas bandas es conocida por el tema 'De Música Ligera'?",
      answers: ["Soda Stereo", "Patricio Rey y sus Redonditos de Ricota", "La Renga", "Babasónicos"],
      correctAnswer: "Soda Stereo"
    },
    {
      text: "¿Qué famosa banda de rock argentino fue liderada por Andrés Calamaro?",
      answers: ["Ratones Paranoicos", "Los Piojos", "Virus", "Los Rodríguez"],
      correctAnswer: "Los Rodríguez"
    },
    {
      text: "¿Qué banda de rock argentino lanzó el álbum 'Doble Vida'?",
      answers: ["Los Pericos", "Los Auténticos Decadentes", "Los Fabulosos Cadillacs", "Soda Stereo"],
      correctAnswer: "Soda Stereo"
    },
    {
      text: "¿Cómo se llama el líder de la banda Patricio Rey y sus Redonditos de Ricota?",
      answers: ["Charly García", "Gustavo Cerati", "Indio Solari", "Andrés Calamaro"],
      correctAnswer: "Indio Solari"
    },
    {
      text: "¿Cuál de estas bandas de rock argentino es conocida por la canción 'Lamento Boliviano'?",
      answers: ["Los Piojos", "Ratones Paranoicos", "Enanitos Verdes", "Babasónicos"],
      correctAnswer: "Enanitos Verdes"
    },
    {
      text: "¿Qué banda de rock argentino es conocida por su hit 'Mejor no hablemos de amor'?",
      answers: ["Soda Stereo", "Los Fabulosos Cadillacs", "Virus", "Los Auténticos Decadentes"],
      correctAnswer: "Los Auténticos Decadentes"
    },
    {
      text: "¿En qué década surgió el movimiento del rock nacional argentino?",
      answers: ["1960s", "1970s", "1980s", "1990s"],
      correctAnswer: "1970s"
    },
    {
      text: "¿Qué banda de rock argentino es conocida por el tema 'La Colina de la Vida'?",
      answers: ["Divididos", "Sumo", "Las Pelotas", "La Renga"],
      correctAnswer: "Sumo",
    },

    //Agrego preguntas de teoría musical
    {
        text: "¿Cuál es la clave más comúnmente utilizada en la notación musical?",
        answers: ["Clave de Sol", "Clave de Fa", "Clave de Do", "Clave de Si"],
        correctAnswer: "Clave de Sol",
      },

      {
        text: "¿Cuántos tiempos tiene una negra en un compás de 4/4?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "1"
      },
      {
        text: "¿Qué término musical se utiliza para indicar que una nota debe tocarse más suavemente?",
        answers: ["Staccato", "Legato", "Mezzo piano", "Pianissimo"],
        correctAnswer: "Pianissimo"
      },
      {
        text: "¿Cuál es el nombre de la nota que se encuentra dos semitonos por encima de un Do?",
        answers: ["Re", "Mi", "Fa", "Sol"],
        correctAnswer: "Re"
      },
      {
        text: "¿Cuál es la relación entre las notas en una escala menor armónica?",
        answers: ["Dos tonos enteros y un semitono", "Un tono entero y un semitono", "Dos semitonos", "Un tono y medio"],
        correctAnswer: "Dos tonos enteros y un semitono"
      },
      {
        text: "¿Cuál es el nombre del silencio que representa una pausa larga en la música?",
        answers: ["Silencio de blanca", "Silencio de negra", "Silencio de corchea", "Silencio de semicorchea"],
        correctAnswer: "Silencio de blanca"
      },
      {
        text: "¿Cuál es el término que se utiliza para cambiar la altura de una nota musical en un semitono?",
        answers: ["Acorde", "Sostenido", "Bemol", "Intervalo"],
        correctAnswer: "Sostenido"
      },
      {
        text: "¿Qué sección de una orquesta se encarga de tocar instrumentos de viento madera como el clarinete y el fagot?",
        answers: ["Cuerdas", "Viento metal", "Percusión", "Viento madera"],
        correctAnswer: "Viento madera"
      },
      {
        text: "¿Cuál es el nombre del signo que se coloca al principio de una partitura para indicar el número de tiempos en un compás?",
        answers: ["Compás", "Barra de compás", "Indicador de compás", "Clave de compás"],
        correctAnswer: "Indicador de compás"
      },
      {
        text: "¿Qué intervalo se forma entre las notas Do y Mi en una escala mayor?",
        answers: ["Tercera mayor", "Cuarta justa", "Sexta mayor", "Quinta justa"],
        correctAnswer: "Tercera mayor"
      },
      {
        text: "¿Cuál es el término utilizado para indicar un cambio gradual en el volumen de la música?",
        answers: ["Crescendo", "Decrescendo", "Ritardando", "Staccato"],
        correctAnswer: "Crescendo"
      },
      {
        text: "¿Qué sección de una orquesta se encarga de tocar instrumentos de percusión como tambores y platillos?",
        answers: ["Cuerdas", "Viento metal", "Percusión", "Viento madera"],
        correctAnswer: "Percusión"
      },
      {
        text: "¿Cuál es el nombre de la técnica vocal en la que el cantante pasa rápidamente de una nota a otra?",
        answers: ["Vibrato", "Glissando", "Legato", "Falsetto"],
        correctAnswer: "Glissando"
      },
      {
        text: "¿Cuál es el término que se utiliza para la progresión de acordes que termina en un acorde final estable?",
        answers: ["Dominante", "Subdominante", "Tónica", "Modulación"],
        correctAnswer: "Tónica"
      },
      {
        text: "¿Cuál es el nombre de la notación que se utiliza para indicar que una nota debe tocarse más fuerte?",
        answers: ["Staccato", "Legato", "Mezzo forte", "Fortissimo"],
        correctAnswer: "Fortissimo"
      }

    // Agrega más preguntas de rock argentino aquí...
  ];


  //Agrego preguntas de cocina

  const cocinaQuestions = [
    {
      text: "¿Cuál es el ingrediente principal de la salsa pesto?",
      answers: ["Albahaca", "Perejil", "Tomate", "Aceitunas"],
      correctAnswer:"Albahaca"
    },

    {
      text: "¿Cuál es la técnica de cocción en la que se sumerge un alimento en agua hirviendo y luego en agua helada para detener la cocción?",
      answers: ["Blanquear", "Asar", "Freír", "Hornear"],
      correctAnswer:"Blanquear"
    },
    
    {
      text: "¿Cuál es el ingrediente principal en una paella española?",
      answers: ["Pollo", "Camarones", "Arroz", "Pasta"],
      correctAnswer: "Arroz"
    },
    {
      text: "¿Qué tipo de carne se usa comúnmente en las hamburguesas?",
      answers: ["Pavo", "Res", "Pescado", "Pollo"],
      correctAnswer: "Res"
    },
    {
      text: "¿Cuál de los siguientes no es un tipo de queso italiano?",
      answers: ["Cheddar", "Parmesano", "Mozzarella", "Gorgonzola"],
      correctAnswer: "Cheddar"
    },


    {
      text: "¿Cuál es la base del guacamole?",
      answers: ["Tomate", "Aguacate", "Pimiento", "Cebolla"],
      correctAnswer: "Aguacate"
    },
    {
      text: "¿Qué tipo de pasta se utiliza tradicionalmente en la receta de lasaña?",
      answers: ["Fideos de huevo", "Spaghetti", "Tallarines", "Rigatoni"],
      correctAnswer: "Fideos de huevo"
    },
    {
      text: "¿Qué tipo de vino se usa tradicionalmente para cocinar en la receta de coq au vin?",
      answers: ["Chardonnay", "Merlot", "Pinot Noir", "Cabernet Sauvignon"],
      correctAnswer: "Pinot Noir"
    },
    {
      text: "¿Cuál de las siguientes no es una especia comúnmente utilizada en la comida mexicana?",
      answers: ["Comino", "Canela", "Cilantro", "Pimentón"],
      correctAnswer: "Canela"
    },
    {
      text: "¿Cuál es el ingrediente principal en un plato de sushi?",
      answers: ["Pescado crudo", "Tofu", "Pollo a la parrilla", "Hamburguesa"],
      correctAnswer: "Pescado crudo"
    },
    {
      text: "¿Cuál es el ingrediente principal en la salsa alfredo?",
      answers: ["Tomate", "Crema", "Mostaza", "Salsa de soja"],
      correctAnswer: "Crema"
    },
    {
      text: "¿Qué plato es típico de la cocina japonesa y consta de bolitas de arroz cubiertas de pescado crudo?",
      answers: ["Ramen", "Sushi", "Taco", "Curry"],
      correctAnswer: "Sushi"
    } ,
    {
      text: "¿Cuál es el ingrediente principal en una tortilla española?",
      answers: ["Lechuga", "Patatas", "Pollo", "Maíz"],
      correctAnswer: "Patatas"
    },
    {
      text: "¿Qué tipo de pan se utiliza comúnmente para hacer un sándwich BLT?",
      answers: ["Pan integral", "Pan de centeno", "Pan de ajo", "Pan de molde"],
      correctAnswer: "Pan de molde"
    },
    {
      text: "¿Cuál es el ingrediente principal en la pizza margarita?",
      answers: ["Pepperoni", "Queso cheddar", "Tomate", "Jamón"],
      correctAnswer: "Tomate"
    },
    {
      text: "¿Qué tipo de carne se utiliza en la preparación de un filete mignon?",
      answers: ["Ternera", "Cordero", "Pavo", "Cerdo"],
      correctAnswer: "Ternera"
    },
    {
      text: "¿Qué bebida alcohólica se utiliza tradicionalmente en la receta de un mojito?",
      answers: ["Vodka", "Tequila", "Ron", "Ginebra"],
      correctAnswer: "Ron"
    } ,
    {
      text: "¿Cuál es la base de la receta de un gazpacho?",
      answers: ["Pollo", "Lechuga", "Tomate", "Pescado"],
      correctAnswer: "Tomate"
    } ,
    {
      text: "¿Qué tipo de pescado es comúnmente utilizado en el ceviche?",
      answers: ["Salmón", "Bacalao", "Atún", "Corvina"],
      correctAnswer: "Corvina"
    },
    {
      text: "¿Cuál de las siguientes salsas es una salsa picante mexicana hecha con chiles secos?",
      answers: ["Salsa de tomate", "Salsa de soja", "Salsa de mostaza", "Salsa roja"],
      correctAnswer: "Salsa roja"
    } ,
    {
      text: "¿Qué postre es conocido por su textura esponjosa y se hace con huevos, azúcar y harina?",
      answers: ["Tiramisú", "Brownie", "Soufflé", "Mousse"],
      correctAnswer: "Soufflé"
    },
    {
      text: "¿Cuál es el ingrediente principal en una ensalada César?",
      answers: ["Lechuga iceberg", "Espárragos", "Coles de Bruselas", "Cangrejo"],
      correctAnswer: "Lechuga iceberg"
    },
    {
      text: "¿Cuál es el plato nacional de España, que consiste en arroz amarillo con azafrán y varios ingredientes?",
      answers: ["Sushi", "Curry", "Paella", "Ratatouille"],
      correctAnswer: "Paella"
    },
    {
      text: "¿Cuál es el nombre del pan plano tradicional de la India?",
      answers: ["Naan", "Baguette", "Ciabatta", "Pan de centeno"],
      correctAnswer: "Naan"
    },
    



  ]






  //Agrego más tipos de preguntas -    -------------- ------------------------------------------ 
//Preguntas de programación (Las primeras son de js)
  const programacionQuestions=[
    {
        text:"¿Cuál de los siguientes lenguajes de programación es conocido por su uso en desarrollo web?",
        answers:["Java", "C++", "Python ","JavaScript"],
        correctAnswer: "JavaScript"
    },

    {
         
            text: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
            answers: ["push()", "add()", "insert()", "append()"],
            correctAnswer: "push()"
          
    },


    {
        text: "¿Cuál de las siguientes no es una palabra reservada en JavaScript?",
        answers: ["if", "function", "array", "let"],
        correctAnswer: "array"
    },

    {
 text: "¿Cuál es la forma correcta de comentar un solo línea en JavaScript?",
 answers: [
    "// Este es un comentario",
    "'Este es un comentario'",
    "# Este es un comentario",
    "/* Este es un comentario */"
  ],
  correctAnswer: "// Este es un comentario"
    },

    {
        text: "¿Cuál es el operador de igualdad estricta en JavaScript?",
        answers: ["==", "===", "=", "!="],
        correctAnswer: "==="
      },
      {
        text: "¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?",
        answers: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: "pop()"
      },
      {
        text: "¿Cuál es la función de la sentencia 'switch' en JavaScript?",
        answers: [
          "Declarar una función",
          "Definir una clase",
          "Realizar una selección múltiple basada en el valor de una expresión",
          "Crear un bucle"
        ],
        correctAnswer: "Realizar una selección múltiple basada en el valor de una expresión"
      },
      {
        text: "¿Qué palabra clave se utiliza para declarar una variable que no puede ser reasignada en JavaScript?",
        answers: ["let", "var", "const", "non-reassign"],
        correctAnswer: "const"
      },
      {
        text: "¿Cuál es el resultado de '2' + '2' en JavaScript?",
        answers: ["4", "22", "Error", "NaN"],
        correctAnswer: "22"
      },
      {
        text: "¿Cuál es el operador lógico 'Y' en JavaScript?",
        answers: ["&&", "||", "!", "&"],
        correctAnswer: "&&"
      },
      {
        text: "¿Cuál es el valor de 'true && false' en JavaScript?",
        answers: ["true", "false", "Error", "undefined"],
        correctAnswer: "false"
      },
      {
        text: "¿Cómo se llama la función que se ejecuta después de un tiempo específico en JavaScript?",
        answers: ["waitTimeout()", "setInterval()", "sleep()", "setTimeout()"],
        correctAnswer: "setTimeout()"
      },
      {
        text: "¿Cuál es el resultado de '5' == 5 en JavaScript?",
        answers: ["true", "false", "Error", "undefined"],
        correctAnswer: "true"
      },

      {
        text: "¿Cuál es el operador de asignación en JavaScript?",
        answers: ["=", "==", "===", ":="],
        correctAnswer: "="
      },
      {
        text: "¿Cómo se declara una variable global en JavaScript?",
        answers: ["var", "let", "const", "global"],
        correctAnswer: "var"
      },
      {
        text: "¿Cuál es el resultado de 5 + '5' en JavaScript?",
        answers: ["10", "55", "Error", "NaN"],
        correctAnswer: "55"
      },
      {
        text: "¿Cuál es la función utilizada para obtener la longitud de una cadena en JavaScript?",
        answers: ["len()", "length()", "count()", "size()"],
        correctAnswer: "length()"
      },
      {
        text: "¿Cuál es el operador de incremento en JavaScript?",
        answers: ["++", "+=", "--", "-="],
        correctAnswer: "++"
      },
      {
        text: "¿Cuál es el resultado de 10 / 0 en JavaScript?",
        answers: ["Error", "Infinity", "0", "NaN"],
        correctAnswer: "Infinity"
      },
      {
        text: "¿Cuál es el método utilizado para agregar un elemento al principio de un array en JavaScript?",
        answers: ["push()", "unshift()", "append()", "addFirst()"],
        correctAnswer: "unshift()"
      },
      {
        text: "¿Cuál es la función utilizada para redondear un número decimal al entero más cercano en JavaScript?",
        answers: ["round()", "ceil()", "floor()", "truncate()"],
        correctAnswer: "round()"
      },
      {
        text: "¿Cuál es el operador lógico 'O' en JavaScript?",
        answers: ["&&", "||", "!", "&"],
        correctAnswer: "||"
      },
      {
        text: "¿Cuál es el resultado de '5' === 5 en JavaScript?",
        answers: ["true", "false", "Error", "undefined"],
        correctAnswer: "false"
      },
    

//Acá unas de programación general
{
    text: "¿Cuál es el propósito de una declaración 'import' en JavaScript?",
    answers: ["Definir una función", "Importar una biblioteca o módulo", "Declarar una variable", "Crear una clase"],
    correctAnswer: "Importar una biblioteca o módulo"
  },
  {
    text: "¿Qué significa la sigla 'HTML' en desarrollo web?",
    answers: ["Hypertext Markup Language", "High-Level Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hypertext Markup Language"
  },
  {
    text: "¿Qué tipo de lenguaje es Python?",
    answers: ["De alto nivel", "De bajo nivel", "Ensamblador", "Orientado a objetos"],
    correctAnswer: "De alto nivel"
  },
  {
    text: "¿Qué es un bucle 'for' en programación?",
    answers: ["Una estructura condicional", "Una función para agregar elementos a un array", "Una estructura de control de flujo", "Un operador lógico"],
    correctAnswer: "Una estructura de control de flujo"
  },
  {
    text: "¿Qué es un 'framework' en desarrollo de software?",
    answers: ["Un lenguaje de programación", "Una estructura de datos", "Una biblioteca de funciones predefinidas", "Un tipo de base de datos"],
    correctAnswer: "Una biblioteca de funciones predefinidas"
  },
  {
    text: "¿Cuál es el propósito de la sentencia 'else' en una estructura 'if-else'?",
    answers: ["Iniciar un bucle", "Definir una variable", "Manejar el caso contrario al 'if'", "Importar una biblioteca"],
    correctAnswer: "Manejar el caso contrario al 'if'"
  },
  {
    text: "¿Cuál de los siguientes lenguajes de programación se utiliza comúnmente para desarrollo de videojuegos?",
    answers: ["Java", "Python", "C++", "HTML"],
    correctAnswer: "C++"
  },
  {
    text: "¿Cuál es la principal ventaja de la programación orientada a objetos?",
    answers: ["Mayor eficiencia en el uso de recursos", "Mayor facilidad de lectura del código", "Reutilización de código y encapsulación de datos", "Simplificación de algoritmos"],
    correctAnswer: "Reutilización de código y encapsulación de datos"
  },
  {
    text: "¿Qué significa la sigla 'API' en programación?",
    answers: ["Arquitectura de Procesamiento de Información", "Asignación de Propiedades de Interfaz", "Aplicación de Procedimientos Inversos", "Interfaz de Programación de Aplicaciones"],
    correctAnswer: "Interfaz de Programación de Aplicaciones"
  },
  {
    text: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos (DBMS) ampliamente utilizado?",
    answers: ["MySQL", "MongoDB", "PostgreSQL", "Apache"],
    correctAnswer: "Apache"
  },
  {
    text: "¿Qué es un 'loop infinito' en programación?",
    answers: ["Un bucle que se ejecuta una sola vez", "Un bucle que repite un conjunto de instrucciones sin fin", "Un bucle que no funciona", "Un bucle que se ejecuta al revés"],
    correctAnswer: "Un bucle que repite un conjunto de instrucciones sin fin"
  },
  {
    text: "¿Qué es un 'callback' en JavaScript?",
    answers: ["Una función que se ejecuta al principio de un programa", "Una función que se llama después de una operación asincrónica", "Una función que transforma datos", "Una función de impresión en pantalla"],
    correctAnswer: "Una función que se llama después de una operación asincrónica"
  },
  {
    text: "¿Cuál es el propósito principal de una sentencia 'try-catch' en programación?",
    answers: ["Declarar variables", "Manejar errores y excepciones", "Definir bucles", "Realizar operaciones matemáticas"],
    correctAnswer: "Manejar errores y excepciones"
  },
  {
    text: "¿Cuál de los siguientes no es un lenguaje de marcado utilizado en desarrollo web?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: "Python"
  }






  ];

  const footballQuestions = [
    {
      text: "¿En qué país se celebró la Copa Mundial de la FIFA 2018?",
      answers: ["Francia", "Brasil", "Alemania", "Rusia"],
      correctAnswer: "Rusia"
    },
    {
       text: "¿Cuántos jugadores componen un equipo de fútbol en el campo durante un partido?",
        answers: ["9", "10", "11", "12"],
      correctAnswer: "11"
      },
      {
        text: "¿En qué país se originó el fútbol moderno?",
        answers: ["Brasil", "Inglaterra", "Italia", "Argentina"],
        correctAnswer: "Inglaterra"
      },
      {
        text: "¿En qué año se celebró el primer Mundial de Fútbol?",
        answers: ["1926", "1930", "1934", "1938"],
        correctAnswer: "1930"
      },
      {
        text: "¿Cuál es el equipo de fútbol más antiguo del mundo?",
        answers: ["Barcelona", "Manchester United", "Sheffield FC", "Real Madrid"],
        correctAnswer: "Sheffield FC"
      },
      {
        text: "¿Qué jugador ha ganado más Balones de Oro de la FIFA?",
        answers: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Diego Maradona"],
        correctAnswer: "Lionel Messi"
      },
      {
        text: "¿En qué estadio se celebró la final de la Copa Mundial de 2002?",
        answers: ["Maracaná", "Estadio Olímpico de Berlín", "Yokohama", "Wembley"],
        correctAnswer: "Yokohama"
      },
      {
        text: "¿Qué país ha ganado más Copas América en la historia?",
        answers: ["Argentina", "Uruguay", "Brasil", "Chile"],
        correctAnswer: "Uruguay"
      },
      {
        text: "¿Qué jugador es conocido como 'El Fenómeno'?",
        answers: ["Ronaldo Nazário", "Cristiano Ronaldo", "Romário", "Ronaldinho"],
        correctAnswer: "Ronaldo Nazário"
      },
      {
        text: "¿Cuántos Mundiales de Fútbol ha ganado Alemania?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: "4"
      },
      {
        text: "¿Cuál es el club de fútbol más exitoso en la historia de la Serie A italiana?",
        answers: ["Milán", "Juventus", "Inter de Milán", "Roma"],
        correctAnswer: "Juventus"
      },
      {
        text: "¿En qué país se celebró la Copa Mundial de la FIFA 2014?",
        answers: ["Francia", "Brasil", "Sudáfrica", "Rusia"],
        correctAnswer: "Brasil"
      },
      
    {
      text: "¿Qué equipo ganó la UEFA Champions League en la temporada 2020-2021?",
      answers: ["Real Madrid", "Chelsea", "Bayern Munich", "Manchester City"],
      correctAnswer: "Chelsea"
    },
    // Agrega más preguntas de fútbol aquí...
  ];
  function startFootballGame() {
    currentQuestions = footballQuestions;
    startGame();
  }


  //Funcion para empezar con las distintas temáticas de preguntas
  function startGame(section) {
    if (section === "random") {
      currentQuestions = randomQuestions;
    //para empezar con las preguntas de Rock
    } else if (section === "rock") {
      currentQuestions = rockArgentinoQuestions;
    //para empezar con las preguntas de Programación
    }else if(section==="programacion"){
      currentQuestions = programacionQuestions;
      //para empezar con las preguntas de cocina
    }else if(section ==="cocina"){
      currentQuestions=cocinaQuestions;
    }

    

  //Puse uno 
    currentQuestion = 1;
    score = 0;
  
    const optionsDiv = document.querySelector(".options");
    const gameContainer = document.getElementById("gameContainer");
    optionsDiv.style.display = "none";
    gameContainer.style.display = "block";
  
    displayQuestion();
  }
  
  
    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = currentQuestions[currentQuestion].answers[i];
    }

 function checkAnswer(answer) {
  const answerButtons = document.querySelectorAll(".answer");
  const correctAnswerIndex = currentQuestions[currentQuestion].answers.indexOf(currentQuestions[currentQuestion].correctAnswer);

  if (answer === currentQuestions[currentQuestion].correctAnswer) {
    score++;
    answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Respuesta correcta
  } else {
    answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Respuesta correcta
    answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].style.backgroundColor = "#f44336"; // Respuesta incorrecta
  }

  // Deshabilita los botones para evitar respuestas adicionales
  answerButtons.forEach(button => {
    button.disabled = true;
  });

  setTimeout(() => {
    // Restaura los estilos y pasa a la siguiente pregunta
    answerButtons.forEach(button => {
      button.style.backgroundColor = "";
      button.disabled = false;
    });
    nextQuestion();
  }, 1000); // 1 segundo de duración de la animación
}
  
  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < currentQuestions.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
 /*  function showResults() {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = `<h1>¡Juego completado!</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;
  } */
  
  // Al cargar la página, oculta la sección de juego
/*   document.getElementById("gameContainer").style.display ="none"; */

  
  
function checkAnswer(answer) {
    const answerButtons = document.querySelectorAll(".answer");
  
    // Deshabilita los botones para evitar respuestas adicionales
    answerButtons.forEach(button => {
      button.disabled = true;
    });
  
    if (answer === currentQuestions[currentQuestion].correctAnswer) {
      score++;
      updateScore();
      answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].classList.add("correct-answer");
    } else {
      answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].classList.add("incorrect-answer");
    }
  
    setTimeout(() => {
      // Remueve las clases de animación y pasa a la siguiente pregunta
      answerButtons.forEach(button => {
        button.classList.remove("correct-answer", "incorrect-answer");
        button.disabled = false;
      });
      nextQuestion();
    }, 1000); // 1 segundo de duración de la animación
  }


  

function checkAnswer(answer) {
    function checkAnswer(answer) {
        const answerButtons = document.querySelectorAll(".answer");
        const correctAnswerIndex = currentQuestions[currentQuestion].answers.indexOf(currentQuestions[currentQuestion].correctAnswer);
      
        if (answer === currentQuestions[currentQuestion].correctAnswer) {
          score++;
          answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Correct answer
        } else {
          lives--; // Deduct a life for incorrect answer
          updateLives(); // Update the display of remaining lives
          answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Correct answer
          answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].style.backgroundColor = "#f44336"; // Incorrect answer
        }
      
        // Disable buttons to prevent further answers
        answerButtons.forEach(button => {
          button.disabled = true;
        });
      
        setTimeout(() => {
          // Reset styles and proceed to the next question
          answerButtons.forEach(button => {
            button.style.backgroundColor = "";
            button.disabled = false;
          });
          nextQuestion();
        }, 1000); // 1 second animation duration
      }
      
      function updateLives() {
        const heartIcons = document.getElementById("heartIcons");
        heartIcons.innerHTML = "";
        for (let i = 0; i < lives; i++) {
          const heartIcon = document.createElement("span");
          heartIcon.innerHTML ="<i class='fa-regular fa-heart fa-xl' style='color: #a0b5eb;' ></i>"; // Heart emoji
          heartIcons.appendChild(heartIcon);
        }
      }

    //
    if (answer === currentQuestions[currentQuestion].correctAnswer) {
        score++;
        updateScore();
    } else {
        // Si la respuesta es incorrecta, restamos una vida
        lives--;
        updateLives();
    }

    nextQuestion();
}
function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}

function updateLives() {
    const livesElement = document.getElementById("lives");
    livesElement.textContent = lives;
}

//LA parte de laas preguntas

function nextQuestion() {
    currentQuestion++;
    if (lives <= 0) {
        // El jugador se quedó sin vidas, fin del juego
        showResults();
    } else if (currentQuestion < currentQuestions.length) {
        displayQuestion();
    } else {
        // Fin del juego
        showResults();
    }
}

/* function showResults() {
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = `<h1>¡Juego completado!</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;
} */
function showResults(){if(lives>0){
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = `<h1>¡Juego completado!  <i class='fa-solid fa-award fa-bounce' style='color: #a0b5eb;></i> </h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;

}else{
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = `<h1>¡No tienes mas vidas   <i class='fa-solid fa-heart-crack fa-beat' style='color: #a0b5eb;'></i> !</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p> `;
}}


/* // Al cargar la página, oculta la sección de juego
document.getElementById("gameContainer").style.display = "none"; */
