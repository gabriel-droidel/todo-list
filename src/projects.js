const list = []; // array where all projects are stored

function createProject(name) {
	// create a project that has an array to store todos
	const project = { name, items: [] };
	project.id = list.length;
	list.push(project);
	return project;
}

function assignProject(item, projectId) {
	// assign a project to a todo, set default project instead
	const projectToAssign = list[projectId];
	projectToAssign.items.push(item);
	console.log(list);
}

const defaultProject = createProject('Default');
const getProjectList = () => [...list];

export { defaultProject, getProjectList, createProject, assignProject,list };
