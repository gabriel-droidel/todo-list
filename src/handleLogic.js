import { createProject, list, deleteProject } from './project-list';
import { createTodoItem, deleteTodoItem } from './todo-item';

function assignItems() {
	const projectA = createProject('A');
	const projectB = createProject('B');
	const todoItem = createTodoItem('lala', 1, 'nu stiu');
	const todoItem1 = createTodoItem('appa', 1, 'nu stiu', 2,projectA.items);
	const todoItem2 = createTodoItem('sas', 1, 'nu stiu', 3, projectA.items);
	console.log(list);
	console.log(projectA);
	console.log(projectB);

    deleteTodoItem(todoItem1.index, todoItem1.project)

    console.log(projectA);
}

export { assignItems };
