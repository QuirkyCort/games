var questionsBank = [
  // First item is question, second is correct answers, third to fifth are the incorrect options
  ['Find the value of 5 x 14 + 20 – 16 – 4 x 4.', '58', '18', '50', '60'],
  ['Express 5080 cm in m.', '50.8 m', '5.8 m', '5.08 m', '50.08 m'],
  ['4 bags of candies cost $13.60. What is the cost of 1 bag of candies?', '$3.40', '$3.20', '$6.40', '$6.80'],
  ['If the length of each side of a square is an even number, which of the following can be the perimeter of the square?', '24 cm', '44 cm', '36 cm', '15 cm'],
  ['1/4 of a pole is painted blue and 1/2 of the remainder is painted orange. What fraction of the pole is not painted?', '3/8', '1/4', '1/2', '5/8'],
  // ['5/8 of the children in a field are boys. There are 45 girls. How many boys are there?', '75', '120', '72', '100'],
  // ['A rope was first cut into two pieces in the ratio of 3 : 1. The longer piece was then cut into 2 pieces in the ratio of 2 : 3. The shortest piece was 20 cm shorter than the longest piece. What was the length of the rope before it was cut?', '100 cm', '20 cm', '40 cm', '80 cm'],
  // ['At 12 00, a bus leaves Town A for Town B travelling at a speed of 90 km/h. At the same time, a truck leaves Town B for Town A travelling at a speed of 70 km/h. The distance between Town A and Town B is 480 km. At what time will the bus and truck pass each other?', '15 00', '16 00', '17 00', '18 00'],
  // ['The total volume of 8 identical packets of milk is 2.56 litres. What is the total volume of 2 packets of milk in millilitres?', '640', '6.4', '10.24', '1280'],
  // ['John and Sam had some stamps. After John gave 23 stamps to Sam, he had 30 more than Sam. How many more stamps did John have than Sam at first?', '76', '7', '53', '65'],
  // ['A is 2.2 times as large as B. Express B as a fraction of A.', '5/11', '11/5', '3/5', '5/3'],
  // ['The number of oranges Terrence has is less than 50. If he sells his oranges in packets of 4 or 7, he will have 3 oranges left. How many oranges does he have?', '31', '15', '21', '45'],
  // ['Cathy and Dawn shared some money. Cathy had $4x and Dawn had $(2x + 80). Both of them had $560 altogether. Find the value of x.', '80', '120', '180', '200'],
  // ['The average mass of a group of 6 students is 65 kg and the average mass of another group of 4 students is 80 kg. What is the average mass of all the students in both groups?', '71', '70.5', '72.5', '73'],
  // ['During a sale, the price of a shirt was $32 after a 20% discount. Jane was given a further discount of $4. What was the total percentage discount given?', '30', '21', '24', '26'],
]
var questionIndex = 0;

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

shuffle(questionsBank);