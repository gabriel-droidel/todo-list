import '../styles/style.css';
import { displayProjectForm, displayTodoForm } from '../DOM/forms';
import { populateProjects, populateTodo } from '../DOM/populateDisplay';

// Get containers from HTML page
const containerDiv = document.querySelector('#container');
const header = document.querySelector('header');

function generateDashBoardTemplate() {
	const projectList = document.createElement('div');
	projectList.classList.add('projects');

	const todoList = document.createElement('div');
	todoList.classList.add('todos');

	containerDiv.append(projectList, todoList);

	generateButtons(); // display buttons
	populateProjects(); // display project list
	populateTodo(0); // 0 is the default project ID
}

function generateButtons() {
	// Add Todo Button
	const addTodo = document.createElement('button');
	addTodo.textContent = '+';
	addTodo.addEventListener('click', () => {
		displayTodoForm();
		document.addEventListener('todoListModified', () => {
			populateTodo(0);
		});
	});
	header.appendChild(addTodo);

	// Add Project Button
	const addProject = document.createElement('button');
	addProject.textContent = ' New Project ';
	addProject.addEventListener('click', () => {
		displayProjectForm();
		document.addEventListener('projectListModified', () => {
			populateProjects();
		});
	});
	header.appendChild(addProject);
}

export { generateDashBoardTemplate };
