webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Task */
/* unused harmony export getRandomPositionInMoscow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasks; });
var Task = /** @class */ (function () {
    function Task(id, position, time, done) {
        this.id = id;
        this.position = position;
        this.time = time;
        this.done = done;
    }
    return Task;
}());

var getRandomPositionInMoscow = function () {
    // Garden ring area
    var x1 = 55.769646564537965;
    var x4 = 55.736511311407995;
    var y1 = 37.59708126362102;
    var y4 = 37.645146449167896;
    var n1 = Math.random() * (x4 - x1) + x1;
    var n2 = Math.random() * (y4 - y1) + y1;
    return new google.maps.LatLng(n1, n2);
};
var tasks = [
    { id: 1, position: getRandomPositionInMoscow(), time: 1200, done: false },
    { id: 2, position: getRandomPositionInMoscow(), time: 1232, done: false },
    { id: 3, position: getRandomPositionInMoscow(), time: 2300, done: false },
];
//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tasks__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tasks = __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */];
    }
    TabsPage.prototype.getTasksInProcess = function () {
        return __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */].reduce(function (p, c) { return !c.done ? p + 1 : p; }, 0);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="New" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tasks" tabIcon="calendar" [tabBadge]="getTasksInProcess()"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_tasks__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_inspectors__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(toastCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.tasks = __WEBPACK_IMPORTED_MODULE_2__app_tasks__["a" /* tasks */];
        this.inspectors = __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */];
        this.timeToCut = 600;
    }
    AboutPage.prototype.addInspector = function () {
        var id = this.inspectors.length + 1;
        __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */].sort(function (a, b) { return b.tasks.length - a.tasks.length; });
        var rem = [];
        if (__WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */][0].tasks.length > 1) {
            rem = __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */][0].tasks.splice(-1, 1);
        }
        this.inspectors.push(new __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["a" /* Inspector */](id, "Controller #" + id, Object(__WEBPACK_IMPORTED_MODULE_3__app_inspectors__["b" /* getRandomPositionInMoscow */])(), rem, {}));
    };
    AboutPage.prototype.removeInspector = function () {
        if (this.inspectors.length === 1) {
            this.toastCtrl.create({
                message: 'You can\'t remove all controllers',
                duration: 3000,
                position: 'top'
            }).present();
            return false;
        }
        var removed = this.inspectors.splice(-1, 1)[0];
        if (!removed.tasks.length) {
            return false;
        }
        __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */].sort(function (a, b) { return a.tasks.length - b.tasks.length; });
        __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */][0].tasks = __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */][0].tasks.concat(removed.tasks);
    };
    AboutPage.prototype.remove10Minuts = function () {
        var time = this.timeToCut;
        var tasksDone = [];
        for (var _i = 0, tasks_1 = __WEBPACK_IMPORTED_MODULE_2__app_tasks__["a" /* tasks */]; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            time = time - task.time;
            if (time <= 0) {
                task.time = Math.abs(time);
                break;
            }
            else {
                task.done = true;
                tasksDone.push(task.id);
            }
        }
        if (!tasksDone.length) {
            return false;
        }
        for (var _a = 0, inspectors_1 = __WEBPACK_IMPORTED_MODULE_3__app_inspectors__["c" /* inspectors */]; _a < inspectors_1.length; _a++) {
            var inspector = inspectors_1[_a];
            for (var i = 0; i < inspector.tasks.length; i++) {
                for (var _b = 0, tasksDone_1 = tasksDone; _b < tasksDone_1.length; _b++) {
                    var taskDone = tasksDone_1[_b];
                    if (taskDone === inspector.tasks[i].id) {
                        inspector.tasks.splice(i, 1);
                    }
                }
            }
        }
    };
    AboutPage.prototype.getTaskById = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2__app_tasks__["a" /* tasks */].find(function (task) { return task.id === id; });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tasks\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment style="width: 270px">\n    <span padding-right>Controllers number</span>\n    <button ion-button (click)="removeInspector()">-</button>\n    <ion-input type="number" value="{{inspectors.length}}" class="center"></ion-input>\n    <button ion-button (click)="addInspector()">+</button>\n  </ion-segment>\n\n  <h1>Tasks allocation</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-10>\n        <button ion-button color="darkturquoise" (click)="remove10Minuts()">+10 min</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let inspector of inspectors">\n      <ion-col col-2 class="inspector-list">{{inspector.name}}</ion-col>\n      <ion-col col-10 class="task-list">\n        <div *ngFor="let task of inspector.tasks; let i = index" class="task-list_current" [ngStyle]="{\'width\': getTaskById(task.id).time/20 + \'px\'}">\n          #{{task.id}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inspector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRandomPositionInMoscow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return inspectors; });
var Inspector = /** @class */ (function () {
    function Inspector(id, name, position, tasks, data) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.tasks = tasks;
        this.data = data;
    }
    return Inspector;
}());

var getRandomPositionInMoscow = function () {
    // Garden ring area
    var x1 = 55.769646564537965;
    var x4 = 55.736511311407995;
    var y1 = 37.59708126362102;
    var y4 = 37.645146449167896;
    var n1 = Math.random() * (x4 - x1) + x1;
    var n2 = Math.random() * (y4 - y1) + y1;
    return new google.maps.LatLng(n1, n2);
};
var inspectors = [
    {
        id: 1,
        name: 'Controller #1',
        position: getRandomPositionInMoscow(),
        tasks: [
            {
                id: 1,
                time: 1000,
                position: getRandomPositionInMoscow()
            }
        ],
        data: {},
    },
    {
        id: 2,
        name: 'Controller #2',
        position: getRandomPositionInMoscow(),
        tasks: [
            {
                id: 2,
                time: 1000,
                position: getRandomPositionInMoscow()
            },
            {
                id: 3,
                time: 1000,
                position: getRandomPositionInMoscow()
            }
        ],
        data: {},
    },
];
//# sourceMappingURL=inspectors.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tasks__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_inspectors__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    // private const directionsDisplay: Object = new google.maps.DirectionsRenderer();
    function HomePage(toastCtrl, navCtrl, geolocation) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.tasks = __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */];
        this.inspectorPoints = [];
        this.inspectorsWays = [];
        this.directionsService = new google.maps.DirectionsService();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        if (!!this.inspectorPoints.length) {
            this.deleteInspectors();
            this.showInspectors();
        }
    };
    HomePage.prototype.loadMap = function () {
        // if (!this.geolocation) {
        //   return false;
        // }
        var _this = this;
        // this.geolocation.getCurrentPosition().then((position) => {
        var latLng = new google.maps.LatLng(55.75550537217034, 37.62074902110544);
        // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP
        });
        this.map.addListener('click', function (e) {
            _this.currentPosition = e.latLng;
            marker.setPosition(e.latLng);
        });
        // this.directionsDisplay.setMap(this.map);
        this.showInspectors();
        // }, (err) => {
        //   console.log(err);
        // });
    };
    HomePage.prototype.newTask = function () {
        var _this = this;
        if (!this.currentPosition) {
            return false;
        }
        if (this.currentPosition === __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */][__WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */].length - 1].position) {
            this.toastCtrl.create({
                message: 'This task was added already',
                duration: 3000,
                position: 'top'
            }).present();
            return false;
        }
        this.inspectorsWays = [];
        var _loop_1 = function (inspector) {
            var lastPosition = inspector.position;
            if (inspector.tasks.length > 0) {
                lastPosition = inspector.tasks[inspector.tasks.length - 1].position;
            }
            var request = {
                origin: lastPosition,
                destination: this_1.currentPosition,
                provideRouteAlternatives: false,
                travelMode: 'WALKING',
                drivingOptions: {
                    departureTime: new Date()
                },
                unitSystem: google.maps.UnitSystem.IMPERIAL
            };
            this_1.directionsService.route(request, function (result, status) {
                result.inspectorId = inspector.id;
                _this.inspectorsWays.push(result);
                inspector.data.possibleWay = result;
                inspector.data.possibleTime = inspector.tasks.reduce(function (p, c) {
                    return p + c.time || 0;
                }, inspector.data.possibleWay.routes[0].legs[0].duration.value);
                if (_this.inspectorsWays.length === __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */].length) {
                    _this.findBestWay();
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, inspectors_1 = __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */]; _i < inspectors_1.length; _i++) {
            var inspector = inspectors_1[_i];
            _loop_1(inspector);
        }
    };
    HomePage.prototype.findBestWay = function () {
        this.inspectorsWays.sort(function (a, b) { return a.routes[0].legs[0].duration.value - b.routes[0].legs[0].duration.value; });
        __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */].sort(function (a, b) { return a.data.possibleTime - b.data.possibleTime; });
        var newTaskData = {
            id: __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */].length + 1,
            position: this.currentPosition,
            time: __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */][0].data.possibleWay.routes[0].legs[0].duration.value + 300,
            done: false
        };
        __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */].push(newTaskData);
        __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */][0].tasks.push(newTaskData);
        this.toastCtrl.create({
            message: 'Task was added successfully',
            duration: 3000,
            position: 'top'
        }).present();
        // this.directionsDisplay.setDirections(inspectors[0].possibleWay);
    };
    HomePage.prototype.showInspectors = function () {
        for (var _i = 0, inspectors_2 = __WEBPACK_IMPORTED_MODULE_4__app_inspectors__["c" /* inspectors */]; _i < inspectors_2.length; _i++) {
            var inspector = inspectors_2[_i];
            var position = inspector.position;
            inspector.position = position;
            var point = new google.maps.Marker({
                map: this.map,
                position: position,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: '#00F',
                    fillOpacity: 0.6,
                    strokeColor: '#00A',
                    strokeOpacity: 0.9,
                    strokeWeight: 1,
                    scale: 7
                }
            });
            this.inspectorPoints.push(point);
        }
    };
    HomePage.prototype.deleteInspectors = function () {
        for (var _i = 0, _a = this.inspectorPoints; _i < _a.length; _i++) {
            var point = _a[_i];
            point.setMap(null);
        }
        this.inspectorPoints = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add task</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-start (click)="newTask()">\n        <ion-icon name="add"></ion-icon>\n        New task\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(222);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(198);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map