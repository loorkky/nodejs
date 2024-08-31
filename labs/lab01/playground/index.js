let _ = require('lodash');

let isEmpty = _.isEmpty([]);
console.log('Є пустим:', isEmpty);

let capitalizedString = _.capitalize('hello');
console.log('Рядок з великої літери:', capitalizedString);

let rangeArray = _.range(1, 6);
console.log('Масив в діапазоні [1;6]:', rangeArray);

let originalArray = [1, 2, 3, 4, 5];
let shuffledArray = _.shuffle(originalArray);
console.log('Зміненний масив:', shuffledArray);

let fruits = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
let groupedByLength = _.groupBy(fruits, 'length');
console.log('Згруперовано за розміром:', groupedByLength);
