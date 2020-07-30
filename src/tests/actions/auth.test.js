import {
  login,
  startLogin,
  logout,
  startLogout
} from '../../actions/auth';

test('Should generate login action object', () => {
	const uid = 'abc123';
	const action = login(uid);
	expect(action).toEqual({
		type: 'LOGIN',
		uid
	});
});

// test('Should generate startLogin action object', () => {
// 	const action = startLogin();
// 	expect(action).
// });

test('Should generate logout action object', () => {
	const action = logout();
	expect(action).toEqual({
		type: 'LOGOUT'
	});
});

// test('Should generate startLogout action object', () => {
// 	const action = startLogout();
// 	expect(action).
// });
