(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Desktop\Portfolio\angular-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ExperienceComponent {
    constructor() { }
    ngOnInit() {
        let width = window.innerWidth;
        let parentElement = document.getElementById("main");
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
        }
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
            this.homeButton.className = "button";
            this.aboutMeButton.className = "button";
            this.experienceButton.className = "hover-copy";
            this.contactButton.className = "button";
        }
        if (parentElement != null && parentElement.scrollLeft % width == 0 && width > 900) {
            for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 15, vars: 0, consts: [[1, "wrapper"], [1, "experience"], [1, "title"], [1, "subtitle"], [1, "text"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Working Experience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I worked as backend developer for one year for Optiva Media in a web-based application. At first I was in charge of doing changes to already existing functions but, as time went on, I began to develop larger functionalities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I think that my most time-consumming functionality was a library that gets the data from a file provided by an external source and store or update our database with the new data. The main problem I had was the usage of custom codes for which we had no translation so I had to get in touch regularly with the client so we could get all the data of those files.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I also spent some time defining REST API services in Express.js along with the necessary functions so that the fron-end could receive the expected output.This led me to write some functiosn to get files stored at Amazon EC2 so I tried out some AWS features.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I almost forgot about 50% of the work I did: write unitary tests. For every change we did we also had to write unitary test for those changes, otherwise our pull request wouldn't be approved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 15vh;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\r\n    height: 20vh;\r\n    width: 100vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLndyYXBwZXIgLmV4cGVyaWVuY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5leHBlcmllbmNlIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCg3dmgsIDQwcHgpO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuZXhwZXJpZW5jZSAuc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBtYXgoMi41dmgsIDI0cHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBkaW1ncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmV4cGVyaWVuY2UgLnRleHQge1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDd2aCwgNDBweCk7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjV2aCwgMjRweCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGV4dCB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIG1vYmlsZXMgKGxhbmRzY2FwZSBhbmQgcG9ydHJhaXQpICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAud3JhcHBlciAuZXhwZXJpZW5jZSB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuZXhwZXJpZW5jZSAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmV4cGVyaWVuY2UgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5leHBlcmllbmNlIC50ZXh0IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC50ZXh0IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAuZmlsbGVyIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2G7+":
/*!********************************!*\
  !*** ./src/app/anchor-item.ts ***!
  \********************************/
/*! exports provided: AnchorItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorItem", function() { return AnchorItem; });
class AnchorItem {
    constructor(component, data) {
        this.component = component;
        this.data = data;
    }
}


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


class HomeComponent {
    constructor() { }
    ngOnInit() {
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
            this.homeButton.className = "hover-copy";
            this.aboutMeButton.className = "button";
            this.experienceButton.className = "button";
            this.contactButton.className = "button";
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "presentation"], [1, "name"], [1, "subtitle"], [1, "letter"], [1, "greetings"], [1, "notice"], [1, "logo"], ["src", "./assets/images/firefox-logo.png"], ["src", "./assets/images/chrome-logo.png"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roberto Jim\u00E9nez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Junior Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Greetings,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My name is Roberto Jim\u00E9nez L\u00F3pez and I am an IT graduate from the Polytechnic University of Madrid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This page is a brief resume of my skills and knowledge so you can get to know a bit about me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This website supports the following browsers and their respective Android versions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 850px) {\r\n  .presentation[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 90vw;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n    display: inline-block;\r\n  }\r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n    display: block;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .greetings[_ngcontent-%COMP%] {\r\n    margin-bottom: 6vh;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .notice[_ngcontent-%COMP%] {\r\n    margin-top: 5vh;\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    float: left;\r\n    margin-left: 30px;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%] {\r\n    margin-top: 15vh;\r\n  }\r\n  \r\n  .tw[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .presentation[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 15vh;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .notice[_ngcontent-%COMP%] {\r\n    margin-top: 10vh;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    float: left;\r\n    margin-right: 5vw;\r\n  }\r\n  \r\n  .tw[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLnByZXNlbnRhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IG1heCg3dmgsIDQwcHgpO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5wcmVzZW50YXRpb24gLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNXZoLCAyNHB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAucHJlc2VudGF0aW9uIC5sZXR0ZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICB9XHJcblxyXG4gIC5wcmVzZW50YXRpb24gLmxldHRlciAuZ3JlZXRpbmdzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZ2aDtcclxuICB9XHJcblxyXG4gIC5wcmVzZW50YXRpb24gLmxldHRlciAubm90aWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByZXNlbnRhdGlvbiAubGV0dGVyIC5sb2dvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICB9XHJcblxyXG4gIC5wcmVzZW50YXRpb24gLmxldHRlciAudGlwIHtcclxuICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgfVxyXG4gIFxyXG4gIC50dyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi8qIG1vYmlsZXMgKGxhbmRzY2FwZSBhbmQgcG9ydHJhaXQpICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAucHJlc2VudGF0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5wcmVzZW50YXRpb24gLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAubGV0dGVyIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJlc2VudGF0aW9uIC5sZXR0ZXIgLm5vdGljZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIH1cclxuXHJcbiAgLnByZXNlbnRhdGlvbiAubGV0dGVyIC5sb2dvIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDV2dztcclxuICB9XHJcbiAgXHJcbiAgLnR3IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anchor.directive */ "OBt6");



function TestComponent_ng_template_8_Template(rf, ctx) { }
class TestComponent {
    ngOnInit() {
        console.log("WatchMe!");
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], inputs: { data: "data" }, decls: 9, vars: 0, consts: [[1, "resume"], [1, "title"], [1, "text"], ["anchorHost", ""]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A bit about me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I have experience working on web applications, specifically in backend development but, althought I already knew the basics, I wanted to try to learn in more depth about frontend development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " When I am coding, I always try to write efficient algorithms but if the problem requires only a good enough solution, I rather sacrifice some performance in order to improve legibility and maintainability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestComponent_ng_template_8_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"]], styles: [".test[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  width: 100vw;\r\n  display: inline-table;\r\n  background-color: white;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n  font-family: Barlow;\r\n  padding-left: 10vw;\r\n  padding-top: 20vh;\r\n  width: 90vw;\r\n  display: inline-table;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-size: 7vh;\r\n  color: #363945;\r\n  height: 7vh;\r\n  font-weight: 700;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 35vw;\r\n  height: auto;\r\n  margin-top: 15vh;\r\n  color: #363945;\r\n  font-size: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVzdW1lIHtcclxuICBmb250LWZhbWlseTogQmFybG93O1xyXG4gIHBhZGRpbmctbGVmdDogMTB2dztcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbn1cclxuXHJcbi5yZXN1bWUgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDd2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucmVzdW1lIC50ZXh0IHtcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBmb250LXNpemU6IDJ2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.css']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutMeComponent {
    ngOnInit() {
        let width = window.innerWidth;
        let parentElement = document.getElementById("main");
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
        }
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
            this.homeButton.className = "button";
            this.aboutMeButton.className = "hover-copy";
            this.experienceButton.className = "button";
            this.contactButton.className = "button";
        }
        if (parentElement != null && parentElement.scrollLeft % width == 0 && width > 900) {
            for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 30, vars: 0, consts: [[1, "wrapper"], [1, "about-me"], [1, "title"], [1, "subtitle"], [1, "text"], [1, "about-page"], [1, "filler"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A bit about me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I consider myself a very motivated person and I always try to learn something new, as proof of this there is the page you are looking at, I hope you like it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I have experience working on web applications, specifically in backend development but, althought I already knew the basics, I wanted to try to learn in more depth about frontend development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "When I am coding, I always try to write efficient algorithms but if the problem requires only a good enough solution, I rather sacrifice some performance in order to improve legibility and maintainability.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Besides programming, I also like to learn about car mechanics but I'm not into motorsports competitions. At home we've always made all small repairs and maintenance as we could and since I got my drivers license, I became really interestend on this field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " A bit about this page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "This website is made in Angular 11.0.7 and hosted in GitHub Pages, the repository is public and you can access from Contact page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "I've tested this website on PC and on an Android phone, it is fully supported by Chrome and Firefox and their respective Android versions. I've also tested it on Edge but there is a problem related to the width of the window: Edge is returning a bigger value than the real value. I've tried to find a solution but I couldn't find one that works.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "On PC every page is loaded dynamically, so if you are at the Home page, only this one is loaded and only all pages are loaded when you go to the last one. There is no real reason I made it this way, I could have just load everything from the start but I wanted to learn Angular as much as I can.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "There are 2 main components in this page: an anchor and a routerOutlet. The first one loads and deletes the pages as you scroll, the second one loads the page you are viewing. I needed both in order to implement the animation that you see when navigating with the top buttons so this creates the illusion that the whole website is always loaded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 15vh;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\r\n    height: 20vh;\r\n    width: 100vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7RUFDYjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLHFDQUFxQzs7QUFDckM7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbi8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAud3JhcHBlciAuYWJvdXQtbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1tZSAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBtYXgoN3ZoLCA0MHB4KTtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LW1lIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjV2aCwgMjRweCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtbWUgLnRleHQge1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDd2aCwgNDBweCk7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjV2aCwgMjRweCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGV4dCB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIG1vYmlsZXMgKGxhbmRzY2FwZSBhbmQgcG9ydHJhaXQpICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAud3JhcHBlciAuYWJvdXQtbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAxNXZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LW1lIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtbWUgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1tZSAudGV4dCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGV4dCB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLmZpbGxlciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "OBt6":
/*!*************************************!*\
  !*** ./src/app/anchor.directive.ts ***!
  \*************************************/
/*! exports provided: AnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnchorDirective", function() { return AnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AnchorDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
AnchorDirective.ɵfac = function AnchorDirective_Factory(t) { return new (t || AnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnchorDirective, selectors: [["", "anchorHost", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[anchorHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "QGyZ":
/*!**********************************!*\
  !*** ./src/app/views.service.ts ***!
  \**********************************/
/*! exports provided: ViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsService", function() { return ViewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _anchor_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchor-item */ "2G7+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");







class ViewsService {
    constructor() {
        this.index = 0;
        this.anchorItems = [
            new _anchor_item__WEBPACK_IMPORTED_MODULE_1__["AnchorItem"](_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], {}),
            new _anchor_item__WEBPACK_IMPORTED_MODULE_1__["AnchorItem"](_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"], {}),
            new _anchor_item__WEBPACK_IMPORTED_MODULE_1__["AnchorItem"](_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], {}),
            new _anchor_item__WEBPACK_IMPORTED_MODULE_1__["AnchorItem"](_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], {})
        ];
        this.itemCount = this.anchorItems.length;
        this.itemEnd = false;
    }
    getViews() {
        return this.anchorItems;
    }
    getIndex() {
        return this.index;
    }
    increaseIndex() {
        this.index++;
        if (this.index == this.itemCount) {
            this.itemEnd = true;
        }
    }
    decreaseIndex() {
        this.index--;
        if (this.itemEnd) {
            this.itemEnd = false;
        }
    }
    itemEnded() {
        return this.itemEnd;
    }
}
ViewsService.ɵfac = function ViewsService_Factory(t) { return new (t || ViewsService)(); };
ViewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewsService, factory: ViewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


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
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchor.directive */ "OBt6");
/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views.service */ "QGyZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-arrow/scroll-arrow.component */ "URE3");









function AppComponent_ng_template_2_Template(rf, ctx) { }
class AppComponent {
    constructor(componentFactoryResolver, service, router, location) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.service = service;
        this.router = router;
        this.location = location;
        this.currentIndex = -1;
        this.loadThreshold = 0.1;
        this.totalWidth = 0;
        this.ended = false;
        this.pagesLoaded = 1;
        this.smartphoneVersion = false;
        this.views = service.getViews();
        this.viewsService = service;
    }
    ngOnInit() {
        let mainElement = document.getElementById("main");
        let currWidth = window.innerWidth;
        this.totalWidth = window.innerWidth + 1;
        if (mainElement != null && currWidth != null) {
            mainElement.style.width = currWidth + 1 + "px";
            this.clientWidth = currWidth;
            if (currWidth < 900) {
                this.smartphoneVersion = true;
            }
        }
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            homeButton.className = "hover-copy";
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
    }
    loadComponent() {
        if (!this.smartphoneVersion) {
            this.currentIndex = this.viewsService.getIndex();
            const anchorItem = this.views[this.currentIndex];
            this.viewsService.increaseIndex();
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(anchorItem.component);
            const viewContainerRef = this.anchorHost.viewContainerRef;
            this.containerRef = viewContainerRef;
            const componentRef = viewContainerRef.createComponent(componentFactory);
            this.componentRef = componentRef;
            componentRef.instance.data = anchorItem.data;
            this.totalWidth += this.clientWidth - 1;
            this.pagesLoaded++;
        }
    }
    onWheel(event) {
        if (this.smartphoneVersion) {
            this.smartphoneNavi(event.deltaY);
        }
        else {
            let parentElement = event.target;
            while (parentElement != null && parentElement.parentElement != null) {
                parentElement = parentElement.parentElement;
            }
            if (parentElement != null) {
                let delta;
                this.clientWidth == null ? delta = 50 : delta = this.clientWidth / 15;
                event.deltaY > 0 ? parentElement.scrollLeft += event.deltaY + delta : parentElement.scrollLeft += event.deltaY - 1 * delta;
                // ------------- HIGHLIGHT BUTTONS --------------------------------
                // ----- HOME BUTTON -----
                if (parentElement.scrollLeft + parentElement.clientWidth >= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.homeButton) {
                        this.homeButton.className = "button";
                    }
                }
                if (parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.homeButton) {
                        this.homeButton.className = "hover-copy";
                        this.router.navigate(['/home']);
                    }
                }
                // ----- HOME BUTTON -----
                // ----- ABOUT ME BUTTON -----
                if (parentElement.scrollLeft + parentElement.clientWidth <= parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
                    parentElement.scrollLeft + parentElement.clientWidth >= 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.aboutMeButton) {
                        this.aboutMeButton.className = "button";
                    }
                }
                if (parentElement.scrollLeft + parentElement.clientWidth > parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
                    parentElement.scrollLeft + parentElement.clientWidth < 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.aboutMeButton) {
                        this.aboutMeButton.className = "hover-copy";
                        this.router.navigate(['/about']);
                    }
                }
                // ----- ABOUT ME BUTTON -----
                // ----- EXPERIENCE BUTTON -----
                if (parentElement.scrollLeft + parentElement.clientWidth <= 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
                    parentElement.scrollLeft + parentElement.clientWidth >= 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.experienceButton) {
                        this.experienceButton.className = "button";
                    }
                }
                if (parentElement.scrollLeft + parentElement.clientWidth > 2 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
                    parentElement.scrollLeft + parentElement.clientWidth < 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.experienceButton) {
                        this.experienceButton.className = "hover-copy";
                        this.router.navigate(['/experience']);
                    }
                }
                // ----- EXPERIENCE BUTTON -----
                // ----- CONTACT BUTTON -----
                if (parentElement.scrollLeft + parentElement.clientWidth <= 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) ||
                    parentElement.scrollLeft + parentElement.clientWidth >= 4 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.contactButton) {
                        this.contactButton.className = "button";
                    }
                }
                if (parentElement.scrollLeft + parentElement.clientWidth > 3 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth) &&
                    parentElement.scrollLeft + parentElement.clientWidth < 4 * parentElement.clientWidth + (this.loadThreshold * parentElement.clientWidth)) {
                    if (this.contactButton) {
                        this.contactButton.className = "hover-copy";
                        this.router.navigate(['/contact']);
                    }
                }
                // ----- CONTACT BUTTON -----
                // ------------- HIGHLIGHT BUTTONS --------------------------------
                if (!this.ended && this.viewsService.getIndex() < 3 && parentElement.scrollLeft + parentElement.clientWidth >= this.totalWidth) {
                    this.loadComponent();
                    if (this.viewsService.itemEnded())
                        this.ended = true;
                }
                else if (parentElement.scrollLeft <= this.totalWidth - 2 * (parentElement.clientWidth - 1)) {
                    this.removeComponent();
                    this.ended = false;
                }
            }
        }
        event.preventDefault();
    }
    removeComponent() {
        if (this.containerRef != null) {
            let loadedItems = this.containerRef.length;
            if (loadedItems > 0) {
                this.containerRef.remove(loadedItems - 1);
                this.viewsService.decreaseIndex();
                this.totalWidth -= this.clientWidth - 1;
                this.pagesLoaded--;
            }
        }
    }
    onResize() {
        this.clientWidth = window.innerWidth;
        this.totalWidth = this.pagesLoaded * (window.innerWidth - 1);
        if (window.innerWidth < 900) {
            this.smartphoneVersion = true;
        }
        else {
            this.smartphoneVersion = false;
        }
    }
    onActivate(event) {
        let url = this.router.url;
        let loadedComponents = this.viewsService.getIndex();
        switch (url) {
            case '/about': {
                this.loadNComponents(1 - loadedComponents);
                break;
            }
            case '/experience': {
                this.loadNComponents(2 - loadedComponents);
                break;
            }
            case '/contact': {
                this.loadNComponents(3 - loadedComponents);
                break;
            }
        }
    }
    loadNComponents(components) {
        for (let i = 0; i < components; i++) {
            this.loadComponent();
        }
    }
    onSwipeLeft(event) {
        let parentElement = event.target;
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
        }
        parentElement.scrollTop = 0;
        if (this.smartphoneVersion) {
            this.smartphoneNavi(1);
        }
        else {
            let width = window.innerWidth;
            let loadedEvents = this.viewsService.getIndex();
            if (parentElement.scrollLeft < width) {
                if (loadedEvents < 1) {
                    this.loadComponent();
                }
                window.setTimeout(() => { this.router.navigate(['/about']); }, 110);
                for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
                    window.setTimeout(() => {
                        parentElement.scrollLeft = i;
                    }, 100);
                }
            }
            else if (parentElement.scrollLeft >= width && parentElement.scrollLeft < 2 * width) {
                if (loadedEvents < 2) {
                    this.loadComponent();
                }
                window.setTimeout(() => { this.router.navigate(['/experience']); }, 110);
                for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
                    window.setTimeout(() => {
                        parentElement.scrollLeft = i;
                    }, 100);
                }
            }
            else if (parentElement.scrollLeft >= 2 * width && parentElement.scrollLeft < 3 * width) {
                if (loadedEvents < 3) {
                    this.loadComponent();
                }
                window.setTimeout(() => { this.router.navigate(['/contact']); }, 110);
                for (let i = parentElement.scrollLeft; i <= 3 * width; i = i + 0.5) {
                    window.setTimeout(() => {
                        parentElement.scrollLeft = i;
                    }, 100);
                }
            }
        }
    }
    onSwipeRight(event) {
        let parentElement = event.target;
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
        }
        parentElement.scrollTop = 0;
        if (this.smartphoneVersion) {
            this.smartphoneNavi(-1);
        }
        else {
            let width = window.innerWidth;
            if (parentElement.scrollLeft >= width && parentElement.scrollLeft < 2 * width) {
                window.setTimeout(() => { this.router.navigate(['/home']); }, 190);
                let accumulated = 0;
                for (let i = parentElement.scrollLeft; i >= 0; i = i - 0.5) {
                    accumulated += 0.5;
                    if (accumulated / width == 1 && accumulated > 0) {
                        accumulated = 0;
                        window.setTimeout(() => { this.removeComponent(); }, 150);
                    }
                    window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                }
            }
            else if (parentElement.scrollLeft >= 2 * width && parentElement.scrollLeft < 3 * width) {
                window.setTimeout(() => { this.router.navigate(['/about']); }, 190);
                let accumulated = 0;
                for (let i = parentElement.scrollLeft; i >= width; i = i - 0.5) {
                    accumulated += 0.5;
                    if (accumulated / width == 1 && accumulated > 0) {
                        accumulated = 0;
                        window.setTimeout(() => { this.removeComponent(); }, 150);
                    }
                    window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                }
            }
            else if (parentElement.scrollLeft >= 3 * width && parentElement.scrollLeft < 4 * width) {
                window.setTimeout(() => { this.router.navigate(['/experience']); }, 190);
                let accumulated = 0;
                for (let i = parentElement.scrollLeft; i >= 2 * width; i = i - 0.5) {
                    accumulated += 0.5;
                    if (accumulated / width == 1 && accumulated > 0) {
                        accumulated = 0;
                        window.setTimeout(() => { this.removeComponent(); }, 150);
                    }
                    window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                }
            }
        }
    }
    smartphoneNavi(delta) {
        let rightMove = false;
        if (delta > 0) {
            rightMove = true;
        }
        if (this.homeButton.className == 'hover-copy') {
            if (rightMove) {
                this.router.navigate(['/about']);
            }
        }
        else if (this.aboutMeButton.className == 'hover-copy') {
            if (rightMove) {
                this.router.navigate(['/experience']);
            }
            else {
                this.router.navigate(['/home']);
            }
        }
        else if (this.experienceButton.className == 'hover-copy') {
            if (rightMove) {
                this.router.navigate(['/contact']);
            }
            else {
                this.router.navigate(['/about']);
            }
        }
        else if (this.contactButton.className == 'hover-copy') {
            if (!rightMove) {
                this.router.navigate(['/experience']);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_views_service__WEBPACK_IMPORTED_MODULE_2__["ViewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.anchorHost = _t.first);
    } }, inputs: { views: "views", viewsService: "viewsService" }, decls: 5, vars: 0, consts: [["id", "main", 1, "main", 3, "wheel", "resize", "swipeleft", "swiperight"], [3, "loadComponent", "removeComponent"], ["anchorHost", ""], ["draggable", "true", 3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function AppComponent_Template_div_wheel_0_listener($event) { return ctx.onWheel($event); })("resize", function AppComponent_Template_div_resize_0_listener() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("swipeleft", function AppComponent_Template_div_swipeleft_0_listener($event) { return ctx.onSwipeLeft($event); })("swiperight", function AppComponent_Template_div_swiperight_0_listener($event) { return ctx.onSwipeRight($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loadComponent", function AppComponent_Template_app_header_loadComponent_1_listener() { return ctx.loadComponent(); })("removeComponent", function AppComponent_Template_app_header_removeComponent_1_listener() { return ctx.removeComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_3_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-scroll-arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_6__["ScrollArrowComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  height: 100vh;\r\n  display: inline-flex;\r\n  touch-action: pan-y !important;\r\n}\r\n\r\n.main-blur[_ngcontent-%COMP%] {\r\n  color: lightgray;\r\n  height: 100vh;\r\n  display: inline-flex;\r\n  filter: blur(8px);\r\n  -webkit-filter: blur(8px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLWJsdXIge1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _views_service__WEBPACK_IMPORTED_MODULE_2__["ViewsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, { views: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewsService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], anchorHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "URE3":
/*!********************************************************!*\
  !*** ./src/app/scroll-arrow/scroll-arrow.component.ts ***!
  \********************************************************/
/*! exports provided: ScrollArrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollArrowComponent", function() { return ScrollArrowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollArrowComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScrollArrowComponent.ɵfac = function ScrollArrowComponent_Factory(t) { return new (t || ScrollArrowComponent)(); };
ScrollArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollArrowComponent, selectors: [["app-scroll-arrow"]], decls: 7, vars: 0, consts: [[1, "box"], [1, "tip"], [1, "arrow"]], template: function ScrollArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Try gestures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (min-width: 850px) {\r\n  .box[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: max(13%, 100px);\r\n    left: 86.5%;\r\n  }\r\n\r\n  .box[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    color: #363945;\r\n    font-size: max(2vh, 16px);\r\n    display: inline-block;\r\n  }\r\n  .box[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: max(7%, 50px);\r\n    left: 89%;\r\n    transform: translate(-50%,-50%);\r\n  }\r\n  .box[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      float: left;\r\n      width: max(1.5vh, 16px);\r\n      height: max(1.5vh, 16px);\r\n      border-bottom: 5px solid #06A8FF;\r\n      border-right: 5px solid #06A8FF;\r\n      transform: rotate(-45deg);\r\n      animation: animate 2s infinite;\r\n  }\r\n  .box[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n      animation-delay: -0.2s;\r\n  }\r\n  .box[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n      animation-delay: -0.4s;\r\n  }\r\n  @keyframes animate {\r\n      0%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(-20px,-20px);\r\n      }\r\n      50%{\r\n          opacity: 1;\r\n      }\r\n      100%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(20px,20px);\r\n      }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .arrow[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 90%;\r\n    left: 87%;\r\n    transform: translate(-50%,-50%);\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      float: left;\r\n      width: 1.5vh;\r\n      height: 1.5vh;\r\n      border-bottom: 4px solid #06A8FF;\r\n      border-right: 4px solid #06A8FF;\r\n      transform: rotate(-45deg);\r\n      animation: animate 2s infinite;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n      animation-delay: -0.2s;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n      animation-delay: -0.4s;\r\n  }\r\n  @keyframes animate {\r\n      0%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(-20px,-20px);\r\n      }\r\n      50%{\r\n          opacity: 1;\r\n      }\r\n      100%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(20px,20px);\r\n      }\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1hcnJvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsU0FBUztJQUNULCtCQUErQjtFQUNqQztFQUNBO01BQ0ksV0FBVztNQUNYLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIsZ0NBQWdDO01BQ2hDLCtCQUErQjtNQUMvQix5QkFBeUI7TUFDekIsOEJBQThCO0VBQ2xDO0VBQ0E7TUFDSSxzQkFBc0I7RUFDMUI7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBO01BQ0k7VUFDSSxVQUFVO1VBQ1YsZ0RBQWdEO01BQ3BEO01BQ0E7VUFDSSxVQUFVO01BQ2Q7TUFDQTtVQUNJLFVBQVU7VUFDViw4Q0FBOEM7TUFDbEQ7RUFDSjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7RUFDakM7RUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLGdDQUFnQztNQUNoQywrQkFBK0I7TUFDL0IseUJBQXlCO01BQ3pCLDhCQUE4QjtFQUNsQztFQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0E7TUFDSSxzQkFBc0I7RUFDMUI7RUFDQTtNQUNJO1VBQ0ksVUFBVTtVQUNWLGdEQUFnRDtNQUNwRDtNQUNBO1VBQ0ksVUFBVTtNQUNkO01BQ0E7VUFDSSxVQUFVO1VBQ1YsOENBQThDO01BQ2xEO0VBQ0o7QUFDRiIsImZpbGUiOiJzY3JvbGwtYXJyb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiBtYXgoMTMlLCAxMDBweCk7XHJcbiAgICBsZWZ0OiA4Ni41JTtcclxuICB9XHJcblxyXG4gIC5ib3ggLnRpcCB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IG1heCgydmgsIDE2cHgpO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuYm94IC5hcnJvd3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogbWF4KDclLCA1MHB4KTtcclxuICAgIGxlZnQ6IDg5JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgfVxyXG4gIC5ib3ggLmFycm93IHNwYW57XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogbWF4KDEuNXZoLCAxNnB4KTtcclxuICAgICAgaGVpZ2h0OiBtYXgoMS41dmgsIDE2cHgpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzA2QThGRjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzA2QThGRjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuYm94IC5hcnJvdyBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICB9XHJcbiAgLmJveCAuYXJyb3cgc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAgIDAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC0yMHB4LC0yMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA1MCV7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMjBweCwyMHB4KTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5hcnJvd3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogOTAlO1xyXG4gICAgbGVmdDogODclO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB9XHJcbiAgLmFycm93IHNwYW57XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogMS41dmg7XHJcbiAgICAgIGhlaWdodDogMS41dmg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICBhbmltYXRpb246IGFuaW1hdGUgMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5hcnJvdyBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICB9XHJcbiAgLmFycm93IHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgICAwJXtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwtMjBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDIwcHgsMjBweCk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollArrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-arrow',
                templateUrl: './scroll-arrow.component.html',
                styleUrls: ['./scroll-arrow.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-arrow/scroll-arrow.component */ "URE3");
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./anchor.directive */ "OBt6");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);


















class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            swipe: { direction: hammerjs__WEBPACK_IMPORTED_MODULE_15__["DIRECTION_ALL"] },
        };
    }
}
MyHammerConfig.ɵfac = function MyHammerConfig_Factory(t) { return ɵMyHammerConfig_BaseFactory(t || MyHammerConfig); };
MyHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MyHammerConfig, factory: MyHammerConfig.ɵfac });
const ɵMyHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MyHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: MyHammerConfig
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_9__["AngularTypewriterEffectModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"],
        _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_10__["ScrollArrowComponent"],
        _anchor_directive__WEBPACK_IMPORTED_MODULE_11__["AnchorDirective"],
        _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_12__["AboutMeComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_9__["AngularTypewriterEffectModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"],
                    _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_10__["ScrollArrowComponent"],
                    _anchor_directive__WEBPACK_IMPORTED_MODULE_11__["AnchorDirective"],
                    _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_12__["AboutMeComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_9__["AngularTypewriterEffectModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
                ],
                providers: [{
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: MyHammerConfig
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
        let width = window.innerWidth;
        let parentElement = document.getElementById("main");
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
        }
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
        if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
            this.homeButton.className = "button";
            this.aboutMeButton.className = "button";
            this.experienceButton.className = "button";
            this.contactButton.className = "hover-copy";
        }
        if (parentElement != null && parentElement.scrollLeft % width == 0 && width > 900) {
            for (let i = parentElement.scrollLeft; i <= 3 * width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 7, vars: 0, consts: [[1, "wrapper"], [1, "contact"], [1, "title"], [1, "subtitle"], [1, "text"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 30vw;\r\n    float: left;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: max(7vh, 40px);\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: max(2.5vh, 24px);\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    margin-right: 10vw;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 15vh;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 7vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .wrapper[_ngcontent-%COMP%]   .about-page[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\r\n    height: 20vh;\r\n    width: 100vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxxQ0FBcUM7O0FBQ3JDO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEscUNBQXFDOztBQUNyQztFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLndyYXBwZXIgLmNvbnRhY3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5jb250YWN0IC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCg3dmgsIDQwcHgpO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuY29udGFjdCAuc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBtYXgoMi41dmgsIDI0cHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiBkaW1ncmF5O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmNvbnRhY3QgLnRleHQge1xyXG4gICAgd2lkdGg6IDM1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDd2aCwgNDBweCk7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjV2aCwgMjRweCk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGV4dCB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDd2aDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICB9XHJcbn1cclxuXHJcbi8qIG1vYmlsZXMgKGxhbmRzY2FwZSBhbmQgcG9ydHJhaXQpICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAud3JhcHBlciAuY29udGFjdCB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuY29udGFjdCAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmNvbnRhY3QgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5jb250YWN0IC50ZXh0IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwdnc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIgLmFib3V0LXBhZ2UgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC53cmFwcGVyIC5hYm91dC1wYWdlIC50ZXh0IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlciAuYWJvdXQtcGFnZSAuZmlsbGVyIHtcclxuICAgIGhlaWdodDogMjB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _views_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views.service */ "QGyZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HeaderComponent {
    constructor(service) {
        this.service = service;
        this.loadComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.smartphoneVersion = false;
        this.viewsService = service;
    }
    ngOnInit() {
        if (window.innerWidth < 900) {
            this.smartphoneVersion = true;
        }
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about");
        if (aboutMeButton != null) {
            this.aboutMeButton = aboutMeButton;
        }
        let experienceButton = document.getElementById("experience");
        if (experienceButton != null) {
            this.experienceButton = experienceButton;
        }
        let contactButton = document.getElementById("contact");
        if (contactButton != null) {
            this.contactButton = contactButton;
        }
    }
    onClick(event) {
        let width = window.innerWidth;
        let parentElement = event.target;
        let loadedEvents = this.viewsService.getIndex();
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
            if (!this.mainView && parentElement.id == "main") {
                this.mainView = parentElement;
            }
        }
        if (this.mainView && !this.smartphoneVersion) {
            this.mainView.className = "main-blur";
            console.log(this.mainView);
        }
        switch (event.target.id) {
            case 'home': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "hover-copy";
                    this.aboutMeButton.className = "button";
                    this.experienceButton.className = "button";
                    this.contactButton.className = "button";
                }
                if (parentElement.scrollLeft > 0 && !this.smartphoneVersion) {
                    let accumulated = 0;
                    for (let i = parentElement.scrollLeft; i >= 0; i = i - 0.5) {
                        accumulated += 0.5;
                        if (accumulated / width == 1 && accumulated > 0) {
                            accumulated = 0;
                            window.setTimeout(() => { this.removeComponent.next('removeComponent'); }, 150);
                        }
                        window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                    }
                }
                break;
            }
            case 'about': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "hover-copy";
                    this.experienceButton.className = "button";
                    this.contactButton.className = "button";
                }
                if (!this.smartphoneVersion) {
                    if (parentElement.scrollLeft > width) {
                        let accumulated = 0;
                        for (let i = parentElement.scrollLeft; i >= width; i = i - 0.5) {
                            accumulated += 0.5;
                            if (accumulated / width == 1 && accumulated > 0) {
                                accumulated = 0;
                                window.setTimeout(() => { this.removeComponent.next('removeComponent'); }, 150);
                            }
                            window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                        }
                    }
                    else {
                        if (loadedEvents < 1) {
                            this.loadComponent.next('loadComponent');
                        }
                        for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
                            window.setTimeout(() => {
                                parentElement.scrollLeft = i;
                            }, 100);
                        }
                    }
                }
                break;
            }
            case 'experience': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "button";
                    this.experienceButton.className = "hover-copy";
                    this.contactButton.className = "button";
                }
                if (!this.smartphoneVersion) {
                    if (parentElement.scrollLeft > 2 * width) {
                        let accumulated = 0;
                        for (let i = parentElement.scrollLeft; i >= 2 * width; i = i - 0.5) {
                            accumulated += 0.5;
                            if (accumulated / width == 1 && accumulated > 0) {
                                accumulated = 0;
                                window.setTimeout(() => { this.removeComponent.next('removeComponent'); }, 150);
                            }
                            window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                        }
                    }
                    else {
                        if (loadedEvents < 2) {
                            for (let i = loadedEvents; i < 2; i++) {
                                this.loadComponent.next('loadComponent');
                            }
                        }
                        for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
                            window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                        }
                    }
                }
                break;
            }
            case 'contact': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "button";
                    this.experienceButton.className = "button";
                    this.contactButton.className = "hover-copy";
                }
                if (!this.smartphoneVersion) {
                    if (parentElement.scrollLeft > 3 * width) {
                        for (let i = parentElement.scrollLeft; i >= 3 * width; i = i - 0.5) {
                            window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                        }
                    }
                    else {
                        if (loadedEvents < 3) {
                            for (let i = loadedEvents; this.viewsService.getIndex() < 3; i++) {
                                this.loadComponent.next('loadComponent');
                            }
                        }
                        for (let i = parentElement.scrollLeft; i <= 3 * width; i = i + 0.5) {
                            window.setTimeout(() => { parentElement.scrollLeft = i; }, 100);
                        }
                    }
                }
                break;
            }
            default: {
                console.log("nope");
            }
        }
        if (this.mainView && !this.smartphoneVersion) {
            window.setTimeout(() => { this.mainView.className = "main"; }, 200);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_views_service__WEBPACK_IMPORTED_MODULE_1__["ViewsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { viewsService: "viewsService" }, outputs: { loadComponent: "loadComponent", removeComponent: "removeComponent" }, decls: 10, vars: 0, consts: [[1, "site-header"], [1, "navigation"], ["id", "home", "routerLink", "/home", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "about", "routerLink", "/about", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "experience", "routerLink", "/experience", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "contact", "routerLink", "/contact", "routerLinkActive", "active", 1, "button", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ABOUT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " EXPERIENCE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_8_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " CONTACT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@media only screen and (min-width: 850px) {\r\n  .site-header[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 7vh;\r\n    position: fixed;\r\n    top: 0;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 10vw;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    color: #363945;\r\n    font-size: max(2.2vh, 16px);\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .hover-copy[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    font-size: max(2.2vh, 16px);\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .site-header[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 7vh;\r\n    position: fixed;\r\n    background-color: lightgray;\r\n    top: 0;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 10vw;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    color: #363945;\r\n    font-size: max(2.2vh, 16px);\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .hover-copy[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    font-size: max(2.2vh, 16px);\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdDQUF3QztJQUN4Qyx5QkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsTUFBTTtFQUNSOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLHlCQUFpQjtZQUFqQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcclxuICAuc2l0ZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA3dmg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2l0ZS1oZWFkZXIgLm5hdmlnYXRpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5idXR0b24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxdmggMnZ3O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjJ2aCwgMTZweCk7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5ob3Zlci1jb3B5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMXZoIDJ2dztcclxuICAgIGZvbnQtc2l6ZTogbWF4KDIuMnZoLCAxNnB4KTtcclxuICAgIGZvbnQtZmFtaWx5OiBCYXJsb3cgQ29uZGVuc2VkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggcmdiKDcxLCA3MSwgNzEpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLnNpdGUtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTB2dztcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcblxyXG4gIC5zaXRlLWhlYWRlciAubmF2aWdhdGlvbiAuYnV0dG9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMXZoIDJ2dztcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgZm9udC1zaXplOiBtYXgoMi4ydmgsIDE2cHgpO1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdyBDb25kZW5zZWQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcblxyXG4gIC5zaXRlLWhlYWRlciAubmF2aWdhdGlvbiAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCByZ2IoNzEsIDcxLCA3MSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zaXRlLWhlYWRlciAubmF2aWdhdGlvbiAuaG92ZXItY29weSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDF2aCAydnc7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjJ2aCwgMTZweCk7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _views_service__WEBPACK_IMPORTED_MODULE_1__["ViewsService"] }]; }, { viewsService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "1fes");








const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'about',
        component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"],
    },
    {
        path: 'experience',
        component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"],
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' });
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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