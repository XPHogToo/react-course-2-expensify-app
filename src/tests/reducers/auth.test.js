import authReducer from '../../reducers/auth';

test('Should set default state', () => {
	const state = authReducer({}, {type: '@@INIT' });
	expect(state).toEqual({});
});

test('Should set uid for login', () => {
	const action = {
		type: 'LOGIN',
		uid: 'abc123'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('Should clear uid for logout', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({ uid: 'anything' }, action);
	expect(state.uid).toEqual(undefined);
});