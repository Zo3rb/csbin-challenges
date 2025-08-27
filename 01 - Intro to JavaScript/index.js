/* ========== *
 * Challenge 1 *
 * =========== */

//Uncomment the lines below to test your code
console.log("\n Challenge One Tests ------------- \n");

console.log(typeof 7.0 === "number");
console.log(typeof 22 === "number");
console.log(typeof true === "boolean");

var myVar;
console.log(typeof myVar === "undefined");

myVar = "Ali"; //add your name here
console.log(typeof myVar === "string");

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
 * Challenge 2 *
 * =========== */

function buildSentence(word1, word2, word3) {
  const phrase = word1 + " " + word2 + " " + word3;

  console.log(phrase);
}

console.log("\n Challenge Two Tests ------------- \n");

buildSentence("coding", "is", "awesome"); //=> "Coding is awesome."
buildSentence("we're", "number", "1"); //=> "We're number 1."

/* ========== *
 * Challenge 3 *
 * =========== */

function lastLetter(word) {
  console.log(word[word.length - 1]);
}

//Uncomment the lines below to test your code
console.log("\n Challenge Three Tests ------------- \n");

lastLetter("hello"); //=> "o"
lastLetter("goodbye!"); //=> "!"
lastLetter("ZeltoiD"); //=> "D"

/* ========== *
 * Challenge 4 *
 * =========== */

function buildGreeting(time, name) {
  if (time >= 0 && time <= 11) {
    console.log("Good Morning, " + name + "!");
  } else if (time >= 12 && time <= 16) {
    console.log("Good Afternoon, " + name + "!");
  } else if (time >= 17 && time <= 23) {
    console.log("Good Evening, " + name + "!");
  } else {
    console.log(
      "That's not a real time, " + name + ". Maybe you need some sleep!"
    );
  }
}

console.log("\n Challenge Four Tests ------------- \n");

buildGreeting(8, "Maggie"); //=> "Good Morning, Maggie!"
buildGreeting(12, "John"); //=> "Good Afternoon, John!"
buildGreeting(22, "Stacey"); //=> "Good Evening, Stacey!"
buildGreeting(31, "Derrick"); //=> "That's not a real time, Derrick. Maybe you need some sleep!"

/* ========== *
 * Challenge 5 *
 * =========== */

console.log("\n Challenge Five Tests ------------- \n");

console.log("CodeSmith".indexOf("o") === 1);
console.log("hello".indexOf("ll") === 2);
console.log("zebra".indexOf("z") === 0);
console.log("banana".indexOf("B") === -1);

/* ========== *
 * Challenge 6 *
 * =========== */

function letterExists(word, letter) {
  console.log(word.includes(letter));
}

console.log("\n Challenge Six Tests ------------- \n");

letterExists("superman", "e"); //=> true
letterExists("starship", "S"); //=> false
letterExists("th1s", "1"); //=> true
letterExists("he!lo", "!"); //=> true

/* =========== *
 * Challenge 7 *
 * ============ */

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log("\n Challenge Seven Tests ------------- \n");

console.log(isPrime(-7)); // => false
console.log(isPrime(2)); // => true
console.log(isPrime(11)); // => true
console.log(isPrime(15)); // => false

/* ========== *
 * Challenge 8 *
 * =========== */

function range(start, end) {
  //your code goes here...
  if (start >= end) return;

  while (start < end + 1) {
    console.log(start++);
  }
}

//Uncomment the lines below to test your code
console.log("\n Challenge Eight Tests ------------- \n");

range(1, 4); //=> 1, 2, 3, 4
range(4, 2); //=>

/* =========== *
 * Challenge 9 *
 * ============ */

function myIndexOf(array, ele) {
  // your code here...
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ele) {
      console.log(i);
      return;
    }
  }

  console.log(-1);
  return;
}

console.log("\n Challenge Nine Tests ------------- \n");

myIndexOf([1, 2, 3, 4, 5], 5); //=> 4
myIndexOf(["a", "b", "c"], "a"); //=> 0
myIndexOf(["a", "b", "c"], "d"); //=> -1

/* =========== *
 * Challenge 10 *
 * ============ */

function unique(array) {
  //your code goes here...
  const mySet = new Set(array);

  console.log([...mySet]);
}

console.log("\n Challenge Ten Tests ------------- \n");

unique([1, 1, 2, 3, 3]); // => [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"]); // => ["a", "c", "aa", "b"]

/* =========== *
 * Challenge 11 *
 * ============ */

function longestWord(sentence) {
  // your code here...
  const sentenceArr = sentence.split(" ");

  if (sentence.length === 0) return "";

  let longestWord = "";
  for (word of sentenceArr) {
    if (word.length >= longestWord) {
      longestWord = word;
    }
  }

  return word;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Eleven Tests ------------- \n");

console.log(longestWord("my JavaScript is exceptional")); // => 'exceptional'
console.log(longestWord("hate having hungry hippos")); // => 'hippos'
console.log(longestWord("JavaScript")); // => 'JavaScript'
console.log(longestWord("")); // => ''

/* =========== *
 * Challenge 12 *
 * ============ */

function disemvowel(string) {
  // your code here...
  return string.replace(/[AEIOU]/gi, "");
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Twelve Tests ------------- \n");

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'

/* =========== *
 * Challenge 13 *
 * ============ */

function divisibleByFivePairSum(array) {
  // your code here...
  const pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let num1 = array[i];
      let num2 = array[j];
      if ((num1 + num2) % 5 === 0) {
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Thirteen Tests ------------- \n");

console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

/* =========== *
 * Challenge 14 *
 * ============ */

function highestScore(students) {
  // your code here...
  let highestScoreStudent = {
    name: "",
    id: 0,
    score: 0,
  };

  students.map((student) => {
    if (student.score >= highestScoreStudent.score) {
      highestScoreStudent = { ...student };
    }
  });

  let highestScoreStudentName = highestScoreStudent.name.split(" ");

  return `${highestScoreStudentName[0][0]}${highestScoreStudentName[1][0]}${highestScoreStudent.id}`;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Fourteen Tests ------------- \n");

var students = [
  { name: "Will Sentance", id: 128, score: -42 },
  { name: "Jamie Bradshaw", id: 32, score: 57 },
  { name: "Lisa Simpson", id: 2, score: 99 },
  { name: "Luke Skywalker", id: 256, score: 94 },
];

console.log(highestScore(students)); //=> 'LS2'

/* =========== *
 * Challenge 15 *
 * ============ */

// TODO: Solve this.
function leastCommonMultiple(num1, num2) {
  // your code here...
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Fifteen Tests ------------- \n");

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

/* ========== *
 * Extension 1 *
 * =========== */

function arrayBuilder(count) {
  // your code here...
  if (count.length === 0) return [];

  let result = [];

  for (entries in count) {
    const arrFromEntries = new Array(count[entries]).fill(entries);
    result = [...result, ...arrFromEntries];
  }

  return result;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Extension 1 Tests ------------- \n");

console.log(arrayBuilder({ cats: 2, dogs: 1 })); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []

/* ========== *
 * Extension 2 *
 * =========== */

function objectBuilder(count) {
  // your code here...
  let result = {};

  for (let i = count; i >= 0; i--) {
    result[i] = 5 * i;
  }

  return result;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Extension 2 Tests ------------- \n");

console.log(objectBuilder(4)); //=> {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
console.log(objectBuilder(0)); //=> { 0: 0 }

/* ========== *
 * Extension 3 *
 * =========== */

function secretCipher(sentence, cipher) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (cipher[char]) {
      result += cipher[char];
    } else {
      result += char;
    }
  }
  return result;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Extension 3 Tests ------------- \n");

console.log(secretCipher("lqq me on flcebzzk", { l: "a", q: "d", z: "o" })); //=> "add me on facebook"
console.log(secretCipher("where are you???", { v: "l", "?": "!" })); //=> "where are you!!!"
console.log(secretCipher("twmce", { m: "n", t: "d", w: "a" })); //=> "dance"

/* ========== *
 * Extension 4 *
 * =========== */

function passingStudents(students) {
  // your code here...
  const passing = [];
  for (let student of students) {
    let total = 0;
    for (let grade of student.grades) {
      total += grade.score;
    }
    let avg = total / student.grades.length;
    if (avg >= 70) {
      passing.push(student.name);
    }
  }
  return passing;
}

//Uncomment the lines below to test your function:

console.log("\n Challenge Extension 4 Tests ------------- \n");

var students = [
  {
    name: "Marco",
    id: 12345,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 75 },
      { id: 2, score: 85 },
    ],
  },
  {
    name: "Donna",
    id: 55555,
    grades: [
      { id: 0, score: 100 },
      { id: 1, score: 100 },
      { id: 2, score: 100 },
    ],
  },
  {
    name: "Jukay",
    id: 94110,
    grades: [
      { id: 0, score: 65 },
      { id: 1, score: 60 },
      { id: 2, score: 65 },
    ],
  },
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
