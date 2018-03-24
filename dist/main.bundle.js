webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calender_calender_component__ = __webpack_require__("../../../../../src/app/calender/calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appointments_appointments_component__ = __webpack_require__("../../../../../src/app/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotpass_forgotpass_component__ = __webpack_require__("../../../../../src/app/forgotpass/forgotpass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'calender', component: __WEBPACK_IMPORTED_MODULE_3__calender_calender_component__["a" /* CalenderComponent */] },
    { path: 'appointments', component: __WEBPACK_IMPORTED_MODULE_4__appointments_appointments_component__["a" /* AppointmentsComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_5__help_help_component__["a" /* HelpComponent */] },
    { path: 'forgotpass', component: __WEBPACK_IMPORTED_MODULE_7__forgotpass_forgotpass_component__["a" /* ForgotpassComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mt{\r\n    margin-top: 58px;\r\n}\r\n.custom-left{\r\n    left: 337px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n     <app-header></app-header>\n      <div class=\"container-fluid mt\">\n        <div class=\"row position-relative\">\n            <div class=\"col-sm-3 mr-0 card position-fixed \"  *ngIf='login'>\n                        <div class=\"card mr-0 bg-primary text-white\">\n                                \n                                <div class=\"card-body\">\n                                                \n                                        <img class=\"card-img-top  ml-2 mr-4\" style=\"width:50px;height:50px\" src=\"../assets/images/profile_photo.png\" alt=\"image\">\n                                        {{welcomemessage}}<br>\n                                        {{profile}}\n                                        <button class=\"ml-3\" mat-icon-button [matMenuTriggerFor]=\"menu\" yPosition=\"above\">\n                                                <mat-icon>expand_more</mat-icon>\n                                              </button>\n                                              <mat-menu #menu=\"matMenu\">\n                                                <button mat-menu-item>\n                                                  <mat-icon>tune</mat-icon>\n                                                  <span>Setting</span>\n                                                </button>\n                                                <button mat-menu-item >\n                                                  <img src=\"../assets/images/arrow-collapse-right.png\">\n                                                  <span class=\"ml-3\">LogOut</span>\n                                                </button>\n                                                \n                                              </mat-menu>\n                                </div>\n                         </div>\n                    <ul class=\"nav flex-column\">\n                           \n                            <li class=\"nav-item\">\n                                   \n                                    <a class=\"nav-link  text-muted\" routerLink=\"/calender\"><i class=\"far fa-calendar-alt mr-2\"></i>calender</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                    <a class=\"nav-link  text-muted\" routerLink=\"/appointments\"><i class=\"fas fa-calendar-alt mr-2\"></i>appointments</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                    <a class=\"nav-link  text-muted\" routerLink=\"/help\"><i class=\"fab fa-hire-a-helper mr-2\"></i>help/guide</a>\n                            </li>\n                          \n                          </ul>\n            </div>\n            <div class=\"col-sm-9 card position-relative custom-left\">\n                    <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_welcome_service__ = __webpack_require__("../../../../../src/app/services/welcome.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_user) {
        this._user = _user;
        this.profile = 'Profile Patient';
        this.login = true;
        this.welcomemessage = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.getOpAvailable().subscribe(function (op) { return _this.login = op; });
        this._user.currentUser.subscribe(function (user) {
            _this.welcomemessage = user.slice(8);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_welcome_service__["a" /* WelcomeService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_welcome_service__ = __webpack_require__("../../../../../src/app/services/welcome.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__patient_patient_component__ = __webpack_require__("../../../../../src/app/patient/patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__physician_physician_component__ = __webpack_require__("../../../../../src/app/physician/physician.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__calender_calender_component__ = __webpack_require__("../../../../../src/app/calender/calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__appointments_appointments_component__ = __webpack_require__("../../../../../src/app/appointments/appointments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__forgotpass_forgotpass_component__ = __webpack_require__("../../../../../src/app/forgotpass/forgotpass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__patient_patient_component__["a" /* PatientComponent */],
                __WEBPACK_IMPORTED_MODULE_11__physician_physician_component__["a" /* PhysicianComponent */],
                __WEBPACK_IMPORTED_MODULE_12__calender_calender_component__["a" /* CalenderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__appointments_appointments_component__["a" /* AppointmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__forgotpass_forgotpass_component__["a" /* ForgotpassComponent */],
                __WEBPACK_IMPORTED_MODULE_17__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_welcome_service__["a" /* WelcomeService */], __WEBPACK_IMPORTED_MODULE_21__angular_material_datepicker__["a" /* MatDatepickerModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appointments/appointments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-width{\r\n    width:15%;\r\n}\r\n.example-card {\r\n    max-width: 200px;\r\n  }\r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointments/appointments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\">\n    <p>Appointments</p>\n  </div>\n  <div class=\"col-sm-10\">\n      <mat-form-field class=\"input-width\">\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"start\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field class=\"input-width\">\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"end\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2></mat-datepicker>\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n          </button>\n          <button mat-raised-button color=\"primary\">Primary</button>\n          <button mat-raised-button color=\"primary\">Primary</button>\n          <button mat-raised-button color=\"primary\">Primary</button>\n          <button mat-raised-button color=\"accent\">recent</button>\n    \n    \n    \n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"card text-white bg-warning mb-3 ml-3\" style=\"max-width: 11rem;\" *ngFor=\"let user of users\">\n        <div class=\"card-header\">\n         <div class=\"row\">\n            <div class=\"col-sm-6\">\n              {{user.name}}<br>\n              {{user.id}}\n            </div>\n            <div class=\"col-sm-6\">\n                <img  style=\"width:50px;height:50px\" src=\"../assets/images/profile_photo.png\" alt=\"image\">                  \n              </div>\n         </div>\n        </div>\n        <div class=\"card-body\">\n          <div>{{user.date}}</div>\n          <div>{{user.status}}</div>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/appointments/appointments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent() {
        this.users = [
            { "name": "Ramesh", "id": 123, "date": new Date(), "status": "waiting" },
            { "name": "Pawan", "id": 124, "date": new Date(), "status": "waiting" },
            { "name": "Siddu", "id": 125, "date": new Date(), "status": "waiting" },
            { "name": "Pradeep", "id": 126, "date": new Date(), "status": "waiting" },
            { "name": "Ramaiah", "id": 127, "date": new Date(), "status": "waiting" },
            { "name": "Rajesh", "id": 122, "date": new Date(), "status": "waiting" },
            { "name": "Ramesh", "id": 123, "date": new Date(), "status": "waiting" },
            { "name": "Pawan", "id": 124, "date": new Date(), "status": "waiting" },
            { "name": "Siddu", "id": 125, "date": new Date(), "status": "waiting" },
            { "name": "Pradeep", "id": 126, "date": new Date(), "status": "waiting" },
            { "name": "Ramaiah", "id": 127, "date": new Date(), "status": "waiting" },
            { "name": "Rajesh", "id": 122, "date": new Date(), "status": "waiting" }
        ];
        this.date = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](new Date());
        this.serializedDate = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]((new Date()).toISOString());
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
    };
    AppointmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appointments',
            template: __webpack_require__("../../../../../src/app/appointments/appointments.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appointments/appointments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/calender/calender.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calender/calender.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 bg-primary\">\n    <div class=\"card\">\n    <div class=\"card-header \">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <h3>Physician's Appointments</h3>\n            {{date}}\n        </div>\n        <div class=\"col-sm-6\">\n          <mat-form-field>\n            <mat-select placeholder=\"Select doctor\" [formControl]=\"doctorControl\" required>\n              <mat-option>--</mat-option>\n              <mat-option *ngFor=\"let doctor of doctors\" [value]=\"doctor\">\n                {{doctor.name}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"doctorControl.hasError('required')\">Please choose an doctor</mat-error>\n            <mat-hint>{{doctorControl.value?.sound}}</mat-hint>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      \n    </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/calender/calender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalenderComponent = /** @class */ (function () {
    function CalenderComponent() {
        this.date = new Date();
        this.doctorControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.doctors = [
            { name: 'sarma', type: 'Cardiologist' },
            { name: 'latha', type: 'Family Physicians' },
            { name: 'Geetha', type: 'Geriatric Medicine Specialist' },
            { name: 'Peter Willon', type: 'Emergency Medicine Specialist' }
        ];
    }
    CalenderComponent.prototype.ngOnInit = function () {
    };
    CalenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calender',
            template: __webpack_require__("../../../../../src/app/calender/calender.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calender/calender.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/forgotpass/forgotpass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\twidth: 413px;\r\n    height: 379px;\r\n\tmargin:50px auto;\r\n\tbackground: honeydew;\r\n\t-webkit-box-shadow: 4px 2px 11px -4px rgba(0,0,0,0.66);\r\nbox-shadow:-1px -1px 13px -5px rgba(0,0,0,0.66), 1px -1px 13px -5px rgba(0,0,0,0.66),0px 7px 13px -5px rgba(0,0,0,0.66);\r\n}\r\n.text-center{\r\n\t\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n.form-container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row wrap;\r\n\t        flex-direction: row wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\r\n\t\r\n\tposition: relative;\r\n\t/*width: 300px;\r\n\theight: 200px;\r\n\tbackground:#fff;\r\n\tmargin:50px auto;\r\n\tpadding: 30px;*/\r\n}\r\nlabel{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\ttop: -20px;\r\n\tleft: 80px;\r\n\tcolor: #999;\r\n\tfont-family: 'Helvetice', sans-serif;\r\n\tfont-size: 16px;\r\n\tz-index: 1;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\ninput{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\tborder-bottom: 1px solid #ddd;\r\n\twidth: 70%;\r\n\tfont-family:  'Helvetice', sans-serif;\r\n\tfont-weight: bold;\r\n\tfont-size: 16px;\r\n\tz-index: 2;\r\n}\r\ndiv > span{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\twidth: 20%;\r\n\ttext-align: center;\r\n}\r\ninput:focus{\r\n\toutline: none;\r\n\tborder-bottom: 1px solid #ff4081;\r\n\tcolor: c0392b;\r\n}\r\ninput:focus ~ label{\r\n\ttop: -40px;\r\n\tfont-size: 11px;\r\n\tcolor: #ff4081;\r\n}\r\ninput:focus + .fa{\r\n    color: #ff4081;\r\n}\r\n.fa{\r\n\tposition: relative;\r\n    left: -311px;\r\n}\r\n.devider{\r\n\tposition: relative;\r\n\theight: 30px;\r\n\twidth: auto;\r\n\tbackground:none;\r\n}\r\n.input-group > button{\r\n\tmargin-left: 20px;\r\n\tmargin-bottom: 40px;\r\n}\r\n.navigation{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\tborder-top:1px solid #ddd;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n\tcolor: #00a18f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/forgotpass/forgotpass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">  \n    <h2>Forgot Password?</h2> \n    <p>Reset your password from mail</p>\n  </div>\n  <div class=\"devider\"></div>\n  <form novalidate>\n  <div class=\"input-group\">\n    <span></span>\n    <input type=\"email\" name=\"\">\n    <i class=\"fa fa-user\"></i>\n    <label>Email</label>\n  </div>\n  \n  <div class=\"input-group\">\n    <button mat-raised-button color=\"accent\" type=\"submit\">Submit</button>\n    <hr>\n  </div>\n</form>\n<div class=\"devider\"></div>\n<div class=\"navigation\">\n  <a routerLink=\"/register\" >REGISTER NOW!\n</a>\n  <a routerLink=\"/login\" >Login</a>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/forgotpass/forgotpass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpassComponent = /** @class */ (function () {
    function ForgotpassComponent() {
    }
    ForgotpassComponent.prototype.ngOnInit = function () {
    };
    ForgotpassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgotpass',
            template: __webpack_require__("../../../../../src/app/forgotpass/forgotpass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/forgotpass/forgotpass.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotpassComponent);
    return ForgotpassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-blue{\r\n    background: rgb(63, 81, 181);\r\n}\r\n.navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n.nav-link {\r\n    padding-right: .5rem !important;\r\n    padding-left: .5rem !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n   <nav class=\"navbar navbar-expand-lg navbar-light bg-blue fixed-top\">\n    <a class=\"navbar-brand text-white\" routerLink=\"/login\"><i class=\"fa fa-calendar-alt\"></i></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n       \n        <li class=\"nav-item\">\n            <a class=\"nav-link text-white\" routerLink=\"/login\">AppoinnterX</a>\n        </li>            \n      </ul>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link text-white\" routerLink=\"/profile\">{{welcomemessage}}</a>\n          </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_welcome_service__ = __webpack_require__("../../../../../src/app/services/welcome.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    //userExits:boolean = true;
    function HeaderComponent(_user) {
        this._user = _user;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.currentUser.subscribe(function (user) { return _this.welcomemessage = user; });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_welcome_service__["a" /* WelcomeService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\twidth: 380px;\r\n    height: 489px;\r\n\tmargin:50px auto;\r\n\tbackground: honeydew;\r\n\t-webkit-box-shadow: 4px 2px 11px -4px rgba(0,0,0,0.66);\r\nbox-shadow:-1px -1px 13px -5px rgba(0,0,0,0.66), 1px -1px 13px -5px rgba(0,0,0,0.66),0px 7px 13px -5px rgba(0,0,0,0.66);\r\n}\r\n.img-center{\r\n\t\r\n\ttext-align: center;\r\n\tmargin-top: 10px;\r\n}\r\np{\r\n\tfont-variant: all-small-caps;\r\n\tcolor: thistle;\r\n}\r\n.form-container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row wrap;\r\n\t        flex-direction: row wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\t\r\n\tposition: relative;\r\n\t\r\n}\r\nlabel{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\ttop: -33px;\r\n\tleft: 80px;\r\n\tcolor: #999;\r\n\tfont-family: 'Helvetice', sans-serif;\r\n\tfont-size: 16px;\r\n\tz-index: 1;\r\n\t-webkit-transition: all 0.1s ease-in-out;\r\n\ttransition: all 0.1s ease-in-out;\r\n\tvisibility: hidden;\r\n}\r\ninput{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\tborder-bottom: 1px solid #ddd;\r\n\twidth: 75%;\r\n\tfont-family:  'Helvetice', sans-serif;\r\n\t\r\n\tfont-size: 16px;\r\n\tz-index: 2;\r\n}\r\ndiv > span{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\twidth: 20%;\r\n\ttext-align: center;\r\n}\r\ninput:focus{\r\n\toutline: none;\r\n\tborder-bottom: 1px solid #ff4081;\r\n\tcolor: c0392b;\r\n}\r\ninput:focus ~ label{\r\n\ttop:-50px;\r\n    left: 69px;\r\n    font-size: 15px;\r\n\tcolor: #ff4081;\r\n\tvisibility: visible;\r\n}\r\ninput:focus + .fa{\r\n    color: #ff4081;\r\n}\r\n/* input:not(valid) ~ label{\r\n\tvisibility: hidden;\r\n} */\r\n.fa{\r\n\tposition: relative;\r\n    left: -311px;\r\n}\r\n.devider{\r\n\tposition: relative;\r\n\theight: 30px;\r\n\twidth: auto;\r\n\tbackground:none;\r\n}\r\n.input-group > button{\r\n\tmargin-left: 20px;\r\n\tmargin-bottom: 40px;\r\n}\r\n.navigation{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n\tmargin-bottom: 30px;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n\tcolor: #00a18f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"img-center\">\r\n    <img src=\"../assets/images/profile_photo.png\" alt=\"images\">\r\n    <p>APPOINTMENT MANAGER</p>\r\n  </div>\r\n  <div class=\"devider\"></div>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUserForm()\" novalidate>\r\n              <div class=\"input-group\">\r\n                <span></span>\r\n                <input type=\"email\" name=\"\" placeholder=\"Email\" formControlName=\"email\">\r\n                <i class=\"fa fa-user\"></i>\r\n                <label>Email</label>\r\n              </div>\r\n              <div class=\"devider\"></div>\r\n              <div class=\"input-group\">\r\n                <span></span>\r\n                <input type=\"password\" name=\"\" placeholder=\"Password\" formControlName=\"pass\">\r\n                <i class=\"fa fa-lock\"></i>\r\n                <label>Password</label>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <button mat-raised-button color=\"accent\" type=\"submit\">Login</button>\r\n                <hr>\r\n              </div>\r\n        </form>\r\n<div class=\"devider\"></div>\r\n<div class=\"navigation\">\r\n  <a routerLink=\"/register\" >REGISTER NOW!\r\n</a>\r\n  <a routerLink=\"/forgotpass\" >FORGOT PASSWORD ?</a>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_welcome_service__ = __webpack_require__("../../../../../src/app/services/welcome.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_user, _router) {
        this._user = _user;
        this._router = _router;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            pass: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.rgpatients = JSON.parse(localStorage.getItem('login'));
    };
    LoginComponent.prototype.loginUserForm = function () {
        for (var i = 0; i < this.rgpatients.length; i++) {
            if (this.loginForm.value.email == this.rgpatients[i].mail && this.loginForm.value.pass == this.rgpatients[i].pass) {
                // console.log('Welcome '+ this.rgpatients[i].fname );
                this._user.setMessage('Welcome ' + this.rgpatients[i].fname);
                this._user.setOpAvailabe(true);
                this._router.navigate(['appointments']);
                return;
            }
        }
        console.log('login fail');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_welcome_service__["a" /* WelcomeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDividerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDividerModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patient/patient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  patient works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/patient/patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientComponent = /** @class */ (function () {
    function PatientComponent() {
    }
    PatientComponent.prototype.ngOnInit = function () {
    };
    PatientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient',
            template: __webpack_require__("../../../../../src/app/patient/patient.component.html"),
            styles: [__webpack_require__("../../../../../src/app/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "../../../../../src/app/physician/physician.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/physician/physician.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  physician works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/physician/physician.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicianComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhysicianComponent = /** @class */ (function () {
    function PhysicianComponent() {
    }
    PhysicianComponent.prototype.ngOnInit = function () {
    };
    PhysicianComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-physician',
            template: __webpack_require__("../../../../../src/app/physician/physician.component.html"),
            styles: [__webpack_require__("../../../../../src/app/physician/physician.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhysicianComponent);
    return PhysicianComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\twidth: 510px;\r\n    height: auto;\r\n\tmargin:50px auto;\r\n\tbackground: honeydew;\r\n\t-webkit-box-shadow: 4px 2px 11px -4px rgba(0,0,0,0.66);\r\nbox-shadow:-1px -1px 13px -5px rgba(0,0,0,0.66), 1px -1px 13px -5px rgba(0,0,0,0.66),0px 7px 13px -5px rgba(0,0,0,0.66);\r\n}\r\n.form-title{\r\n\t\r\n\ttext-align: center;\r\n\tmargin-top: 36px;\r\n\tfont-size: 24px;\r\n}\r\n.form-container{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient:vertical;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:column;\r\n\t        flex-direction:column;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\t\r\n\t\r\n}\r\n.input-continer{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tpadding-left:40px; \r\n\t-webkit-box-orient: horizontal; \r\n\t-webkit-box-direction: normal; \r\n\t    -ms-flex-direction: row wrap; \r\n\t        flex-direction: row wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\tposition: relative;\t\r\n}\r\nlabel{\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\ttop:-25px;\r\n    left: 5px;\r\n\tcolor: #999;\r\n\tfont-family: 'Helvetice', sans-serif;\r\n\tfont-size: 16px;\r\n\tz-index: 1;\r\n\t-webkit-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n\tvisibility: hidden;\r\n}\r\ninput{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\tborder-bottom: 1px solid #ddd;\r\n\twidth: 80%;\r\n\tfont-family:  'Helvetice', sans-serif;\r\n\tfont-size: 16px;\r\n\tz-index: 2;\r\n}\r\ndiv > span{\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tbackground:none;\r\n\tborder:none;\r\n\twidth: 20%;\r\n\ttext-align: center;\r\n}\r\ninput:focus{\r\n\toutline: none;\r\n\tborder-bottom: 1px solid #ff4081;\r\n\tcolor: c0392b;\r\n}\r\ninput:focus ~ label{\r\n\ttop: -40px;\r\n\tfont-size: 11px;\r\n\tcolor: #ff4081;\r\n\tvisibility: visible;\r\n}\r\ninput:focus + .fa{\r\n    color: #ff4081;\r\n}\r\n.fa{\r\n\tposition: relative;\r\n    left:-217px;\r\n    \r\n    font-size: 20px;\r\n    font-style: italic;\r\n}\r\n.devider{\r\n\tposition: relative;\r\n\theight: 30px;\r\n\twidth: auto;\r\n\tbackground:none;\r\n}\r\n.input-group > button{\r\n\tmargin-left: 20px;\r\n\tmargin-bottom: 40px;\r\n}\r\n.navigation{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row wrap;\r\n\t        flex-direction: row wrap;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tborder-top: 1px solid #ddd;\r\n\tpadding: 15px;\r\n}\r\na{\r\n\ttext-decoration: none;\r\n\tcolor: #f9b220;\r\n}\r\n/* select option*/\r\n.mat-form-field{\r\n\t width: 90%;\r\n    padding-left: 39px;\r\n}\r\n.mat-form-field label{\r\n\ttop:-7px;\r\n}\r\n.mat-option{\r\n\tcolor: #ff4081;\r\n}\r\n.mat-form-field span{\r\n\tleft: -30px;\r\n    top: -23px;\r\n}\r\n.ng-star-inserted{\r\n\tcolor: #ff4081;\r\n}\r\n/*\r\n.mat-form-field-underline:checked{\r\n\tcolor: #ff4081;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form-title\">\n    <p>Join Now</p>\n  </div>\n  <div class=\"devider\"></div>\n  <form class=\"form-container\" [formGroup]='registerForm' (ngSubmit)=\"registerFormDetails()\" novalidate>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"First Name\" formControlName=\"fname\"> \n                <span class=\"fa fa-pencil-alt\"></span>\n                <label>FirstName*</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"Last Name\" formControlName=\"lname\">           \n                  <span class=\"fa fa-pencil-alt\"></span>\n                  <label>LastName*</label>               \n              </div>\n      </div>\n      <div class=\"devider\"></div>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"email\" name=\"\" placeholder=\"Email\" formControlName=\"email\">\n                <span class=\"fa fa-user\"></span>\n                <label>Email*</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"password\" name=\"\" placeholder=\"Password\" formControlName=\"pass\">           \n                  <span class=\"fa fa-lock\"></span>\n                  <label>PassWord*</label>               \n              </div>\n          </div>\n      \n        <mat-form-field class=\"input-group\">\n          <label>Select role*</label>\n            <mat-select [(value)]=\"selected\" placeholder=\"Select Role\" formControlName=\"role\">\n               <mat-option [disabled]=\"true\" style=\"color:#ddd \">Select you profile</mat-option>\n              <mat-option value=\"patient\">Patient</mat-option>\n              <mat-option value=\"physician\" >Physician</mat-option>              \n            </mat-select>\n            <span class=\"fa fa-pencil-alt\"></span>\n          </mat-form-field>\n      \n      \n      <div class=\"devider\" *ngIf=\" selected === 'physician' \"></div>\n      <div class=\"physician\" *ngIf=\" selected === 'physician' \">\n        \n      <div class=\"devider\"></div>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"NPI\" formControlName=\"npi\">\n                <span class=\"fa fa-pencil-alt\"></span>\n                <label>NPI*</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"Location\" formControlName=\"location\">           \n                  <span class=\"fa fa-pencil-alt\"></span>\n                  <label>Location*</label>               \n              </div>\n      </div>\n       <div class=\"devider\"></div>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"Address1\" formControlName=\"add1\">\n                <span class=\"fa fa-pencil-alt\"></span>\n                <label>Address1</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"Address2\" formControlName=\"add2\">           \n                  <span class=\"fa fa-pencil-alt\"></span>\n                  <label>Address2*</label>               \n              </div>\n      </div>\n      <div class=\"devider\"></div>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"City\" formControlName=\"city\">\n                <span class=\"fa fa-pencil-alt\"></span>\n                <label>city</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"PinCode\" formControlName=\"pincode\">           \n                  <span class=\"fa fa-pencil-alt\"></span>\n                  <label>PinCode*</label>               \n              </div>\n      </div>\n       <div class=\"devider\"></div>\n      <div class=\"input-continer\">\n            <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"State\" formControlName=\"state\">\n                <span class=\"fa fa-pencil-alt\"></span>\n                <label>State</label>\n              </div>\n              \n              <div class=\"input-group\">                \n                <input type=\"text\" name=\"\" placeholder=\"Country\" formControlName=\"country\">           \n                  <span class=\"fa fa-pencil-alt\"></span>\n                  <label>Country</label>               \n              </div>\n      </div>\n      </div>\n      <div class=\"devider\"></div>\n      <div class=\"input-group\">\n        <button mat-raised-button color=\"accent\" type=\"submit\">Sign Up</button>\n      </div>\n</form>\n<div class=\"navigation\">\n  <p>Already have an account?</p><a routerLink=\"/login\">Login</a>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* unused harmony export Patient */
/* unused harmony export Physician */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.selected = "Physician";
        this.localStorageObject = [];
        this.userArray = [];
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            lname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            pass: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            role: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            npi: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            add1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            add2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            pincode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userObject = {
            fname: 'admin',
            lname: 'admin',
            mail: 'admin@gmail.com',
            pass: 'admin'
        };
        this.userArray.push(this.userObject);
        localStorage.setItem('login', JSON.stringify(this.userArray));
        if (JSON.parse(localStorage.getItem('login')) != null) {
            this.localStorageObject = JSON.parse(localStorage.getItem('login'));
        }
    };
    RegisterComponent.prototype.registerFormDetails = function () {
        if (this.registerForm.value.role === 'patient' || this.registerForm.value.role === 'physician') {
            console.log(JSON.parse(localStorage.getItem('login')));
            if (JSON.parse(localStorage.getItem('login')) != null) {
                for (var i = 0; i < this.localStorageObject.length; i++) {
                    if (this.registerForm.value.email != this.localStorageObject[i].email) {
                        this.userObject = {
                            fname: this.registerForm.value.fname,
                            lname: this.registerForm.value.lname,
                            mail: this.registerForm.value.email,
                            pass: this.registerForm.value.pass
                        };
                        this.userArray.push(this.userObject);
                        localStorage.setItem('login', JSON.stringify(this.userArray));
                        return;
                    }
                }
                console.log("User email or password already exits");
            }
        }
        else {
            console.log('please select any one role');
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());

var Patient = /** @class */ (function () {
    function Patient() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = 0;
        this.profilerole = '';
    }
    return Patient;
}());

var Physician = /** @class */ (function (_super) {
    __extends(Physician, _super);
    function Physician() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nip = '';
        _this.location = '';
        _this.address1 = '';
        _this.address2 = '';
        _this.city = '';
        _this.pincode = '';
        _this.state = '';
        _this.country = '';
        return _this;
    }
    return Physician;
}(Patient));



/***/ }),

/***/ "../../../../../src/app/services/welcome.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeService = /** @class */ (function () {
    function WelcomeService() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.currentUser = this.user.asObservable();
        this.op = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.opAvailable = this.op.asObservable();
    }
    WelcomeService.prototype.setMessage = function (name) {
        this.user.next(name);
    };
    WelcomeService.prototype.getMessage = function () {
        return this.currentUser;
    };
    WelcomeService.prototype.setOpAvailabe = function (b) {
        this.op.next(b);
    };
    WelcomeService.prototype.getOpAvailable = function () {
        return this.opAvailable;
    };
    WelcomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WelcomeService);
    return WelcomeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map