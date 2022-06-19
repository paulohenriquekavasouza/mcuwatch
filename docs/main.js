(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paulo\Desktop\Projetos\MCUWatchOrganizer\src\main.ts */"zUnb");


/***/ }),

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_movies_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/movies.json */ "qpSL");
var _assets_movies_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/movies.json */ "qpSL", 1);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MoviesComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapse", i_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.titles[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.runtime.fullForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Released ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, item_r1.releaseDate, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Release order: ", item_r1.orders.releaseOrder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Chronological order: ", item_r1.orders.chronologicalOrder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapse", i_r2, "");
} }
class MoviesComponent {
    constructor(appService) {
        this.appService = appService;
        this.movies = _assets_movies_json__WEBPACK_IMPORTED_MODULE_1__;
        this.language = "";
        this.appService.getLanguage().subscribe(val => this.language = val);
    }
    ngOnInit() {
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "card", "p-4"], [1, "list-group"], ["href", "javascript: void(0)", "class", "list-group-item list-group-item-action", "data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 3, "href", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0)", "data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", 3, "href"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "text-muted"], [1, "collapse", 3, "id"], [1, "card", "card-body"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MoviesComponent_a_5_Template, 16, 11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "3ogH":
/*!**************************************************!*\
  !*** ./src/app/organizer/organizer.component.ts ***!
  \**************************************************/
/*! exports provided: OrganizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerComponent", function() { return OrganizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_shows_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/shows.json */ "9JQF");
var _assets_shows_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/shows.json */ "9JQF", 1);
/* harmony import */ var _assets_movies_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/movies.json */ "qpSL");
var _assets_movies_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/movies.json */ "qpSL", 1);
/* harmony import */ var _assets_oneshots_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/oneshots.json */ "bqdD");
var _assets_oneshots_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/oneshots.json */ "bqdD", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function OrganizerComponent_h2_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ORGANIZER.LOADING"));
} }
function OrganizerComponent_div_79_div_1_ng_container_7_ng_container_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const streaming_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", streaming_r10 == null ? null : streaming_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", streaming_r10 == null ? null : streaming_r10.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function OrganizerComponent_div_79_div_1_ng_container_7_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizerComponent_div_79_div_1_ng_container_7_ng_container_8_a_1_Template, 2, 2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", movie_r7 == null ? null : movie_r7.streamings);
} }
function OrganizerComponent_div_79_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrganizerComponent_div_79_div_1_ng_container_7_ng_container_8_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    const day_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movie_r7 == null ? null : movie_r7.titles[ctx_r6.language], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("href", "https://calendar.google.com/calendar/u/0/r/eventedit?text=", movie_r7 == null ? null : movie_r7.titles[ctx_r6.language], "&dates=", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, day_r5 == null ? null : day_r5.day, "yyyyMMdd'T'130000'Z'"), "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, day_r5 == null ? null : day_r5.day, "yyyyMMdd'T'140000'Z'"), "&details=&location=My+home&sf=true&output=xml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (movie_r7 == null ? null : movie_r7.streamings == null ? null : movie_r7.streamings.length) > 0);
} }
function OrganizerComponent_div_79_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrganizerComponent_div_79_div_1_ng_container_7_Template, 9, 11, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, day_r5 == null ? null : day_r5.day, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r5 == null ? null : day_r5.list);
} }
function OrganizerComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrganizerComponent_div_79_div_1_Template, 8, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.days);
} }
function OrganizerComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Where to Watch?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizerComponent_ng_template_80_Template_button_click_3_listener() { const modal_r13 = ctx.$implicit; return modal_r13.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizerComponent_ng_template_80_Template_button_click_6_listener() { const modal_r13 = ctx.$implicit; return modal_r13.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OrganizerComponent {
    constructor(appService, translate, modalService) {
        this.appService = appService;
        this.translate = translate;
        this.modalService = modalService;
        this.shows = _assets_shows_json__WEBPACK_IMPORTED_MODULE_1__;
        this.movies = _assets_movies_json__WEBPACK_IMPORTED_MODULE_2__;
        this.oneshots = _assets_oneshots_json__WEBPACK_IMPORTED_MODULE_3__;
        this.language = "";
        this.moviesChecked = true;
        this.showsChecked = false;
        this.oneShotsChecked = false;
        this.isChronological = 1;
        this.result = [];
        this.loading = false;
        this.minDate = new Date();
        this.frequency = 0;
        this.quantity = 0;
        this.days = [];
        this.appService.getLanguage().subscribe(val => {
            this.language = val;
            this.translate.use(val);
        });
        this.minDate = new Date(this.minDate.setDate(this.minDate.getDate() + 1));
        this.dateStart = this.minDate;
    }
    ngOnInit() {
    }
    open(content, movie) {
        this.selectedMovie = movie;
        this.modalService.open(content, { centered: true });
    }
    nextSaturday(date = new Date()) {
        const dateCopy = new Date(date.getTime());
        dateCopy.setHours(0, 0, 0);
        const nextSaturday = new Date(dateCopy.setDate(dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7)));
        return nextSaturday;
    }
    changeDate(ev) {
        this.dateStart = new Date(ev.value);
        this.dateStart.setDate(this.dateStart.getDate() + 1);
    }
    isValid() {
        return this.frequency > 0 && this.quantity > 0;
    }
    generate() {
        this.loading = true;
        this.days = [];
        new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](_ => {
            var _a, _b, _c, _d, _e;
            // NOW THE FUN STARTS
            var tempResult = [];
            if (this.moviesChecked) {
                (_a = this.movies) === null || _a === void 0 ? void 0 : _a.map((x) => tempResult.push(x));
            }
            if (this.showsChecked) {
                (_b = this.shows) === null || _b === void 0 ? void 0 : _b.map((x) => tempResult.push(x));
            }
            if (this.oneShotsChecked) {
                (_c = this.oneshots) === null || _c === void 0 ? void 0 : _c.map((x) => tempResult.push(x));
            }
            if (this.isChronological == 1) {
                // RELEASE ORDER
                // NOW WE ORDER IT BY RELEASE ORDER
                tempResult.sort((a, b) => { var _a, _b; return (((_a = a === null || a === void 0 ? void 0 : a.orders) === null || _a === void 0 ? void 0 : _a.releaseOrder) < ((_b = b === null || b === void 0 ? void 0 : b.orders) === null || _b === void 0 ? void 0 : _b.releaseOrder) ? -1 : 1); });
            }
            else {
                // CHRONOLOGICAL ORDER
                // NOW WE ORDER IT BY CHRONOLOGICAL ORDER
                tempResult.sort((a, b) => { var _a, _b; return (((_a = b === null || b === void 0 ? void 0 : b.orders) === null || _a === void 0 ? void 0 : _a.chronologicalOrder) > ((_b = a === null || a === void 0 ? void 0 : a.orders) === null || _b === void 0 ? void 0 : _b.chronologicalOrder) ? -1 : 1); });
            }
            this.result = tempResult;
            var dateStartFix = this.dateStart;
            // MOVIES AND SHOWS ORDERED, NOW WE'RE GOING TO SPLIT IT IN DAYS
            if (this.frequency == 1) {
                // EVERYDAY
                var currentDate = new Date(dateStartFix);
                (_d = this.result) === null || _d === void 0 ? void 0 : _d.forEach((val) => {
                    var _a, _b, _c, _d;
                    var day = (_a = this.days) === null || _a === void 0 ? void 0 : _a.find(x => x.day == new Date(currentDate).toISOString().split('T')[0]);
                    if (day) {
                        if (((_b = day === null || day === void 0 ? void 0 : day.list) === null || _b === void 0 ? void 0 : _b.length) < this.quantity) {
                            (_c = day === null || day === void 0 ? void 0 : day.list) === null || _c === void 0 ? void 0 : _c.push(val);
                        }
                        else {
                            if (((_d = day === null || day === void 0 ? void 0 : day.list) === null || _d === void 0 ? void 0 : _d.length) >= this.quantity) {
                                currentDate.setDate(currentDate.getDate() + 1);
                            }
                            var info = {
                                day: new Date(currentDate).toISOString().split('T')[0],
                                list: [val]
                            };
                            this.days.push(info);
                        }
                    }
                    else {
                        var info = {
                            day: new Date(currentDate).toISOString().split('T')[0],
                            list: [val]
                        };
                        this.days.push(info);
                    }
                });
            }
            else {
                // ONLY WEEKENDS
                var currentDate = new Date(dateStartFix);
                if (currentDate.getDay() >= 0 && currentDate.getDay() <= 5) {
                    currentDate = this.nextSaturday(new Date(dateStartFix));
                }
                (_e = this.result) === null || _e === void 0 ? void 0 : _e.forEach((val) => {
                    var _a, _b, _c, _d;
                    var day = (_a = this.days) === null || _a === void 0 ? void 0 : _a.find(x => x.day == new Date(currentDate).toISOString().split('T')[0]);
                    if (day) {
                        if (((_b = day === null || day === void 0 ? void 0 : day.list) === null || _b === void 0 ? void 0 : _b.length) < this.quantity) {
                            (_c = day === null || day === void 0 ? void 0 : day.list) === null || _c === void 0 ? void 0 : _c.push(val);
                        }
                        else {
                            if (((_d = day === null || day === void 0 ? void 0 : day.list) === null || _d === void 0 ? void 0 : _d.length) >= this.quantity) {
                                if (new Date(currentDate).getDay() == 0) {
                                    currentDate = this.nextSaturday(currentDate);
                                }
                                else {
                                    currentDate.setDate(currentDate.getDate() + 1);
                                }
                            }
                            var info = {
                                day: new Date(currentDate).toISOString().split('T')[0],
                                list: [val]
                            };
                            this.days.push(info);
                        }
                    }
                    else {
                        currentDate.setHours(0, 0, 0);
                        var info = {
                            day: new Date(currentDate).toISOString().split('T')[0],
                            list: [val]
                        };
                        this.days.push(info);
                    }
                });
            }
            console.log(this.days);
            setTimeout(() => {
                _.next();
            }, 1000);
        }).subscribe(_ => {
            this.loading = false;
        });
    }
}
OrganizerComponent.ɵfac = function OrganizerComponent_Factory(t) { return new (t || OrganizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"])); };
OrganizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizerComponent, selectors: [["app-organizer"]], decls: 82, vars: 66, consts: [[1, "container"], [1, "card", "p-4"], [1, "form-group"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "movies", "checked", "", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "movies", 1, "form-check-label"], [1, "mt-2"], ["type", "radio", "id", "releaseOrder", "name", "order", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "releaseOrder", 1, "form-check-label"], ["type", "radio", "id", "chronologicalOrder", "name", "order", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "chronologicalOrder", 1, "form-check-label"], ["type", "radio", "id", "frequency1", "name", "frequency", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "frequency1", 1, "form-check-label"], ["type", "radio", "id", "frequency2", "name", "frequency", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "frequency2", 1, "form-check-label"], ["type", "radio", "id", "quantity1", "name", "quantity", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "quantity1", 1, "form-check-label"], ["type", "radio", "id", "quantity2", "name", "quantity", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "quantity2", 1, "form-check-label"], ["type", "radio", "id", "quantity3", "name", "quantity", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "quantity3", 1, "form-check-label"], ["type", "radio", "id", "quantity4", "name", "quantity", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "quantity4", 1, "form-check-label"], ["type", "radio", "id", "quantity5", "name", "quantity", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], ["for", "quantity5", 1, "form-check-label"], ["type", "date", "onkeydown", "return false", 1, "form-control", 3, "value", "min", "change"], [1, "mt-4"], [1, "btn", "btn-success", "btn-block", "w-100", 3, "disabled", "click"], [1, "fas", "fa-arrow-right"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["content", ""], [1, "row"], ["class", "col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-12"], [1, "card", "mt-3", "overflow-auto", 2, "width", "26rem", "height", "200px"], [1, "card-body"], [1, "card-title"], [1, "fa-ul"], [4, "ngFor", "ngForOf"], [1, "fa-li", "fas", "fa-arrow-right", "align-middle"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], ["src", "assets/logos/google-calendar.png", "width", "36", "height", "36"], ["class", "text-decoration-none", "style", "padding-left: 10px", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "text-decoration-none", 2, "padding-left", "10px", 3, "href"], ["width", "36", "height", "36", 3, "src"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function OrganizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_9_listener($event) { return ctx.moviesChecked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_18_listener($event) { return ctx.isChronological = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_23_listener($event) { return ctx.isChronological = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_32_listener($event) { return ctx.frequency = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_37_listener($event) { return ctx.frequency = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_46_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_50_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_54_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_58_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrganizerComponent_Template_input_ngModelChange_62_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrganizerComponent_Template_input_change_68_listener($event) { return ctx.changeDate($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizerComponent_Template_button_click_72_listener() { return ctx.generate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, OrganizerComponent_h2_78_Template, 3, 3, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, OrganizerComponent_div_79_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, OrganizerComponent_ng_template_80_Template, 8, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 36, "ORGANIZER.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 38, "ORGANIZER.QUESTIONS.WHAT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.moviesChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 40, "ORGANIZER.RADIO.MOVIES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 42, "ORGANIZER.QUESTIONS.ORDER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("ngModel", ctx.isChronological);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 44, "ORGANIZER.RADIO.ORDER.RELEASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2)("ngModel", ctx.isChronological);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 46, "ORGANIZER.RADIO.ORDER.CHRONOLOGICAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 48, "ORGANIZER.QUESTIONS.FREQUENCY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("ngModel", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 50, "ORGANIZER.RADIO.FREQUENCY.EVERYDAY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2)("ngModel", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 52, "ORGANIZER.RADIO.FREQUENCY.WEEKENDS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 54, "ORGANIZER.QUESTIONS.QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1)("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2)("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 3)("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 4)("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5)("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 56, "ORGANIZER.QUESTIONS.START"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](69, 58, ctx.minDate, "yyyy-MM-dd"))("min", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 61, ctx.minDate, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isValid() || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 64, "ORGANIZER.ACTION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmdhbml6ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-organizer',
                templateUrl: './organizer.component.html',
                styleUrls: ['./organizer.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "9JQF":
/*!*******************************!*\
  !*** ./src/assets/shows.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"titles\":{\"en-US\":\"WandaVision\",\"pt-BR\":\"WandaVision\"},\"releaseDate\":\"2021-01-15\",\"orders\":{\"releaseOrder\":31,\"chronologicalOrder\":31},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/wandavision/4SrN28ZjDLwH\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"Filmed Before a Live Studio Audience\",\"pt-BR\":\"Gravado ao Vivo com Plateia\"},\"releaseDate\":\"2021-01-15\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":31,\"fullForm\":\"31min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"Don't Touch That Dial\",\"pt-BR\":\"Não Mude de Canal\"},\"releaseDate\":\"2021-01-15\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":38,\"fullForm\":\"38min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"Now in Color\",\"pt-BR\":\"Agora em Cores\"},\"releaseDate\":\"2021-01-22\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":34,\"fullForm\":\"34min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"We Interrupt This Program\",\"pt-BR\":\"Interrompemos este Programa\"},\"releaseDate\":\"2021-01-29\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":36,\"fullForm\":\"36min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"On a Very Special Episode…\",\"pt-BR\":\"Em um Episódio Muito Especial...\"},\"releaseDate\":\"2021-02-05\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":43,\"fullForm\":\"43min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"All-New Halloween Spooktacular!\",\"pt-BR\":\"Um Halloween Assustadoramente Inédito!\"},\"releaseDate\":\"2021-02-12\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":40,\"fullForm\":\"40min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"Breaking the Fourth Wall\",\"pt-BR\":\"Derrubando a Quarta Parede\"},\"releaseDate\":\"2021-02-19\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":39,\"fullForm\":\"39min\"},\"orders\":{\"releaseOrder\":7,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"Previously On\",\"pt-BR\":\"Nos Capítulos Anteriores\"},\"releaseDate\":\"2021-02-26\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":48,\"fullForm\":\"48min\"},\"orders\":{\"releaseOrder\":8,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}},{\"titles\":{\"en-US\":\"The Series Finale\",\"pt-BR\":\"O Grande Final\"},\"releaseDate\":\"2021-03-05\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":51,\"fullForm\":\"51min\"},\"orders\":{\"releaseOrder\":9,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"The Falcon and The Winter Soldier\",\"pt-BR\":\"Falcão e o Soldado Invernal\"},\"releaseDate\":\"2021-03-19\",\"orders\":{\"releaseOrder\":32,\"chronologicalOrder\":32},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"New World Order\",\"pt-BR\":\"Nova Ordem Mundial\"},\"releaseDate\":\"2021-03-19\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":51,\"fullForm\":\"51min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Star-Spangled Man\",\"pt-BR\":\"O Herói Americano\"},\"releaseDate\":\"2021-03-26\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":51,\"fullForm\":\"51min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Power Broker\",\"pt-BR\":\"Mercador do Poder\"},\"releaseDate\":\"2021-04-02\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":55,\"fullForm\":\"55min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Whole World Is Watching\",\"pt-BR\":\"O Mundo Está Vendo\"},\"releaseDate\":\"2021-04-09\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":55,\"fullForm\":\"55min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Truth\",\"pt-BR\":\"Verdade\"},\"releaseDate\":\"2021-04-16\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":62,\"fullForm\":\"1h2min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"releaseOrder\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"One World, One People\",\"pt-BR\":\"Um Mundo, Um Povo\"},\"releaseDate\":\"2021-04-23\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":54,\"fullForm\":\"54min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Loki\",\"pt-BR\":\"Loki\"},\"releaseDate\":\"2021-06-09\",\"orders\":{\"releaseOrder\":33,\"chronologicalOrder\":33},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/loki/6pARMvILBGzF\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"Glorious Purpose\",\"pt-BR\":\"Glorioso Propósito\"},\"releaseDate\":\"2021-06-09\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":52,\"fullForm\":\"52min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Variant\",\"pt-BR\":\"A Variante\"},\"releaseDate\":\"2021-06-16\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":55,\"fullForm\":\"55min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Lamentis\",\"pt-BR\":\"Lamentis\"},\"releaseDate\":\"2021-06-23\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":43,\"fullForm\":\"43min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Nexus Event\",\"pt-BR\":\"O Evento Nexus\"},\"releaseDate\":\"2021-06-30\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":50,\"fullForm\":\"50min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Journey Into Mystery\",\"pt-BR\":\"Jornada ao Mistério\"},\"releaseDate\":\"2021-07-07\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":50,\"fullForm\":\"50min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"For All Time. Always.\",\"pt-BR\":\"Por Todo Tempo. Sempre.\"},\"releaseDate\":\"2021-07-14\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":48,\"fullForm\":\"48min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"What If...?\",\"pt-BR\":\"What If...?\"},\"releaseDate\":\"2021-08-11\",\"orders\":{\"releaseOrder\":35,\"chronologicalOrder\":35},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/what-if/7672ZVj1ZxU9?distributionPartner=google\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"What If… Captain Carter Were The First Avenger?\",\"pt-BR\":\"E se… a capitã Carter fosse a primeira Vingadora?\"},\"releaseDate\":\"2021-08-11\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":36,\"fullForm\":\"36min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… T’Challa Became a Star-Lord?\",\"pt-BR\":\"E se… T’Challa se tornasse o Senhor das Estrelas?\"},\"releaseDate\":\"2021-08-18\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":37,\"fullForm\":\"37min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… The World Lost Its Mightiest Heroes?\",\"pt-BR\":\"E se… o mundo perdesse seus heróis mais poderosos?\"},\"releaseDate\":\"2021-08-25\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":35,\"fullForm\":\"35min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… Doctor Strange Lost His Heart Instead of His Hands?\",\"pt-BR\":\"E se… o Doutor Estranho perdesse seu coração em vez das mãos?\"},\"releaseDate\":\"2021-09-01\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":38,\"fullForm\":\"38min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… Zombies?!\",\"pt-BR\":\"E se… zumbis!?\"},\"releaseDate\":\"2021-09-08\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":34,\"fullForm\":\"34min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… Killmonger Rescued Tony Stark?\",\"pt-BR\":\"E se… Killmonger tivesse resgatado Tony Stark?\"},\"releaseDate\":\"2021-09-15\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":35,\"fullForm\":\"35min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… Thor Were an Only Child?\",\"pt-BR\":\"E se… Thor fosse filho único?\"},\"releaseDate\":\"2021-09-22\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":37,\"fullForm\":\"37min\"},\"orders\":{\"releaseOrder\":7,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… Ultron Won?\",\"pt-BR\":\"E se… Ultron tivesse vencido?\"},\"releaseDate\":\"2021-09-29\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":32,\"fullForm\":\"32min\"},\"orders\":{\"releaseOrder\":8,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"What If… The Watcher Broke His Oath?\",\"pt-BR\":\"E se… o Vigia quebrasse seu juramento?\"},\"releaseDate\":\"2021-10-06\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":37,\"fullForm\":\"37min\"},\"orders\":{\"releaseOrder\":9,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Hawkeye\",\"pt-BR\":\"Gavião Arqueiro\"},\"releaseDate\":\"2021-11-24\",\"orders\":{\"releaseOrder\":38,\"chronologicalOrder\":38},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"Never Meet Your Heroes\",\"pt-BR\":\"Nunca Conheça seus Heróis\"},\"releaseDate\":\"2021-11-24\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":50,\"fullForm\":\"50min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Hide and Seek\",\"pt-BR\":\"Esconde-Esconde\"},\"releaseDate\":\"2021-11-24\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":52,\"fullForm\":\"52min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Echoes\",\"pt-BR\":\"Ecos\"},\"releaseDate\":\"2021-12-01\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":44,\"fullForm\":\"44min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Partners, Am I Right?\",\"pt-BR\":\"Parceiros, Certo?\"},\"releaseDate\":\"2021-12-08\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":41,\"fullForm\":\"41min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Ronin\",\"pt-BR\":\"Ronin\"},\"releaseDate\":\"2021-12-15\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":45,\"fullForm\":\"45min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"So This Is Christmas?\",\"pt-BR\":\"Então Já É Natal?\"},\"releaseDate\":\"2021-12-22\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":62,\"fullForm\":\"1h2min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Moon Knight\",\"pt-BR\":\"Cavaleiro da Lua\"},\"releaseDate\":\"2022-03-30\",\"orders\":{\"releaseOrder\":39,\"chronologicalOrder\":39},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/series/moon-knight/4S3oOF1knocS?distributionPartner=google\"}],\"seasons\":[{\"episodes\":[{\"titles\":{\"en-US\":\"The Goldfish Problem\",\"pt-BR\":\"O Problema do Peixe Dourado\"},\"releaseDate\":\"2022-03-30\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":48,\"fullForm\":\"48min\"},\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Summon the Suit\",\"pt-BR\":\"Invoque o Traje\"},\"releaseDate\":\"2022-04-06\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":53,\"fullForm\":\"53min\"},\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Friendly Type\",\"pt-BR\":\"O Tipo Amigável\"},\"releaseDate\":\"2022-04-13\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":53,\"fullForm\":\"53min\"},\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"The Tomb\",\"pt-BR\":\"A Tumba\"},\"releaseDate\":\"2022-04-20\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":54,\"fullForm\":\"54min\"},\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Asylum\",\"pt-BR\":\"O Manicômio\"},\"releaseDate\":\"2022-04-27\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":50,\"fullForm\":\"50min\"},\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}},{\"titles\":{\"en-US\":\"Gods and Monsters\",\"pt-BR\":\"Deuses e Monstros\"},\"releaseDate\":\"2022-05-04\",\"streamings\":[{\"name\":\"Disney+\",\"url\":\"\"}],\"runtime\":{\"minutes\":45,\"fullForm\":\"45min\"},\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":0},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]}}]}],\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":4}]");

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent {
    constructor(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.appService.getLanguage().subscribe(val => {
            this.translate.use(val);
        });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 9, consts: [[1, "container"], [1, "bg-light", "p-5", "rounded"], [1, "lead"], ["routerLink", "/organizer", 1, "btn", "btn-lg", "btn-primary"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "HOME.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "HOME.ACTION"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AppService {
    constructor() {
        var _a;
        this.language = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]((_a = localStorage.getItem("language")) !== null && _a !== void 0 ? _a : "en-US");
    }
    setLanguage(val) {
        this.language.next(val);
        localStorage.setItem("language", val);
        window.location.reload();
    }
    getLanguage() {
        return this.language.asObservable();
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N5JO":
/*!******************************************!*\
  !*** ./src/app/shows/shows.component.ts ***!
  \******************************************/
/*! exports provided: ShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsComponent", function() { return ShowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_shows_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/shows.json */ "9JQF");
var _assets_shows_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/shows.json */ "9JQF", 1);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ShowsComponent_a_5_a_14_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const episode_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r7.titles[ctx_r6.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r7.runtime.fullForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Released ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, episode_r7 == null ? null : episode_r7.releaseDate, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Release order: ", episode_r7.orders.releaseOrder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Chronological order: ", episode_r7.orders.chronologicalOrder, " ");
} }
function ShowsComponent_a_5_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowsComponent_a_5_a_14_ng_container_4_Template, 14, 8, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r4 = ctx.$implicit;
    const ii_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapse2", ii_r5, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse2" + ii_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Season ", ii_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapse2", ii_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", season_r4.episodes);
} }
function ShowsComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShowsComponent_a_5_a_14_Template, 5, 5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "#collapse", i_r2, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-controls", "collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.titles[ctx_r0.language]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.seasons == null ? null : item_r1.seasons.length, " season(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Released ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 9, item_r1.releaseDate, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Release order: ", item_r1.orders.releaseOrder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Chronological order: ", item_r1.orders.chronologicalOrder, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "collapse", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.seasons);
} }
class ShowsComponent {
    constructor(appService) {
        this.appService = appService;
        this.shows = _assets_shows_json__WEBPACK_IMPORTED_MODULE_1__;
        this.language = "";
        this.appService.getLanguage().subscribe(val => this.language = val);
    }
    ngOnInit() {
    }
}
ShowsComponent.ɵfac = function ShowsComponent_Factory(t) { return new (t || ShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
ShowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsComponent, selectors: [["app-shows"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "card", "p-4"], [1, "list-group"], ["href", "javascript: void(0)", "class", "list-group-item list-group-item-action", "data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 3, "href", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0)", "data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", 3, "href"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], [1, "text-muted"], [1, "collapse", 3, "id"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0)", 1, "list-group-item", "list-group-item-action"]], template: function ShowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowsComponent_a_5_Template, 15, 12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shows',
                templateUrl: './shows.component.html',
                styleUrls: ['./shows.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(appService, translate) {
        this.appService = appService;
        this.translate = translate;
        this.title = 'MCUWatchOrganizer';
        this.language = "";
        this.appService.getLanguage().subscribe(val => {
            this.language = val;
            this.translate.use(val);
        });
        translate.addLangs(['en-US', 'pt-BR']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 23, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark", "mb-4"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["aria-current", "page", "routerLink", "/organizer", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["aria-current", "page", "routerLink", "/movies", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "javascript: void(0)", 1, "dropdown-item", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_27_listener() { return ctx.appService.setLanguage("en-US"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "English (US)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_30_listener() { return ctx.appService.setLanguage("pt-BR"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Portugu\u00EAs (Brasil)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "MENU.HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "MENU.ORGANIZER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, "MENU.MOVIES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, "MENU.LANGUAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.language === "en-US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.language === "pt-BR");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpTranslateLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpTranslateLoaderFactory", function() { return httpTranslateLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizer/organizer.component */ "3ogH");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _shows_shows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shows/shows.component */ "N5JO");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/pt */ "vT00");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15__);


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_15___default.a);
function httpTranslateLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            deps: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
            useFactory: () => localStorage.getItem("language")
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: httpTranslateLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_5__["OrganizerComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
        _shows_shows_component__WEBPACK_IMPORTED_MODULE_8__["ShowsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_5__["OrganizerComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                    _shows_shows_component__WEBPACK_IMPORTED_MODULE_8__["ShowsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useFactory: httpTranslateLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
                ],
                providers: [
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                        deps: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
                        useFactory: () => localStorage.getItem("language")
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bqdD":
/*!**********************************!*\
  !*** ./src/assets/oneshots.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"titles\":{\"en-US\":\"Marvel One-Shot: The Consultant\",\"pt-BR\":\"Marvel One-Shot: O Consultor\"},\"releaseDate\":\"2011-09-13\",\"orders\":{\"releaseOrder\":5,\"chronologicalOrder\":9},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/26fa255c-655f-49b8-8642-3670a34e26ea\"}],\"runtime\":{\"minutes\":3,\"fullForm\":\"3min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer\",\"pt-BR\":\"Marvel One-Shot: Aconteceu Uma Coisa Engraçada a Caminho do Martelo de Thor\"},\"releaseDate\":\"2011-10-25\",\"orders\":{\"releaseOrder\":7,\"chronologicalOrder\":7},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/7dcbdd19-49f8-42bd-91a2-82c0a571c26e\"}],\"runtime\":{\"minutes\":3,\"fullForm\":\"3min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Marvel One-Shot: Item 47\",\"pt-BR\":\"Marvel One-Shot: Item 47\"},\"releaseDate\":\"2012-09-25\",\"orders\":{\"releaseOrder\":9,\"chronologicalOrder\":9},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/5bcd6e95-1c90-4e45-bc86-3e85c8c01d67\"}],\"runtime\":{\"minutes\":12,\"fullForm\":\"12min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"L\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Marvel One-Shot: Agent Carter\",\"pt-BR\":\"Marvel One-Shot: Agente Carter\"},\"releaseDate\":\"2013-09-24\",\"orders\":{\"releaseOrder\":11,\"chronologicalOrder\":11},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/65e1432a-1108-46c6-b8fa-35d8b64471c1\"}],\"runtime\":{\"minutes\":15,\"fullForm\":\"15min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Marvel One-Shot: All Hail The King\",\"pt-BR\":\"Marvel One-Shot: Todos saúdem o Rei\"},\"releaseDate\":\"2014-02-04\",\"orders\":{\"releaseOrder\":13,\"chronologicalOrder\":13},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/e5c802dd-0a01-4157-9788-dee95a685162\"}],\"runtime\":{\"minutes\":14,\"fullForm\":\"14min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Marvel One-Shot: Team Thor: Part 1\",\"pt-BR\":\"Marvel One-Shot: Equipe Thor: Primeira Parte\"},\"releaseDate\":\"2016-08-28\",\"orders\":{\"releaseOrder\":19,\"chronologicalOrder\":19},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/movies/marvel-one-shot-team-thor-part-1/1TzAxRHo4kjK\"}],\"runtime\":{\"minutes\":3,\"fullForm\":\"3min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"L\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Marvel One-Shot: Team Thor: Part 2\",\"pt-BR\":\"Marvel One-Shot: Equipe Thor: Segunda Parte\"},\"releaseDate\":\"2017-02-28\",\"orders\":{\"releaseOrder\":21,\"chronologicalOrder\":21},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/1a191d76-2d43-4910-a41b-695a9e47b515?distributionPartner=google\"}],\"runtime\":{\"minutes\":4,\"fullForm\":\"4min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Marvel One-Shot: Team Darryl\",\"pt-BR\":\"Marvel One-Shot: Equipe Darryl\"},\"releaseDate\":\"2018-02-20\",\"orders\":{\"releaseOrder\":24,\"chronologicalOrder\":24},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/f2caf658-d08c-4c20-80fd-bb82dfbdafd6?distributionPartner=google\"}],\"runtime\":{\"minutes\":6,\"fullForm\":\"6min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":3}]");

/***/ }),

/***/ "qpSL":
/*!********************************!*\
  !*** ./src/assets/movies.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"titles\":{\"en-US\":\"Iron Man\",\"pt-BR\":\"Homem de Ferro\"},\"releaseDate\":\"2008-04-29\",\"orders\":{\"releaseOrder\":1,\"chronologicalOrder\":4},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/movies/marvel-studios-iron-man/6aM2a8mZATiu\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":127,\"fullForm\":\"2h7min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"The Incredible Hulk\",\"pt-BR\":\"O Incrível Hulk\"},\"releaseDate\":\"2008-06-13\",\"orders\":{\"releaseOrder\":2,\"chronologicalOrder\":5},\"streamings\":[{\"name\":\"Star+\",\"url\":\"https://www.starplus.com/video/c80b15f7-4215-493a-b80a-03b0ee3af966\",\"logo\":\"assets/logos/splus.png\"},{\"name\":\"Netflix\",\"url\":\"https://www.netflix.com/watch/70087537\",\"logo\":\"assets/logos/netflix.png\"}],\"runtime\":{\"minutes\":112,\"fullForm\":\"1h52min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Iron Man 2\",\"pt-BR\":\"Homem de Ferro 2\"},\"releaseDate\":\"2010-04-30\",\"orders\":{\"releaseOrder\":3,\"chronologicalOrder\":6},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/a085c66c-3c1e-451e-85b8-cf7474823501\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":125,\"fullForm\":\"2h5min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Thor\",\"pt-BR\":\"Thor\"},\"releaseDate\":\"2011-04-29\",\"orders\":{\"releaseOrder\":4,\"chronologicalOrder\":8},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/ac837e8b-ab6d-46fc-8f34-86152fd905d8\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":117,\"fullForm\":\"1h57min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Captain America: The First Avenger\",\"pt-BR\":\"Capitão América: O Primeiro Vingador\"},\"releaseDate\":\"2011-07-29\",\"orders\":{\"releaseOrder\":6,\"chronologicalOrder\":1},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/90aa1132-49e9-46a1-801c-4671ee788e75\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":126,\"fullForm\":\"2h6min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"The Avengers\",\"pt-BR\":\"The Avengers: Os Vingadores\"},\"releaseDate\":\"2012-04-27\",\"orders\":{\"releaseOrder\":8,\"chronologicalOrder\":8},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/c05ea526-1378-4e4b-a38e-a29968cc0def\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":143,\"fullForm\":\"2h23min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":1},{\"titles\":{\"en-US\":\"Iron Man 3\",\"pt-BR\":\"Homem de Ferro 3\"},\"releaseDate\":\"2013-04-26\",\"orders\":{\"releaseOrder\":10,\"chronologicalOrder\":10},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/e8fbf24f-defb-41a6-b578-1b9edd6d301b\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":132,\"fullForm\":\"2h12min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Thor: The Dark World\",\"pt-BR\":\"Thor: O Mundo Sombrio\"},\"releaseDate\":\"2013-11-08\",\"orders\":{\"releaseOrder\":12,\"chronologicalOrder\":12},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/804070a9-62b3-4fad-be8c-8c142b64e404\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":112,\"fullForm\":\"1h52min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Captain America: The Winter Soldier\",\"pt-BR\":\"Capitão América: Soldado Invernal\"},\"releaseDate\":\"2014-04-10\",\"orders\":{\"releaseOrder\":14,\"chronologicalOrder\":14},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/68e3448b-845b-4c9a-8666-559d25a01c52\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":138,\"fullForm\":\"2h16min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Guardians of the Galaxy\",\"pt-BR\":\"Guardiões da Galáxia\"},\"releaseDate\":\"2014-07-31\",\"orders\":{\"releaseOrder\":15,\"chronologicalOrder\":15},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/04667710-5866-4a77-be5d-a9f7265bdb5c?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":122,\"fullForm\":\"2h2min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Avengers: Age of Ultron\",\"pt-BR\":\"Vingadores: Era de Ultron\"},\"releaseDate\":\"2015-03-23\",\"orders\":{\"releaseOrder\":16,\"chronologicalOrder\":16},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/fad87483-5b6e-4fa1-8b1b-886e60523fc3?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":141,\"fullForm\":\"2h21min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Ant-Man\",\"pt-BR\":\"Homem-Formiga\"},\"releaseDate\":\"2015-07-16\",\"orders\":{\"releaseOrder\":17,\"chronologicalOrder\":17},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/movies/marvel-studios-ant-man/5c92KVf1zgUX\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":118,\"fullForm\":\"1h58min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":2},{\"titles\":{\"en-US\":\"Capitain America: Civil War\",\"pt-BR\":\"Capitão América: Guerra Civil\"},\"releaseDate\":\"2016-04-28\",\"orders\":{\"releaseOrder\":18,\"chronologicalOrder\":18},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/dc2f0aea-bac6-450d-bb3c-062309e4942d?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":148,\"fullForm\":\"2h28min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Doctor Strange\",\"pt-BR\":\"Doutor Estranho\"},\"releaseDate\":\"2016-12-02\",\"orders\":{\"releaseOrder\":20,\"chronologicalOrder\":20},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/bbacb0b8-f726-47db-837c-6fe925401562?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":148,\"fullForm\":\"1h55min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Guardians of the Galaxy Vol. 2\",\"pt-BR\":\"Guardiões da Galáxia Vol. 2\"},\"releaseDate\":\"2017-04-27\",\"orders\":{\"releaseOrder\":22,\"chronologicalOrder\":22},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/a2eedd10-4408-48ce-bda6-97cf3b54d986?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":127,\"fullForm\":\"2h7min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Thor: Ragnarok\",\"pt-BR\":\"Thor: Ragnarok\"},\"releaseDate\":\"2017-10-26\",\"orders\":{\"releaseOrder\":23,\"chronologicalOrder\":23},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/2ed86631-1d9a-4517-b73b-776cd91fd1f5?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":130,\"fullForm\":\"2h10min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Spider-Man: Homecoming\",\"pt-BR\":\"Homem-Aranha: De Volta ao Lar\"},\"releaseDate\":\"2017-07-06\",\"orders\":{\"releaseOrder\":22,\"chronologicalOrder\":22},\"streamings\":[{\"name\":\"Netflix\",\"url\":\"https://www.netflix.com/watch/80166369?source=35\",\"logo\":\"assets/logos/netflix.png\"}],\"runtime\":{\"minutes\":133,\"fullForm\":\"2h13min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Black Panther\",\"pt-BR\":\"Pantera Negra\"},\"releaseDate\":\"2018-02-15\",\"orders\":{\"releaseOrder\":25,\"chronologicalOrder\":25},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/0784106c-c677-40f2-b2ca-b856c637c0ee?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":138,\"fullForm\":\"2h18min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Avengers: Infinity War\",\"pt-BR\":\"Vingadores: Guerra Infinita\"},\"releaseDate\":\"2018-04-26\",\"orders\":{\"releaseOrder\":27,\"chronologicalOrder\":27},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/movies/marvel-studios-avengers-infinity-war/1WEuZ7H6y39v\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":149,\"fullForm\":\"2h29min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Ant-Man and the Wasp\",\"pt-BR\":\"Homem-Formiga e a Vespa\"},\"releaseDate\":\"2018-07-05\",\"orders\":{\"releaseOrder\":28,\"chronologicalOrder\":28},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/623d35ab-b438-4ba7-86c2-3a50f840737d?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":118,\"fullForm\":\"1h58min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Captain Marvel\",\"pt-BR\":\"Capitã Marvel\"},\"releaseDate\":\"2019-03-07\",\"orders\":{\"releaseOrder\":29,\"chronologicalOrder\":2},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/91cc3496-ee90-4414-93c6-2faba95e1f2e?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":124,\"fullForm\":\"2h4min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Avengers: Endgame\",\"pt-BR\":\"Vingadores: Ultimato\"},\"releaseDate\":\"2019-04-25\",\"orders\":{\"releaseOrder\":30,\"chronologicalOrder\":30},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/4da34214-4803-4c80-8e66-b9b4b46e1bf8?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":182,\"fullForm\":\"3h2min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":3},{\"titles\":{\"en-US\":\"Spider-Man: Far From Home\",\"pt-BR\":\"Homem-Aranha: Longe de Casa\"},\"releaseDate\":\"2019-07-04\",\"orders\":{\"releaseOrder\":30,\"chronologicalOrder\":30},\"streamings\":[{\"name\":\"Prime Video\",\"url\":\"https://www.primevideo.com/dp/amzn1.dv.gti.e4b85f95-60b7-b172-232b-3a7f3ffd78c4?autoplay=1&ref_=atv_cf_strg_wb\",\"logo\":\"assets/logos/primevideo.png\"}],\"runtime\":{\"minutes\":130,\"fullForm\":\"2h10min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Black Widow\",\"pt-BR\":\"Viúva Negra\"},\"releaseDate\":\"2021-07-08\",\"orders\":{\"releaseOrder\":34,\"chronologicalOrder\":34},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/6e3d316b-778f-4050-ad1a-daef6cba38d8?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":133,\"fullForm\":\"2h13min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Shang-Chi and The Legend of The Ten Rings\",\"pt-BR\":\"Shang-Chi e a Lenda dos Dez Anéis\"},\"releaseDate\":\"2021-09-21\",\"orders\":{\"releaseOrder\":36,\"chronologicalOrder\":36},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/2e9cb640-b29c-480a-929d-434fdade61e0?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":132,\"fullForm\":\"2h12min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Eternals\",\"pt-BR\":\"Eternos\"},\"releaseDate\":\"2021-11-04\",\"orders\":{\"releaseOrder\":37,\"chronologicalOrder\":37},\"streamings\":[{\"name\":\"Disney+\",\"url\":\"https://www.disneyplus.com/video/84008f72-3da5-4e9b-8228-3545b8f7e17c?distributionPartner=google\",\"logo\":\"assets/logos/dplus.png\"}],\"runtime\":{\"minutes\":157,\"fullForm\":\"2h37min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"12\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Spider-Man: No Way Home\",\"pt-BR\":\"Homem-Aranha: Sem Volta para Casa\"},\"releaseDate\":\"2021-12-16\",\"orders\":{\"releaseOrder\":40,\"chronologicalOrder\":40},\"streamings\":[],\"runtime\":{\"minutes\":148,\"fullForm\":\"2h10min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"10\"}]},\"phase\":4},{\"titles\":{\"en-US\":\"Doctor Strange in the Multiverse of Madness\",\"pt-BR\":\"Doutor Estranho no Multiverso da Loucura\"},\"releaseDate\":\"2022-05-04\",\"orders\":{\"releaseOrder\":41,\"chronologicalOrder\":41},\"streamings\":[],\"runtime\":{\"minutes\":126,\"fullForm\":\"2h6min\"},\"ratings\":{\"ESRB\":[{\"title\":\"PG-?\"}],\"DJCTQ\":[{\"title\":\"14\"}]},\"phase\":4}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organizer/organizer.component */ "3ogH");
/* harmony import */ var _shows_shows_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shows/shows.component */ "N5JO");








const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'organizer',
        component: _organizer_organizer_component__WEBPACK_IMPORTED_MODULE_4__["OrganizerComponent"]
    },
    {
        path: 'movies',
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"]
    },
    {
        path: 'shows',
        component: _shows_shows_component__WEBPACK_IMPORTED_MODULE_5__["ShowsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map