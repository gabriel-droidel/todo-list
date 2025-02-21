/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\nconsole.log(_projects__WEBPACK_IMPORTED_MODULE_0__.projectManager);\nconsole.log(_todos__WEBPACK_IMPORTED_MODULE_1__.todoManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTRDO0FBQ047O0FBRXRDLFlBQVkscURBQWM7QUFDMUIsWUFBWSwrQ0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSBcIi4vdG9kb3NcIjtcblxuY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIpO1xuY29uc29sZS5sb2codG9kb01hbmFnZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectManager: () => (/* binding */ projectManager)\n/* harmony export */ });\nconst projectManager = (function () {\n\t// handle project related actions on the back hand for projects\n\tconst projects = []; // array where all projects are stored\n\tconst getProjects = () => [...projects]; // get a copy of the projects array\n\tconst create = (name) => {\n\t\t// create project with input as its name\n\t\tconst project = { name, project, id };\n\t\tprojects.push(project);\n\t\treturn project;\n\t};\n\tconst createDefaultProject = () => create('Default'); // create a default project where all todos will go by default\n\treturn { create, createDefaultProject, getProjects };\n})();\n\nconst defaultProject = projectManager.createDefaultProject();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELFVBQVU7QUFDVixDQUFDOztBQUVEOztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wcm9qZWN0cy5qcz8xMjEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcblx0Ly8gaGFuZGxlIHByb2plY3QgcmVsYXRlZCBhY3Rpb25zIG9uIHRoZSBiYWNrIGhhbmQgZm9yIHByb2plY3RzXG5cdGNvbnN0IHByb2plY3RzID0gW107IC8vIGFycmF5IHdoZXJlIGFsbCBwcm9qZWN0cyBhcmUgc3RvcmVkXG5cdGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gWy4uLnByb2plY3RzXTsgLy8gZ2V0IGEgY29weSBvZiB0aGUgcHJvamVjdHMgYXJyYXlcblx0Y29uc3QgY3JlYXRlID0gKG5hbWUpID0+IHtcblx0XHQvLyBjcmVhdGUgcHJvamVjdCB3aXRoIGlucHV0IGFzIGl0cyBuYW1lXG5cdFx0Y29uc3QgcHJvamVjdCA9IHsgbmFtZSwgcHJvamVjdCwgaWQgfTtcblx0XHRwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXHRcdHJldHVybiBwcm9qZWN0O1xuXHR9O1xuXHRjb25zdCBjcmVhdGVEZWZhdWx0UHJvamVjdCA9ICgpID0+IGNyZWF0ZSgnRGVmYXVsdCcpOyAvLyBjcmVhdGUgYSBkZWZhdWx0IHByb2plY3Qgd2hlcmUgYWxsIHRvZG9zIHdpbGwgZ28gYnkgZGVmYXVsdFxuXHRyZXR1cm4geyBjcmVhdGUsIGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9O1xufSkoKTtcblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuXG5leHBvcnQge3Byb2plY3RNYW5hZ2VyfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/projects.js\n");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoManager: () => (/* binding */ todoManager)\n/* harmony export */ });\nconst todoManager = (function () {\n\tconst create = (name, description, dueDate, project, priority, id) => {\n\t\treturn { name, description, dueDate, project, priority, id };\n\t};\n\n\treturn { create };\n})();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUEsVUFBVTtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdG9kb3MuanM/YTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNyZWF0ZSA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGlkKSA9PiB7XG5cdFx0cmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5LCBpZCB9O1xuXHR9O1xuXG5cdHJldHVybiB7IGNyZWF0ZSB9O1xufSkoKTtcblxuZXhwb3J0IHt0b2RvTWFuYWdlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todos.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;