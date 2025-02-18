const todoManager = (() => {
	function createTodoItem(name, description, dueDate, priority, project) {
		return { name, description, dueDate, priority, project };
	}

	return { createTodoItem };
})();

export { todoManager};
