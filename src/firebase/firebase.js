import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
// 	.on('value', (snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	}, (e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().on('value', (snapshot) => {
// 	const value = snapshot.val();
// 	console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// 	}, (e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: 'July Rent',
// 	amount: 128000,
// 	createdAt: 435904534
// });

// database.ref('notes/-MDH2dt2AdmOtO2ENM3l').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// setTimeout(() => {
// 	database.ref().update({
// 		name: 'Mike',
// 		'job/title': 'IT Manager',
// 		'job/company': 'Christies'
// 	});
// }, 5000);

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(43);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(48);
// }, 10500);
// database.ref('location')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database.ref().set({
// 	name: 'Ron Cummings-Kralik',
// 	age: 43,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Network Engineer',
// 		company: 'Goolag'
// 	},
// 	location: {
// 		city: 'St. Louis',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	console.log('Data is saved!');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database.ref().remove()
// 	.then(() => {
// 		console.log('Data is removed!');
// 	}).catch((e) => {
// 		console.log('Remove failed.', e);
// 	});