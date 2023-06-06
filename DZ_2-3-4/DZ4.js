/////////////////////Задание 4.1
function createCounter() {
  let count = 0;
  function increment() {
    count++; 
    return count;
  }
  return increment;
}
let counter = createCounter();
console.log('ZD4.1'); 
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
/////////////////////Задание 4.2
function createRandomNumberGenerator() {
let result = []; 
  function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 50) + 1; 
    if (result.includes(randomNumber)) {
      return 'Это число уже есть в массиве!';
    }
    result.push(randomNumber); 
    return result;
  }
  return generateRandomNumber;
}

let randomNumberGenerator = createRandomNumberGenerator();
console.log('ZD4.2'); 
console.log(randomNumberGenerator()); // [42]
console.log(randomNumberGenerator()); // [42, 17]
console.log(randomNumberGenerator()); // [42, 17, 35]
console.log(randomNumberGenerator()); // [42, 17, 35, 23]
console.log(randomNumberGenerator()); // [42, 17, 35, 23, 49]
console.log(randomNumberGenerator()); // "Это число уже есть в массиве"
/////////////////////Задание 4.3
let checkPassword = (function(password) {
  return function(input) {
    return input === password;
  };
})('myPassword123');
console.log('ZD4.3'); 
console.log(checkPassword('myPassword123')); // true
console.log(checkPassword('wrongPassword')); // false
/////////////////////Задание 4.4
const addeter = (function(n) {
  return function(num) {
    return n + num;
  };
})(5);
console.log('ZD4.4' + addeter(10)); // 15
/////////////////////Задание 4.5
const counterFunction = (function() {
  let counter = 10; 
return function() {
    if (counter > 0) {
      console.log(counter); 
      counter--; 
    } else {
      console.log('Отсчет окончен');
    }
  };
})();
console.log('ZD4.5')
counterFunction(); // 10
counterFunction(); // 9
counterFunction(); // 8
counterFunction(); // 7
counterFunction(); // 6
counterFunction(); // 5
counterFunction(); // 4
counterFunction(); // 3
counterFunction(); // 2
counterFunction(); // 1
counterFunction(); // Отсчет окончен
/////////////////////Задание 4.6
function calculateSumRecursive(arr) {
  if (arr.length === 0) {
    return 0; 
  } else {
    let lastNumber = arr[arr.length - 1]; 
    let remainingNumbers = arr.slice(0, arr.length - 1); 
    return lastNumber + calculateSumRecursive(remainingNumbers); 
  }
}
let numbers = [1, 2, 3, 4, 5];
console.log('ZD4.6 numbers: ' + numbers + ' sum: ' + calculateSumRecursive(numbers)); // 15
/////////////////////Задание 4.7
function rangeToString(start, end) {
  if (start > end) {
    return "";
  } else if (start === end) {
    return String(start); 
  } else {
    return start + ", " + rangeToString(start + 1, end); 
  }
}
console.log('ZD4.7: ' + rangeToString(1,10)); // "1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
/////////////////////Задание 4.8
function findMaxNumber(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    const lastNumber = arr.pop(); 
    // console.log('lastNumber: ' + lastNumber);
    const maxRest = findMaxNumber(arr);
    // console.log('maxRest: ' + maxRest);
    return Math.max(lastNumber, maxRest);
  }
}
const arrZD4_8 = [9, 1, 1, 10, 5]
console.log('ZD4.8 masive: ' + arrZD4_8 + ' Max number: ' + findMaxNumber(arrZD4_8)); // 10
