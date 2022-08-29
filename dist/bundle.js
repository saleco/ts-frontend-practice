/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Router.ts":
/*!***********************!*\
  !*** ./src/Router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
const Home_1 = __webpack_require__(/*! ./components/Home */ "./src/components/Home.ts");
const Login_1 = __webpack_require__(/*! ./components/Login */ "./src/components/Login.ts");
class Router {
    constructor() {
        this.mainElement = document.getElementById('main-container');
    }
    handleRequest() {
        var _a, _b;
        const location = this.getRoute();
        console.log(`Handling request for ${location}`);
        switch (location) {
            case '/login':
                (_a = this.mainElement) === null || _a === void 0 ? void 0 : _a.append(new Login_1.Login().render());
                break;
            default:
                (_b = this.mainElement) === null || _b === void 0 ? void 0 : _b.append(new Home_1.Home().render());
                break;
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}
exports.Router = Router;


/***/ }),

/***/ "./src/components/Home.ts":
/*!********************************!*\
  !*** ./src/components/Home.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Home = void 0;
class Home {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'welcome to the Home Page!!!';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Home = Home;


/***/ }),

/***/ "./src/components/Login.ts":
/*!*********************************!*\
  !*** ./src/components/Login.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login = void 0;
class Login {
    constructor() {
        this.container = document.createElement('div');
    }
    render() {
        const pageLabel = document.createElement('label');
        pageLabel.innerText = 'welcome to the Login Page!!!';
        this.container.append(pageLabel);
        return this.container;
    }
}
exports.Login = Login;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/Launcher.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Router_1 = __webpack_require__(/*! ./Router */ "./src/Router.ts");
class Launcher {
    constructor() {
        this.router = new Router_1.Router();
    }
    launchApp() {
        console.log('App started!');
        this.router.handleRequest();
    }
}
new Launcher().launchApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RkFBeUM7QUFDekMsMkZBQTJDO0FBRTNDLE1BQWEsTUFBTTtJQUFuQjtRQUVZLGdCQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBaUJwRSxDQUFDO0lBaEJVLGFBQWE7O1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixRQUFRLEVBQUUsQ0FBQztRQUMvQyxRQUFRLFFBQVEsRUFBRTtZQUNkLEtBQUssUUFBUTtnQkFDVCxVQUFJLENBQUMsV0FBVywwQ0FBRSxNQUFNLENBQUMsSUFBSSxhQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNO1lBQ1Y7Z0JBQ0ksVUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTSxDQUFDLElBQUksV0FBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVPLFFBQVE7UUFDWixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtJQUNuQyxDQUFDO0NBQ0o7QUFuQkQsd0JBbUJDOzs7Ozs7Ozs7Ozs7OztBQ3RCRCxNQUFhLElBQUk7SUFBakI7UUFFWSxjQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFRckQsQ0FBQztJQU5HLE1BQU07UUFDRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFNBQVMsQ0FBQyxTQUFTLEdBQUcsNkJBQTZCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Q0FDSjtBQVZELG9CQVVDOzs7Ozs7Ozs7Ozs7OztBQ1ZELE1BQWEsS0FBSztJQUFsQjtRQUVZLGNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQVFyRCxDQUFDO0lBTkcsTUFBTTtRQUNGLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsU0FBUyxDQUFDLFNBQVMsR0FBRyw4QkFBOEIsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztDQUNKO0FBVkQsc0JBVUM7Ozs7Ozs7VUNWRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsd0VBQWtDO0FBRWxDLE1BQU0sUUFBUTtJQUFkO1FBRVksV0FBTSxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7SUFNMUMsQ0FBQztJQUpVLFNBQVM7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtJQUMvQixDQUFDO0NBQ0o7QUFFRCxJQUFJLFFBQVEsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZnJvbnRlbmQtcHJhY3RpY2UvLi9zcmMvUm91dGVyLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL2NvbXBvbmVudHMvSG9tZS50cyIsIndlYnBhY2s6Ly90cy1mcm9udGVuZC1wcmFjdGljZS8uL3NyYy9jb21wb25lbnRzL0xvZ2luLnRzIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWZyb250ZW5kLXByYWN0aWNlLy4vc3JjL0xhdW5jaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWUgfSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gICAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLmdldFJvdXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEhhbmRsaW5nIHJlcXVlc3QgZm9yICR7bG9jYXRpb259YClcclxuICAgICAgICBzd2l0Y2ggKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJy9sb2dpbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5FbGVtZW50Py5hcHBlbmQobmV3IExvZ2luKCkucmVuZGVyKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5FbGVtZW50Py5hcHBlbmQobmV3IEhvbWUoKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb3V0ZSgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSG9tZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBwYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIHBhZ2VMYWJlbC5pbm5lclRleHQgPSAnd2VsY29tZSB0byB0aGUgSG9tZSBQYWdlISEhJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQocGFnZUxhYmVsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTG9naW4ge1xyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcGFnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBwYWdlTGFiZWwuaW5uZXJUZXh0ID0gJ3dlbGNvbWUgdG8gdGhlIExvZ2luIFBhZ2UhISEnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChwYWdlTGFiZWwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9Sb3V0ZXJcIjtcclxuXHJcbmNsYXNzIExhdW5jaGVyIHtcclxuXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG5cclxuICAgIHB1YmxpYyBsYXVuY2hBcHAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcCBzdGFydGVkIScpXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuaGFuZGxlUmVxdWVzdCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBMYXVuY2hlcigpLmxhdW5jaEFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==