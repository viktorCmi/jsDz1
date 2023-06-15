// Домашнее задание №7
// Темы:
// Иттерирующие методы массива
// forEach
// map
// find
// findIndex
// filter
// some
// every
// reduce
// Задача №1
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. 
// Функция должна возвращать сумму квадратных корней для всех четных чисел массива. 
// Для реализации функционала функции используйте методы filter(), map() или reduce().

function sumSquare(arr) {
  const sum = arr
    .filter(num => num % 2 === 0) 
    .map(num => Math.sqrt(num)) 
    .reduce((acc, curr) => acc + curr, 0); 
   return sum;
}
const arrZD1 = [9, 1, 1, 10, 5]
console.log('ZD1: ' + sumSquare(arrZD1).toFixed(2) ); 

// Задача №2
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. 
// Функция должна возвращать число элементов, которое нужно сложить чтобы в сумме получилось больше 20-ти. 
// Если сумма всех чисел массива меньше 20, вывести сообщение об этом в консоль. 
// Для реализации функционала функции используйте метод reduce().

function countElementsToSum(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0); 
   if (sum < 20) {
    console.log("Сумма чисел в массиве меньше 20.");
    return;
  }
   let count = 0;
  let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    count++;
   if (currentSum > 20) {
      break;
    }
  }
  return count;
}

const numbers = [5, 10, 10, 20, 10];
console.log('ZD2: ' + countElementsToSum(numbers)); 

// Задача №3
// Напишите функцию, которая единственным аргументом будет принимать массив строк. 
// Функция должна возвращать массив со строками, длина которых больше 5-ти символов. 
// Для реализации функционала функции используйте метод filter()
// Реализуйте функционал используя метод reduce().

function filterLongStrings(arr) {
  return arr.reduce((result, str) => {
    if (str.length > 5) {
      result.push(str);
    }
    return result;
  }, []);
}
const strings = ['Oksana', 'Bronislav', 'Elman', 'Jaroslav', 'Timofey'];
const filteredStrings = filterLongStrings(strings);
console.log('ZD3:');
console.log(filteredStrings);

// Задача №4
// Напишите функцию, которая единственным аргументом будет принимать массив чисел, 
// одним элементом которого должен быть 0. Функция должна возвращать сумму первых N 
// элементов до первого нуля. Если в массиве нет элементов 0, то возвращать строку 
// ‘Переданный массив не содержит нулей’. Для реализации функционала функции используйте 
// метод forEach() или reduce().
function sumBeforeZero(arr) {
  let sum = 0;
  let foundZero = false;
    arr.forEach((num) => {
    if (!foundZero) {
      if (num === 0) {
        foundZero = true;
      } else {
        sum += num;
      }
    }
  });
 if (!foundZero) {
    return 'Переданный массив не содержит нулей';
  }
 return sum;
}
const zd4 = [4, 1, 0, 1, 5, 3];
const sum = sumBeforeZero(zd4);
console.log('ZD4:' + sum);

// Задача №5
// Написать четыре функции, каждая из которых будут в качестве аргумента принимать массив
// studentsMarks и возвращать указанные ниже значения:
// Массив с именами студентов, записанными заглавными буквами. 
// Для реализации функционала функции используйте метод map().
// Массив с именами студентов, набравших более 50 баллов и имеющих id больше 120.
// Для реализации функционала функции используйте метод filter()
// Общую сумму баллов студентов. Для реализации функционала функции используйте метод reduce().
// Массив с именами студентов, у которых баллы больше 50, после начисления поощрения в 15 баллов.
// Для реализации функционала функции используйте метод reduce().
// Пример массива:
// const studentsMarks  = [
//       	{name: 'John', id: 123, mark : 98 },
//          {name: 'Baba', id: 101, mark : 23 },
//          {name: 'yaga', id: 200, mark : 45 },
//          {name: 'Wick', id: 115, mark : 75 }
const studentsMarks = [
  { name: 'John', id: 123, mark: 98 },
  { name: 'Baba', id: 101, mark: 23 },
  { name: 'yaga', id: 200, mark: 45 },
  { name: 'Wick', id: 115, mark: 75 }
];

function getUpperCaseNames(students) {
  return students.map((student) => student.name.toUpperCase());
}
function getHighScoringStudents(students) {
  return students.filter((student) => student.mark > 50 && student.id > 120)
                 .map((student) => student.name);
}
function getTotalMarks(students) {
  return students.reduce((total, student) => total + student.mark, 0);
}
function getRewardedStudents(students) {
  return students.reduce((result, student) => {
    if (student.mark > 50) {
      student.mark += 15;
      result.push(student.name);
    }
    return result;
  }, []);
}
console.log('ZD5:');
console.log('Массив с именами студентов, записанными заглавными буквами.');
console.log(getUpperCaseNames(studentsMarks));
console.log('Массив с именами студентов, набравших более 50 баллов и имеющих id больше 120.');
console.log(getHighScoringStudents(studentsMarks));
console.log('Общая сумма баллов студентов. ');
console.log(getTotalMarks(studentsMarks));
console.log('Массив с именами студентов, у которых баллы больше 50');
console.log(getRewardedStudents(studentsMarks));

// Задача №6
// Напишите функцию, которая единственным аргументом будет принимать массив чисел. 
// Функция должна возвращать массив его сумм каждого элемента и всех стоящих перед ним чисел. 
// Для реализации функционала функции используйте метод .forEach().

function calculateCumulativeSums(arr) {
  const cumulativeSums = [];
  arr.forEach((num, index) => {
    if (index === 0) {
      cumulativeSums.push(num);
    } else {
      const previousSum = cumulativeSums[index - 1];
      cumulativeSums.push(previousSum + num);
    }
  });
  return cumulativeSums;
}
const zd6 = [7, 3, 2, 4, 8];
console.log('ZD6: ' + calculateCumulativeSums(zd6));
// Задача №7
// Напишите функцию, которая принимает массив в качестве единственного аргумента 
// и возвращает полученный массив без повторяющихся значений. Для реализации функционала функции 
// используйте методы .filter() и .indexOf().
function removeDuplicates(arr) {
  const uniqueArr = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
 return uniqueArr;
}
const zd7 = [9, 9, 1, 1, 7];
console.log('ZD7: ' + removeDuplicates(zd7));
// Задача №8
// Напишите функцию, которая принимает массив с вложенными массивами и возвращает 
// одномерный (плоский) массив.
function flattenArray(arr) {
  return arr.flat();
}
const nestedArray = [[13, 37], [23, 11], [44, 32]];
console.log('ZD8: ' + flattenArray(nestedArray));
// Задача №9
// Напишите функцию, которая в качестве аргументов принимает массив элементов и число. 
// Функция должна возвращать массив с массивами из  элементов переданного массива. 
// Длина внутренних массивов должна быть равной числу, переданному в качестве аргумента. 
// Если длина исходного массива не кратна переданному числу, 
// то оставшиеся элементы также поместить в массив.
function splitArray(arr, size) {
  return arr.reduce((result, item, index) => {
    if (index % size === 0) {
      result.push([]);
    }
    result[Math.floor(index / size)].push(item);
    return result;
  }, []);
}
const zd9 = [5, 8 , 90, 7, 33, 77, 88, 55, 78];
console.log('ZD9: ');2
console.log(splitArray(zd9, 2));








