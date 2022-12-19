const readline = require('readline');

const questions = {
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"
};

let answersObj = {};


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;
const input = function () {
  if (i < Object.keys(questions).length) {
    rl.question(`${questions[i]}`, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answersObj[i] = answer;
      i++;
      input();
    });
  } else {
    rl.close();
    console.log(`${ answersObj[0]} loves listening to ${ answersObj[2]} while  ${ answersObj[1] }, 
      devouring ${ answersObj[4] } for ${ answersObj[3] }, prefers
      ${ answersObj[5] } over any other sport, and when was asked their superpower they answered: ${ answersObj[6] }`);
  }

};

input();





