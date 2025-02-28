import { capitalize } from '../helperFunctions';
import buttonManager from './forms/generateButtons';

const displayManager = (function () {
	// handle displaying projects on the main page
	const showProjects = (projects) => {
		const DEFAULT_PROJECT_ID = 'DEFAULT';
		const projectDiv = document.querySelector('.projects-container');
		const projectsContainer = document.createElement('ul');
		projectDiv.innerHTML = '';
		projectDiv.appendChild(projectsContainer);

		projects.forEach((project) => {
			const listedProject = document.createElement('li');
			listedProject.textContent = project.name;
			listedProject.dataset.id = project.id; // Store the id in a data attribute

			// highlight the current active project
			if (project.selected === true)
				listedProject.classList.add('active-project');

			if (project.id !== DEFAULT_PROJECT_ID) {
				// prevent buttons on default project

				// change name button
				buttonManager.generateEditProjectBtn(listedProject, project);

				//delete button
				const deleteProjectBtn = document.createElement('button');
				deleteProjectBtn.classList.add('deleteBtn');
				deleteProjectBtn.textContent = 'X';
				deleteProjectBtn.dataset.id = project.id;
				listedProject.appendChild(deleteProjectBtn);
			}
			// append li to the list
			projectsContainer.appendChild(listedProject);
		});

		projectsContainer.addEventListener('click', (event) => {
			const selectedProjectId = event.target.dataset.id;
			if (event.target.tagName === 'LI') {
				const eventDetails = new CustomEvent('projectSelected', {
					detail: { id: selectedProjectId },
				});
				document.dispatchEvent(eventDetails); // Dispatch the event after it's created
			} else if (
				event.target.tagName === 'BUTTON' &&
				event.target.classList.contains('deleteBtn')
			) {
				const eventDetails = new CustomEvent('projectDeleted', {
					detail: { id: selectedProjectId },
				});
				document.dispatchEvent(eventDetails);
			}
		});
	};

	const showTodos = (todoList) => {
		const todoDiv = document.querySelector('.todo-container');
		const todosContainer = document.createElement('ul');
		todosContainer.classList.add('todos-list');
		todoDiv.innerHTML = ''; //reset
		todoDiv.appendChild(todosContainer);

		todoList.forEach((todo) => {
			const listedTodo = document.createElement('li');
			listedTodo.classList.add('todo-item');
			// Generate the item description
			Object.entries(todo).forEach(([key, value]) => {
				if (
					key !== 'project' &&
					key !== 'id' &&
					key !== 'description' &&
					key !== 'priority' &&
					key !== 'completed'
				) {
					const item = document.createElement('p');
					item.textContent = `${capitalize(key)} : ${value}`;
					listedTodo.append(item);
				}
			});

			listedTodo.classList.remove(
				'low-priority',
				'medium-priority',
				'high-priority'
			);
			if (todo.completed) {
				listedTodo.classList.add('completed');
			} else {
				listedTodo.classList.add(`${todo.priority.toLowerCase()}-priority`);
			}

			// Button logic
			buttonManager.generateEditTodoBtn(listedTodo, todo);

			const deleteTodoBtn = document.createElement('button');
			deleteTodoBtn.classList.add('deleteBtn');
			deleteTodoBtn.textContent = 'X';
			deleteTodoBtn.dataset.id = todo.id;
			listedTodo.appendChild(deleteTodoBtn);
			todosContainer.appendChild(listedTodo);

			// Checkbox
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.dataset.id = todo.id;
			checkbox.checked = todo.completed;
			listedTodo.append(checkbox);
		});

		// Event delegation for handling todos container events
		todosContainer.addEventListener('click', (event) => {
			const selectedTodoId = event.target.dataset.id;
			if (
				event.target.tagName === 'BUTTON' &&
				event.target.classList.contains('deleteBtn')
			) {
				const eventDetails = new CustomEvent('todoDeleted', {
					detail: { id: selectedTodoId },
				});
				document.dispatchEvent(eventDetails);
			}
		});

		todosContainer.addEventListener('change', (event) => {
			if (
				event.target.tagName === 'INPUT' &&
				event.target.type === 'checkbox'
			) {
				const selectedTodoId = event.target.dataset.id;
				const eventDetails = new CustomEvent('todoChecked', {
					detail: { id: selectedTodoId },
				});
				document.dispatchEvent(eventDetails);
			}
		});

		// No todos to show
		if (!todosContainer.firstChild) {
			const message = document.createElement('p');
			message.textContent =
				"It looks like you don't have any todos yet! Buckle up and create some!";
			message.classList.add('message');
			buttonManager.generateTodoBtn(message);
			todosContainer.appendChild(message);
		}
	};

	return { showProjects, showTodos };
})();

export default displayManager;
