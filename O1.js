const boxes = [0, 1, 2, 3, 4, 5, 6];

function checkBoxes(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}

checkBoxes(boxes);

function funChall(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    // anotherFunc(); //O(n)
    let stranger = true; //O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChall(boxes); // O(n)

// What is the Big O of the below function? (Hint, you may want to go line by line) // O(n)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) { // O(n)
    // O(1)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

function logAllPairs(arr){
   arr.forEach(num => {
       console.log(num);
   });

   arr.forEach(num1 => {
       arr.forEach(num => {
           console.log(num1 + num);
       });
   });
}

logAllPairs(boxes);