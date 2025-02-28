import { v4 as uuidv4 } from 'uuid'; // generate unique id

const projectManager = (function () {
	// handle project related actions on the back hand for projects
	let projects = []; // array where all projects are stored
	const LOCAL_STORAGE_KEY = 'projects';
	// local storage save function
	const saveToLocalStorage = () => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
	};
	//local storage load

	const loadFromLocalStorage = () => {
		const storedProjects = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (storedProjects) {
			projects = JSON.parse(storedProjects);
		}
	};

	loadFromLocalStorage();
	const generateID = () => `project-${uuidv4()}`; //increment when adding a new ID

	const getProjects = () => [...projects]; // get a copy of the projects array

	const getActiveProject = () =>
		projects.find((project) => project.selected === true); //get the active project

	const create = (name) => {
		// create project with input as its name
		const project = { name, items: [], id: generateID(), selected: false };
		projects.push(project);
		console.log(project.id);
		// save to local storage
		saveToLocalStorage();
		return project;
	};

	const createDefaultProject = () => {
		// create a default project and set it's selected value as true to be shown as default
		const defaultProjectCreated = create('Default');
		defaultProjectCreated.selected = true;
		defaultProjectCreated.id = 'DEFAULT';
		// save to local storage
		saveToLocalStorage();

		return defaultProjectCreated;
	};

	const defaultProject =
		projects.find((project) => project.name === 'Default') ||
		createDefaultProject();

	const getDefaultProject = () => defaultProject;

	const setActive = (project) => {
		// set a project as active on the page
		const activeProject = projects.find((project) => project.selected);
		if (activeProject) activeProject.selected = false;
		project.selected = true;

		saveToLocalStorage();
	};

	const deleteProject = (project) => {
		// delete a project
		if (project !== defaultProject) {
			const projectIndex = projects.findIndex((p) => p.id === project.id);
			if (projectIndex != -1) projects.splice(projectIndex, 1);
		}
		// save to local storage
		saveToLocalStorage();
	};

	const changeName = (project, newName) => {
		// edit a project
		if (typeof newName === 'string' && newName.trim() !== '')
			project.name = newName;

		// save to local storage
		saveToLocalStorage();
	};

	// Project todo related
	const deleteTodo = (todo) => {
		// delete todo item
		console.log(todo);
		const todoProject = findProjectById(todo.project).items;
		console.log(todoProject);
		const todoId = todo.id;
		const todoIndex = todoProject.findIndex(
			(todoItem) => todoItem.id == todoId
		);
		if (todoIndex !== -1) todoProject.splice(todoIndex, 1);

		saveToLocalStorage();
	};

	const assignProject = (todo, project) => {
		// assign a project to a todo list item
		project.items.push(todo);
		todo.project = project.id;

		// Sort the project.items array by priority (low < medium < high)
		const priorityOrder = { Low: 1, Medium: 2, High: 3 };

		project.items.sort((a, b) => {
			return priorityOrder[b.priority] - priorityOrder[a.priority];
		});

		saveToLocalStorage();
	};

	const changeProject = (todo, newProject) => {
		// change project of a todo list item
		const currentProject = findProjectById(todo.project);
		if (currentProject) {
			const todoIndex = currentProject.items.findIndex(
				(todoItem) => todoItem.id == todo.id
			);

			if (todoIndex !== -1) {
				currentProject.items.splice(todoIndex, 1); // Remove the todo from its old project
			}
		}
		assignProject(todo, newProject);
		saveToLocalStorage();
	};

	const switchCompleteStatus = (todo) => {
		todo.completed = !todo.completed;
		saveToLocalStorage();
	};

	function findProjectById(projectId) {
		return projects.find((p) => p.id == projectId);
	}

	return {
		create,
		createDefaultProject,
		getProjects,
		setActive,
		deleteProject,
		changeName,
		getActiveProject,
		getDefaultProject,
		deleteTodo,
		assignProject,
		changeProject,
		switchCompleteStatus,
	};
})();

export default projectManager;
