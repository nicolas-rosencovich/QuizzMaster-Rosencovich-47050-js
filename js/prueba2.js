let currentQuestion = 0;
let score = 0;
let lives = 7; // Set the initial number of lives to 3
let currentQuestions;






function showResults() {
    const gameContainer = document.getElementById("gameContainer");
    const livesContainer = document.getElementById("livesContainer");
  
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
    }



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
        options: ["Clave de Sol", "Clave de Fa", "Clave de Do", "Clave de Si"],
        correctAnswer: "Clave de Sol",
      },

      {
        text: "¿Cuántos tiempos tiene una negra en un compás de 4/4?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1"
      },
      {
        text: "¿Qué término musical se utiliza para indicar que una nota debe tocarse más suavemente?",
        options: ["Staccato", "Legato", "Mezzo piano", "Pianissimo"],
        correctAnswer: "Pianissimo"
      },
      {
        text: "¿Cuál es el nombre de la nota que se encuentra dos semitonos por encima de un Do?",
        options: ["Re", "Mi", "Fa", "Sol"],
        correctAnswer: "Re"
      },
      {
        text: "¿Cuál es la relación entre las notas en una escala menor armónica?",
        options: ["Dos tonos enteros y un semitono", "Un tono entero y un semitono", "Dos semitonos", "Un tono y medio"],
        correctAnswer: "Dos tonos enteros y un semitono"
      },
      {
        text: "¿Cuál es el nombre del silencio que representa una pausa larga en la música?",
        options: ["Silencio de blanca", "Silencio de negra", "Silencio de corchea", "Silencio de semicorchea"],
        correctAnswer: "Silencio de blanca"
      },
      {
        text: "¿Cuál es el término que se utiliza para cambiar la altura de una nota musical en un semitono?",
        options: ["Acorde", "Sostenido", "Bemol", "Intervalo"],
        correctAnswer: "Sostenido"
      },
      {
        text: "¿Qué sección de una orquesta se encarga de tocar instrumentos de viento madera como el clarinete y el fagot?",
        options: ["Cuerdas", "Viento metal", "Percusión", "Viento madera"],
        correctAnswer: "Viento madera"
      },
      {
        text: "¿Cuál es el nombre del signo que se coloca al principio de una partitura para indicar el número de tiempos en un compás?",
        options: ["Compás", "Barra de compás", "Indicador de compás", "Clave de compás"],
        correctAnswer: "Indicador de compás"
      },
      {
        text: "¿Qué intervalo se forma entre las notas Do y Mi en una escala mayor?",
        options: ["Tercera menor", "Cuarta justa", "Sexta mayor", "Quinta justa"],
        correctAnswer: "Tercera menor"
      },
      {
        text: "¿Cuál es el término utilizado para indicar un cambio gradual en el volumen de la música?",
        options: ["Crescendo", "Decrescendo", "Ritardando", "Staccato"],
        correctAnswer: "Crescendo"
      },
      {
        text: "¿Qué sección de una orquesta se encarga de tocar instrumentos de percusión como tambores y platillos?",
        options: ["Cuerdas", "Viento metal", "Percusión", "Viento madera"],
        correctAnswer: "Percusión"
      },
      {
        text: "¿Cuál es el nombre de la técnica vocal en la que el cantante pasa rápidamente de una nota a otra?",
        options: ["Vibrato", "Glissando", "Legato", "Falsetto"],
        correctAnswer: "Glissando"
      },
      {
        text: "¿Cuál es el término que se utiliza para la progresión de acordes que termina en un acorde final estable?",
        options: ["Dominante", "Subdominante", "Tónica", "Modulación"],
        correctAnswer: "Tónica"
      },
      {
        text: "¿Cuál es el nombre de la notación que se utiliza para indicar que una nota debe tocarse más fuerte?",
        options: ["Staccato", "Legato", "Mezzo forte", "Fortissimo"],
        correctAnswer: "Fortissimo"
      }

    // Agrega más preguntas de rock argentino aquí...
  ];


  //Agrego más tipos de preguntas -    -------------- ------------------------------------------ 
//Preguntas de programación (Las primeras son de js)
  const programacionQuestions=[
    {
        text:"¿Cuál de los siguientes lenguajes de programación es conocido por su uso en desarrollo web?",
        answer:["Java", "C++", "Python ","JavaScript"],
        correctAnswer: "JavaScript"
    },

    {
         
            text: "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
            options: ["push()", "add()", "insert()", "append()"],
            correctAnswer: "push()"
          
    },


    {
        text: "¿Cuál de las siguientes no es una palabra reservada en JavaScript?",
        options: ["if", "function", "array", "let"],
        correctAnswer: "array"
    },

    {
 text: "¿Cuál es la forma correcta de comentar un solo línea en JavaScript?",
  options: [
    "// Este es un comentario",
    "'Este es un comentario'",
    "# Este es un comentario",
    "/* Este es un comentario */"
  ],
  correctAnswer: "// Este es un comentario"
    },

    {
        text: "¿Cuál es el operador de igualdad estricta en JavaScript?",
        options: ["==", "===", "=", "!="],
        correctAnswer: "==="
      },
      {
        text: "¿Qué método se utiliza para eliminar el último elemento de un array en JavaScript?",
        options: ["pop()", "remove()", "delete()", "splice()"],
        correctAnswer: "pop()"
      },
      {
        text: "¿Cuál es la función de la sentencia 'switch' en JavaScript?",
        options: [
          "Declarar una función",
          "Definir una clase",
          "Realizar una selección múltiple basada en el valor de una expresión",
          "Crear un bucle"
        ],
        correctAnswer: "Realizar una selección múltiple basada en el valor de una expresión"
      },
      {
        text: "¿Qué palabra clave se utiliza para declarar una variable que no puede ser reasignada en JavaScript?",
        options: ["let", "var", "const", "non-reassign"],
        correctAnswer: "const"
      },
      {
        text: "¿Cuál es el resultado de '2' + '2' en JavaScript?",
        options: ["4", "22", "Error", "NaN"],
        correctAnswer: "22"
      },
      {
        text: "¿Cuál es el operador lógico 'Y' en JavaScript?",
        options: ["&&", "||", "!", "&"],
        correctAnswer: "&&"
      },
      {
        text: "¿Cuál es el valor de 'true && false' en JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: "false"
      },
      {
        text: "¿Cómo se llama la función que se ejecuta después de un tiempo específico en JavaScript?",
        options: ["waitTimeout()", "setInterval()", "sleep()", "setTimeout()"],
        correctAnswer: "setTimeout()"
      },
      {
        text: "¿Cuál es el resultado de '5' == 5 en JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: "true"
      },

      {
        text: "¿Cuál es el operador de asignación en JavaScript?",
        options: ["=", "==", "===", ":="],
        correctAnswer: "="
      },
      {
        text: "¿Cómo se declara una variable global en JavaScript?",
        options: ["var", "let", "const", "global"],
        correctAnswer: "var"
      },
      {
        text: "¿Cuál es el resultado de 5 + '5' en JavaScript?",
        options: ["10", "55", "Error", "NaN"],
        correctAnswer: "55"
      },
      {
        text: "¿Cuál es la función utilizada para obtener la longitud de una cadena en JavaScript?",
        options: ["len()", "length()", "count()", "size()"],
        correctAnswer: "length()"
      },
      {
        text: "¿Cuál es el operador de incremento en JavaScript?",
        options: ["++", "+=", "--", "-="],
        correctAnswer: "++"
      },
      {
        text: "¿Cuál es el resultado de 10 / 0 en JavaScript?",
        options: ["Error", "Infinity", "0", "NaN"],
        correctAnswer: "Infinity"
      },
      {
        text: "¿Cuál es el método utilizado para agregar un elemento al principio de un array en JavaScript?",
        options: ["push()", "unshift()", "append()", "addFirst()"],
        correctAnswer: "unshift()"
      },
      {
        text: "¿Cuál es la función utilizada para redondear un número decimal al entero más cercano en JavaScript?",
        options: ["round()", "ceil()", "floor()", "truncate()"],
        correctAnswer: "round()"
      },
      {
        text: "¿Cuál es el operador lógico 'O' en JavaScript?",
        options: ["&&", "||", "!", "&"],
        correctAnswer: "||"
      },
      {
        text: "¿Cuál es el resultado de '5' === 5 en JavaScript?",
        options: ["true", "false", "Error", "undefined"],
        correctAnswer: "false"
      },
    

//Acá unas de programación general
{
    text: "¿Cuál es el propósito de una declaración 'import' en JavaScript?",
    options: ["Definir una función", "Importar una biblioteca o módulo", "Declarar una variable", "Crear una clase"],
    correctAnswer: "Importar una biblioteca o módulo"
  },
  {
    text: "¿Qué significa la sigla 'HTML' en desarrollo web?",
    options: ["Hypertext Markup Language", "High-Level Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hypertext Markup Language"
  },
  {
    text: "¿Qué tipo de lenguaje es Python?",
    options: ["De alto nivel", "De bajo nivel", "Ensamblador", "Orientado a objetos"],
    correctAnswer: "De alto nivel"
  },
  {
    text: "¿Qué es un bucle 'for' en programación?",
    options: ["Una estructura condicional", "Una función para agregar elementos a un array", "Una estructura de control de flujo", "Un operador lógico"],
    correctAnswer: "Una estructura de control de flujo"
  },
  {
    text: "¿Qué es un 'framework' en desarrollo de software?",
    options: ["Un lenguaje de programación", "Una estructura de datos", "Una biblioteca de funciones predefinidas", "Un tipo de base de datos"],
    correctAnswer: "Una biblioteca de funciones predefinidas"
  },
  {
    text: "¿Cuál es el propósito de la sentencia 'else' en una estructura 'if-else'?",
    options: ["Iniciar un bucle", "Definir una variable", "Manejar el caso contrario al 'if'", "Importar una biblioteca"],
    correctAnswer: "Manejar el caso contrario al 'if'"
  },
  {
    text: "¿Cuál de los siguientes lenguajes de programación se utiliza comúnmente para desarrollo de videojuegos?",
    options: ["Java", "Python", "C++", "HTML"],
    correctAnswer: "C++"
  },
  {
    text: "¿Cuál es la principal ventaja de la programación orientada a objetos?",
    options: ["Mayor eficiencia en el uso de recursos", "Mayor facilidad de lectura del código", "Reutilización de código y encapsulación de datos", "Simplificación de algoritmos"],
    correctAnswer: "Reutilización de código y encapsulación de datos"
  },
  {
    text: "¿Qué significa la sigla 'API' en programación?",
    options: ["Arquitectura de Procesamiento de Información", "Asignación de Propiedades de Interfaz", "Aplicación de Procedimientos Inversos", "Interfaz de Programación de Aplicaciones"],
    correctAnswer: "Interfaz de Programación de Aplicaciones"
  },
  {
    text: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos (DBMS) ampliamente utilizado?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Apache"],
    correctAnswer: "Apache"
  },
  {
    text: "¿Qué es un 'loop infinito' en programación?",
    options: ["Un bucle que se ejecuta una sola vez", "Un bucle que repite un conjunto de instrucciones sin fin", "Un bucle que no funciona", "Un bucle que se ejecuta al revés"],
    correctAnswer: "Un bucle que repite un conjunto de instrucciones sin fin"
  },
  {
    text: "¿Qué es un 'callback' en JavaScript?",
    options: ["Una función que se ejecuta al principio de un programa", "Una función que se llama después de una operación asincrónica", "Una función que transforma datos", "Una función de impresión en pantalla"],
    correctAnswer: "Una función que se llama después de una operación asincrónica"
  },
  {
    text: "¿Cuál es el propósito principal de una sentencia 'try-catch' en programación?",
    options: ["Declarar variables", "Manejar errores y excepciones", "Definir bucles", "Realizar operaciones matemáticas"],
    correctAnswer: "Manejar errores y excepciones"
  },
  {
    text: "¿Cuál de los siguientes no es un lenguaje de marcado utilizado en desarrollo web?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
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
 
  function startGame(section) {
    if (section === "random") {
      currentQuestions = randomQuestions;
    } else if (section === "rock") {
      currentQuestions = rockArgentinoQuestions;
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
  
  function displayQuestion() {
    const questionText = document.getElementById("questionText");
    questionText.textContent = currentQuestions[currentQuestion].text;
  
    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].textContent = currentQuestions[currentQuestion].answers[i];
    }
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

  //PROBANDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  
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
  gameContainer.innerHTML = `<h1>¡No tienes mas vidas   <i class='fa-solid fa-heart-crack fa-beat' style='color: #a0b5eb;'></i> !</h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;
}}


/* // Al cargar la página, oculta la sección de juego
document.getElementById("gameContainer").style.display = "none"; */