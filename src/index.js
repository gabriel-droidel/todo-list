import { projectManager, todoManager } from './projects';

console.log(projectManager.getProjects());

const projectToActivate = projectManager.create('Project A');
const projectToActivateSecond = projectManager.create('Project B');
projectManager.deleteProject(projectToActivateSecond);
const project3 = projectManager.create('Project C');
projectManager.deleteProject(projectToActivate);

const todoOne = todoManager.create('TodoOne', 'Any', 'Today');

const todoOne2 = todoManager.create('TodoOne2', 'Any', 'Today');

const todoOne3 = todoManager.create('TodoOne3', 'Any', 'Today');
projectManager.assignProject(todoOne);
projectManager.assignProject(todoOne);
projectManager.assignProject(todoOne);
projectManager.assignProject(todoOne2);
projectManager.assignProject(todoOne3);
console.log(todoOne);
todoManager.deleteTodo(todoOne2);
todoManager.deleteTodo(todoOne);
