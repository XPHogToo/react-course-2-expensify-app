//
// Object destructuring
//

// const person = {
// 	name: 'Ron',
// 	age: 43,
// 	location: {
// 		city: 'St. Louis',
// 		temp: 86
// 	}
// };


// const { name: firstName ='Anonymous', age = 'Unknown' } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// }

// const { name:publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Desctructuring
//

const address = ['1299 S Juniper Street', 'Philadephia', 'PA', '19147'];

const [ , city, state = 'Delaware' ] = address;

console.log(`You are in ${city}, ${state}`);

const item = [ 'Coffee (iced)', '$3.00', '$3.50', '$3.75' ];

const [ itemName, sPrice, mPrice, lPrice ] = item;

console.log(`A Medium ${itemName} costs ${mPrice}`);