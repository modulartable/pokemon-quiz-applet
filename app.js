const startBtn = document.getElementById("startBtn");

const quizBox = document.getElementById("quiz");

const screenOne = document.getElementById("screenOne");

const screenTwo = document.getElementById("screenTwo");

const screenThree = document.getElementById("screenThree");

const screenFour = document.getElementById("screenFour");

const screenFive = document.getElementById("screenFive");

const screenSix = document.getElementById("screenSix");

const screenSeven = document.getElementById("screenSeven");

let score = 0;

class Questions {
  constructor(question, option1, option2, option3, option4, answer) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
  }
}

let question1 = new Questions(
  "Which Pokemon does Ash first encounter?",
  "Pidgey",
  "Pikachu",
  "Charmander",
  "Mr. Mime",
  "Pidgey"
);

let question2 = new Questions(
  "What did Ash trade his Butterfree for?",
  "Raticate",
  "Squirtle",
  "Tauros",
  "Metapod",
  "Raticate"
);

let question3 = new Questions(
  "How is Gary Oak related to Professor Oak?",
  "Cousin",
  "Nephew",
  "Brother",
  "Grandson",
  "Grandson"
);

let question4 = new Questions(
  "How old was Ash when he started his Pokemon journey?",
  "11 years old",
  "10 years old",
  "12 years old",
  "9 years old",
  "10 years old"
);

let question5 = new Questions(
  "Which Pokemon did Ash catch in Gringey City?",
  "Muk",
  "Zubat",
  "Magnemite",
  "Charizard",
  "Magnemite"
);

let questionList = [question1, question2, question3, question4, question5];

let screenList = [screenTwo, screenThree, screenFour, screenFive, screenSix,screenSeven];

//variable to switch between questions and
let i = 0;

let x = 0;

//let optionsList = [option1, option2, option3, option4];

let startQuiz = () => {
  screenOne.style.display = "none";
  screenTwo.style.display = "inline";

  let scoreHeader = document.createElement("h1");
  scoreHeader.id = "score";
  let node6 = document.createTextNode("Score: ");
  let node7 = document.createElement("span");
  node7.innerHTML = "0";
  node7.id = "scoreValue";
  scoreHeader.appendChild(node6);
  scoreHeader.appendChild(node7);
  quizBox.appendChild(scoreHeader);

  quizOps();
};

let quizOps = () => {
  //Assign the question as a header and append it to the div
  let questionHeader = questionList[i].question;

  let option1 = questionList[i].option1;
  let option2 = questionList[i].option2;
  let option3 = questionList[i].option3;
  let option4 = questionList[i].option4;

  let header = document.createElement("h1");
  header.classList.add("header");
  let node1 = document.createTextNode(questionHeader);
  header.appendChild(node1);
  screenList[x].appendChild(header);

  let answerContainer = document.createElement("div");
  answerContainer.classList.add("answerContainer");

  let answerBox1 = document.createElement("div");
  let answerBox2 = document.createElement("div");
  let answerBox3 = document.createElement("div");
  let answerBox4 = document.createElement("div");

  answerBox1.classList.add("boxes");
  answerBox2.classList.add("boxes");
  answerBox3.classList.add("boxes");
  answerBox4.classList.add("boxes");

  let node2 = document.createTextNode(option1);
  let node3 = document.createTextNode(option2);
  let node4 = document.createTextNode(option3);
  let node5 = document.createTextNode(option4);

  answerBox1.appendChild(node2);
  answerBox2.appendChild(node3);
  answerBox3.appendChild(node4);
  answerBox4.appendChild(node5);

  answerContainer.appendChild(answerBox1);
  answerContainer.appendChild(answerBox2);
  answerContainer.appendChild(answerBox3);
  answerContainer.appendChild(answerBox4);

  answerContainer.addEventListener("click", answerCheck);

  screenList[x].appendChild(answerContainer);

  i++;
};

let answerCheck = (e) => {
  if (e.target.innerText == questionList[i - 1].answer) {
    e.target.style.backgroundColor = "green";

    score++;

    document.getElementById("scoreValue").innerHTML = score;
   
    if (x < 4) {
      setTimeout(moveScreen, 2000);

      setTimeout(quizOps, 2500);
      console.log("normal");
    }
    else {
      setTimeout(moveScreen, 1000);
      setTimeout(resultScreen, 1500);
      console.log("results");
      }

  }
else {
    e.target.style.backgroundColor = "red";

    if (score > 0) {
      score--;
      scoreValue.innerText = score;
    }

    if (x < 4) {
      setTimeout(moveScreen, 2000);

      setTimeout(quizOps, 2500);
    }

    else {
      setTimeout(moveScreen, 1000);
    setTimeout(resultScreen, 1500);
    }
  }
};

let moveScreen = () => {
  screenList[x].style.display = "none";
  x++;
  console.log(x);
  screenList[x].style.display = "inline";
};

startBtn.addEventListener("click", startQuiz);

let resultScreen = () => {
let header = document.getElementById("score");
  quizBox.removeChild(header);
  let result = document.createElement("h1");
result.classList.add("header");
let node8 = document.createTextNode("Congratulations! Your score was: ");
let node9 = document.createElement("span");
node9.innerText = score;
result.appendChild(node8);
result.appendChild(node9);
screenSeven.appendChild(result);
};
