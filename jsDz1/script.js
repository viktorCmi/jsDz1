//////////////////////////////////////Задание 1
var arrZD1 = [16, true, 'JS', null, { name: 'UserName', hobby: 'JS' }, 30, null, false, 'Vue']
console.log("Задание 1");
console.log("Массив задания");
console.log(arrZD1);

function zD1while(arr) {
    let counter = 0;
    while (counter < arr.length) {
        if (isNaN(arr[counter]) || typeof (arr[counter]) === 'boolean') { arr[counter] = null; /*console.log(arr[counter]);*/ }
        counter++
    }
    return arr;
}

function zD1for(arr) {
    for (let counter = 0; counter < arr.length; counter++) {
        if (isNaN(arr[counter]) || typeof (arr[counter]) === 'boolean') { arr[counter] = null; }
    }
    return arr;
}

console.log("Проверка и изменение массива завершена:");
console.log("Цикл While");
console.log(zD1while(arrZD1));
console.log("Цикл for");
console.log(zD1for(arrZD1));

//////////////////////////////////////Задание 2
var arrZD2 = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123]
console.log("Задание 2");
console.log("Массив задания");
console.log(arrZD2);

function zD2while(arr) {
    let counter = 0;
    let multiples = 0;
    while (counter < arr.length) {
        if (arr[counter] % 3 == 0) { multiples++; /*console.log(arr[counter]);*/ }
        counter++
    }
    if (multiples) { return multiples; }
    else { return "В данном массиве нет чисел кратных 3"; }

}

function zD2for(arr) {
    let multiples = 0;
    for (let counter = 0; counter < arr.length; counter++) {
        if (arr[counter] % 3 == 0) { multiples++; /*console.log(arr[counter]);*/ }
    }
    if (multiples) { return multiples; }
    else { return "В данном массиве нет чисел кратных 3"; }
}


function zD2Template(arr) {
    let counter = 0;
    let multiples = 0;
    while (counter < arr.length) {
        if (arr[counter] % 3 == 0) { multiples++; /*console.log(arr[counter]);*/ }
        counter++
    }
    return multiples !== 0 ? multiples : "В данном массиве нет чисел кратных 3";
}

console.log("В данном массиве:");
console.log("Цикл While");
console.log(zD2while(arrZD2));
console.log("Цикл for");
console.log(zD2for(arrZD2));
console.log("чисел кратных 3");
console.log("темплейтный литерал, " + zD2Template(arrZD2) + " чисел кратных 3");


//////////////////////////////////////Задание 3
var arrZD3 = [16, true, 'JS', null, { name: 'UserName', hobby: 'JS' }, 30, null, false, 'Vue']
console.log("Задание 3");
console.log("Массив задания");
console.log(arrZD3);

function zD3for(arr) {
    let String = 0;
    let Number = 0;
    let Boolean = 0;
    let Null = 0;
    let Object = 0;

    for (let counter = 0; counter < arr.length; counter++) {

        if (typeof (arr[counter]) === 'string') String++;
        if (typeof (arr[counter]) === 'number') Number++;
        if (typeof (arr[counter]) === 'boolean') Boolean++;
        if (arr[counter] === null) Null++;
        if (typeof (arr[counter]) === 'object') Object++;

    }
    return ('String: ' + String + '\n' + 'Number: ' + Number + '\n' + 'Boolean: ' + Boolean + '\n' + 'Null: ' + Null + '\n' + 'Object: ' + Object)
}

console.log(zD3for(arrZD3));

//////////////////////////////////////Задание 4 

console.log("Задание 4");
function zD4dec(name, message) {
    return name + " " + message;
}

const zD4exp = function (name, message) {
    return name + " " + message;
}

console.log(zD4dec('Viktor', 'hellow bro'));
console.log(zD4exp('Viktor', 'hellow bro'));

