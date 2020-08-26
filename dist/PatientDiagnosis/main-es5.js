function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <h3>Patient Diagnosis System</h3>\n    <span class=\"example-spacer\"></span>\n    <div>\n      <a mat-button [routerLink]=\"'/observations'\"> Observations </a>\n      <a mat-button [routerLink]=\"'/patients'\"> Patients </a>\n      <a mat-button [routerLink]=\"'/statistics'\"> Statistics </a>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination-list/examination-list.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination-list/examination-list.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExaminationsExaminationListExaminationListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <table class=\"table table-hover\">\n  <tr *ngFor=\"let exam of service.list\">\n    <td (click)=\"populateForm(exam)\">{{exam.id}}-{{exam.infraction}}</td>\n    <td (click)=\"populateForm(exam)\">FistTia:{{exam.firstTia}}</td>\n    <td><button (click)=\"onDelete(exam.id)\" class=\"btn btn-sm btn-outline-danger\">X</button></td>\n  </tr>\n</table> -->\n<div class=\"m-5\">\n  <h1 class=\"mb-3\">Observations:</h1>\n  <table [hidden]=\"!showTable\" datatable [dtOptions]=\"dtOptions\" class=\"row-border hover m-5\">\n    <thead>\n      <tr>\n        <th>Observation Id</th>\n        <th>Patient Id</th>\n        <th>Atrial Fibrillation</th>\n        <th>Body weakness</th>\n        <th>First TIA</th>\n        <th>Gait disturbance</th>\n        <th>High glucose (≥15 mmol/L)</th>\n        <th>Infraction (on computed tomography)</th>\n        <th>Initial DBP</th>\n        <th>Speech difficulties</th>\n        <th>Vertigo</th>\n        <th>firstClassPrediction</th>\n        <th>secondClassPrediction</th>\n        <th>TIA occured in two weeks</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let exam of examinations\">\n        <td>{{ exam.id }}</td>\n        <td>{{ exam.patientId }}</td>\n        <td>{{ exam.atrialFibrillation }}</td>\n        <td>{{ exam.bodyWeakness }}</td>\n        <td>{{ exam.firstTia }}</td>\n        <td>{{ exam.gaitDisturb }}</td>\n        <td>{{ exam.highGlucose }}</td>\n        <td>{{ exam.infraction }}</td>\n        <td>{{ exam.initialDbp }}</td>\n        <td>{{ exam.speechDif }}</td>\n        <td>{{ exam.vertigo }}</td>\n        <td>{{ exam.firstClassPrediction }}</td>\n        <td>{{ exam.secondClassPrediction }}</td>\n        <td>{{ exam.tiaInTwoWeeksOccured }}</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Observation Id</th>\n        <th>Patient Id</th>\n        <th>Atrial Fibrillation</th>\n        <th>Body weakness</th>\n        <th>First TIA</th>\n        <th>Gait disturbance</th>\n        <th>High glucose (≥15 mmol/L)</th>\n        <th>Infraction (on computed tomography)</th>\n        <th>Initial DBP</th>\n        <th>Speech difficulties</th>\n        <th>Vertigo</th>\n        <th>firstClassPrediction</th>\n        <th>secondClassPrediction</th>\n        <th>TIA occured in two weeks</th>\n      </tr>\n    </tfoot>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination/examination.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination/examination.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExaminationsExaminationExaminationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\" class=\"m-5\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formdata.id\"/>\n  <div class=\"row\">\n    <div class=\"column\">\n      <div class=\"form-group\">\n        <label>Patient Identifier</label>\n        <input name=\"patientId\" #patientId=\"ngModel\" [(ngModel)]=\"service.formdata.patientId\" class=\"form-check-input\" type=\"number\" readonly>\n      </div>\n      <div class=\"form-group\">\n        <label>TIA occured (fill in two weeks after the TIA occurrence)</label>\n        <input name=\"tiaInTwoWeeksOccured\" #tiaInTwoWeeksOccured=\"ngModel\" [(ngModel)]=\"service.formdata.tiaInTwoWeeksOccured\" class=\"form-control\" type=\"checkbox\">\n      </div>\n    </div>\n    <div class=\"column\">\n      <div class=\"form-group\">\n        <label>firstClassPrediction</label>\n        <input name=\"firstClassPrediction\" #firstClassPrediction=\"ngModel\" [(ngModel)]=\"service.formdata.firstClassPrediction\" class=\"form-control\" type=\"number\" disabled>\n      </div>\n      <div class=\"form-group\">\n        <label>secondClassPrediction</label>\n        <input name=\"secondClassPrediction\" #secondClassPrediction=\"ngModel\" [(ngModel)]=\"service.formdata.secondClassPrediction\" class=\"form-control\" type=\"number\" disabled>\n      </div>\n    </div>\n  </div>\n  <mat-tab-group>\n    <mat-tab label=\"Examinations\">\n      <div class=\"form-group\">\n        <label>Infraction (on computed tomography)</label>\n        <input name=\"infraction\" #infraction=\"ngModel\" [(ngModel)]=\"service.formdata.infraction\" class=\"form-control\" type=\"number\">\n      </div>\n      <div class=\"form-group\">\n        <label>Initial DBP</label>\n        <input name=\"initialDbp\" #initialDbp=\"ngModel\" [(ngModel)]=\"service.formdata.initialDbp\" class=\"form-control\" type=\"number\">\n      </div>\n      <div class=\"form-group\">\n        <label>Atrial Fibrillation</label>\n        <input name=\"atrialFibrillation\" #atrialFibrillation=\"ngModel\" [(ngModel)]=\"service.formdata.atrialFibrillation\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n    </mat-tab>\n    <mat-tab label=\"First interview with a patient\">\n      <div class=\"form-group\">\n        <label>Speech difficulties</label>\n        <input name=\"speechDif\" #speechDif=\"ngModel\" [(ngModel)]=\"service.formdata.speechDif\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n      <div class=\"form-group\">\n        <label>Vertigo</label>\n        <input name=\"vertigo\" #vertigo=\"ngModel\" [(ngModel)]=\"service.formdata.vertigo\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n      <div class=\"form-group\">\n        <label>Body weakness</label>\n        <input name=\"bodyWeakness\" #bodyWeakness=\"ngModel\" [(ngModel)]=\"service.formdata.bodyWeakness\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n      <div class=\"form-group\">\n        <label>First TIA</label>\n        <input name=\"firstTia\" #firstTia=\"ngModel\" [(ngModel)]=\"service.formdata.firstTia\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n      <div class=\"form-group\">\n        <label>Gait disturbance</label>\n        <input name=\"gaitDisturb\" #gaitDisturb=\"ngModel\" [(ngModel)]=\"service.formdata.gaitDisturb\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n      <div class=\"form-group\">\n        <label>High glucose (≥15 mmol/L)</label>\n        <input name=\"highGlucose\" #highGlucose=\"ngModel\" [(ngModel)]=\"service.formdata.highGlucose\" class=\"form-check-input\" type=\"checkbox\">\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n  <div class=\"form-group btn-group w-100 m-5\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"backClicked()\">BACK</button>\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btnprimary\">SUBMIT</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examinations.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examinations.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExaminationsExaminationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Examination Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-examination>\n\n      </app-examination>\n    </div>\n    <div class=\"col-md-5\">\n      <app-examination-list>\n\n      </app-examination-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>menu works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientsPatientListPatientListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <table class=\"table table-hover\">\n  <tr *ngFor=\"let exam of service.list\">\n    <td (click)=\"populateForm(exam)\">{{exam.id}}-{{exam.infraction}}</td>\n    <td (click)=\"populateForm(exam)\">FistTia:{{exam.firstTia}}</td>\n    <td><button (click)=\"onDelete(exam.id)\" class=\"btn btn-sm btn-outline-danger\">X</button></td>\n  </tr>\n</table> -->\n<app-patient *ngIf=\"editPatient\" (backClick)=\"toogleEditPatient()\" (patientAdded)=\"onPatientAdded($event)\" (patientUpdated)=\"onPatientUpdated($event)\" [patientId]=\"selectedPatientId\">\n</app-patient>\n<app-examination *ngIf=\"editPatientExamination\" (backClick)=\"toogleEditPatientExaminations()\"[examination]=\"selectedPatientExamination\" [patientId]=\"selectedPatientId\">\n</app-examination>\n<div class=\"m-5\" *ngIf=\"!editPatientExamination && !editPatient\">\n  <div class=\"w-100 m-5\">\n    <h1 class=\"mb-3 d-inline-block w-50\">Patients:</h1>\n    <button class=\"d-inline-block w-50 btn btn-info\" (click)=\"showPatient()\">Add new patient</button>\n  </div>\n  <table [hidden]=\"!showTable\" datatable [dtOptions]=\"dtOptions\" class=\"row-border hover m-5\">\n    <thead>\n      <tr>\n        <th>Patient Id</th>\n        <th>Surname</th>\n        <th>Age</th>\n        <th>Observations</th>\n        <th>Edit Patient</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let patient of patients\">\n        <td>{{ patient.id }}</td>\n        <td>{{ patient.surname }}</td>\n        <td>{{ patient.age }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"showPatientExaminations(patient)\">Observations</button>\n        </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"showPatient(patient)\">Edit</button>\n        </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th>Patient Id</th>\n        <th>Surname</th>\n        <th>Age</th>\n        <th>Observations</th>\n        <th>Edit Patient</th>\n      </tr>\n    </tfoot>\n    </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientsPatientPatientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #form=\"ngForm\" (submit)=\"onSubmit(form)\" autocomplete=\"off\" class=\"m-5\">\n  <input type=\"hidden\" name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formdata.id\"/>\n  <div class=\"form-group\" [hidden]=\"service.formdata.id! == null\">\n    <label>Patient Id</label>\n    <input name=\"id\" #id=\"ngModel\" [(ngModel)]=\"service.formdata.id\" class=\"form-check-input\" type=\"number\" readonly>\n  </div>\n  <div class=\"form-group\">\n    <label>Surname</label>\n    <input name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"service.formdata.surname\" class=\"form-check-input\" type=\"text\">\n  </div>\n  <div class=\"form-group\">\n    <label>Age</label>\n    <input name=\"age\" #age=\"ngModel\" [(ngModel)]=\"service.formdata.age\" class=\"form-check-input\" type=\"number\">\n  </div>\n  <div class=\"form-group btn-group w-100 m-5\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"backClicked()\">BACK</button>\n    <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btnprimary\">SUBMIT</button>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPatientsPatientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h1 class=\"display-4 text-center\">Patient Register</h1>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-md-5\">\n      <app-patient>\n\n      </app-patient>\n    </div>\n    <div class=\"col-md-5\">\n      <app-patient-list>\n\n      </app-patient-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStatisticsStatisticsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m-5 w-100\">\n  <div class=\"w-25 d-inline-block mx-5 align-top\">\n    <h2>FirstClassPrediction frequency:</h2>\n    <ngx-charts-pie-chart [results]=\"predictionsFrequency\" [labels]=\"true\" [legend]=\"true\" [gradient]=\"true\">\n    </ngx-charts-pie-chart>\n  </div>\n  <div class=\"w-25 d-inline-block mx-5 align-top\">\n    <h2>Age frequency:</h2>\n    <ngx-charts-bar-vertical [results]=\"ageFrequency\" [gradient]=\"true\" [xAxis]=\"true\" [yAxis]=\"true\" [xAxisLabel]=\"'Ages range'\" [showXAxisLabel]=\"true\" [showYAxisLabel]=\"true\" [yAxisLabel]=\"'Frequency'\">\n    </ngx-charts-bar-vertical>\n  </div>\n  <div class=\"w-30 d-inline-block mx-5 align-top\">\n    <h2>Tia occured frequency:</h2>\n    <ngx-charts-pie-grid [results]=\"tiaOccuredFrequency\">\n    </ngx-charts-pie-grid>\n  </div>\n  <div class=\"w-50 d-inline-block p-5\" style=\"max-height: 250px;\">\n    <h2>Observations ratio - TIA occured:</h2>\n    <ngx-charts-bar-horizontal [results]=\"observationsRatioTiaOccured\" [gradient]=\"true\" [xScaleMax]=1 [showDataLabel]=\"true\" [xAxis]=\"true\" [yAxis]=\"true\" [yAxisLabel]=\"'Observations'\" [showYAxisLabel]=\"true\" [xAxisLabel]=\"'Ratio'\" [showXAxisLabel]=\"true\">\n    </ngx-charts-bar-horizontal>\n  </div>\n  <div class=\"w-50 d-inline-block p-5\" style=\"max-height: 250px;\">\n    <h2>Observations ratio - TIA not occured:</h2>\n    <ngx-charts-bar-horizontal [results]=\"observationsRatioTiaNotOccured\" [gradient]=\"true\" [xScaleMax]=1 [showDataLabel]=\"true\" [xAxis]=\"true\" [yAxis]=\"true\" [yAxisLabel]=\"'Observations'\" [showYAxisLabel]=\"true\" [xAxisLabel]=\"'Ratio'\" [showXAxisLabel]=\"true\">\n    </ngx-charts-bar-horizontal>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_examinations_examination_list_examination_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/examinations/examination-list/examination-list.component */
    "./src/app/examinations/examination-list/examination-list.component.ts");
    /* harmony import */


    var src_app_patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/patients/patient-list/patient-list.component */
    "./src/app/patients/patient-list/patient-list.component.ts");
    /* harmony import */


    var src_app_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/statistics/statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _service_examinations_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/examinations-resolver.service */
    "./src/app/service/examinations-resolver.service.ts");
    /* harmony import */


    var _service_patients_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/patients-resolver.service */
    "./src/app/service/patients-resolver.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'patients',
      pathMatch: 'full'
    }, {
      path: 'observations',
      component: src_app_examinations_examination_list_examination_list_component__WEBPACK_IMPORTED_MODULE_3__["ExaminationListComponent"],
      resolve: {
        examinations: _service_examinations_resolver_service__WEBPACK_IMPORTED_MODULE_6__["ExaminationsResolverService"]
      }
    }, {
      path: 'patients',
      component: src_app_patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_4__["PatientListComponent"],
      resolve: {
        patients: _service_patients_resolver_service__WEBPACK_IMPORTED_MODULE_7__["PatientsResolverService"]
      }
    }, {
      path: 'statistics',
      component: src_app_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PatientDiagnosis';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _examinations_examinations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./examinations/examinations.component */
    "./src/app/examinations/examinations.component.ts");
    /* harmony import */


    var _examinations_examination_examination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./examinations/examination/examination.component */
    "./src/app/examinations/examination/examination.component.ts");
    /* harmony import */


    var _examinations_examination_list_examination_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./examinations/examination-list/examination-list.component */
    "./src/app/examinations/examination-list/examination-list.component.ts");
    /* harmony import */


    var _service_examination_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./service/examination.service */
    "./src/app/service/examination.service.ts");
    /* harmony import */


    var _patients_patients_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./patients/patients.component */
    "./src/app/patients/patients.component.ts");
    /* harmony import */


    var _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./patients/patient/patient.component */
    "./src/app/patients/patient/patient.component.ts");
    /* harmony import */


    var _patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./patients/patient-list/patient-list.component */
    "./src/app/patients/patient-list/patient-list.component.ts");
    /* harmony import */


    var _service_patient_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var _service_statistics_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./service/statistics.service */
    "./src/app/service/statistics.service.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/statistics/statistics.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _examinations_examinations_component__WEBPACK_IMPORTED_MODULE_13__["ExaminationsComponent"], _examinations_examination_examination_component__WEBPACK_IMPORTED_MODULE_14__["ExaminationComponent"], _examinations_examination_list_examination_list_component__WEBPACK_IMPORTED_MODULE_15__["ExaminationListComponent"], _patients_patients_component__WEBPACK_IMPORTED_MODULE_17__["PatientsComponent"], _patients_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__["PatientComponent"], _patients_patient_list_patient_list_component__WEBPACK_IMPORTED_MODULE_19__["PatientListComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_22__["MenuComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_23__["StatisticsComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_9__["NgxChartsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]],
      providers: [_service_examination_service__WEBPACK_IMPORTED_MODULE_16__["ExaminationService"], _service_patient_service__WEBPACK_IMPORTED_MODULE_20__["PatientService"], _service_statistics_service__WEBPACK_IMPORTED_MODULE_21__["StatisticsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/examinations/examination-list/examination-list.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/examinations/examination-list/examination-list.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExaminationsExaminationListExaminationListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1pbmF0aW9ucy9leGFtaW5hdGlvbi1saXN0L2V4YW1pbmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/examinations/examination-list/examination-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/examinations/examination-list/examination-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ExaminationListComponent */

  /***/
  function srcAppExaminationsExaminationListExaminationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationListComponent", function () {
      return ExaminationListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/examination.service */
    "./src/app/service/examination.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ExaminationListComponent =
    /*#__PURE__*/
    function () {
      function ExaminationListComponent(service, toastr, activatedRoute) {
        _classCallCheck(this, ExaminationListComponent);

        this.service = service;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.dtOptions = {};
      }

      _createClass(ExaminationListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.data.subscribe(function (data) {
            return _this.examinations = data.examinations;
          });
          this.showTable = false;
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            deferRender: true,
            initComplete: function initComplete(settings, json) {
              _this.showTable = true;
            }
          };
        }
      }, {
        key: "populateForm",
        value: function populateForm(exam) {
          this.service.formdata = Object.assign({}, exam);
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          var _this2 = this;

          this.service.getPatients().subscribe(function (data) {
            return _this2.examinations = data;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this3 = this;

          if (confirm('Are you sure to delete this record?')) {
            this.service.deleteExamination(id).subscribe(function (res) {
              _this3.refreshList();

              _this3.toastr.warning('Deleted successfully', 'EXAM deleted');
            });
          }
        }
      }]);

      return ExaminationListComponent;
    }();

    ExaminationListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_2__["ExaminationService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    ExaminationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-examination-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examination-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination-list/examination-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examination-list.component.css */
      "./src/app/examinations/examination-list/examination-list.component.css")).default]
    })], ExaminationListComponent);
    /***/
  },

  /***/
  "./src/app/examinations/examination/examination.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/examinations/examination/examination.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExaminationsExaminationExaminationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input{\r\n  margin-top: 5px;\r\n  margin-left: 15px;\r\n}\r\n\r\nlabel {\r\n  margin-top: 5px;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.column {\r\n  float: left;\r\n  width: 50%;\r\n  padding: 10px;\r\n  height: 300px;\r\n}\r\n\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbWluYXRpb25zL2V4YW1pbmF0aW9uL2V4YW1pbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZXhhbWluYXRpb25zL2V4YW1pbmF0aW9uL2V4YW1pbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/examinations/examination/examination.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/examinations/examination/examination.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ExaminationComponent */

  /***/
  function srcAppExaminationsExaminationExaminationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationComponent", function () {
      return ExaminationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/examination.service */
    "./src/app/service/examination.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @aspnet/signalr */
    "./node_modules/@aspnet/signalr/dist/esm/index.js");

    var ExaminationComponent =
    /*#__PURE__*/
    function () {
      function ExaminationComponent(service, toastr) {
        _classCallCheck(this, ExaminationComponent);

        this.service = service;
        this.toastr = toastr;
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ExaminationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.formdata = {
            id: null,
            patientId: this.patientId,
            atrialFibrillation: false,
            bodyWeakness: false,
            firstTia: false,
            gaitDisturb: false,
            highGlucose: false,
            infraction: 0,
            initialDbp: 0,
            speechDif: false,
            vertigo: false,
            firstClassPrediction: 0,
            secondClassPrediction: 0,
            tiaInTwoWeeksOccured: false
          };
          this.resetForm();
          this.startSignalRConnection();
          this.addPredictionListener();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          var _this4 = this;

          if (form != null) {
            form.resetForm();
          }

          if (this.examination == null) {
            this.service.formdata = {
              id: null,
              patientId: null,
              atrialFibrillation: false,
              bodyWeakness: false,
              firstTia: false,
              gaitDisturb: false,
              highGlucose: false,
              infraction: 0,
              initialDbp: 0,
              speechDif: false,
              vertigo: false,
              firstClassPrediction: 0,
              secondClassPrediction: 0,
              tiaInTwoWeeksOccured: false
            };
          } else {
            this.examination.subscribe(function (res) {
              return _this4.service.formdata = res;
            });
          }
        }
      }, {
        key: "startSignalRConnection",
        value: function startSignalRConnection() {
          this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]().withUrl('https://localhost:44319/predictions').build();
          this.hubConnection.start().then(function () {
            return console.log('Connection started');
          }).catch(function (err) {
            return console.log('Error while starting connection: ' + err);
          });
        }
      }, {
        key: "addPredictionListener",
        value: function addPredictionListener() {
          var _this5 = this;

          this.hubConnection.on('prediction', function (prediction) {
            var predictionObject = JSON.parse(prediction);
            _this5.service.formdata.firstClassPrediction = predictionObject.FirstClassPrediction.toFixed(2);
            _this5.service.formdata.secondClassPrediction = predictionObject.SecondClassPrediction.toFixed(2);
            console.log(predictionObject);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          console.log(form.value);

          if (form.value.id == null) {
            delete form.value.id;
            this.insertRecord(form);
          } else {
            this.updateRecord(form);
          } // this.resetForm(form);


          this.service.refreshList();
        }
      }, {
        key: "insertRecord",
        value: function insertRecord(form) {
          var _this6 = this;

          this.service.postExamination(form.value).subscribe(function (res) {
            _this6.toastr.success('Inserted successfully', 'EXAM register');
          });
        }
      }, {
        key: "updateRecord",
        value: function updateRecord(form) {
          var _this7 = this;

          this.service.putExamination(form.value).subscribe(function (res) {
            _this7.toastr.success('Updated successfully', 'EXAM updated');
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.backClick.emit(null);
        }
      }]);

      return ExaminationComponent;
    }();

    ExaminationComponent.ctorParameters = function () {
      return [{
        type: src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_2__["ExaminationService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ExaminationComponent.prototype, "examination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ExaminationComponent.prototype, "patientId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ExaminationComponent.prototype, "backClick", void 0);
    ExaminationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-examination',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examination.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examination/examination.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examination.component.css */
      "./src/app/examinations/examination/examination.component.css")).default]
    })], ExaminationComponent);
    /***/
  },

  /***/
  "./src/app/examinations/examinations.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/examinations/examinations.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExaminationsExaminationsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1pbmF0aW9ucy9leGFtaW5hdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/examinations/examinations.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/examinations/examinations.component.ts ***!
    \********************************************************/

  /*! exports provided: ExaminationsComponent */

  /***/
  function srcAppExaminationsExaminationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationsComponent", function () {
      return ExaminationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExaminationsComponent =
    /*#__PURE__*/
    function () {
      function ExaminationsComponent() {
        _classCallCheck(this, ExaminationsComponent);
      }

      _createClass(ExaminationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExaminationsComponent;
    }();

    ExaminationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-examinations',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./examinations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/examinations/examinations.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./examinations.component.css */
      "./src/app/examinations/examinations.component.css")).default]
    })], ExaminationsComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/patients/patient-list/patient-list.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/patients/patient-list/patient-list.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientsPatientListPatientListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnQtbGlzdC9wYXRpZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/patients/patient-list/patient-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/patients/patient-list/patient-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PatientListComponent */

  /***/
  function srcAppPatientsPatientListPatientListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientListComponent", function () {
      return PatientListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/examination.service */
    "./src/app/service/examination.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PatientListComponent =
    /*#__PURE__*/
    function () {
      function PatientListComponent(patientService, examinationService, toastr, activatedRoute) {
        _classCallCheck(this, PatientListComponent);

        this.patientService = patientService;
        this.examinationService = examinationService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.dtOptions = {};
        this.editPatientExamination = false;
        this.editPatient = false;
        this.selectedPatientId = null;
        this.selectedPatientExamination = null;
      }

      _createClass(PatientListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.activatedRoute.data.subscribe(function (data) {
            return _this8.patients = data.patients;
          });
          this.showTable = false;
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            deferRender: true,
            initComplete: function initComplete(settings, json) {
              _this8.showTable = true;
            }
          };
        }
      }, {
        key: "populateForm",
        value: function populateForm(patient) {
          this.patientService.formdata = Object.assign({}, patient);
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this9 = this;

          if (confirm('Are you sure to delete this record?')) {
            this.patientService.deletePatient(id).subscribe(function (res) {
              _this9.refreshList();

              _this9.toastr.warning('Deleted successfully', 'PATIENT deleted');
            });
          }
        }
      }, {
        key: "toogleEditPatientExaminations",
        value: function toogleEditPatientExaminations() {
          this.editPatientExamination = this.editPatientExamination ? false : true;
        }
      }, {
        key: "toogleEditPatient",
        value: function toogleEditPatient() {
          this.editPatient = this.editPatient ? false : true;
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          var _this10 = this;

          this.patientService.getPatients().subscribe(function (data) {
            return _this10.patients = data;
          });
        }
      }, {
        key: "showPatientExaminations",
        value: function showPatientExaminations(patient) {
          this.selectedPatientId = patient.id;
          this.selectedPatientExamination = this.examinationService.getByPatient(patient.id);
          this.toogleEditPatientExaminations();
        }
      }, {
        key: "showPatient",
        value: function showPatient(patient) {
          if (patient) {
            this.selectedPatientId = patient.id;
          } else {
            this.selectedPatientId = undefined;
          }

          this.toogleEditPatient();
        }
      }, {
        key: "onPatientAdded",
        value: function onPatientAdded(patient) {
          this.refreshList();
        }
      }, {
        key: "onPatientUpdated",
        value: function onPatientUpdated(patient) {
          console.log(patient);
          var indexToUpdate = this.patients.findIndex(function (item) {
            return item.id === patient.id;
          });
          this.patients[indexToUpdate] = patient;
        }
      }]);

      return PatientListComponent;
    }();

    PatientListComponent.ctorParameters = function () {
      return [{
        type: src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_3__["ExaminationService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    PatientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient-list/patient-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient-list.component.css */
      "./src/app/patients/patient-list/patient-list.component.css")).default]
    })], PatientListComponent);
    /***/
  },

  /***/
  "./src/app/patients/patient/patient.component.css":
  /*!********************************************************!*\
    !*** ./src/app/patients/patient/patient.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientsPatientPatientComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input{\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudHMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50cy9wYXRpZW50L3BhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/patients/patient/patient.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/patients/patient/patient.component.ts ***!
    \*******************************************************/

  /*! exports provided: PatientComponent */

  /***/
  function srcAppPatientsPatientPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientComponent", function () {
      return PatientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var PatientComponent =
    /*#__PURE__*/
    function () {
      function PatientComponent(service, toastr) {
        _classCallCheck(this, PatientComponent);

        this.service = service;
        this.toastr = toastr;
        this.backClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.patientUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.patientAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.service.formdata = {
            id: null,
            surname: '',
            age: 0
          };

          if (this.patientId != undefined) {
            this.service.getPatient(this.patientId).subscribe(function (patient) {
              return _this11.service.formdata = patient;
            });
          }

          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm(form) {
          if (form != null) {
            form.resetForm();
          }

          this.service.formdata = {
            id: null,
            surname: '',
            age: 0
          };
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          if (form.value.id == null) {
            delete form.value.id;
            this.insertRecord(form);
            this.resetForm(form);
          } else {
            this.updateRecord(form);
          }

          this.service.refreshList();
        }
      }, {
        key: "insertRecord",
        value: function insertRecord(form) {
          var _this12 = this;

          this.service.postPatient(form.value).subscribe(function (res) {
            _this12.toastr.success('Inserted successfully', 'PATIENT register');

            _this12.patientAdded.emit(form.value);
          });
        }
      }, {
        key: "updateRecord",
        value: function updateRecord(form) {
          var _this13 = this;

          this.service.putPatient(form.value).subscribe(function (res) {
            _this13.toastr.success('Updated successfully', 'PATIENT updated');

            console.log(form.value);

            _this13.patientUpdated.emit(form.value);
          });
        }
      }, {
        key: "backClicked",
        value: function backClicked() {
          this.backClick.emit(null);
        }
      }]);

      return PatientComponent;
    }();

    PatientComponent.ctorParameters = function () {
      return [{
        type: src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PatientComponent.prototype, "patientId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PatientComponent.prototype, "backClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PatientComponent.prototype, "patientUpdated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PatientComponent.prototype, "patientAdded", void 0);
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patient/patient.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patient.component.css */
      "./src/app/patients/patient/patient.component.css")).default]
    })], PatientComponent);
    /***/
  },

  /***/
  "./src/app/patients/patients.component.css":
  /*!*************************************************!*\
    !*** ./src/app/patients/patients.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPatientsPatientsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/patients/patients.component.ts":
  /*!************************************************!*\
    !*** ./src/app/patients/patients.component.ts ***!
    \************************************************/

  /*! exports provided: PatientsComponent */

  /***/
  function srcAppPatientsPatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsComponent", function () {
      return PatientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatientsComponent =
    /*#__PURE__*/
    function () {
      function PatientsComponent() {
        _classCallCheck(this, PatientsComponent);
      }

      _createClass(PatientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientsComponent;
    }();

    PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./patients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./patients.component.css */
      "./src/app/patients/patients.component.css")).default]
    })], PatientsComponent);
    /***/
  },

  /***/
  "./src/app/service/examination.service.ts":
  /*!************************************************!*\
    !*** ./src/app/service/examination.service.ts ***!
    \************************************************/

  /*! exports provided: ExaminationService */

  /***/
  function srcAppServiceExaminationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationService", function () {
      return ExaminationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ExaminationService =
    /*#__PURE__*/
    function () {
      function ExaminationService(http) {
        _classCallCheck(this, ExaminationService);

        this.http = http;
        this.rootURL = 'https://0c9715e4e56f.ngrok.io/api/examinations/';
      }

      _createClass(ExaminationService, [{
        key: "getByPatient",
        value: function getByPatient(id) {
          return this.http.get(this.rootURL + 'getByPatient/' + id + '/');
        }
      }, {
        key: "postExamination",
        value: function postExamination(formData) {
          return this.http.post(this.rootURL, formData);
        }
      }, {
        key: "putExamination",
        value: function putExamination(formData) {
          return this.http.put(this.rootURL + formData.id + '/', formData);
        }
      }, {
        key: "deleteExamination",
        value: function deleteExamination(id) {
          return this.http.delete(this.rootURL + id + '/');
        }
      }, {
        key: "getPatients",
        value: function getPatients() {
          return this.http.get(this.rootURL);
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          var _this14 = this;

          this.http.get(this.rootURL).toPromise().then(function (res) {
            return _this14.list = res;
          });
        }
      }]);

      return ExaminationService;
    }();

    ExaminationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ExaminationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExaminationService);
    /***/
  },

  /***/
  "./src/app/service/examinations-resolver.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/service/examinations-resolver.service.ts ***!
    \**********************************************************/

  /*! exports provided: ExaminationsResolverService */

  /***/
  function srcAppServiceExaminationsResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExaminationsResolverService", function () {
      return ExaminationsResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _examination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./examination.service */
    "./src/app/service/examination.service.ts");

    var ExaminationsResolverService =
    /*#__PURE__*/
    function () {
      function ExaminationsResolverService(examinationsService) {
        _classCallCheck(this, ExaminationsResolverService);

        this.examinationsService = examinationsService;
      }

      _createClass(ExaminationsResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.examinationsService.getPatients();
        }
      }]);

      return ExaminationsResolverService;
    }();

    ExaminationsResolverService.ctorParameters = function () {
      return [{
        type: _examination_service__WEBPACK_IMPORTED_MODULE_2__["ExaminationService"]
      }];
    };

    ExaminationsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExaminationsResolverService);
    /***/
  },

  /***/
  "./src/app/service/patient.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/patient.service.ts ***!
    \********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicePatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
        this.rootURL = 'https://0c9715e4e56f.ngrok.io/api/patients/';
      }

      _createClass(PatientService, [{
        key: "postPatient",
        value: function postPatient(formData) {
          return this.http.post(this.rootURL, formData);
        }
      }, {
        key: "putPatient",
        value: function putPatient(formData) {
          return this.http.put(this.rootURL + formData.id + '/', formData);
        }
      }, {
        key: "deletePatient",
        value: function deletePatient(id) {
          return this.http.delete(this.rootURL + id + '/');
        }
      }, {
        key: "getPatients",
        value: function getPatients() {
          return this.http.get(this.rootURL);
        }
      }, {
        key: "getPatient",
        value: function getPatient(id) {
          return this.http.get(this.rootURL + id + '/');
        }
      }, {
        key: "refreshList",
        value: function refreshList() {
          var _this15 = this;

          this.http.get(this.rootURL).toPromise().then(function (res) {
            return _this15.list = res;
          });
        }
      }]);

      return PatientService;
    }();

    PatientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PatientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PatientService);
    /***/
  },

  /***/
  "./src/app/service/patients-resolver.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/patients-resolver.service.ts ***!
    \******************************************************/

  /*! exports provided: PatientsResolverService */

  /***/
  function srcAppServicePatientsResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientsResolverService", function () {
      return PatientsResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./patient.service */
    "./src/app/service/patient.service.ts");

    var PatientsResolverService =
    /*#__PURE__*/
    function () {
      function PatientsResolverService(patientsService) {
        _classCallCheck(this, PatientsResolverService);

        this.patientsService = patientsService;
      }

      _createClass(PatientsResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.patientsService.getPatients();
        }
      }]);

      return PatientsResolverService;
    }();

    PatientsResolverService.ctorParameters = function () {
      return [{
        type: _patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }];
    };

    PatientsResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PatientsResolverService);
    /***/
  },

  /***/
  "./src/app/service/statistics.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/statistics.service.ts ***!
    \***********************************************/

  /*! exports provided: StatisticsService */

  /***/
  function srcAppServiceStatisticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsService", function () {
      return StatisticsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/patient.service */
    "./src/app/service/patient.service.ts");
    /* harmony import */


    var src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/examination.service */
    "./src/app/service/examination.service.ts");

    var StatisticsService =
    /*#__PURE__*/
    function () {
      function StatisticsService(http, examinationService, patientService) {
        _classCallCheck(this, StatisticsService);

        this.http = http;
        this.examinationService = examinationService;
        this.patientService = patientService;
        this.rootURL = 'https://0c9715e4e56f.ngrok.io/api/statistics/';
      }

      _createClass(StatisticsService, [{
        key: "getPatients",
        value: function getPatients() {
          this.patientService.refreshList();
          return this.patientService.list;
        }
      }, {
        key: "getExaminations",
        value: function getExaminations() {
          this.examinationService.refreshList();
          return this.examinationService.list;
        }
      }, {
        key: "getPredictionsFrequency",
        value: function getPredictionsFrequency() {
          return this.http.get(this.rootURL + 'GetPredictionsFrequency');
        }
      }, {
        key: "getAgeFrequency",
        value: function getAgeFrequency() {
          return this.http.get(this.rootURL + 'GetAgeFrequency');
        }
      }, {
        key: "getTiaOccuredFrequency",
        value: function getTiaOccuredFrequency() {
          return this.http.get(this.rootURL + 'GetTiaOccuredFrequency');
        }
      }, {
        key: "GetObservationsRatioByTiaOccured",
        value: function GetObservationsRatioByTiaOccured(occured) {
          return this.http.get(this.rootURL + 'GetObservationsRatioByTiaOccured/' + occured);
        }
      }]);

      return StatisticsService;
    }();

    StatisticsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_service_examination_service__WEBPACK_IMPORTED_MODULE_4__["ExaminationService"]
      }, {
        type: src_app_service_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
      }];
    };

    StatisticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StatisticsService);
    /***/
  },

  /***/
  "./src/app/statistics/statistics.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/statistics/statistics.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStatisticsStatisticsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/statistics/statistics.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/statistics/statistics.component.ts ***!
    \****************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_statistics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/statistics.service */
    "./src/app/service/statistics.service.ts");

    var StatisticsComponent =
    /*#__PURE__*/
    function () {
      function StatisticsComponent(statisticsService) {
        _classCallCheck(this, StatisticsComponent);

        this.statisticsService = statisticsService;
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          // this.patients = this.statisticsService.getPatients();
          // this.examinations = this.statisticsService.getExaminations();
          this.statisticsService.getPredictionsFrequency().subscribe(function (res) {
            if (res instanceof Array) {
              _this16.predictionsFrequency = res.map(function (prediction) {
                return {
                  name: prediction.roandedPrediction.toString(),
                  value: prediction.frequency.toString()
                };
              });
            }
          });
          this.statisticsService.getAgeFrequency().subscribe(function (res) {
            if (res instanceof Array) {
              _this16.ageFrequency = res.map(function (age) {
                return {
                  name: "".concat(age.downAgeBoundary, "-").concat(age.upAgeBoundary),
                  value: age.frequency
                };
              });
            }
          });
          this.statisticsService.getTiaOccuredFrequency().subscribe(function (res) {
            if (res instanceof Array) {
              _this16.tiaOccuredFrequency = res.map(function (tia) {
                return {
                  name: tia.occured,
                  value: tia.frequency
                };
              });
            }
          });
          this.statisticsService.GetObservationsRatioByTiaOccured(true).subscribe(function (res) {
            if (res instanceof Array) {
              _this16.observationsRatioTiaOccured = res.map(function (observation) {
                return {
                  name: observation.observationName,
                  value: observation.ratio
                };
              });
            }
          });
          this.statisticsService.GetObservationsRatioByTiaOccured(false).subscribe(function (res) {
            if (res instanceof Array) {
              _this16.observationsRatioTiaNotOccured = res.map(function (observation) {
                return {
                  name: observation.observationName,
                  value: observation.ratio
                };
              });
            }
          });
        }
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ctorParameters = function () {
      return [{
        type: _service_statistics_service__WEBPACK_IMPORTED_MODULE_2__["StatisticsService"]
      }];
    };

    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-statistics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./statistics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/statistics/statistics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./statistics.component.css */
      "./src/app/statistics/statistics.component.css")).default]
    })], StatisticsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\kapis\Desktop\PUT\magisterka\praca magisterska\Projekt\Frontend\PatientDiagnosisFrontendAngular8\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map