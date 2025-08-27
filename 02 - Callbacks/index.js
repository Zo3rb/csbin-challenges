// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!

console.log("\n Challenge One Tests ------------- \n");

console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work

console.log("\n Challenge Two Tests ------------- \n");

console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

console.log("\n Challenge Three Tests ------------- \n");

console.log(map([1, 2, 3], addTwo));
console.log(map([4, 5, 6], addTwo));
console.log(map([7, 8, 9], addTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

console.log("\n Challenge Four Tests ------------- \n");

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'

// Challenge 5
function mapWith(array, callback) {
  const result = [];

  forEach(array, function (ele) {
    result.push(callback(ele));
  });

  return result;
}

console.log("\n Challenge Five Tests ------------- \n");

console.log(mapWith([1, 2, 3, 4], addTwo));

// Challenge 6
function reduce(array, callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;
}

console.log("\n Challenge Six Tests ------------- \n");

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
console.log(reduce(nums, add, 0)); //-> 8

const nums1 = [2, 3, 4];
const multiply = (a, b) => a * b;
console.log(reduce(nums1, multiply, 1)); // Should output 24

// Test case 2: Concatenate strings
const words = ["Hello", " ", "World", "!"];
const concat = (a, b) => a + b;
console.log(reduce(words, concat, "")); // Should output "Hello World!"

// Challenge 7
function intersection(arrays) {
  // Helper Function
  function intersect(arr1, arr2) {
    const result = [];

    for (element of arr1) {
      if (arr2.includes(element)) {
        result.push(element);
      }
    }

    return result;
  }

  return reduce(arrays, intersect, arrays[0]);
}

console.log("\n Challenge Seven Tests ------------- \n");

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
); // should log: [5, 15]
console.log(
  intersection([
    [1, 2, 3],
    [2, 3, 4],
    [3, 2, 5],
  ])
); // should log: [2, 3]
console.log(
  intersection([
    [10, 20, 30],
    [30, 40, 10],
    [10, 50, 30],
  ])
); // should log: [10, 30]

// Challenge 8
function union(arrays) {
  // Helper Function
  function uni(arr1, arr2) {
    const result = [...arr1];

    for (element of arr2) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }

    return result;
  }

  return reduce(arrays, uni, arrays[0]);
}

console.log("\n Challenge Eight Tests ------------- \n");

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
); // should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const result = {};

  for (element of array1) {
    if (array2.includes(callback(element))) {
      result[element] = callback(element);
    }
  }

  return result;
}

console.log("\n Challenge Nine Tests ------------- \n");

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const result = {};

  for (element of arrVals) {
    result[element] = arrCallbacks.map((cb) => {
      return cb(element);
    });
  }

  return result;
}

console.log("\n Challenge Ten Tests ------------- \n");

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const result = {};

  for (entry in obj) {
    if (obj[entry] === callback(entry)) {
      result[entry] = callback(entry);
    }
  }

  return result;
}

console.log("\n Challenge eleven Tests ------------- \n");

const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(objectFilter(cities, (city) => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let truthinessNum = 0;

  for (element of array) {
    if (callback(element)) truthinessNum += 1;
  }

  return truthinessNum > array.length / 2;
}

console.log("\n Challenge Twelve Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const result = [];

  for (element of array) {
    if (callback(element)) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log("\n Challenge Thirteen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
); // should log: ["seinfeld", "sunny", "curb", "rickandmorty", "friends"];

// Challenge 14
function countBy(array, callback) {
  const result = {};

  for (element of array) {
    result[callback(element)] = (result[callback(element)] || 0) + 1;
  }

  return result;
}

// /*** Uncomment these to check your work! ***/

console.log("\n Challenge Fourteen Tests ------------- \n");

console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const result = {};

  for (const element of array) {
    const key = callback(element);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(element);
  }

  return result;
}

console.log("\n Challenge Fifteen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  const result = [];

  for (entry in obj) {
    if (callback(obj[entry])) {
      result.push(entry);
    }
  }

  return result;
}

console.log("\n Challenge sixteen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  const first = func2(func1(value));
  const second = func1(func2(value));

  return first === second;
}

console.log("\n Challenge seventeen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const result = {};

  for (key in obj) {
    if (callback(key) === obj[key]) {
      result[key] = callback(key);
    }
  }

  return result;
}

console.log("\n Challenge Eighteen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let truthiness = 0;

  for (func of arrOfFuncs) {
    if (func(value)) {
      truthiness += 1;
    }
  }

  return (truthiness / arrOfFuncs.length) * 100;
}

console.log("\n Challenge Nineteen Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  let result = value;
  for (let func of arrOfFuncs) {
    result = func(result);
  }
  return result;
}

console.log("\n Challenge Twenty Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  let highestKey = "";
  let highestValue = -Infinity;

  for (let key in objOfFuncs) {
    const value = objOfFuncs[key](subject);
    if (value > highestValue) {
      highestValue = value;
      highestKey = key;
    }
  }

  return highestKey;
}

console.log("\n Challenge Twenty-One Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  let res = arrOfFuncs[0](startVal);

  for (let i = 1; i < arrOfFuncs.length; i++) {
    res = arrOfFuncs[i](res);
  }

  return res;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

console.log("\n Challenge Twenty-Two Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
console.log(combineOperations(0, [divByFive, multiplyFive, add100])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }

  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOddy(num) {
  return num % 2 !== 0;
}

console.log("\n Challenge Twenty-Three Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
console.log(myFunc(numbers, isOddy)); // Output should be 1
console.log(myFunc(evens, isOddy)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  for (num of array) {
    callback(num);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

console.log("\n Challenge Twenty-Four Tests ------------- \n");

// /*** Uncomment these to check your work! ***/
const numsy = [1, 2, 3];
myForEach(numsy, addToSum);
console.log(sum); // Should output 6
