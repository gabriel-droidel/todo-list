import { capitalize } from '../helperFunctions';
import editProjectForm from './forms/editProjectForm';
import editTodoForm from './forms/editTodoForm';

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
				const editProjectBtn = document.createElement('button');
				editProjectBtn.textContent = 'Edit';
				editProjectBtn.addEventListener('click', () =>
					editProjectForm(project)
				);
				listedProject.appendChild(editProjectBtn);

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
			} else if (event.target.tagName === 'BUTTON') {
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
		todoDiv.innerHTML = '';
		todoDiv.appendChild(todosContainer);

		todoList.forEach((todo) => {
			console.log(todo);
			const listedTodo = document.createElement('li');
			Object.entries(todo).forEach(([key, value]) => {
				// generate an item by looping through the properties of each to do
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

			// edit todo button
			const editTodoBtn = document.createElement('button');
			editTodoBtn.textContent = 'Edit';
			editTodoBtn.addEventListener('click', () => editTodoForm(todo));
			listedTodo.appendChild(editTodoBtn);

			//delete button
			const deleteTodoBtn = document.createElement('button');
			deleteTodoBtn.classList.add('deleteBtn');
			deleteTodoBtn.textContent = 'X';
			deleteTodoBtn.value = todo.id;
			listedTodo.appendChild(deleteTodoBtn);
			todosContainer.appendChild(listedTodo);

			todosContainer.addEventListener('click', (event) => {
				const selectedTodoId = event.target.value;
				if (event.target.tagName === 'BUTTON') {
					const eventDetails = new CustomEvent('todoDeleted', {
						detail: { id: selectedTodoId },
					});
					document.dispatchEvent(eventDetails);
				}
			});
		});
	};

	return { showProjects, showTodos };
})();

export default displayManager;
