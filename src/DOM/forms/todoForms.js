import { getProjects } from '../parseData'; //get project list

function getTodoForm() {
	const dialog = document.createElement('dialog');
	dialog.classList.add('todo-dialog');
	const form = document.createElement('form');
	document.body.appendChild(dialog);
	dialog.showModal(); // Show the dialog when needed

	// Name input
	const nameInput = document.createElement('input');
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('name', 'todoName');
	nameInput.setAttribute('placeholder', 'Todo Name');

	//Description input
	const descriptionInput = document.createElement('TEXTAREA');
	descriptionInput.setAttribute('maxLength', 200);
	descriptionInput.setAttribute('placeholder', 'Description...');

	// Calendar input
	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('name', 'todoDate');
	dateInput.setAttribute('placeholder', 'Select Date');

	// project selection input //
	const selectInput = document.createElement('select');
	selectInput.setAttribute('name', 'project');

	// options
	const defaultOption = document.createElement('option');
	defaultOption.value = '';
	defaultOption.textContent = 'Select a Project';
	selectInput.appendChild(defaultOption);
	const projects = getProjects();

	projects.forEach((project) => {
		const option = document.createElement('option');
		option.value = project.id;
		option.textContent = project.name;
		selectInput.appendChild(option);
	});

	// Priority //

	const prioritySelection = document.createElement('select');
	prioritySelection.setAttribute('name', 'priority');

	// options //
	const priorityOptions = ['Low', 'Medium', 'High'];
	priorityOptions.forEach((type) => {
		const option = document.createElement('option');
		option.value = type;
		option.textContent = type;
		prioritySelection.appendChild(option);
	});

	// Add Button
	const submitTodoBtn = document.createElement('button');
	submitTodoBtn.textContent = 'Add Todo';
    submitTodoBtn.setAttribute('type', 'submit'); // Make it a submit button

	submitTodoBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const event = new CustomEvent('todoAdded', {
			// event to trigger when a project is added
			detail: {
				name: nameInput.value,
				description: descriptionInput.value,
				dueDate: dateInput.value,
				projectId: selectInput.value,
				priority: prioritySelection.value,
			},
		});
		if (nameInput.value) {
			document.dispatchEvent(event);
			dialog.close();
			nameInput.value = '';
			descriptionInput.value = '';
			dateInput.value = '';
			prioritySelection.value = 'Low'; // or a default value
		}
	});

	// Cancel Button
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', () => {
		dialog.close();
	});

	form.append(
		nameInput,
		descriptionInput,
		dateInput,
		selectInput,
		prioritySelection,
		submitTodoBtn,
		cancelBtn
	);
	dialog.appendChild(form);
}

export default getTodoForm;
