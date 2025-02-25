import projectManager from '../projectManager';
import displayManager from './displayContent';
import todoManager from '../todoManager';
import { getCurrentDate } from '../helperFunctions';

function createProject() {
	document.addEventListener('projectAdded', (e) => {
		const projectName = e.detail.name;
		projectManager.create(projectName);
		refreshPage();
	});
}

function createTodo() {
	document.addEventListener('todoAdded', (e) => {
		const todoName = e.detail.name;
		const todoDescription = e.detail.description;
		let todoDate = e.detail.dueDate;
		if (todoDate === '') {
			todoDate = getCurrentDate();
		}
		const todoPriority = e.detail.priority;
		const todoItem = todoManager.create(
			todoName,
			todoDescription,
			todoDate,
			todoPriority
		);

		const projectToAssign = projectManager
			.getProjects()
			.find((p) => p.id === Number(e.detail.projectId));
		projectManager.assignProject(todoItem, projectToAssign);
		refreshPage();
	});
}

function changeActiveProject() {
	document.addEventListener('projectSelected', (e) => {
		const projectName = e.detail.name;
		const projectToActivate = projectManager
			.getProjects()
			.find((p) => p.name === projectName);

		if (projectToActivate) {
			projectManager.setActive(projectToActivate); // Update active project
			refreshPage(); // Re-render with the new active project
		}
	});
}

function refreshPage() {
	// refresh data and display every time a new project is created
	const projects = projectManager.getProjects();
	const activeProject = projectManager.getActiveProject();
	displayManager.showProjects(projects);
	displayManager.showTodos(activeProject.items);
}

function getProjects() {
	return projectManager.getProjects();
}

export { createProject, getProjects, createTodo, changeActiveProject };
