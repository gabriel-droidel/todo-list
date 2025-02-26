import { getProjects } from '../parseData'; //get project list

function editTodoForm(todo) {
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
	nameInput.setAttribute('value', todo.name);

	//Description input
	const descriptionInput = document.createElement('TEXTAREA');
	descriptionInput.setAttribute('maxLength', 200);
	descriptionInput.setAttribute('placeholder', 'Description...');
	descriptionInput.textContent = todo.description;

	// Calendar input
	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('name', 'todoDate');
	dateInput.setAttribute('placeholder', 'Select Date');
	dateInput.setAttribute('value', todo.dueDate);

	// project selection input //
	const selectInput = document.createElement('select');
	selectInput.setAttribute('name', 'project');

	// options
	const selected = document.createElement('option');
	selected.value = todo.project.id;
	selected.textContent = todo.project.name;
	selected.classList.add('selected');
	selectInput.appendChild(selected);
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

	const selectedPriority = document.createElement('option');
	selectedPriority.value = todo.priority;
	selectedPriority.textContent = todo.priority;
	selectedPriority.classList.add('selected');
	prioritySelection.appendChild(selectedPriority);
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
	submitTodoBtn.textContent = 'Edit';
	submitTodoBtn.setAttribute('type', 'submit'); // Make it a submit button
	submitTodoBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const event = new CustomEvent('todoEdited', {
			// event to trigger when a project is added
			detail: {
				obj: todo,
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
			resetInput();
		}
	});

	// Cancel Button
	const cancelBtn = document.createElement('button');
	cancelBtn.textContent = 'Cancel';
	cancelBtn.addEventListener('click', (e) => {
		keepUnchanged(e);
	});

	dialog.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			keepUnchanged(e);
		}
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

	function keepUnchanged(e) {
		e.preventDefault();
		const event = new CustomEvent('todoEdited', {
			// event to trigger when a project is added
			detail: {
				obj: todo,
				name: todo.name,
				description: todo.description,
				dueDate: todo.dueDate,
				projectId: todo.project.id,
				priority: todo.priority,
			},
		});
		if (nameInput.value) {
			document.dispatchEvent(event);
			dialog.close();
			resetInput();
		}
	}

	function resetInput() {
		nameInput.value = '';
		descriptionInput.value = '';
		dateInput.value = '';
		prioritySelection.value = 'Low';
	}
}

export default editTodoForm;
