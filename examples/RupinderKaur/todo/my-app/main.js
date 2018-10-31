(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container{\r\n    width: 500px;\r\n    margin: auto;\r\n    background-color: #E8E8E8;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: 2px solid #000;\r\n}\r\n.container h1{\r\n    text-align: center;\r\n    margin: 15px 0px;\r\n    color: #6a6a6a;\r\n    padding-bottom: 10px;\r\n    border-bottom: 2px solid #000;\r\n}\r\n.container-inner{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n.container-inner .todo-items{\r\n   margin-right: 10px;\r\n   margin-bottom: 10px;\r\n}\r\n.container-inner .todo-items label{\r\n    display:block;\r\n    color: #6a6a6a;\r\n    font-size: 18px;\r\n}\r\n.container-inner .add-btn{\r\n    flex:0 0 20%;\r\n    margin: 10px 0px;\r\n    background: none;\r\n    border: 1px solid #000;\r\n    padding: 5px 12px;\r\n    border-radius: 10px;\r\n    outline:none;\r\n}\r\n.container-inner .add-btn:hover{\r\n    box-shadow: 1px 1px 13px 0px #000;\r\n}\r\n.completed{\r\n    text-decoration: line-through;\r\n    opacity: 0.5;\r\n}\r\n.overdue{\r\n    background-color: #E20074;\r\n    color: #fff;\r\n}\r\n.due_soon{\r\n    background-color: #6a6a6a;\r\n    color: #fff;\r\n}\r\n.container-inner .todo-items:nth-child(1){\r\n    flex: 0 0 80%;\r\n}\r\n.container-inner .todo-items:nth-child(1) input{\r\n    width: 100%;\r\n}\r\n.container-inner .todo-items:nth-child(2){\r\n    flex: 0 0 34%;\r\n}\r\n.container-inner .todo-items:nth-child(3){\r\n    flex: 0 0 45%;\r\n}\r\n.container-inner .todo-items input{\r\n    border-radius: 10px;\r\n    border: 1px solid #000;\r\n    padding: 3px 0px 3px 10px;\r\n    outline: none;\r\n}\r\n.container-inner .todo-items select{\r\n    border-radius: 10px;\r\n    border: 1px solid #000;\r\n    padding: 3px 0px 6px 10px;\r\n    outline: none;\r\n}\r\n.priority-items{\r\n    padding:0px 50px;\r\n}\r\n.priority-items button{\r\n    margin: 10px 0px;\r\n    background: none;\r\n    border: 1px solid #000;\r\n    padding: 5px 12px;\r\n    border-radius: 10px;\r\n    outline:none;\r\n}\r\n.priority-items button:hover{\r\n    box-shadow: 1px 1px 13px 0px #000;\r\n}\r\n.priority-items-inner{\r\n    border-top: 1px solid #000;\r\n    border-bottom: 1px solid #000;\r\n    margin: 10px 0px;\r\n    padding: 10px 6px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.priority-items .to-do-list{\r\n    padding:0px;\r\n    list-style: none;\r\n}\r\n.priority-items .to-do-list li{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0px 10px;\r\n    border-radius: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.priority-items .to-do-list li input{\r\n  float:left;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Todos</h1>\r\n  <div class=\"container-inner\" [formGroup]=\"toDoForm\">\r\n    <div class=\"todo-items\">\r\n        <label>Title:</label>\r\n        <input type=\"text\" formControlName=\"title\">\r\n    </div>\r\n\r\n    <div class=\"todo-items\">\r\n      <label>Due Date:</label>\r\n      <input type=\"date\" formControlName=\"dueDate\">\r\n    </div>\r\n\r\n    <div class=\"todo-items\">\r\n      <label>Priority:</label>\r\n      <select formControlName=\"priority\">\r\n        <option value=\"1\">1 - Low</option>\r\n        <option value=\"2\">2 - Medium</option>\r\n        <option value=\"3\">3 - High</option>\r\n      </select>\r\n    </div>\r\n    <button class=\"add-btn\" (click)=\"addToDoItem()\">Add Item</button>\r\n  </div>\r\n\r\n  <div class=\"priority-items\" *ngIf=\"toDoList.length\">\r\n    <div class=\"priority-items-inner\">\r\n      <span>To do list Items</span>\r\n      <button (click)=\"sortByPriority()\">sort items By priority</button>\r\n    </div>\r\n    <ul class=\"to-do-list\">\r\n      <li *ngFor=\"let item of toDoList; index as i\" [ngClass]=\"checkForDue(item)\">\r\n        <div>\r\n          <input class=\"toggle\" type=\"checkbox\" (click)=\"toggleCompletion(item)\" [checked]=\"item.completed\">\r\n          <span [ngClass]=\"{'completed': item.completed}\">{{item.title}}</span>\r\n        </div>\r\n        <button (click)=\"removeToDoItem(i)\">Remove</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.toDoList = [{ 'title': 'submit documents', 'dueDate': '2018-10-25', 'priority': 1 }];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.createOrResetForm();
        console.log('toDo form', this.toDoForm);
    };
    AppComponent.prototype.createOrResetForm = function () {
        this.toDoForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AppComponent.prototype.addToDoItem = function () {
        console.log('at the submit---', this.toDoForm);
        if (this.toDoForm.valid) {
            this.toDoList.push(this.toDoForm.value);
            this.createOrResetForm();
        }
    };
    AppComponent.prototype.toggleCompletion = function (item) {
        item.completed = !item.completed;
    };
    AppComponent.prototype.removeToDoItem = function (i) {
        console.log('index------', i);
        this.toDoList.splice(i, 1);
    };
    AppComponent.prototype.checkForDue = function (item) {
        // console.log('due date====', item.dueDate);
        var currentDate = new Date().getTime();
        var dueDate = new Date(item.dueDate).getTime();
        return dueDate < currentDate ? 'overdue' : 'due_soon';
    };
    AppComponent.prototype.sortByPriority = function () {
        this.toDoList.sort(function (a, b) {
            return b.priority - a.priority;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sandh\Documents\my-app-ui-code\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map