import '../styles/style.css';
import { getProjectList } from '../projects';
import { getTodo, getProject } from './parseData';

const containerDiv = document.querySelector('#container');
const header = document.querySelector('header');

function generateDashBoardTemplate() {
	const projectList = document.createElement('div');
	projectList.classList.add('projects');
	const todoList = document.createElement('div');
	todoList.classList.add('todos');

	containerDiv.append(projectList, todoList);
}

function generateButtons() {
	const addTodo = document.createElement('button');
	addTodo.textContent = '+';
	addTodo.addEventListener('click', () => displayTodoForm());
	header.appendChild(addTodo);

	const addProject = document.createElement('button');
	addProject.textContent = ' New Project ';
	addProject.addEventListener('click', () => displayProjectForm());
	header.appendChild(addProject);
}

function displayTodoForm() {
	const dialogForm = document.createElement('dialog');
	const form = document.createElement('form');
	form.setAttribute('method', 'dialog');
	const formTitle = document.createElement('h3');
	formTitle.textContent = 'Add something you want to do!';

	// Name field
	const labelName = document.createElement('label');
	labelName.textContent = 'Task Name:';
	labelName.setAttribute('for', 'task-name');
	const inputName = document.createElement('input');
	inputName.setAttribute('type', 'text');
	inputName.setAttribute('id', 'task-name');
	inputName.setAttribute('name', 'task-name');
	inputName.setAttribute('required', '');

	// Description field
	const labelDescription = document.createElement('label');
	labelDescription.textContent = 'Description:';
	labelDescription.setAttribute('for', 'task-desc');
	const inputDescription = document.createElement('textarea');
	inputDescription.setAttribute('id', 'task-desc');
	inputDescription.setAttribute('name', 'task-desc');

	// Due Date field
	const labelDueDate = document.createElement('label');
	labelDueDate.textContent = 'Due Date:';
	labelDueDate.setAttribute('for', 'task-date');
	const inputDueDate = document.createElement('input');
	inputDueDate.setAttribute('type', 'date');
	inputDueDate.setAttribute('id', 'task-date');
	inputDueDate.setAttribute('name', 'task-date');

	// Priority field
	const labelPriority = document.createElement('label');
	labelPriority.textContent = 'Priority (1-5):';
	labelPriority.setAttribute('for', 'task-priority');
	const inputPriority = document.createElement('input');
	inputPriority.setAttribute('type', 'number');
	inputPriority.setAttribute('id', 'task-priority');
	inputPriority.setAttribute('name', 'task-priority');
	inputPriority.setAttribute('min', '1');
	inputPriority.setAttribute('max', '5');
	inputPriority.setAttribute('value', '5');

	// Select field
	const select = document.createElement('select');
	select.classList.add('dynamic-select');
	const list = getProjectList();
	console.log(list);
	// Populate with options
	list.forEach((project) => {
		const name = project.name;
		const option = document.createElement('option');
		option.value = project.id;
		option.textContent = name;
		select.appendChild(option);
	});

	// Submit Button
	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Add Task';
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		const selectedProjectId = select.value;
		const taskData = {
			name: inputName.value,
			description: inputDescription.value,
			dueDate: inputDueDate.value,
			priority: inputPriority.value,
			project: selectedProjectId,
		};
		dialogForm.close();
		getTodo(taskData);
	});

	// Cancel Button
	const cancelButton = document.createElement('button');
	cancelButton.setAttribute('type', 'button');
	cancelButton.textContent = 'Cancel';
	cancelButton.addEventListener('click', () => dialogForm.close());

	const formElements = [
		formTitle,
		labelName,
		inputName,
		labelDescription,
		inputDescription,
		labelDueDate,
		inputDueDate,
		labelPriority,
		inputPriority,
		select,
		submitButton,
		cancelButton,
	];
	// Append elements to form
	formElements.forEach((item) => form.append(item));

	dialogForm.appendChild(form);
	document.body.appendChild(dialogForm);

	dialogForm.showModal();
}

function displayProjectForm() {
	const dialogForm = document.createElement('dialog');
	const form = document.createElement('form');
	form.setAttribute('method', 'dialog');
	const formTitle = document.createElement('h3');
	formTitle.textContent = 'Give your project a name';

	// Name field
	const labelName = document.createElement('label');
	labelName.textContent = 'Project Name:';
	labelName.setAttribute('for', 'project-name');
	const inputName = document.createElement('input');
	inputName.setAttribute('type', 'text');
	inputName.setAttribute('id', 'project-name');
	inputName.setAttribute('name', 'project-name');
	inputName.setAttribute('required', '');

	// Submit Button
	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Add Project';
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();
		const projectName = inputName.value;
		dialogForm.close();
		getProject(projectName);
	});

	// Cancel button
	const cancelButton = document.createElement('button');
	cancelButton.setAttribute('type', 'button');
	cancelButton.textContent = 'Cancel';
	cancelButton.addEventListener('click', () => dialogForm.close());

	const formElements = [
		formTitle,
		labelName,
		inputName,
		submitButton,
		cancelButton,
	];
    formElements.forEach((item) => form.append(item));

	dialogForm.appendChild(form);
	document.body.appendChild(dialogForm);

	dialogForm.showModal();
}

export { generateDashBoardTemplate, generateButtons };
