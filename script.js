// const person = new Object({
//     name: 'Dan',
//     age: 36,
//     greet: function() {
//         console.log('Greetings!')
//     }
// });
//
// Object.prototype.sayHello = function () {
//     console.log('Hello!')
// }
//
// const masha = Object.create(person);
//
// masha.name = "Mary";
//
// const str = new String('This is a string');
//
// console.log(str.sayHello());

let man = {};
let man2 = {};
console.log(man.__proto__ === man2.__proto__) //true, the same data type 'object';

// Любой объект создаётся с помощью класса (функции-конструктора), у любого объекта есть свойство __proto__.

// Классы нужны для создания однотипных объектов.

// Если переменным присваиваются значения, имеющие одинаковый тип данных, то их __proto__ равны.

// У любого объекта, который является классом или функцией (кроме стрелочных), есть прототип.

//Каждый prototype - это независимый объект, он сам по себе, с определённым набором свойств и методов.

//__proto__ любого объекта ссылается на (равен) prototype класса (функции-конструктора), с помощью которой этот объект был создан (сконструирован).

// При попытке чтения/вывода несуществующего свойства объекта или метода объекта, объект будет искать их через ссылку __proto__ в прототипе класса, с помощью которого он был создан.

let someVariable = { name: 'Sema'};
console.log(someVariable.prototype); // undefined, т.к. prototype есть только у классов и у функций.
console.log(someVariable.__proto__); // === Object.prototype, __proto__ есть у каждого объекта

// Создание методов у функций-конструкторов:

function NewName (name) {
    this.name = name;
}

NewName.prototype.hello = function () {
    console.log(this.name);
}

let user1 = new NewName('Doris');
user1.hello();

let user2 = new NewName('Boris');
user2.hello();

// user1.__proro__ ищет в прототипе NewName запрошенный метод.

// q1:

console.log( ({}).prototype === ({}).__proto__) // false, т.к. у объектов нет прототипа.

function newFunc () {}
console.log( newFunc.prototype === newFunc.__proto__) // false, т.к. 2 прототипа всегда неравны. newFunc.prototype !== Function.prototype, newFunc.__proto__ === Function.prototype.

function fakeFunc() {}
function someFunc() {}

console.log( fakeFunc.__proto__ === someFunc.__proto__) // true, потому что эти __proto__ указывают на один прототип - Function.prototype
console.log(fakeFunc.prototype === someFunc.prototype) // false, не равны, т.к. у каждой функции и каждого класса свой отдельный прототип.

let Component = (props) => {
    return `<div>I don't know Prototype</div>`
}
console.log( Component.prototype === Object.prototype); //false, у стрелочных функций нет прототипов.

let age = 18;
console.log( age.prototype === Number.prototype); // false, т.к. у переменных типа number нет прототипов.
console.log( age.__proto__ === Number.prototype); // true, т.к. __proto__ объектов ссылаются (равны) прототипу класса, с помощью которого они были созданы.

class Hacker {}
console.log( Hacker.__proto__ === Function.prototype); // true. Классы создаются с помощью new Function.

function letFunc ()
console.log( letFunc.__proto__ === ?); // Function.prototype.

const count = 34;
console.log( count.__proto__ === ?); // Number.prototype.
