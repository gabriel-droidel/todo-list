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
		};

		return todo;
	};

	const deleteTodo = (todo) => {
		// delete todo item
		const todoProject = todo.project.items;
		const todoId = todo.id;
		const todoIndex = todoProject.findIndex(
			(todoItem) => todoItem.id === todoId
		);
		if (todoIndex !== -1) todoProject.splice(todoIndex, 1);
	};

	const editName = (todo, newName) => (todo.name = newName);

	const editDueDate = (todo, newDate) => (todo.dueDate = newDate);

	const editPriority = (todo, newPriority) => (todo.priority = newPriority);

	const editDescription = (todo, newDescription) =>
		(todo.description = newDescription);

	return {
		create,
		deleteTodo,
		editName,
		editDueDate,
		editDescription,
		editPriority,
	};
})();

export default todoManager;
