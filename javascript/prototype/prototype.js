//普通对象
function Person() { }
Person.prototype.name = 'test';
Person.prototype.age = 27;
Person.prototype.sayHi = function () {
    console.log('hello')
}

var person = new Person();
console.log(person.__proto__)
console.log(Person.prototype);
