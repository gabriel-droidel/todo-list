import { capitalize } from '../helperFunctions';

const displayManager = (function () {
	// handle displaying projects on the main page
	const showProjects = (projects) => {
		const projectDiv = document.querySelector('.projects-container');
		const projectsContainer = document.createElement('ul');
		projectDiv.textContent = '';
		projectDiv.appendChild(projectsContainer);

		projects.forEach((project) => {
			const listedProject = document.createElement('li');
			listedProject.textContent = project.name;
			if (project.selected === true)
				// highlight the current active project
				listedProject.classList.add('active-project');
			projectsContainer.appendChild(listedProject);
		});

		projectsContainer.addEventListener('click', (event) => {
			if (event.target.tagName === 'LI') {
				const selectedProject = event.target.textContent;
				const eventDetails = new CustomEvent('projectSelected', {
					detail: { name: selectedProject },
				});
				document.dispatchEvent(eventDetails); // Dispatch the event after it's created
			}
		});
	};

	const showTodos = (todoList) => {
		// handle displaying todos from the selected project
		const todoDiv = document.querySelector('.todo-container');
		const todosContainer = document.createElement('ul');
		todosContainer.classList.add('todos-list');
		todoDiv.textContent = '';
		todoDiv.appendChild(todosContainer);

		todoList.forEach((todo) => {
			const listedTodo = document.createElement('li');
			Object.entries(todo).forEach(([key, value]) => {
				// generate an item by looping through the properties of each to do
				if (key !== 'project' && key !== 'id') {
					const item = document.createElement('p');
					item.textContent = `${capitalize(key)} : ${value}`;
					listedTodo.append(item);
				}
			});
			todosContainer.appendChild(listedTodo);
		});
	};

	return { showProjects, showTodos };
})();

export default displayManager;
