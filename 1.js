/*
import _ from "lodash";

let z = _.intersection([2, 1], [2, 3]);
let x = _.capitalize("hello");

console.log(x);
console.log(z);
*/

const arr = [1,3,5,7,9];
console.log(arr);

var cat = "Cat";
console.log(cat.charAt(1));
console.log(cat.slice(1,2));
console.log(cat[1]);

console.log(cat.charCodeAt(1));


var a = "первая строка";
var b = " вторая строка";
var c = " третья строка"; 
let result = a.concat(b , c);
console.log(result);

var myString = "cat,dog,bird";
var myArray = myString.split(",");
console.log(myArray);

var catName = "Kitty";
console.log (catName.toUpperCase());



let aa = 'Hallo',
    bb = 'World';

function testStr(a, b) {
    return a.toUpperCase().concat(b.toLowerCase());
    // Тут нужно написать решение
}

const testStr1 = (a, b) => a.toUpperCase() + b.toLowerCase();

console.log(testStr(aa, bb));
console.log(testStr1(bb, aa));

var myString = "Это просто строка!";
console.log(myString.substring(4, 17));

console.log( "testme".substring(-2) ); // "testme", -2 становится 0
console.log( "testme".substring(4, -1) ); // "test"

console.log( "testme".slice(-2) ); // "me", от 2 позиции с конца
console.log( "testme".slice(1, -1) ); // "estm", от 1 позиции до первой с конца.

var myString = "Это просто проверочная строка!";
console.log(myString.indexOf("про", 0));
console.log(myString.indexOf("про", 5));
console.log(myString.lastIndexOf("про"));

var myString = String.fromCharCode(65, 66, 67);
console.log(myString);

let myString1 = new String("Hello world");
console.log(myString1.valueOf());


let myArray1 = [1, 2];
myArray1.unshift("Сергеев", "Дмитриев");
console.log(myArray1);
console.log(myArray1[2]);

function testArray(a, b) {
    let res = 0;
    for (let i of a) res += i;
    for (let i of b) res += i;
    return res;
    // Тут нужно написать решение
}
console.log(testArray([1,2,3], [5,6,7]));
console.log(myArray1.reverse());


/*
В этом задании в нашу функцию testArray передаются две строки случайной длины и содержания. Вам нужно составить из символов этих строк один массив (каждый символ строки становится отдельным элементом массива), затем добавить первым элементом  массива текстовое значение "Иванов", и вернуть из функции все элементы в обратном порядке, преобразовав в строку. Обратите внимание, что в обратном порядке нужно переставить элементы внутри массива, а данные внутри элементов инвертировать не нужно!
*/
function testArray(a, b) {
    let x = a + b;
    x = x.split('');
    return x.reverse().join('') + 'Иванов';
}

console.log(testArray('qw', 'as'));

let aaa = [1,2,3];
let bbb = [7,8,9];

console.log(...aaa, ...bbb);
console.log([...aaa, ...bbb]);
console.log([...aaa, ...bbb].length);