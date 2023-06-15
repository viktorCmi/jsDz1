// Домашнее задание №6
// Темы:
// Прототипная модель наследования
// Конструктор, new
// Модификаторы свойств
// Собственные
// Унаследованные
// Приватные
// Публичные
// Задача №1
// Создайте объект с тремя методами и двумя свойствами:
// firstOperand - хранит значение первого операнда
// secondOperand - хранит значение второго операнда
// setValues() запрашивает два значения при помощи prompt, 
// сохраняет их значение, приведенное к числу, в firstOperand и  secondOperand.
// sumValues() возвращает сумму введенных свойств.
// multiplyValues() возвращает произведение введенных свойств.
// Сделать проверку в методах sumValues и multiplyValues на наличие чисел,
// если хотя бы одно число не указано, выводить в консоль сообщение ‘Числа не заданы’
const calculator = {
  firstOperand: 0,
  secondOperand: 0,
setValues() {
    const input1 = prompt("Введите первое число:");
    const input2 = prompt("Введите второе число:");
    this.firstOperand = Number(input1);
    this.secondOperand = Number(input2);
  },
sumValues() {
    if (isNaN(this.firstOperand) || isNaN(this.secondOperand)) {
      console.log("Числа не заданы");
      return;
    }
    return this.firstOperand + this.secondOperand;
  },
multiplyValues() {
    if (isNaN(this.firstOperand) || isNaN(this.secondOperand)) {
      console.log("Числа не заданы");
      return;
    }
    return this.firstOperand * this.secondOperand;
  }
};
console.log('zd1');
calculator.setValues();
console.log(calculator.sumValues());
console.log(calculator.multiplyValues());
// Задача №2
// Написать функцию-конструктор calculatorMaker. 
// При вызове в качестве конструктора функция calculatorMaker,
// в качестве аргументов должна принимать 2 числа 
// (первый аргумент – начальное значение первого операнда, второй аргумент 
// – начальное значение второго операнда, дефолтное значение которых, равняется 0) 
// и возвращать объект со следующими полями:
// firstOperand
// secondOperand
// history
// и унаследованными методами:
// addition
// subtraction
// multiplication
// division
// showHistory
// Поля firstOperand и secondOperand – переменные, в которых лежат значения,
// над которыми мы будем производить математические операции (могут быть только числом).
// Их начальное значение задается аргументами при вызове функции-конструктора.
// Поле history – массив строк, в котором будут храниться все операции, произведенные
// этим экземпляром конструктора calculatorMaker в виде строк.
// Пример массива history:
// [‘5*8’, ‘5-8’, ‘5/8’]
// Методы addition, subtraction, multiplication, division – сделать унаследованными 
// и реализовать следующий функционал:
// Метод addition – производит сложение операндов
// Метод subtraction – производит вычитание операндов
// Метод multiplication – производит умножение операндов
// Метод division – производит сложение операндов
// Все эти методы должны возвращать число (результат операции)
// Все эти методы должны добавлять сообщение о своём вызове в массив history
// Метод showHistory – сделать унаследованным и реализовать следующую логику работы функции.
// Метод должен выводить в консоль сообщение ‘Список операций, выполненный этим экземпляром: ’ 
// и далее выводит в консоль все сообщения из массива history, каждый элемент с новой строки.
// Если в массив history пуст, то выводить в консоль следующее сообщение: ‘Список операций – пуст’.
function calculatorMaker(firstOperand = 0, secondOperand = 0) {
  this.firstOperand = firstOperand;
  this.secondOperand = secondOperand;
  this.history = [];
  this.addition = function() {
    const result = this.firstOperand + this.secondOperand;
    this.history.push(`${this.firstOperand} + ${this.secondOperand}`);
    return result;
  };
this.subtraction = function() {
    const result = this.firstOperand - this.secondOperand;
    this.history.push(`${this.firstOperand} - ${this.secondOperand}`);
    return result;
  };
this.multiplication = function() {
    const result = this.firstOperand * this.secondOperand;
    this.history.push(`${this.firstOperand} * ${this.secondOperand}`);
    return result;
  };
this.division = function() {
    const result = this.firstOperand / this.secondOperand;
    this.history.push(`${this.firstOperand} / ${this.secondOperand}`);
    return result;
  };
this.showHistory = function() {
    console.log("Список операций, выполненный этим экземпляром:");
    if (this.history.length === 0) {
      console.log("Список операций - пуст");
    } else {
      this.history.forEach(operation => console.log(operation));
    }
  };
}
const calc = new calculatorMaker(13, 5);
console.log('zd2');
console.log(calc.addition()); 
console.log(calc.subtraction());
console.log(calc.multiplication()); 
console.log(calc.division());
calc.showHistory();

// Задача №3
// Создайте конструктор ProductCreator. Добавьте ему свойство instanceCounter и метод 
// showProductCreatorInstanceCounter. Метод showProductCreatorInstanceCounter должен 
// наследоваться всеми потомками конструктора ProductCreator и возвращать число созданных 
// потомков этим конструктором. При создании нового экземпляра конструктором ProductCreator 
// счётчик instanceCounter должен увеличиваться на 1 и это значение должно быть записано 
// в поле id создаваемого объекта.
function ProductCreator() {
  this.id = ++ProductCreator.instanceCounter;
}
ProductCreator.instanceCounter = 0;
ProductCreator.prototype.showProductCreatorInstanceCounter = function() {
  return ProductCreator.instanceCounter;
};
console.log('zd3');
const product1 = new ProductCreator();
console.log(product1.id); 
console.log(product1.showProductCreatorInstanceCounter());
const product2 = new ProductCreator();
console.log(product2.id);
console.log(product2.showProductCreatorInstanceCounter());
const product3 = new ProductCreator();
console.log(product3.id);
console.log(product3.showProductCreatorInstanceCounter());
