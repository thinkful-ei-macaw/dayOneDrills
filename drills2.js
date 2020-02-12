'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
  if(num === Infinity) { console.log('And beyond'); }
  else if(num > 0 && isFinite(num)) { console.log('To infinity'); }
  else if(num < 0 && isFinite(num)) { console.log('To negative infinity'); }
  else if(num === 0) {console.log('Staying home'); }
}

beyond(0);

function decode(word) {
  let code = ' ';
  if(word.charAt(0) === 'a') { code = word.charAt(1) }
  else if(word.charAt(0) === 'b') { code = word.charAt(2) }
  else if(word.charAt(0) === 'c') { code = word.charAt(3) }
  else if(word.charAt(0) === 'd') { code = word.charAt(4) }
  else { return code; }
  return code;
  
}

let message = 'craft block argon meter bells brown croon droop';
let newWord = message.split(' ').map( (word) => { return decode(word); }).join('');
console.log(newWord);

function daysInYear(month, leapYear) {
  let days;

  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August': 
  case 'October':
  case 'December':
    days = 31;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    days = 30;
    break;
  case 'February':
    days = 28;
    break;
  default:
    throw Error('Must provide a valid month');
  }

  if(leapYear === true ) { 
    return 'February has 29 days.';
  } 
  return `${month} has ${days} days.`;

}

console.log(daysInYear('January'));

function rockPaperScissors(userNum) {
  if(userNum < 1 || userNum > 3) { throw Error('Must choose 1, 2 or 3!'); }
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if(userNum === randomNo) { return 'Tie game!' }
  else if(userNum === 1 && randomNo === 2) { return 'Computer Wins!'; }
  else if(userNum === 1 && randomNo === 3) { return 'You Win!'; }
  else if(userNum === 2 && randomNo === 3) { return 'Computer Wins!'; }
  else if(userNum === 2 && randomNo === 1) { return 'You Win!'; }
  else if(userNum === 3 && randomNo === 2) { return 'You Win!'; }
  else if(userNum === 3 && randomNo === 1) { return 'Computer Wins!'; }
  
}

console.log(rockPaperScissors(3));