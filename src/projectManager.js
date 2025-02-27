const projectManager = (function () {
	// handle project related actions on the back hand for projects
	const projects = []; // array where all projects are stored
	let idCounter = 0; // keep track of projects id by assigning them a unique id

	const generateID = () => idCounter++; //increment when adding a new ID

	const getProjects = () => [...projects]; // get a copy of the projects array

	const getActiveProject = () =>
		projects.find((project) => project.selected === true); //get the active project

	const create = (name) => {
		// create project with input as its name
		const project = { name, items: [], id: generateID(), selected: false };
		projects.push(project);
		return project;
	};

	const createDefaultProject = () => {
		// create a default project and set it's selected value as true to be shown as default
		const defaultProjectCreated = create('Default');
		defaultProjectCreated.selected = true;
		return defaultProjectCreated;
	}; // create a default project where all todos will go by default

	const defaultProject = createDefaultProject(); // initialize defaultProject

	const getDefaultProject = () => defaultProject;
	const setActive = (project) => {
		// set a project as active on the page
		const activeProject = projects.find((project) => project.selected);
		if (activeProject) activeProject.selected = false;
		project.selected = true;
	};

	const deleteProject = (project) => {
		// delete a project
		if (project !== defaultProject) {
			const projectIndex = projects.findIndex((p) => p.id === project.id);
			if (projectIndex != -1) projects.splice(projectIndex, 1);
		}
	};

	const changeName = (project, newName) => {
		// edit a project
		if (typeof newName === 'string' && newName.trim() !== '')
			project.name = newName;
	};

	return {
		create,
		createDefaultProject,
		getProjects,
		setActive,
		deleteProject,
		changeName,
		getActiveProject,
		getDefaultProject,
	};
})();

export default projectManager;
