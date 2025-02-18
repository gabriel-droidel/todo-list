// Module to manage projects
const projectManager = (() => {
	let projects = [];
	let nextId = 0; // for generating unique IDs

	// Helper function to generate a new project ID
	const generateProjectId = () => nextId++;

	// Create a new project
	const createProject = (name) => {
		const project = {
			id: generateProjectId(),
			name,
			items: [],
		};
		projects.push(project);
		return project;
	};

	// Assign a task to a project by its ID
	const assignProject = (item, projectId) => {
		const project = projects.find((project) => project.id == projectId);
		project.items.push(item);
	};

	// Get a list of all projects
	const getProjectList = () => [...projects];

	// Create a default project
	const createDefaultProject = () => createProject('Default');

	return {
		createProject,
		assignProject,
		getProjectList,
		createDefaultProject,
	};
})();

const defaultProject = projectManager.createDefaultProject();
console.log(projectManager.getProjectList())

export { projectManager };
