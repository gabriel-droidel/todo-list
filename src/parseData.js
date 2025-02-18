import { todoManager } from './todos';
import { projectManager } from './projects';
import { getCurrentDate } from './helperFunctions';

function getTodo(itemData) {
	// get values from input form and use them to generate a todo list item
	if (itemData.dueDate == '') {
		itemData.dueDate = getCurrentDate();
	}
	const todoItem = todoManager.createTodoItem(
		itemData.name,
		itemData.description,
		itemData.dueDate,
		itemData.priority,
		itemData.project
	);
	console.log(todoItem);
	projectManager.assignProject(todoItem, itemData.project);
}

function getProject(projectData) {
	// get value from input form and generate a project
	return projectManager.createProject(projectData);
}

export { getTodo, getProject };
