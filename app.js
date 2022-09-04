const dario = require('./dario_barbara.js');
const juan = require('./juan_perez.js');

console.log('Hola, soy ' + dario[0] +', disfruto '+ dario[1] + ' y soy de ' + dario[2] + '.');
console.log('Hola, soy ' + juan[0] +', disfruto '+ juan[1] + ' y soy de ' + juan[2] + '.');

/*
// Require without an argument sets 'en'
const zodiac = require('zodiac-signs')();
//Getting a zodiac sign from a date
// Returns the zodiac sign's information of the actual day
console.log(zodiac.getSignByDate());
// Returns the zodiac sign's information of the 22 of June
console.log(zodiac.getSignByDate({ day: 22, month: 6 }));
// Overload the default language (format xx-YY sets (format xx)
console.log(zodiac.getSignByDate({ day: 22, month: 6 }, 'fr'));

*/