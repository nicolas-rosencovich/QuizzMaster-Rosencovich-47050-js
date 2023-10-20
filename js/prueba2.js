
let currentQuestion ;
let score = 0;
let lives = 7; // Set the initial number of lives to 3
let currentQuestions;




//Fijarse de corregir la línea 13(según tutor)
//Empezar preguntas random
const randomButton = document.querySelector("#randomButton")
 randomButton.addEventListener("click", () => {
  startGame('random')
 })

 const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click",() => {
   startGame('rock')
 })

//Empezar preguntas rock Nacional
const rockNacionalButton = document.querySelector("#rockNacionalButton");
rockNacionalButton.addEventListener("click",() => {
  startGame('rockNacional')
})

//Empezar con las preguntas de fútbol
const footballButton = document.querySelector("#footballButton");
footballButton.addEventListener("click", () => {
  startFootballGame('futbol')
})

//Empezar con las preguntas de fútbol
const basketballButton = document.querySelector("#basketballButton");
basketballButton.addEventListener("click", () => {
  startGame('basketball')
})

//Empezar con las preguntas del gimnasio

const gymButton = document.querySelector("#gymButton");
gymButton.addEventListener("click", () => {
  startGame('gimnasio')
})


//Empezar con las preguntas de programacion
const programacionButton = document.querySelector("#programacionButton");
programacionButton.addEventListener("click", () => {
  startGame('programacion')
})

//Empezar con las preguntas de cocina
const cocinaButton =document.querySelector("#cocinaButton");
cocinaButton.addEventListener("click", () => {
  startGame('cocina')
})

//Empezar con las preguntas de la naturaleza
const naturalezaButton = document.querySelector("#naturalezaButton");
naturalezaButton.addEventListener("click", () => {
  startGame('naturaleza')
})

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


/*  function startGame(section) {
    if (section === "random") {
        currentQuestions = randomQuestions;
    } else if (section === "rock") {
        currentQuestions = rockArgentinoQuestions;
    } else if (section === "programacion") {
      currentQuestions = programacionQuestions;
    }  else if (section === "naturaleza") {
        currentQuestions = naturalezaQuestions;}
      
 
    const optionsDiv = document.querySelector(".options");
    const gameContainer = document.getElementById("gameContainer");
    optionsDiv.style.display = "none";
    gameContainer.style.display = "block";

    displayQuestion();
    updateLives(); // Agregamos esta función para mostrar las vidas iniciales
} */


 function displayQuestion() {
    const questionText = document.getElementById("questionText");
 questionText.textContent = currentQuestions[currentQuestion].text; 
 
    const answerButtons = document.querySelectorAll(".answer");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestions[currentQuestion].answers[i];
    }
}





  function startFootballGame() {
    currentQuestions = footballQuestions;
    startGame();
  }


  //Funcion para empezar con las distintas temáticas de preguntas
  function startGame(section) {
    if (section === "random") {
      currentQuestions = randomQuestions;
    //para empezar con las preguntas de Rock
    } else if (section === "rockNacional") {
      currentQuestions = rockNacionalQuestions;
    //para empezar con las preguntas de Programación
    }else if(section==="programacion"){
      currentQuestions = programacionQuestions;
      //para empezar con las preguntas de cocina
    }else if(section ==="cocina"){
      currentQuestions=cocinaQuestions;
    }  else if (section === "naturaleza") {
      currentQuestions = naturalezaQuestions;}
      else if (section === "basketball") {
        currentQuestions = basketballQuestions;}
        else if (section === "rock") {
          currentQuestions = rockQuestions;}
          else if (section === "gimnasio") {
            currentQuestions = gymQuestions;}

  //Agrego uno 
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
          answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50"; // Respuesta correcta
        } else {
          lives--; 
          updateLives(); 
          answerButtons[correctAnswerIndex].style.backgroundColor = "#4caf50";
          answerButtons[currentQuestions[currentQuestion].answers.indexOf(answer)].style.backgroundColor = "#f44336"; // Respuesta incorrecta
        }
      
        // Disable buttons to prevent further answers
        answerButtons.forEach(button => {
          button.disabled = true;
        });
      
        setTimeout(() => {
          // Reseteo y pasa a la siguiente pregunta
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


function showResults(){if(lives>0){
  
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = `<h1>¡Juego completado!   <i class='fa-solid fa-award fa-beat' style='color: #a0b5eb;'></i> </h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p>`;

}else{
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = `<h1>¡No tienes más vidas!  <i class='fa-solid fa-heart-crack fa-beat' style='color: #a0b5eb;'></i> </h1><p>Puntaje final: ${score} / ${currentQuestions.length}</p> `;
}}





