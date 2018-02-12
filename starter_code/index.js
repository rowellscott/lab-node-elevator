const Elevator = require('./elevator.js');
const Person = require('./person.js');

var elevator = new Elevator
elevator.start();
elevator.update();

var person0 = new Person('John', 4, 6)
var person1 = new Person('Jake', 8, 10)
var person2 = new Person('Jack', 2, 4)


// elevator.call(person0);
// elevator.call(person1);
// elevator.call(person2);
var timeoutId0 = setTimeout(() => {elevator.call(person0)}, 3000)
var timeoutId1 = setTimeout(() => {elevator.call(person1)}, 5000)
var timeoutId2 = setTimeout(() => {elevator.call(person2)}, 7000)