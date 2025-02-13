const defaultProject = { name: 'Default', items: [], index: 0 };
const list = [defaultProject];

function createProject(name) {
	const index = list.length;
	const project = { name, items: [], index };
	list.push(project);
	return project;
}

function deleteProject(index) {
	return list.splice(index,1);
}
export { defaultProject, list, createProject ,deleteProject};
