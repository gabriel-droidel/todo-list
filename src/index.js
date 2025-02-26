import { initializeDashboard } from './pages/dashboard';
import { projectListeners, todoListeners } from './DOM/parseData';

initializeDashboard();
projectListeners();
todoListeners();
