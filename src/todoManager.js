const todoManager = (function () {
	let idCounter = 0; // tracker to give each todoItem a unique Id

	const generateID = () => idCounter++; //increment when adding a new ID

	const create = (name, description, dueDate, priority) => {
		// create a todo list item and track it with a counter
		const todo = {
			name,
			description,
			dueDate,
			priority,
			id: generateID(),
			completed: false,
		};

		return todo;
	};

	
	const edit = (todo, name, description, dueDate, priority) => {
		todo.name = name;
		todo.description = description;
		todo.dueDate = dueDate;
		todo.priority = priority;
	};

	const switchCompleteStatus = (todo) => {
		todo.completed = !todo.completed;
	};
	
	return {
		create,
		edit,
		switchCompleteStatus,
	};
})();

export default todoManager;
