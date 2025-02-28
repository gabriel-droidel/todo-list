import getProjectForm from './projectForms';
import getTodoForm from './todoForms';
import editTodoForm from './editTodoForm';
import editProjectForm from './editProjectForm';
import editBtnSvg from '../../assets/editBtn.svg';
const buttonManager = (function () {
	// Add To Do Button //
	const generateTodoBtn = (container) => {
		const addTodo = document.createElement('button');
		addTodo.classList.add('todo-btn');
		addTodo.addEventListener('click', () => getTodoForm());
		addTodo.textContent = '+';

		container.appendChild(addTodo);
	};

	// Add Project Button //
	const generateProjectBtn = (container) => {
		const addProject = document.createElement('button');
		addProject.textContent = 'New Project';
		addProject.classList.add('project-btn');
		addProject.addEventListener('click', () => getProjectForm());

		container.appendChild(addProject);
	};

	// edit todo button
	const generateEditTodoBtn = (container, todo) => {
		const editTodoBtn = document.createElement('button');
		editTodoBtn.classList.add('edit-todo-btn');
		const editBtnImg = document.createElement('img');
		editBtnImg.src = editBtnSvg;
		editBtnImg.alt = 'Edit Button';
		editBtnImg.classList.add('edit-btn-img');
		editTodoBtn.appendChild(editBtnImg);
		editTodoBtn.addEventListener('click', () => editTodoForm(todo));

		container.appendChild(editTodoBtn);
	};

	//edit project button
	const generateEditProjectBtn = (container, project) => {
		const editProjectBtn = document.createElement('button');
		const editBtnImg = document.createElement('img');
		editBtnImg.src = editBtnSvg;
		editBtnImg.alt = 'Edit Button';
		editBtnImg.classList.add('edit-btn-img');
		editProjectBtn.appendChild(editBtnImg);
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
