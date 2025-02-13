import { defaultProject } from './project-list';

function createTodoItem(
	name,
	dueDate,
	description,
	priority = 1,
	project = defaultProject.items
) {
	const index = project.length;
	const item = { name, dueDate, description, priority, project, index };
	project.push(item);
	return item;
}

function deleteTodoItem(index, project) {
	return project.splice(index, 1);
}
export { createTodoItem, deleteTodoItem };
