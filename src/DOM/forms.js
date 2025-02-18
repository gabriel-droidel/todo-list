import { projectManager } from '../projects';
import { getTodo, getProject } from '../parseData';

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
	labelPriority.textContent = 'Priority:';
	labelPriority.setAttribute('for', 'task-priority');

	// Create select element
	const selectPriority = document.createElement('select');
	selectPriority.setAttribute('id', 'task-priority');
	selectPriority.setAttribute('name', 'task-priority');

	// Create option elements
	const optionLow = document.createElement('option');
	optionLow.setAttribute('value', 'Low');
	optionLow.textContent = 'Low';

	const optionMedium = document.createElement('option');
	optionMedium.setAttribute('value', 'Medium');
	optionMedium.textContent = 'Medium';

	const optionHigh = document.createElement('option');
	optionHigh.setAttribute('value', 'High');
	optionHigh.textContent = 'High';

	// Append options to select
	selectPriority.appendChild(optionLow);
	selectPriority.appendChild(optionMedium);
	selectPriority.appendChild(optionHigh);

	// Select field
	const select = document.createElement('select');
	select.classList.add('dynamic-select');
	const list = projectManager.getProjectList();
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
			priority: selectPriority.value,
			project: selectedProjectId,
		};
		dialogForm.close();
		getTodo(taskData);

		document.dispatchEvent(new CustomEvent('todoListModified')); // create an event to tell DOM that a new project was added

	});

	// Cancel Button
	const cancelButton = document.createElement('button');
	cancelButton.setAttribute('type', 'button');
	cancelButton.textContent = 'Cancel';
	cancelButton.addEventListener('click', () => {
		dialogForm.close();
	});

	// Store form fields
	const formElements = [
		formTitle,
		labelName,
		inputName,
		labelDescription,
		inputDescription,
		labelDueDate,
		inputDueDate,
		labelPriority,
		selectPriority,
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

		document.dispatchEvent(new CustomEvent('projectListModified')); // create an event to tell DOM that a new project was added
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

export { displayTodoForm, displayProjectForm };
