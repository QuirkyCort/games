var questionsBank =[
  {
    level: 0, // Player must have at least this score to receive these questions. They receive 10 points for every correct answer.
    questions: [
      ['1 + 2', '3', '1', '2', '5'], // First item is question, second is correct answers, third to fifth are the incorrect options
      ['2 + 2', '4', '2', '7', '5'],
      ['3 + 4', '7', '3', '2', '5'],
      ['4 + 2', '6', '1', '2', '5'],
      ['2 + 3', '5', '2', '7', '6'],
      ['4 + 4', '8', '3', '2', '5']
    ]
  },
  {
    level: 50,
    questions: [
      ['2 - 1', '1', '3', '2', '5'],
      ['2 - 2', '0', '2', '7', '5'],
      ['7 - 4', '3', '9', '2', '5'],
      ['3 - 1', '2', '3', '4', '5'],
      ['5 - 2', '3', '2', '7', '5'],
      ['7 - 2', '5', '9', '2', '4']
    ]
  },
  {
    level: 100,
    questions: [
      ['2 x 3', '6', '3', '2', '5'],
      ['2 x 2', '4', '2', '7', '5'],
      ['7 x 4', '28', '9', '2', '5'],
      ['3 x 3', '9', '3', '2', '5'],
      ['2 x 4', '8', '2', '7', '5'],
      ['7 x 3', '21', '9', '22', '5']
    ]
  },
  {
    level: 150,
    questions: [
      ['4 / 2', '2', '3', '4', '5'],
      ['2 / 2', '1', '2', '7', '5'],
      ['8 / 4', '2', '9', '3', '5'],
      ['9 / 3', '3', '6', '2', '5'],
      ['5 / 1', '5', '2', '7', '4'],
      ['10 / 2', '5', '9', '2', '3']
    ]
  },
  {
    level: 200,
    questions: [
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb'],
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb']
    ]
  },
  {
    level: 300,
    questions: [
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb'],
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb']
    ]
  },
  {
    level: 400,
    questions: [
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb'],
      ['What is the Airspeed Velocity of an Unladen Swallow?', '9m/s', '3m/s', '42m/s', '5m/s'],
      ['What is your name?', 'Lancelot', 'Robin', 'Galahad', 'Arthur'],
      ['What is your quest?', 'Holy Grail', 'Holy Sword', 'Holy Scriptures', 'Holy See'],
      ['What is your favorite color?', 'Blue', 'Yellow', 'Red', 'Gamboge'],
      ['What is the capital of Assyria?', 'Assur', 'Kalakh', 'Nineveh', 'Caleb']
    ]
  }
]

function shuffle(arr) {
  var i = arr.length, k , temp;      // k is to generate random index and temp is to swap the values
  while(--i > 0){
     k = Math.floor(Math.random() * (i+1));
     temp = arr[k];
     arr[k] = arr[i];
     arr[i] = temp;
  }
  return arr;
}
function prepQuestionsBank() {
  for (let i=0; i<questionsBank.length; i++) {
    questionsBank[i].i = 0;
    questionsBank[i].questions = shuffle(questionsBank[i].questions);
  }
}
prepQuestionsBank();
