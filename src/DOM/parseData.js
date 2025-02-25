import projectManager from '../projectManager';
import displayManager from './displayContent';
import todoManager from '../todoManager';
import { getCurrentDate } from '../helperFunctions';

function createProject() {
	// get data from form and pass it to the create project function
	document.addEventListener('projectAdded', (e) => {
		const projectName = e.detail.name;
		projectManager.create(projectName);
		refreshPage(); // update display
	});
}

function editProject() {
	document.addEventListener('projectEdited', (e) => {
		const newName = e.detail.name;
		const projectToEdit = projectManager
			.getProjects()
			.find((p) => p.id === e.detail.id);

		projectManager.changeName(projectToEdit, newName);
		console.log(projectToEdit);
		refreshPage();
	});
}

function createTodo() {
	// get data from form and pass it to create todo function
	document.addEventListener('todoAdded', (e) => {
		const todoName = e.detail.name;
		const todoDescription = e.detail.description;
		let todoDate = e.detail.dueDate;
		if (todoDate === '') {
			todoDate = getCurrentDate();
		}
		const todoPriority = e.detail.priority;
		console.log(todoPriority);
		const todoItem = todoManager.create(
			todoName,
			todoDescription,
			todoDate,
			todoPriority
		);
		// assign todo list item to the specified project
		const projectToAssign = projectManager
			.getProjects()
			.find((p) => p.id === Number(e.detail.projectId));
		console.log(todoItem);
		projectManager.assignProject(todoItem, projectToAssign);
		refreshPage(); // reset display
	});
}

function changeActiveProject() {
	// set active project and update the display
	document.addEventListener('projectSelected', (e) => {
		const projectId = e.detail.id;
		const projectToActivate = projectManager
			.getProjects()
			.find((p) => p.id === Number(projectId));

		if (projectToActivate) {
			projectManager.setActive(projectToActivate); // Update active project
			refreshPage(); // Re-render with the new active project
		}
	});
}

function deleteProjectOnPage() {
	document.addEventListener('projectDeleted', (e) => {
		const projectId = e.detail.id;
		const projectToDelete = projectManager
			.getProjects()
			.find((p) => p.id === Number(projectId));

		if (projectToDelete) {
			projectManager.deleteProject(projectToDelete); // delete project
			refreshPage(); // Re-render with the rest of the projects
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

function getEventListeners() {
	// create functions
	createProject();
	createTodo();
	// edit projects
	changeActiveProject();
	deleteProjectOnPage();
	editProject();
	// edit todos
}
export { getEventListeners, getProjects };
