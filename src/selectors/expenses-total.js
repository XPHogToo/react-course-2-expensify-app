// Get count and total of visible expenses
export default (expenses) => {
	return expenses
		.map((expense) => expense.amount)
		.reduce((sum, value) => sum + value, 0);
};