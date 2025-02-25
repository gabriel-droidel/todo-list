import '../styles/style.css';
import getProjectForm from '../DOM/forms/projectForms';
import getTodoForm from '../DOM/forms/todoForms';
import projectManager from '../projectManager';
import displayManager from '../DOM/displayContent';

const containerDiv = document.querySelector('#container');
const headerDiv = document.querySelector('header');

const dashboardManager = (function () {
	const generatePageLayout = () => {
		const projectDiv = document.createElement('div');
		const todoDiv = document.createElement('div');
		projectDiv.classList.add('projects-container');
		todoDiv.classList.add('todo-container');
		containerDiv.append(projectDiv, todoDiv);
	};
	const generateButtons = () => {
		// Add To Do Button //
		const addTodo = document.createElement('button');
		addTodo.textContent = 'Add New To Do Item';
		addTodo.addEventListener('click', () => getTodoForm());

		// Add Project Button //
		const addProject = document.createElement('button');
		addProject.textContent = 'Add New Project';
		addProject.addEventListener('click', () => getProjectForm());

		headerDiv.append(addTodo, addProject);
	};

	return { generatePageLayout, generateButtons };
})();

export function initializeDashboard() {
	// Initialize layout and buttons
	dashboardManager.generatePageLayout();
	dashboardManager.generateButtons();

	// Show projects and active todos
	const projects = projectManager.getProjects();
	const activeProject = projectManager.getActiveProject();
	displayManager.showProjects(projects);
	displayManager.showTodos(activeProject.items);
}
