


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
  
//Preguntas de Rock
const rockQuestions = [
    {
      text: "¿Cuál de estos artistas es considerado el 'Rey del Rock'?",
      answers: ["Elvis Presley", "The Beatles", "Bob Dylan", "Michael Jackson"],
      correctAnswer: "Elvis Presley",
    },
    {
      text: "¿Qué banda de rock lanzó el álbum 'The Wall' en 1979?",
      answers: ["Pink Floyd", "Led Zeppelin", "The Rolling Stones", "Queen"],
      correctAnswer: "Pink Floyd",
    },
    {
      text: "¿Cuál de estas canciones es un éxito de la banda Queen?",
      answers: ["Hey Jude", "Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"],
      correctAnswer: "Bohemian Rhapsody",
    },
    {
      text: "¿Quién es el legendario guitarrista de rock conocido por su estilo de guitarra con la lengua afuera?",
      answers: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Angus Young"],
      correctAnswer: "Angus Young",
    },
    {
      text: "¿Cuál de estas bandas es conocida por su álbum 'Nevermind' lanzado en 1991?",
      answers: ["The Rolling Stones", "Nirvana", "The Who", "U2"],
      correctAnswer: "Nirvana",
    },
    {
      text: "¿Cuál de los siguientes álbumes es un clásico del rock de la banda Led Zeppelin?",
      answers: ["Abbey Road", "Back in Black", "Dark Side of the Moon", "IV"],
      correctAnswer: "IV",
    },
    {
      text: "¿Qué banda de rock es conocida por su álbum 'Appetite for Destruction'?",
      answers: ["Metallica", "Guns N' Roses", "Aerosmith", "The Clash"],
      correctAnswer: "Guns N' Roses",
    },
    {
      text: "¿Qué banda de rock británica es famosa por su álbum 'The Joshua Tree'?",
      answers: ["The Beatles", "The Who", "U2", "Queen"],
      correctAnswer: "U2",
    },
    {
      text: "¿Cuál de estos músicos es el líder de la banda 'The Rolling Stones'?",
      answers: ["Mick Jagger", "John Lennon", "Roger Waters", "Bono"],
      correctAnswer: "Mick Jagger",
    },
    {
      text: "¿Cuál de las siguientes canciones es un clásico de la banda de rock The Who?",
      answers: ["Like a Rolling Stone", "Baba O'Riley", "Purple Haze", "Bohemian Rhapsody"],
      correctAnswer: "Baba O'Riley",
    },
    {
      text: "¿Quién es conocido como el 'Padre del Rock and Roll'?",
      answers: ["Elvis Presley", "Buddy Holly", "Chuck Berry", "Jerry Lee Lewis"],
      correctAnswer: "Chuck Berry",
    },
    {
      text: "¿Cuál de estas bandas de rock es conocida por su álbum 'Back in Black'?",
      answers: ["AC/DC", "The Eagles", "Led Zeppelin", "Pink Floyd"],
      correctAnswer: "AC/DC",
    },
    {
      text: "¿Cuál de las siguientes bandas de rock se formó en Liverpool y cambió la música para siempre?",
      answers: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "The Who"],
      correctAnswer: "The Beatles",
    },
    {
      text: "¿Cuál de estas canciones es un éxito de la banda Queen?",
      answers: ["Hotel California", "Bohemian Rhapsody", "Stairway to Heaven", "Imagine"],
      correctAnswer: "Bohemian Rhapsody",
    },
    {
      text: "¿Cuál de estas bandas de rock se originó en la ciudad de Seattle y es parte del movimiento 'Grunge'?",
      answers: ["The Rolling Stones", "Nirvana", "The Who", "U2"],
      correctAnswer: "Nirvana",
    },
    {
      text: "¿Qué icónico guitarrista de rock es conocido por su Hendrix Stratocaster y su interpretación de 'The Star-Spangled Banner' en Woodstock?",
      answers: ["Eric Clapton", "Jimi Hendrix", "Jimmy Page", "Angus Young"],
      correctAnswer: "Jimi Hendrix",
    },
    {
      text: "¿Cuál de estas canciones es una famosa balada de la banda Guns N' Roses?",
      answers: ["Sweet Child o' Mine", "Paranoid", "Bohemian Rhapsody", "Smells Like Teen Spirit"],
      correctAnswer: "Sweet Child o' Mine",
    },
    {
      text: "¿Cuál de las siguientes bandas de rock es conocida por su álbum 'The Dark Side of the Moon'?",
      answers: ["Pink Floyd", "The Eagles", "Led Zeppelin", "The Who"],
      correctAnswer: "Pink Floyd",
    },
    {
      text: "¿Cuál de estos músicos es el líder de la banda Pink Floyd?",
      answers: ["David Gilmour", "Roger Waters", "John Lennon", "Mick Jagger"],
      correctAnswer: "Roger Waters",
    },
];


  // Define las preguntas de rock argentino
  const rockNacionalQuestions = [
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
    // Agregar más preguntas de fútbol acá...
  ];

  //Pregunta de la naturaleza
  const naturalezaQuestions = [
    {
      text: "¿Cuál es el gas más abundante en la atmósfera de la Tierra?",
      answers: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Argón"],
      correctAnswer: "Nitrógeno",
    },
    {
      text: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
      answers: ["Fotosíntesis", "Respiración", "Transpiración", "Germinación"],
      correctAnswer: "Fotosíntesis",
    },
    {
      text: "¿Qué océano es el más grande del mundo?",
      answers: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"],
      correctAnswer: "Océano Pacífico",
    },
    {
      text: "¿Cuál es el depredador más grande del planeta Tierra?",
      answers: ["Tiburón blanco", "León", "Elefante", "Ballena azul"],
      correctAnswer: "Ballena azul",
    },
    {
      text: "¿Qué gas es esencial para la respiración de los seres humanos?",
      answers: ["Nitrógeno", "Oxígeno", "Hidrógeno", "Dióxido de carbono"],
      correctAnswer: "Oxígeno",
    },
    {
      text: "¿Qué famoso río atraviesa el Gran Cañón en los Estados Unidos?",
      answers: ["Río Amazonas", "Río Nilo", "Río Colorado", "Río Misisipi"],
      correctAnswer: "Río Colorado",
    },
    {
      text: "¿Cuál es el metal más abundante en la corteza terrestre?",
      answers: ["Hierro", "Aluminio", "Cobre", "Oro"],
      correctAnswer: "Aluminio",
    },
    {
      text: "¿Cuál es la montaña más alta del mundo?",
      answers: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Fuji"],
      correctAnswer: "Monte Everest",
    },
    {
      text: "¿Cuál de los siguientes no es un tipo de nube?",
      answers: ["Nimbus", "Cúmulo", "Fenómeno", "Estrato"],
      correctAnswer: "Fenómeno",
    },
    {
      text: "¿Qué animal es conocido como el 'Rey de la Selva'?",
      answers: ["Leopardo", "Tigre", "Elefante", "León"],
      correctAnswer: "León",
    },
    {
        text: "¿Cuál es el proceso de conversión de la materia orgánica en compost llamado?",
        answers: ["Fermentación", "Reciclaje", "Descomposición", "Fotosíntesis"],
        correctAnswer: "Descomposición",
      },
      {
        text: "¿Qué animal es conocido como el 'Gigante de la Selva'?",
        answers: ["Hipopótamo", "Jirafa", "Elefante", "Rinoceronte"],
        correctAnswer: "Elefante",
      },
      {
        text: "¿Qué fenómeno natural es causado por la vibración de la Tierra?",
        answers: ["Volcán", "Tornado", "Terremoto", "Tsunami"],
        correctAnswer: "Terremoto",
      },
      
      {
        text: "¿Cuál es el proceso de transformación del agua en vapor debido al calor del sol?",
        answers: ["Precipitación", "Condensación", "Evaporación", "Infiltración"],
        correctAnswer: "Evaporación",
      },
      {
        text: "¿Cuál es el hábitat natural de los pandas gigantes?",
        answers: ["Selvas tropicales", "Desiertos", "Tundras", "Bosques de bambú"],
        correctAnswer: "Bosques de bambú",
      },
      {
        text: "¿Cuál es el proceso de cambio de un insecto a través de distintas etapas de desarrollo?",
        answers: ["Metamorfosis", "Respiración", "Fotosíntesis", "Reproducción"],
        correctAnswer: "Metamorfosis",
      },
      {
        text: "¿Cuál es el proceso de erosión del suelo debido al viento y el agua?",
        answers: ["Erosión térmica", "Erosión glacial", "Erosión eólica", "Erosión fluvial"],
        correctAnswer: "Erosión eólica",
      },
      {
        text: "¿Qué parte de la planta realiza la fotosíntesis?",
        answers: ["Raíz", "Tallo", "Hojas", "Flores"],
        correctAnswer: "Hojas",
      },
      {
        text: "¿Qué ave es conocida por su migración anual de larga distancia desde el Ártico hasta la Antártida?",
        answers: ["Gorrión", "Colibrí", "Pingüino emperador", "Águila calva"],
        correctAnswer: "Pingüino emperador",
      },
      {
        text: "¿Qué proceso geológico forma las montañas a lo largo de millones de años?",
        answers: ["Erosión", "Tectónica de placas", "Glaciación", "Meteoritos"],
        correctAnswer: "Tectónica de placas",
      },
      {
        text: "¿Cuál es la flor nacional de Japón, conocida por su belleza y simbolismo?",
        answers: ["Rosa", "Lirio", "Tulipán", "Cerezo en flor (Sakura)"],
        correctAnswer: "Cerezo en flor (Sakura)",
      },
      {
        text: "¿Qué tipo de árbol es famoso por su madera resistente y sus hojas en forma de aguja?",
        answers: ["Pino", "Roble", "Olmo", "Arce"],
        correctAnswer: "Pino",
      },
      {
        text: "¿Cuál es el proceso de cambio de agua de líquido a gas durante la cocción?",
        answers: ["Evaporación", "Fusión", "Condensación", "Solidificación"],
        correctAnswer: "Evaporación",
      },
      {
        text: "¿Qué animal es conocido por su capacidad de regenerar extremidades?",
        answers: ["Tiburón", "Estrella de mar", "Canguro", "Cocodrilo"],
        correctAnswer: "Estrella de mar",
      },
      {
        text: "¿Cuál es el elemento químico más abundante en el universo?",
        answers: ["Hidrógeno", "Oxígeno", "Hierro", "Plata"],
        correctAnswer: "Hidrógeno",
      },
      {
        text: "¿Cuál es el nombre de la capa exterior de la Tierra donde se encuentra la vida?",
        answers: ["Núcleo", "Manto", "Corteza", "Núcleo interno"],
        correctAnswer: "Corteza",
      },
      {
        text: "¿Qué animal es conocido por su capacidad de camuflarse en su entorno?",
        answers: ["Camaleón", "Koala", "Leopardo", "Elefante"],
        correctAnswer: "Camaleón",
      },
      {
        text: "¿Cuál es el proceso de descomposición de los desechos orgánicos en ausencia de oxígeno?",
        answers: ["Reciclaje", "Fermentación", "Compostaje", "Digestión"],
        correctAnswer: "Fermentación",
      },
      {
        text: "¿Cuál es el proceso de derretimiento de glaciares y la liberación de agua?",
        answers: ["Sublimación", "Afloramiento", "Descongelación", "Deshielo"],
        correctAnswer: "Deshielo",
      },
      {
        text: "¿Cuál es el nombre del fenómeno natural que causa una gran cantidad de precipitación en un corto período de tiempo?",
        answers: ["Huracán", "Tornado", "Inundación", "Lluvia torrencial"],
        correctAnswer: "Lluvia torrencial",
      },
      {
        text: "¿Cuál es el proceso de cambio de un gas a líquido debido a la disminución de la temperatura?",
        answers: ["Condensación", "Evaporación", "Sublimación", "Solidificación"],
        correctAnswer: "Condensación",
      },
      {
        text: "¿Cuál es el animal más rápido en tierra, capaz de alcanzar velocidades de hasta 70 mph?",
        answers: ["Guepardo", "Leopardo", "Jaguar", "León"],
        correctAnswer: "Guepardo",
      },
      {
        text: "¿Cuál es la planta que se considera una de las más antiguas del mundo y tiene hojas en forma de abanico?",
        answers: ["Helecho", "Orquídea", "Bambú", "Musgo"],
        correctAnswer: "Helecho",
      },
      {
        text: "¿Cuál es el animal conocido por su capacidad de regenerar su cola?",
        answers: ["Lagarto", "Tortuga", "Serpiente", "Rana"],
        correctAnswer: "Lagarto",
      },
      {
        text: "¿Cuál es el proceso de transformación de la luz en energía química en las plantas?",
        answers: ["Respiración", "Fotosíntesis", "Transpiración", "Germinación"],
        correctAnswer: "Fotosíntesis",
      },
      {
        text: "¿Cuál es el río más largo del mundo?",
        answers: ["Río Amazonas", "Río Nilo", "Río Mississippi", "Río Yangtsé"],
        correctAnswer: "Río Amazonas",
      },
      {
        text: "¿Cuál es el proceso de eliminación de sustancias tóxicas del cuerpo de un organismo?",
        answers: ["Exhalación", "Digestión", "Desintoxicación", "Filtración"],
        correctAnswer: "Desintoxicación",
      },
      {
        text: "¿Cuál es el ave famosa por su migración anual desde el Ártico hasta la Antártida?",
        answers: ["Ganso", "Albatros", "Colibrí", "Flamenco"],
        correctAnswer: "Albatros",
      },
  ];
  

  //Preguntas de Basquet
  const basketballQuestions = [
    {
      text: "¿Cuál es el equipo de la NBA con más títulos de campeonato en la historia?",
      answers: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
      correctAnswer: "Boston Celtics",
    },
    {
      text: "¿Cuántos jugadores componen un equipo de baloncesto en la cancha durante un juego de la NBA?",
      answers: ["5", "6", "7", "8"],
      correctAnswer: "5",
    },
    {
      text: "¿Quién ostenta el récord de más puntos anotados en un solo juego de la NBA?",
      answers: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"],
      correctAnswer: "Wilt Chamberlain",
    },
    {
      text: "¿Cuál es el tiempo máximo de posesión de balón permitido en la NBA antes de un tiro al aro?",
      answers: ["20 segundos", "24 segundos", "30 segundos", "35 segundos"],
      correctAnswer: "24 segundos",
    },
    {
      text: "¿Quién es considerado el mejor jugador de baloncesto de todos los tiempos?",
      answers: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Larry Bird"],
      correctAnswer: "Michael Jordan",
    },
    {
      text: "¿Qué equipo ganó el oro en baloncesto masculino en los Juegos Olímpicos de 1992 en Barcelona?",
      answers: ["Estados Unidos", "España", "Lituania", "Argentina"],
      correctAnswer: "Estados Unidos",
    },
    {
      text: "¿Cuál es el nombre de la violación en la que un jugador se desplaza sin driblar el balón?",
      answers: ["Doble dribble", "Carga", "Pasos", "Falta técnica"],
      correctAnswer: "Pasos",
    },
  
    {
      text: "¿Cuál es el término utilizado para describir una jugada en la que un jugador encesta el balón inmediatamente después de recibirlo?",
      answers: ["Pase largo", "Asistencia", "Alley-oop", "Tapa"],
      correctAnswer: "Alley-oop",
    },
    {
      text: "¿Qué jugador de baloncesto es conocido como 'The Greek Freak'?",
      answers: ["Giannis Antetokounmpo", "Luka Dončić", "Joel Embiid", "Kawhi Leonard"],
      correctAnswer: "Giannis Antetokounmpo",
    },
    {
      text: "¿Qué equipo ganó el campeonato de la NBA en la temporada 2020?",
      answers: ["Miami Heat", "Los Angeles Lakers", "Toronto Raptors", "Boston Celtics"],
      correctAnswer: "Los Angeles Lakers",
    },
    {
      text: "¿Qué jugador es famoso por su apodo 'The Answer' y su tiempo con los Philadelphia 76ers?",
      answers: ["Shaquille O'Neal", "Kevin Garnett", "Tracy McGrady", "Allen Iverson"],
      correctAnswer: "Allen Iverson",
    },
    {
      text: "¿Cuál es el término para el intento de encestar el balón directamente desde el saque inicial?",
      answers: ["Triple", "Alley-oop", "Buzzer beater", "Jump shot"],
      correctAnswer: "Buzzer beater",
    },
    {
        text: "¿Cuál es la altura oficial de un aro de baloncesto en la NBA en metros?",
        answers: ["2.74 metros", "2.80 metros", "3.05 metros", "3.20 metros"],
        correctAnswer: "3.05 metros",
      },
    {
      text: "¿En qué país se originó el baloncesto?",
      answers: ["Estados Unidos", "Canadá", "Francia", "España"],
      correctAnswer: "Estados Unidos",
    },
    {
      text: "¿Qué jugador de baloncesto es conocido como 'The King'?",
      answers: ["Stephen Curry", "Kevin Durant", "LeBron James", "Kawhi Leonard"],
      correctAnswer: "LeBron James",
    },
    {
      text: "¿Cuál es la duración oficial de un cuarto en un juego de baloncesto de la NBA?",
      answers: ["10 minutos", "12 minutos", "15 minutos", "20 minutos"],
      correctAnswer: "12 minutos",
    },

    {
        text: "¿En qué posición juega típicamente un jugador encargado de liderar la ofensiva y distribuir el balón en un equipo de baloncesto?",
        answers: ["Pívot", "Ala-Pívot", "Base", "Escolta"],
        correctAnswer: "Base",
      },
      {
        text: "¿Cuál es la distancia desde el aro a la línea de tiro libre en la NBA en metros?",
        answers: ["3.05 metros", "3.66 metros", "4.57 metros", "6.10 metros"],
        correctAnswer: "4.57 metros",
      },
      {
        text: "¿Cuál es el nombre del evento en el que los equipos universitarios compiten por el campeonato de baloncesto en EE. UU.?",
        answers: ["NBA Finals", "March Madness", "The Playoffs", "Final Four"],
        correctAnswer: "March Madness",
      },
      {
        text: "¿Cuál es el nombre de la técnica en la que un jugador bloquea un disparo en el aire?",
        answers: ["Bloqueo", "Taponazo", "Tapón", "Bloqueada"],
        correctAnswer: "Tapón",
      },
      {
        text: "¿Cuál es el tiempo máximo para un equipo de baloncesto para cruzar la mitad de la cancha?",
        answers: ["5 segundos", "8 segundos", "10 segundos", "12 segundos"],
        correctAnswer: "8 segundos",
      },
      {
        text: "¿Quién es conocido como 'The Dream' y fue una leyenda de los Houston Rockets?",
        answers: ["Shaquille O'Neal", "Hakeem Olajuwon", "Patrick Ewing", "David Robinson"],
        correctAnswer: "Hakeem Olajuwon",
      },
      {
        text: "¿Cuál es la línea que delimita la distancia desde la que un tiro vale tres puntos en la NBA?",
        answers: ["Línea de tiros libres", "Línea de triples", "Línea de medio campo", "Línea de tiro de campo"],
        correctAnswer: "Línea de triples",
      },
      {
        text: "¿Cuál es el nombre del premio otorgado al Jugador Más Valioso de la NBA?",
        answers: ["Mejor Jugador", "Máximo Anotador", "MVP", "Líder de Equipo"],
        correctAnswer: "MVP",
      },
      {
        text: "¿Cuál es el equipo de la NBA con sede en Toronto, Canadá?",
        answers: ["Los Angeles Lakers", "New York Knicks", "Chicago Bulls", "Toronto Raptors"],
        correctAnswer: "Toronto Raptors",
      },
      {
        text: "¿Qué equipo ganó seis campeonatos de la NBA en la década de 1990, liderados por Michael Jordan?",
        answers: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        correctAnswer: "Chicago Bulls",
      },
      {
        text: "¿Qué jugador es famoso por su apodo 'The Big Fundamental' y jugó para los San Antonio Spurs?",
        answers: ["Dirk Nowitzki", "Tim Duncan", "Karl Malone", "Kevin Garnett"],
        correctAnswer: "Tim Duncan",
      },
      {
        text: "¿Cuál es el nombre del torneo internacional de baloncesto masculino entre selecciones nacionales?",
        answers: ["NBA World Championship", "FIBA World Cup", "Olympic Games", "March Madness"],
        correctAnswer: "FIBA World Cup",
      },
      {
        text: "¿Qué jugador de baloncesto es conocido como 'The Round Mound of Rebound'?",
        answers: ["Charles Barkley", "Dennis Rodman", "Karl Malone", "Larry Bird"],
        correctAnswer: "Charles Barkley",
      },
      {
        text: "¿Cuál es el tiempo máximo que un equipo de baloncesto tiene para avanzar desde su canasta hasta la línea de tiros libres en un saque de banda?",
        answers: ["3 segundos", "5 segundos", "8 segundos", "10 segundos"],
        correctAnswer: "5 segundos",
      },
      {
        text: "¿Cuál es el nombre del premio otorgado al Mejor Novato del Año en la NBA?",
        answers: ["Rookie of the Year", "Young Star Award", "Emerging Talent Award", "Freshman Prize"],
        correctAnswer: "Rookie of the Year",
      },
      
      {
        text: "¿Cuál es el nombre del torneo de baloncesto femenino de selecciones nacionales que se celebra cada cuatro años?",
        answers: ["FIBA World Cup", "WNBA Championship", "Women's March Madness", "Olympic Games"],
        correctAnswer: "FIBA World Cup",
      },
      {
        text: "¿Cuál es el nombre del proceso en el que un jugador defiende a un oponente sin contacto físico?",
        answers: ["Presión defensiva", "Marcación", "Bloqueo", "Defensa en zona"],
        correctAnswer: "Marcación",
      },

  ];

  const gymQuestions =[

  {
    text: "¿Cuál de los siguientes ejercicios se enfoca en el desarrollo de los músculos del pecho?",
    answers: [
      "Press de banca",
      "Curl de bíceps",
      "Sentadillas",
      "Plancha"
    ],
    correctAnswer: "Press de banca"
  },
  {
    text: "¿Qué tipo de ejercicio implica el levantamiento de pesas por encima de la cabeza con los brazos extendidos?",
    answers: [
      "Curl de bíceps",
      "Press militar",
      "Zancadas",
      "Sentadillas"
    ],
    correctAnswer: "Press militar"
  },
  {
    text: "¿Cuál de las siguientes actividades es una forma efectiva de mejorar la resistencia cardiovascular?",
    answers: [
      "Yoga",
      "Spinning",
      "Entrenamiento de fuerza",
      "Pilates"
    ],
    correctAnswer: "Spinning"
  },

  {
    text: "¿Cuál es el propósito principal de realizar estiramientos antes y después del ejercicio?",
    answers: [
      "Aumentar la fuerza muscular",
      "Mejorar la flexibilidad",
      "Reducir la frecuencia cardíaca",
      "Ganar peso"
    ],
    correctAnswer: "Mejorar la flexibilidad"
  },

];
  