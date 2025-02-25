import projectManager from './projectManager';
import todoManager from './todoManager';
import dashboardManager from './pages/dashboard';
import displayManager from './DOM/displayContent';
import {
	createProject,
	createTodo,
	changeActiveProject,
} from './DOM/parseData';

const projects = projectManager.getProjects();
const activeProject = projectManager.getActiveProject();
createProject();
createTodo();
changeActiveProject();

dashboardManager.generatePageLayout();
dashboardManager.generateButtons();
displayManager.showProjects(projects);
displayManager.showTodos(activeProject.items);
