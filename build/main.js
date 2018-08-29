webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Task */
/* unused harmony export getRandomPositionInMoscow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasks; });
var Task = /** @class */ (function () {
    function Task() {
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
var tasks = [];
//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_tasks__ = __webpack_require__(101);
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
    function TabsPage(http) {
        this.http = http;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tasks = __WEBPACK_IMPORTED_MODULE_4__app_tasks__["a" /* tasks */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="New" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Tasks" tabIcon="calendar" [tabBadge]="tasks[0]"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tasks__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_inspectors__ = __webpack_require__(278);
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
    function AboutPage(http, toastCtrl, navCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.tasks = [];
        this.inspectors = [];
        this.timeToCut = 600;
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        this.getTasks();
        this.getInspectors();
    };
    AboutPage.prototype.getTasks = function () {
        var _this = this;
        this.http.get("https://nwavetest.herokuapp.com/getalltasks").subscribe(function (data) {
            _this.tasks = data.tasks;
            __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */][0] = data.tasks.length;
        });
    };
    AboutPage.prototype.getInspectors = function () {
        var _this = this;
        this.http.get("https://nwavetest.herokuapp.com/getallinspectors").subscribe(function (data) {
            _this.inspectors = data.inspectors;
        });
    };
    AboutPage.prototype.addInspector = function () {
        var _this = this;
        this.http.post("https://nwavetest.herokuapp.com/newinspector", {
            position: Object(__WEBPACK_IMPORTED_MODULE_4__app_inspectors__["a" /* getRandomPositionInMoscow */])()
        }).subscribe(function (data) {
            _this.getTasks();
            _this.getInspectors();
        });
        // const id = this.inspectors.length + 1;
        // const inspectorsArray = inspectors.concat();
        // inspectorsArray.sort((a,b) => b.tasks.length - a.tasks.length);
        // let rem = [];
        //
        // if (inspectorsArray[0].tasks.length > 1) {
        //   rem = inspectorsArray[0].tasks.splice(-1,1);
        // }
        //
        // this.inspectors.push(new Inspector(id, `Controller #${id}`, getRandomPositionInMoscow(), rem, {}));
    };
    AboutPage.prototype.removeInspector = function () {
        var _this = this;
        var removed = this.inspectors.splice(-1, 1)[0];
        this.http.post("https://nwavetest.herokuapp.com/deleteinspector", {
            id: removed._id
        }).subscribe(function (data) {
            _this.getTasks();
            _this.getInspectors();
        });
        // if (this.inspectors.length === 1) {
        //   this.toastCtrl.create({
        //     message: 'You can\'t remove all controllers',
        //     duration: 3000,
        //     position: 'top'
        //   }).present();
        //   return false;
        // }
        //
        // const removed = this.inspectors.splice(-1,1)[0];
        //
        // if (!removed.tasks.length) {
        //   return false;
        // }
        //
        // inspectors.sort((a,b) => a.tasks.length - b.tasks.length);
        //
        // inspectors[0].tasks = inspectors[0].tasks.concat(removed.tasks);
    };
    AboutPage.prototype.remove10Minuts = function () {
        var _this = this;
        this.http.get("https://nwavetest.herokuapp.com/time").subscribe(function (data) {
            _this.getTasks();
            _this.getInspectors();
        });
    };
    AboutPage.prototype.getTaskById = function (id) {
        return this.tasks.find(function (task) { return task._id === id; }) || {};
    };
    AboutPage.prototype.identify = function (index, item) {
        return item.id_ins;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Tasks\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment style="width: 270px">\n    <span padding-right>Controllers number</span>\n    <button ion-button (click)="removeInspector()">-</button>\n    <ion-input type="number" value="{{inspectors.length}}" class="center"></ion-input>\n    <button ion-button (click)="addInspector()">+</button>\n  </ion-segment>\n\n  <h1>Tasks allocation</h1>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-10>\n        <button ion-button color="darkturquoise" (click)="remove10Minuts()">+10 min</button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor="let inspector of inspectors; trackBy: identify">\n      <ion-col col-2 class="inspector-list">{{inspector.name}} #{{inspector.id_ins}}</ion-col>\n      <ion-col col-10 class="task-list">\n        <div *ngFor="let task of inspector.tasks" class="task-list_current" [ngStyle]="{\'width\': task.time/10 + \'px\'}" [ngClass]="{\'one-element\': inspector.tasks.length === 1}">\n          #{{getTaskById(task.id).id_task}}\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _c || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tasks__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
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
    // private directionsService = new google.maps.DirectionsService();
    // private const directionsDisplay: Object = new google.maps.DirectionsRenderer();
    function HomePage(loadingCtrl, http, toastCtrl, navCtrl, geolocation) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.tasks = __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */];
        this.inspectors = [];
        this.inspectorPoints = [];
        this.inspectorsWays = [];
    }
    HomePage.prototype.getInspectors = function () {
        var _this = this;
        this.http.get("https://nwavetest.herokuapp.com/getallinspectors").subscribe(function (data) {
            console.log(data);
            _this.inspectors = data.inspectors;
            _this.deleteInspectors();
            _this.showInspectors();
        });
    };
    HomePage.prototype.getTasks = function () {
        this.http.get("https://nwavetest.herokuapp.com/getalltasks").subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_3__app_tasks__["a" /* tasks */][0] = data.tasks.length;
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.getInspectors();
        this.getTasks();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getInspectors();
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
            zoom: 14,
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
        // this.showInspectors();
        // }, (err) => {
        //   console.log(err);
        // });
    };
    HomePage.prototype.newTask = function () {
        var _this = this;
        if (!this.currentPosition) {
            return false;
        }
        if (!this.inspectors.length) {
            this.toastCtrl.create({
                message: 'Please, add first controller',
                duration: 3000,
                position: 'top'
            }).present();
            return false;
        }
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
        this.http.post("https://nwavetest.herokuapp.com/newtask", {
            position: this.currentPosition
        }).subscribe(function (data) {
            _this.getTasks();
            _this.loader.dismiss();
            _this.toastCtrl.create({
                message: 'Task was added successfully',
                duration: 3000,
                position: 'top'
            }).present();
        });
        // if (this.currentPosition === this.tasks[tasks.length - 1].position) {
        //   this.toastCtrl.create({
        //     message: 'This task was added already',
        //     duration: 3000,
        //     position: 'top'
        //   }).present();
        //   return false;
        // }
        // this.inspectorsWays = [];
        //
        // for (const inspector of inspectors) {
        //   let lastPosition = inspector.position;
        //
        //   if (inspector.tasks.length > 0) {
        //     lastPosition = inspector.tasks[inspector.tasks.length - 1].position;
        //   }
        //
        //   const request = {
        //     origin: lastPosition,
        //     destination: this.currentPosition,
        //     provideRouteAlternatives: false,
        //     travelMode: 'WALKING',
        //     drivingOptions: {
        //       departureTime: new Date()
        //     },
        //     unitSystem: google.maps.UnitSystem.IMPERIAL
        //   };
        //
        //   this.directionsService.route(request, (result, status) => {
        //     console.log(status);
        //     if (status !== 'OK') {
        //       return false;
        //     }
        //
        //     result.inspectorId = inspector.id;
        //     this.inspectorsWays.push(result);
        //
        //     inspector.data.possibleWay = result;
        //     inspector.data.possibleTime = inspector.tasks.reduce((p,c) => {
        //       return p + c.time || 0;
        //     }, inspector.data.possibleWay.routes[0].legs[0].duration.value);
        //
        //     if (this.inspectorsWays.length === inspectors.length) {
        //       this.findBestWay();
        //     }
        //   });
        // }
    };
    // findBestWay() {
    //   this.inspectorsWays.sort((a,b) => a.routes[0].legs[0].duration.value - b.routes[0].legs[0].duration.value);
    //   inspectors.sort((a,b) => a.data.possibleTime - b.data.possibleTime);
    //
    //   const newTaskData = {
    //     id: tasks.length + 1,
    //     position: this.currentPosition,
    //     time: inspectors[0].data.possibleWay.routes[0].legs[0].duration.value + 300, // 5 min = 300s
    //     done: false
    //   };
    //
    //   tasks.push(newTaskData);
    //
    //   inspectors[0].tasks.push(newTaskData);
    //
    //   this.toastCtrl.create({
    //     message: 'Task was added successfully',
    //     duration: 3000,
    //     position: 'top'
    //   }).present();
    //
    //   // this.directionsDisplay.setDirections(inspectors[0].possibleWay);
    // }
    HomePage.prototype.showInspectors = function () {
        for (var _i = 0, _a = this.inspectors; _i < _a.length; _i++) {
            var inspector = _a[_i];
            var position = inspector.position;
            inspector.position = position;
            var point = new google.maps.Marker({
                map: this.map,
                position: position,
                title: '#' + inspector.id_ins,
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mint/work/nwaveTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Add task</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-start (click)="newTask()">\n        <ion-icon name="add"></ion-icon>\n        New task\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/home/mint/work/nwaveTest/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(201);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Inspector */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRandomPositionInMoscow; });
/* unused harmony export inspectors */
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

/***/ })

},[202]);
//# sourceMappingURL=main.js.map