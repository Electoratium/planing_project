export default (store) => (next) => (action) => {
	console.log(action);
	console.log(store);


	// для того чтобы дальше пошел экшен
	next(action);
};