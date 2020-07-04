const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Angelique';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName

// Concatenation
val = firstName + '' + lastName;

// Append
val = 'Angelique';
val += 'Abacajan';

val = 'Hello, my name is' + firstName + 'and I am' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Lenght
val = firstName.length;

// concat()
val = firstName.concat('', lastName)

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// Get Last Char
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Angelique', 'Jack');

// includes()
val = str.includes('foo');

console.log(val)