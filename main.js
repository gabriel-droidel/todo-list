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

/***/ "./src/handleLogic.js":
/*!****************************!*\
  !*** ./src/handleLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignItems: () => (/* binding */ assignItems)\n/* harmony export */ });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ \"./src/todo-item.js\");\n\n\n\nfunction assignItems() {\n\tconst projectA = (0,_project_list__WEBPACK_IMPORTED_MODULE_0__.createProject)('A');\n\tconst todoItem = (0,_todo_item__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)('da', 1, 'nu stiu');\n\tconsole.log(todoItem);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFuZGxlTG9naWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1FO0FBQ3RCOztBQUU3QztBQUNBLGtCQUFrQiw0REFBYTtBQUMvQixrQkFBa0IsMERBQWM7QUFDaEM7QUFDQTs7QUFFdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlTG9naWMuanM/NTNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVQcm9qZWN0LGxpc3QsZGVmYXVsdFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LWxpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kby1pdGVtXCI7XG5cbmZ1bmN0aW9uIGFzc2lnbkl0ZW1zKCkge1xuXHRjb25zdCBwcm9qZWN0QSA9IGNyZWF0ZVByb2plY3QoJ0EnKTtcblx0Y29uc3QgdG9kb0l0ZW0gPSBjcmVhdGVUb2RvSXRlbSgnZGEnLCAxLCAnbnUgc3RpdScpO1xuXHRjb25zb2xlLmxvZyh0b2RvSXRlbSk7XG59XG5cbmV4cG9ydCB7IGFzc2lnbkl0ZW1zIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/handleLogic.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleLogic */ \"./src/handleLogic.js\");\n\n\n(0,_handleLogic__WEBPACK_IMPORTED_MODULE_0__.assignItems)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBNEM7O0FBRTVDLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzaWduSXRlbXMgfSBmcm9tIFwiLi9oYW5kbGVMb2dpY1wiO1xuXG5hc3NpZ25JdGVtcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   defaultProject: () => (/* binding */ defaultProject),\n/* harmony export */   list: () => (/* binding */ list)\n/* harmony export */ });\nconst defaultProject = { name: 'Default', items: [] };\nconst list = [defaultProject];\n\nfunction createProject(name) {\n\tconst index = list.length;\n\tconst project = { name, items: [], index };\n\tlist.push(project);\n\treturn project;\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdC1saXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7O0FBRytDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QtbGlzdC5qcz8yODY0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRQcm9qZWN0ID0geyBuYW1lOiAnRGVmYXVsdCcsIGl0ZW1zOiBbXSB9O1xuY29uc3QgbGlzdCA9IFtkZWZhdWx0UHJvamVjdF07XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuXHRjb25zdCBpbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRjb25zdCBwcm9qZWN0ID0geyBuYW1lLCBpdGVtczogW10sIGluZGV4IH07XG5cdGxpc3QucHVzaChwcm9qZWN0KTtcblx0cmV0dXJuIHByb2plY3Q7XG59XG5cblxuZXhwb3J0IHsgZGVmYXVsdFByb2plY3QsIGxpc3QsIGNyZWF0ZVByb2plY3QgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/project-list.js\n");

/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)\n/* harmony export */ });\n/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-list */ \"./src/project-list.js\");\n\n\nfunction createTodoItem(\n\tname,\n\tdueDate,\n\tdescription,\n\tpriority = 1,\n\tproject = _project_list__WEBPACK_IMPORTED_MODULE_0__.defaultProject\n) {\n\tconst index = project.length;\n\tconst item = { name, dueDate, description, priority, project, index };\n\tproject['items'].push(item);\n\treturn item;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kby1pdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5REFBYztBQUN6QjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdG9kby1pdGVtLmpzP2Q1ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QtbGlzdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKFxuXHRuYW1lLFxuXHRkdWVEYXRlLFxuXHRkZXNjcmlwdGlvbixcblx0cHJpb3JpdHkgPSAxLFxuXHRwcm9qZWN0ID0gZGVmYXVsdFByb2plY3Rcbikge1xuXHRjb25zdCBpbmRleCA9IHByb2plY3QubGVuZ3RoO1xuXHRjb25zdCBpdGVtID0geyBuYW1lLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIGluZGV4IH07XG5cdHByb2plY3RbJ2l0ZW1zJ10ucHVzaChpdGVtKTtcblx0cmV0dXJuIGl0ZW07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todo-item.js\n");

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