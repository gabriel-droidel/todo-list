import { createTodoItem } from '../todos';
import { assignProject, createProject } from '../projects';

function getCurrentDate() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1; // Months are zero-based
	const day = currentDate.getDate();

	return `${year}-${month < 10 ? '0' + month : month}-${
		day < 10 ? '0' + day : day
	}`;
}
function getTodo(itemData) {
	if (itemData.dueDate == '') {
		itemData.dueDate = getCurrentDate();
	}
	const todoItem = createTodoItem(
		itemData.name,
		itemData.description,
		itemData.dueDate,
		itemData.priority,
		itemData.project
	);
	assignProject(todoItem, itemData.project);
}

function getProject(projectData) {
	const project = createProject(projectData);
    console.log(project);
}

export { getTodo ,getProject};
