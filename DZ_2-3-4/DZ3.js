/////////////////////Задание 3.1
function processArrays(...args) {
  let arrays = args.filter(arg => Array.isArray(arg)); 
  let combinedArray = ['Start', ...arrays.flat(), 'The End']; 
  return combinedArray.reverse(); 
}
let arrayZD3_1 = processArrays(null, 123, 'JS', ['Nastya', 'Dima', 'Max', 'Masha'], undefined, {}, true, ['Sasha', 'Denis', 'Marina']);
console.log('Zd3.1: ' + arrayZD3_1);
/////////////////////Задание 3.2
function combineArrays(numbers, strings) {
  if (numbers.length !== strings.length) {
    return 'Массивы имеют разную длину';
  }
  let sortedNumbers = numbers.sort((a, b) => a - b); 
  let midIndex = Math.floor(numbers.length / 2);
  let combinedArray = [...sortedNumbers.slice(0, midIndex), ...strings];
  return combinedArray.slice(0, midIndex);
}
let numbers = [73, 4, 11, 234, 58, 134];
let strings = ['js', 'css', 'jq', 'html', 'vue', 'bootstrap'];
console.log('Zd3.2: ' + combineArrays(numbers, strings));
/////////////////////Задание 3.3
function truncateString(str, n) {
  if (str.length > n) {
    return str.slice(0, n) + '...';
  } else {
    let  replacedString = str.replace(/\s/g, '-'); 
    return replacedString.charAt(0).toUpperCase() + replacedString.slice(1, -1) + replacedString.slice(-1).toUpperCase();
  }
}
let inputString = 'This is a sample string';
let maxLength = 10;
console.log('Zd3.3: ' + truncateString(inputString, maxLength));
/////////////////////Задание 3.4
function removeWord(str, word) {
  const result1 = str.substr(0, str.indexOf(word)) + str.substr(str.indexOf(word) + word.length);
  const result2 = str.substring(0, str.indexOf(word)) + str.substring(str.indexOf(word) + word.length);
  const start = str.indexOf(word);
  const end = start + word.length;
  const result3 = str.slice(0, start) + str.slice(end);
  return [result1, result2, result3];
}
let phrase = 'The quick brown fox jumps over the lazy dog';
let word = 'fox';
let results = removeWord(phrase, word);
console.log('Zd4.4: ') 
console.log('Substr: ', results[0]);
console.log('Substring: ', results[1]);
console.log('Slice: ', results[2]);
