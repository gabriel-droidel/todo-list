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

	const deleteTodo = (todo) => {
		// delete todo item
		const todoProject = todo.project.items;
		const todoId = todo.id;
		const todoIndex = todoProject.findIndex(
			(todoItem) => todoItem.id === todoId
		);
		if (todoIndex !== -1) todoProject.splice(todoIndex, 1);
	};

	const assignProject = (todo, project) => {
		// assign a project to a todo list item
		project.items.push(todo);
		todo.project = project;
	};
	const changeProject = (todo, newProject) => {
		// change project of a todo list item
		if (todo.project) {
			const todoIndex = todo.project.items.findIndex(
				(todoItem) => todoItem.id === todo.id
			);
			console.log(todo.project);
			if (todoIndex !== -1) {
				todo.project.items.splice(todoIndex, 1); // Remove the todo from its old project
			}
		}
		assignProject(todo, newProject);
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
		assignProject,
		deleteTodo,
		edit,
		changeProject,
		switchCompleteStatus,
	};
})();

export default todoManager;
