import { v4 as uuidv4 } from 'uuid'; // generate unique id
const todoManager = (function () {
	const generateID = () => `todo-${uuidv4()}`;

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

	return {
		create,
		edit,
	};
})();

export default todoManager;
