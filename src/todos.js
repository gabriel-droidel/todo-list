function createTodoItem(
	// create todo Item with default values. must give it a name
	name,
	description,
	dueDate,
	priority,
	project
) {
	return { name, description, dueDate, priority, project };
}

export { createTodoItem };
