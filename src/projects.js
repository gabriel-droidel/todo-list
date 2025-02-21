const projectManager = (function () {
	// handle project related actions on the back hand for projects
	const projects = []; // array where all projects are stored
	let idCounter = 0; // keep track of projects id by assigning them a unique id

	const getProjects = () => [...projects]; // get a copy of the projects array

	const create = (name) => {
		// create project with input as its name
		const project = { name, items: [], id: idCounter, selected: false };
		idCounter++;
		projects.push(project);
		return project;
	};

	const createDefaultProject = () => {
		// create a default project and set it's selected value as true to be shown as default
		const defaultProjectCreated = create('Default');
		defaultProjectCreated.selected = true;
		return defaultProjectCreated;
	}; // create a default project where all todos will go by default

	const assignProject = (todo, project = defaultProject) => {
		// assign a todo list item to a project
		if (project.items.find((item) => item.id === todo.id)) {
			return;
		} else if (project) {
			project.items.push(todo);
			todo.project = project;
		}
	};

	const setActive = (project) => {
		// set a project as active on the page
		const activeProject = projects.find((project) => project.selected === true);
		activeProject.selected = false;
		project.selected = true;
		console.log(projects);
	};

	const deleteProject = (project) => {
		// delete a project
		const projectId = project.id;
		const projectIndex = projects.findIndex(
			(project) => project.id === projectId
		);
		projects.splice(projectIndex, 1);
		console.log(projects);
	};

	const changeName = (project, newName) => {
		// edit a project
		project.name = newName;
	};

	return {
		create,
		createDefaultProject,
		getProjects,
		assignProject,
		setActive,
		deleteProject,
		changeName,
	};
})();
const defaultProject = projectManager.createDefaultProject();

const todoManager = (function () {
	let idCounter = 0; // tracker to give each todoItem a unique Id

	const create = (name, description, dueDate, project, priority) => {
		// create a todo list item and track it with a counter
		const todo = {
			name,
			description,
			dueDate,
			project,
			priority,
			id: idCounter,
		};

		idCounter++;
		return todo;
	};

	const deleteTodo = (todo) => {
        // delete todo item
		const todoProject = todo.project.items;
		const todoId = todo.id;
		const todoIndex = todoProject.findIndex(
			(todoItem) => todoItem.id === todoId
		);
		todoProject.splice(todoIndex, 1);
	};

	return { create, deleteTodo };
})();

export { projectManager, todoManager };
