const projectManager = (function () {
	// handle project related actions on the back hand for projects
	let projects = []; // array where all projects are stored
	let idCounter = 0; // keep track of projects id by assigning them a unique id

	// local storage save function
	const LOCAL_STORAGE_KEY = 'projects';
	const saveToLocalStorage = () => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
	};
	//local storage load

	const loadFromLocalStorage = () => {
		const storedProjects = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (storedProjects) {
			projects = JSON.parse(storedProjects);
			idCounter =
				projects.length > 0
					? Math.max(...projects.map((project) => project.id)) + 1
					: 0; // if no existing projects, default to 0
		}
	};

	const generateID = () => idCounter++; //increment when adding a new ID

	const getProjects = () => [...projects]; // get a copy of the projects array

	const getActiveProject = () =>
		projects.find((project) => project.selected === true); //get the active project

	const create = (name) => {
		// create project with input as its name
		const project = { name, items: [], id: generateID(), selected: false };
		projects.push(project);

		// save to local storage
		saveToLocalStorage();
		return project;
	};

	const createDefaultProject = () => {
		// create a default project and set it's selected value as true to be shown as default
		const defaultProjectCreated = create('Default');
		defaultProjectCreated.selected = true;

		// save to local storage
		saveToLocalStorage();

		return defaultProjectCreated;
	};

	const defaultProject = projects.find(project => project.name === 'Default') || createDefaultProject();

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

	loadFromLocalStorage();

	return {
		create,
		createDefaultProject,
		getProjects,
		setActive,
		deleteProject,
		changeName,
		getActiveProject,
		getDefaultProject,
		LOCAL_STORAGE_KEY
	};
})();

export default projectManager;
