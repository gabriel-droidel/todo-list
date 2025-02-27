import { capitalize } from '../helperFunctions';
import buttonManager from './forms/generateButtons';

const displayManager = (function () {
	// handle displaying projects on the main page
	const showProjects = (projects) => {
		const projectDiv = document.querySelector('.projects-container');
		const projectsContainer = document.createElement('ul');
		projectDiv.innerHTML = '';
		projectDiv.appendChild(projectsContainer);

		projects.forEach((project) => {
			const listedProject = document.createElement('li');
			listedProject.textContent = project.name;
			listedProject.value = project.id;

			// highlight the current active project
			if (project.selected === true)
				listedProject.classList.add('active-project');

			if (project.id !== 0) {
				// prevent buttons on default project

				// change name button
				buttonManager.generateEditProjectBtn(listedProject, project);

				//delete button
				const deleteProjectBtn = document.createElement('button');
				deleteProjectBtn.classList.add('deleteBtn');
				deleteProjectBtn.textContent = 'X';
				deleteProjectBtn.value = project.id;
				listedProject.appendChild(deleteProjectBtn);
			}
			// append li to the list
			projectsContainer.appendChild(listedProject);
		});

		projectsContainer.addEventListener('click', (event) => {
			const selectedProjectId = event.target.value;
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
		// handle displaying todos from the selected project
		const todoDiv = document.querySelector('.todo-container');
		const todosContainer = document.createElement('ul');
		todosContainer.classList.add('todos-list');
		todoDiv.innerHTML = ''; //reset
		todoDiv.appendChild(todosContainer);

		todoList.forEach((todo) => {
			console.log(todo);
			const listedTodo = document.createElement('li');

			Object.entries(todo).forEach(([key, value]) => {
				// generate an item by looping through the properties
				if (
					key !== 'project' &&
					key !== 'id' &&
					key !== 'description' &&
					key != 'priority'
				) {
					const item = document.createElement('p');
					item.textContent = `${capitalize(key)} : ${value}`;
					listedTodo.append(item);
				}
			});
			// Remove all priority classes
			listedTodo.classList.remove(
				'low-priority',
				'medium-priority',
				'high-priority'
			);

			// Add the class corresponding to the current priority
			listedTodo.classList.add(`${todo.priority.toLowerCase()}-priority`);

			//edit button
			buttonManager.generateEditTodoBtn(listedTodo, todo);

			//delete button
			const deleteTodoBtn = document.createElement('button');
			deleteTodoBtn.classList.add('deleteBtn');
			deleteTodoBtn.textContent = 'X';
			deleteTodoBtn.value = todo.id;
			listedTodo.appendChild(deleteTodoBtn);
			todosContainer.appendChild(listedTodo);

			// checkbox
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.value = todo.id;
			checkbox.checked = todo.completed;
			listedTodo.append(checkbox);

			// event for deletion button
			todosContainer.addEventListener('click', (event) => {
				const selectedTodoId = event.target.value;
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

			// event for checkbox
			todosContainer.addEventListener('change', (event) => {
				const selectedTodoId = event.target.value;
				if (
					event.target.tagName === 'INPUT' &&
					event.target.type === 'checkbox'
				) {
					const eventDetails = new CustomEvent('todoChecked', {
						detail: { id: selectedTodoId },
					});
					document.dispatchEvent(eventDetails);
				}
			});
		});

		// display message for no existing todo list items
		if (!todosContainer.firstChild) {
			const message = document.createElement('p');
			message.textContent =
				"It looks like you don't have any todos yet! Buckle up and create some!";
			message.classList.add('message');
			// new todo item button
			buttonManager.generateTodoBtn(message);
			todosContainer.appendChild(message);
		}
	};

	return { showProjects, showTodos };
})();

export default displayManager;
