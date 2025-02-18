import { projectManager } from '../projects';

function populateProjects() {
	const projectList = projectManager.getProjectList();
	const projectListContainer = document.querySelector('.projects');
	projectListContainer.textContent = '';

	projectList.forEach((project) => {
		const box = document.createElement('h2');
		box.textContent = project.name;
		box.classList.add('projectDisplayed');
		projectListContainer.appendChild(box);
	});
}

function populateTodo(projectId) {
	const toDoDisplay = document.querySelector('.todos');
	const projects = projectManager.getProjectList();
	toDoDisplay.textContent = '';
	const projectToDisplay = projects.find((project) => project.id === projectId);
	projectToDisplay.items.forEach((item) => {
		const projectBox = document.createElement('div');
		createTodoDisplay(item, projectBox);
		toDoDisplay.appendChild(projectBox);
	});
}

function createTodoDisplay(todoItem, container) {
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	const name = document.createElement('h3');
	name.textContent = 'Name:' + todoItem.name;
	const description = document.createElement('p');
	description.textContent = 'Description: ' + todoItem.description;
	const dueDate = document.createElement('p');
	dueDate.textContent = 'Due date: ' + todoItem.dueDate;
	const priority = document.createElement('p');
	priority.textContent = 'Priority: ' + todoItem.priority;

	todoDiv.append(name, description, dueDate, priority);
	container.append(todoDiv);
}
export { populateProjects, populateTodo };
