import getProjectForm from './projectForms';
import getTodoForm from './todoForms';
import editTodoForm from './editTodoForm';
import editProjectForm from './editProjectForm';

const buttonManager = (function () {
	// Add To Do Button //
	const generateTodoBtn = (container) => {
		const addTodo = document.createElement('button');
		addTodo.textContent = 'Add New To Do Item';
		addTodo.classList.add('todo-btn');
		addTodo.addEventListener('click', () => getTodoForm());

		container.appendChild(addTodo);
	};

	// Add Project Button //
	const generateProjectBtn = (container) => {
		const addProject = document.createElement('button');
		addProject.textContent = 'Add New Project';
		addProject.classList.add('project-btn');
		addProject.addEventListener('click', () => getProjectForm());

		container.appendChild(addProject);
	};

	// edit todo button
	const generateEditTodoBtn = (container,todo) => {
		const editTodoBtn = document.createElement('button');
		editTodoBtn.textContent = 'Edit';
		editTodoBtn.classList.add('edit-todo-btn');
		editTodoBtn.addEventListener('click', () => editTodoForm(todo));

		container.appendChild(editTodoBtn);
	};

	//edit project button
	const generateEditProjectBtn = (container,project) => {
		const editProjectBtn = document.createElement('button');
		editProjectBtn.textContent = 'Edit';
		editProjectBtn.addEventListener('click', () => editProjectForm(project));
		container.appendChild(editProjectBtn);
	};

	return {
		generateProjectBtn,
		generateTodoBtn,
		generateEditTodoBtn,
		generateEditProjectBtn,
	};
})();

export default buttonManager;
