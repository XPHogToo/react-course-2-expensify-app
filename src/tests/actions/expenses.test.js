import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	startEditExpense,
	removeExpense,
	startRemoveExpense,
	setExpenses,
	startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// beforeEach((done) => {
// 	const expensesData = {};
// 	expenses.forEach(({ id, description, note, amount, createdAt }) => {
// 		expensesData[id] = { description, note, amount, createdAt };
// 	});
// 	database.ref('expenses').set(expensesData).then(() => done());
// });

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref('expenses').set(expensesData).then(() => done());
});

// afterEach((done) => {
	// 	const expensesData = {};
	// 	expenses.forEach(({ id, description, note, amount, createdAt }) => {
	// 		expensesData[id] = { description, note, amount, createdAt };
	// 	});
//	database.ref('expenses').remove().then(() => done());
//	});

test('Should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Should remove expense from firebase', (done) => {
	const store = createMockStore({});
	const id = expenses[2].id;
	store.dispatch(startRemoveExpense({ id })).then(() => {
		const action = store.getActions();
		expect(action[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id
		});
		return database.ref(`expenses/${id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

test('Should setup edit expense action object', () => {
	const action = editExpense('123abc', {note: 'New note value'});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New note value'
		}
	});
});

test('Should edit expenses from firebase', () => {
	const store = createMockStore({});
	const expenseUpdate = {
		id: '2',
		amount: 128000,
		note: 'Rent increased'
	};
	store.dispatch(startEditExpense(expenseUpdate.id,expenseUpdate)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'EDIT_EXPENSE',
			expense: expenseUpdate
		});
		return database.ref(`expenses/$actions[0].expense.id`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseUpdate);
		done();
	});
});

test('Should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

test('Should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'Mouse',
		amount: 4999,
		note: 'Razer Death Adder',
		createdAt: 1000
	};
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
		});
});

test('Should add expense with defaults to database and store', () => {
	const store = createMockStore({});
	const expenseDefaults = {
		description : '',
		amount: 0,
		note : '',
		createdAt : 0
	};
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});
		return database.ref(`expenses/${actions[0].expense.id}`).once('value');
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults);
		done();
		});
});

test('Should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

test('Should fetch the expenses from firebase', (done) => {
	const store = createMockStore({});
	store.dispatch(startSetExpenses()).then(() => {
		const action = store.getActions();
		expect(action[0]).toEqual({
			type: 'SET_EXPENSES',
			expenses
		});
		done();
	});
});