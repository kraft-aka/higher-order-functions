console.log("hi. Let's play a game!");

//gets userchoice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Wrong Input. Please Choose between rock, paper or scissors");
  }
};

//gets computers choice
const getComputerChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choice[index];
};

// checks the result
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It is tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "User won";
    }
  }
};

// runs the game
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  console.log(`${userChoice} : ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame("rock");
