// Темы:
// IIFE
// Рекурсия
// get/set

// Задача №1
// Создайте IIFE, которое получает пароль в аргументе и возвращает внутреннюю функцию,
// которая в качестве аргумента принимает введенную строку и возвращает булево значение true,
// если введенная строка совпадает с паролем и faulse – если не совпадает. 
// Для сохранения результата IIFE создайте переменную checkPassword.

const checkPassword = (function(password) {
  return function(input) {
    return input === password;
  };
})("Artem");
console.log("ZD1: "+checkPassword("Artem")); // Вывод: true

// Задача №2
// Создайте IIFE, которое получает число n (начальное значение) в качестве аргумента родительской
// функции и возвращает функцию, которая получает число, прибавляет его к n, которое находится 
// в замыкании, и возвращает результат. Для сохранения результата IIFE создайте переменную addeter.

const adder = (function(n) {
  return function(n) {
    return n + n;
  };
})();
console.log("ZD2: "+adder(10)); 

// Задача №3
// Создайте IIFE, которое вернёт функцию, у которой в замыкании будет переменная counter
// со значением 10. Сделайте так, чтобы каждый вызов возвращённой функции уменьшал это 
// число на 1 и выводил на экран уменьшенное число. Добавьте функционал, чтобы отсчет
// доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение
// о том, что отсчет окончен.


const counter = (function() {
    let privateCounter = 10;
    return function() {
    if (privateCounter) return --privateCounter;
    else return "отсчет окончен"
  };
})();

// Вызов 10 раз
(function () {
    console.log("ZD3");
  for (let i = 0; i < 11; i++) {
   console.log(counter());   
}
})();


// Задача №4
// Напишите функцию, которая в качестве единственного аргумента принимает массив чисел 
// и возвращает сумму чисел этого массива. Реализовать с помощью рекурсии

function mySum(arr) {
  if (arr.length === 0) {
    return 0; 
  } else {
    let lastNumber = arr[arr.length - 1]; 
    let remainingNumbers = arr.slice(0, arr.length - 1); 
    return lastNumber + mySum(remainingNumbers); 
  }
}
let numbers = [1, 1, 1, 1, 1, 1, 1, 1, 2];
console.log('ZD4: '+mySum(numbers)); // 15


// Задача №5
// Напишите функцию, которая в качестве аргументов принимает два числа. 
// Первое число – начало диапазона. Второе число – конец диапазона. 
// Вернуть строку всех целых чисел из этого диапазона через запятую.
// Реализовать с помощью рекурсии

function rangeToString(start, end) {
  if (start > end) {
    return "";
  } else if (start === end) {
    return String(start); 
  } else {
    return start + ", " + rangeToString(start + 1, end); 
  }
}
console.log('ZD5: ' + rangeToString(1,5)); // 1, 2, 3, 4, 5

// Задача №6
// Напишите функцию, которая принимает массив из последовательности 
// чисел и возвращает максимальное число.
// Реализовать с помощью рекурсии

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
const arrZD6 = [9, 1, 1, 10, 5]
console.log('ZD6: ' + findMaxNumber(arrZD6)); 

// Задача №7
// Создать объект пользователя со следующими полями:
// firstName
// lastName
// birthday
// Значения полей указать произвольное. Реализовать следующие геттеры и сеттеры:
// геттер fullName - возвращает конкатенированную строку, состоящую из firstName и lastName
// сеттер fullName - устанавливает значения в поля firstName и lastName
// геттер age - возвращает количество лет от даты указанной в birthday, до текущего дня.
// сеттер age - изменяет год в поле birthday, вычисляя это значение из текущего года и нового значения

let user = {
    firstName: 'Сhuck',
    lastName: 'Norris',
    birthday:  new Date(1940, 3, 10),
    get fullName () {
        return this.firstName + " " + this.lastName
    },
    set fullName(fullname){
    [this.firstName, this.lastName] = fullname.split(" ");
    },
    get age () { 
      return new Date(this.birthday).getFullYear()
    },
    set age (newAge){
        (this.birthday).setFullYear(new Date().getFullYear()-newAge);     
    }
}

console.log('ZD7: ')
console.log(user.fullName + ' ' + user.age);
user.fullName = "Taras Sirius";
user.age = 50;
console.log(user.fullName + ' ' + user.age);

// Задача №8
// Создать объект товара со следующими полями:
// name
// id
// price
// discount
// Значения полей указать произвольное. Реализовать следующие геттеры и сеттеры:
// геттер discountPrice - возвращает цену товара, уменьшенную на количество 
// процентов указанных в поле discount
// сеттер discountPrice - устанавливает значение поля price, 
// увеличивая новое значение на количество процентов указанных в поле discount


const product = {
    name: 'Сhuck',
    id: 'Norris',
    price:  100,
    discount:  25,
    get discountPrice () {
        return this.price * (100 - this.discount) / 100;
    },
    set discountPrice(newDiscountPrice){
    this.price = newDiscountPrice * 100 / (100 - this.discount);
    }
  }
console.log('ZD8: ' )
console.log(product.discountPrice+"$");
product.discountPrice = 1000;
console.log(product.discountPrice+"$");