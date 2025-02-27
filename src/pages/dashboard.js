import '../styles/style.css';
import projectManager from '../projectManager';
import displayManager from '../DOM/displayContent';
import buttonManager from '../DOM/forms/generateButtons';

const containerDiv = document.querySelector('#container');
const headerDiv = document.querySelector('header');

function generatePageLayout() {
	const projectDiv = document.createElement('div');
	const todoDiv = document.createElement('div');
	projectDiv.classList.add('projects-container');
	todoDiv.classList.add('todo-container');
	containerDiv.append(projectDiv, todoDiv);
}

export function initializeDashboard() {
	// Initialize layout and buttons
	generatePageLayout();
	buttonManager.generateProjectBtn(headerDiv);
	buttonManager.generateTodoBtn(headerDiv);

	// Show projects and active todos
	const projects = projectManager.getProjects();
	const activeProject = projectManager.getActiveProject();
	displayManager.showProjects(projects);
	displayManager.showTodos(activeProject.items);
}
