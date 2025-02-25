function getCurrentDate() {
	// get current date to use it as a default parameter in the todo list
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; // Months are zero-based
	const day = currentDate.getDate();

	return `${year}-${month < 10 ? '0' + month : month}-${
		day < 10 ? '0' + day : day
	}`;
}
function capitalize(word) {
	const arrayedWord = [...word];
	arrayedWord[0] = arrayedWord[0].toUpperCase();
	return arrayedWord.join('');
}

export { getCurrentDate, capitalize };
