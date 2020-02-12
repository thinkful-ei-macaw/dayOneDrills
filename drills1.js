'use strict';

function getYearOfBirth(age) {
  return 2020 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = getYearOfBirth(age);
    
  if(name === 'undefined' || age === 'undefined') {
    throw new Error('Arguments not valid');
  }
  if(age < 0) {
    throw new Error('Age can not be negative');
  }
  if(typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }
  return `Hi my name is ${name} and I\'m ${age} years old.  I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Andrew', 33);
console.log(greeting1);

