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
        let aboutMeButton = document.getElementById("about-me");
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
        if (parentElement != null && parentElement.scrollLeft % width == 0) {
            for (let i = parentElement.scrollLeft; i <= 2 * width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 8, vars: 0, consts: [[1, "resume"], [1, "title"], [1, "text"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Experience placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I have experience working on web applications, specifically in backend development but, althought I already knew the basics, I wanted to try to learn in more depth about frontend development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " When I am coding, I always try to write efficient algorithms but if the problem requires only a good enough solution, I rather sacrifice some performance in order to improve legibility and maintainability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".test[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  width: 100vw;\r\n  display: inline-table;\r\n  background-color: white;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n  font-family: Barlow;\r\n  padding-left: 10vw;\r\n  padding-top: 20vh;\r\n  width: 90vw;\r\n  display: inline-table;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-size: 7vh;\r\n  color: #363945;\r\n  height: 7vh;\r\n  font-weight: 700;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 35vw;\r\n  height: auto;\r\n  margin-top: 15vh;\r\n  color: #363945;\r\n  font-size: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVzdW1lIHtcclxuICBmb250LWZhbWlseTogQmFybG93O1xyXG4gIHBhZGRpbmctbGVmdDogMTB2dztcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbn1cclxuXHJcbi5yZXN1bWUgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDd2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucmVzdW1lIC50ZXh0IHtcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBmb250LXNpemU6IDJ2aDtcclxufSJdfQ== */"] });
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
        let aboutMeButton = document.getElementById("about-me");
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 0, consts: [[1, "presentation"], [1, "name"], [1, "subtitle"], [1, "developer"], [1, "letter"], [1, "greetings"], [1, "about-me"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Roberto Jim\u00E9nez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Junior Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Greetings,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My name is Roberto Jim\u00E9nez L\u00F3pez and I am an IT graduate from the Polytechnic University of Madrid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This page is a brief resume of my skills and knowledge so you can get to know a bit about me:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I consider myself a very motivated person and I always try to learn something new, as proof of this there is the page you are looking at, I hope you like it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (min-width: 850px) {\r\n  .presentation[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 20vh;\r\n    width: 90vw;\r\n    display: inline-table;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-size: 7vh;\r\n    color: #363945;\r\n    height: 7vh;\r\n    font-weight: 700;\r\n  }\r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 2.5vh;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .developer[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\r\n    width: 35vw;\r\n    height: auto;\r\n    margin-top: 15vh;\r\n    color: #363945;\r\n    font-size: 2vh;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .greetings[_ngcontent-%COMP%] {\r\n    margin-bottom: 6vh;\r\n  }\r\n\r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n  }\r\n  \r\n  .tw[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .presentation[_ngcontent-%COMP%] {\r\n    font-family: Barlow;\r\n    padding-left: 10vw;\r\n    padding-top: 15vh;\r\n    width: 100vw;\r\n    display: inline-table;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #363945;\r\n    height: 28px;\r\n    font-weight: 700;\r\n  }\r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    color: dimgray;\r\n    margin-top: 1vh;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .developer[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-left: 10px;\r\n  }\r\n  \r\n  .presentation[_ngcontent-%COMP%]   .letter[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    height: auto;\r\n    margin-top: 10vh;\r\n    color: #363945;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .tw[_ngcontent-%COMP%] {\r\n    float: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5wcmVzZW50YXRpb24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEJhcmxvdztcclxuICAgIHBhZGRpbmctbGVmdDogMTB2dztcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVzZW50YXRpb24gLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiA3dmg7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLnByZXNlbnRhdGlvbiAuc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyLjV2aDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogZGltZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAuc3VidGl0bGUgLmRldmVsb3BlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAubGV0dGVyIHtcclxuICAgIHdpZHRoOiAzNXZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgZm9udC1zaXplOiAydmg7XHJcbiAgfVxyXG5cclxuICAucHJlc2VudGF0aW9uIC5sZXR0ZXIgLmdyZWV0aW5ncyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2dmg7XHJcbiAgfVxyXG5cclxuICAucHJlc2VudGF0aW9uIC5sZXR0ZXIgLmFib3V0LW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAudHcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBtb2JpbGVzIChsYW5kc2NhcGUgYW5kIHBvcnRyYWl0KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgLnByZXNlbnRhdGlvbiB7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDE1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVzZW50YXRpb24gLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzNjM5NDU7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAucHJlc2VudGF0aW9uIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmVzZW50YXRpb24gLnN1YnRpdGxlIC5kZXZlbG9wZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByZXNlbnRhdGlvbiAubGV0dGVyIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIGNvbG9yOiAjMzYzOTQ1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAudHcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
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
/* harmony import */ var _anchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anchor.directive */ "OBt6");



function AboutMeComponent_ng_template_8_Template(rf, ctx) { }
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
        let aboutMeButton = document.getElementById("about-me");
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
        if (parentElement != null && parentElement.scrollLeft % width == 0) {
            for (let i = parentElement.scrollLeft; i <= width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 9, vars: 0, consts: [[1, "resume"], [1, "title"], [1, "text"], ["anchorHost", ""]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutMeComponent_ng_template_8_Template, 0, 0, "ng-template", 3);
    } }, directives: [_anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"]], styles: [".test[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  width: 100vw;\r\n  display: inline-table;\r\n  background-color: white;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n  font-family: Barlow;\r\n  padding-left: 10vw;\r\n  padding-top: 20vh;\r\n  width: 90vw;\r\n  display: inline-table;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-size: 7vh;\r\n  color: #363945;\r\n  height: 7vh;\r\n  font-weight: 700;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 35vw;\r\n  height: auto;\r\n  margin-top: 15vh;\r\n  color: #363945;\r\n  font-size: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7QUFDaEIiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0IHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yZXN1bWUge1xyXG4gIGZvbnQtZmFtaWx5OiBCYXJsb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxufVxyXG5cclxuLnJlc3VtZSAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogN3ZoO1xyXG4gIGNvbG9yOiAjMzYzOTQ1O1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5yZXN1bWUgLnRleHQge1xyXG4gIHdpZHRoOiAzNXZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIGNvbG9yOiAjMzYzOTQ1O1xyXG4gIGZvbnQtc2l6ZTogMnZoO1xyXG59Il19 */"] });
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
        this.scrollLeftVal = -1;
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
        let aboutMeButton = document.getElementById("about-me");
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
        console.log("loadComponent");
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
                this.scrollLeftVal = parentElement.scrollLeft;
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
                        this.router.navigate(['/about-me']);
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
    }
    onActivate(event) {
        let url = this.router.url;
        let loadedComponents = this.viewsService.getIndex();
        switch (url) {
            case '/about-me': {
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
        if (this.smartphoneVersion) {
            this.smartphoneNavi(1);
        }
        else {
            let width = window.innerWidth;
            let parentElement = event.target;
            let loadedEvents = this.viewsService.getIndex();
            while (parentElement != null && parentElement.parentElement != null) {
                parentElement = parentElement.parentElement;
            }
            if (parentElement.scrollLeft < width) {
                if (loadedEvents < 1) {
                    this.loadComponent();
                }
                window.setTimeout(() => { this.router.navigate(['/about-me']); }, 110);
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
        if (this.smartphoneVersion) {
            this.smartphoneNavi(-1);
        }
        else {
            let width = window.innerWidth;
            let parentElement = event.target;
            let loadedEvents = this.viewsService.getIndex();
            while (parentElement != null && parentElement.parentElement != null) {
                parentElement = parentElement.parentElement;
            }
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
                window.setTimeout(() => { this.router.navigate(['/about-me']); }, 190);
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
                this.router.navigate(['/about-me']);
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
                this.router.navigate(['/about-me']);
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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _anchor_directive__WEBPACK_IMPORTED_MODULE_1__["AnchorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _scroll_arrow_scroll_arrow_component__WEBPACK_IMPORTED_MODULE_6__["ScrollArrowComponent"]], styles: [".main[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  height: 100vh;\r\n  display: inline-flex;\r\n}\r\n\r\n.main-blur[_ngcontent-%COMP%] {\r\n  color: lightgray;\r\n  height: 100vh;\r\n  display: inline-flex;\r\n  filter: blur(0px);\r\n  -webkit-filter: blur(0px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubWFpbi1ibHVyIHtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcclxufSJdfQ== */"] });
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
ScrollArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollArrowComponent, selectors: [["app-scroll-arrow"]], decls: 4, vars: 0, consts: [[1, "arrow"]], template: function ScrollArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (min-width: 850px) {\r\n  .arrow[_ngcontent-%COMP%]{\r\n      position: fixed;\r\n      top: 90%;\r\n      left: 90%;\r\n      transform: translate(-50%,-50%);\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      float: left;\r\n      width: 1vw;\r\n      height: 1vw;\r\n      border-bottom: 5px solid #06A8FF;\r\n      border-right: 5px solid #06A8FF;\r\n      transform: rotate(-45deg);\r\n      animation: animate 2s infinite;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n      animation-delay: -0.2s;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n      animation-delay: -0.4s;\r\n  }\r\n  @keyframes animate {\r\n      0%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(-20px,-20px);\r\n      }\r\n      50%{\r\n          opacity: 1;\r\n      }\r\n      100%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(20px,20px);\r\n      }\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .arrow[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    top: 90%;\r\n    left: 87%;\r\n    transform: translate(-50%,-50%);\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n      float: left;\r\n      width: 1vw;\r\n      height: 1vw;\r\n      border-bottom: 5px solid #06A8FF;\r\n      border-right: 5px solid #06A8FF;\r\n      transform: rotate(-45deg);\r\n      animation: animate 2s infinite;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){\r\n      animation-delay: -0.2s;\r\n  }\r\n  .arrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n      animation-delay: -0.4s;\r\n  }\r\n  @keyframes animate {\r\n      0%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(-20px,-20px);\r\n      }\r\n      50%{\r\n          opacity: 1;\r\n      }\r\n      100%{\r\n          opacity: 0;\r\n          transform: rotate(-45deg) translate(20px,20px);\r\n      }\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1hcnJvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7TUFDSSxlQUFlO01BQ2YsUUFBUTtNQUNSLFNBQVM7TUFDVCwrQkFBK0I7RUFDbkM7RUFDQTtNQUNJLFdBQVc7TUFDWCxVQUFVO01BQ1YsV0FBVztNQUNYLGdDQUFnQztNQUNoQywrQkFBK0I7TUFDL0IseUJBQXlCO01BQ3pCLDhCQUE4QjtFQUNsQztFQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0E7TUFDSSxzQkFBc0I7RUFDMUI7RUFDQTtNQUNJO1VBQ0ksVUFBVTtVQUNWLGdEQUFnRDtNQUNwRDtNQUNBO1VBQ0ksVUFBVTtNQUNkO01BQ0E7VUFDSSxVQUFVO1VBQ1YsOENBQThDO01BQ2xEO0VBQ0o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0VBQ2pDO0VBQ0E7TUFDSSxXQUFXO01BQ1gsVUFBVTtNQUNWLFdBQVc7TUFDWCxnQ0FBZ0M7TUFDaEMsK0JBQStCO01BQy9CLHlCQUF5QjtNQUN6Qiw4QkFBOEI7RUFDbEM7RUFDQTtNQUNJLHNCQUFzQjtFQUMxQjtFQUNBO01BQ0ksc0JBQXNCO0VBQzFCO0VBQ0E7TUFDSTtVQUNJLFVBQVU7VUFDVixnREFBZ0Q7TUFDcEQ7TUFDQTtVQUNJLFVBQVU7TUFDZDtNQUNBO1VBQ0ksVUFBVTtVQUNWLDhDQUE4QztNQUNsRDtFQUNKO0FBQ0YiLCJmaWxlIjoic2Nyb2xsLWFycm93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XHJcbiAgLmFycm93e1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIHRvcDogOTAlO1xyXG4gICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgfVxyXG4gIC5hcnJvdyBzcGFue1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDF2dztcclxuICAgICAgaGVpZ2h0OiAxdnc7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICBhbmltYXRpb246IGFuaW1hdGUgMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5hcnJvdyBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICB9XHJcbiAgLmFycm93IHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgICAwJXtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwtMjBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDIwcHgsMjBweCk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAuYXJyb3d7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIGxlZnQ6IDg3JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgfVxyXG4gIC5hcnJvdyBzcGFue1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgd2lkdGg6IDF2dztcclxuICAgICAgaGVpZ2h0OiAxdnc7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjMDZBOEZGO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICBhbmltYXRpb246IGFuaW1hdGUgMnMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5hcnJvdyBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICB9XHJcbiAgLmFycm93IHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgICAwJXtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtMjBweCwtMjBweCk7XHJcbiAgICAgIH1cclxuICAgICAgNTAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAle1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDIwcHgsMjBweCk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
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
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
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
                providers: [],
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
        let aboutMeButton = document.getElementById("about-me");
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
        if (parentElement != null && parentElement.scrollLeft % width == 0) {
            for (let i = parentElement.scrollLeft; i <= 3 * width; i = i + 0.5) {
                parentElement.scrollLeft = i;
            }
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 8, vars: 0, consts: [[1, "resume"], [1, "title"], [1, "text"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I have experience working on web applications, specifically in backend development but, althought I already knew the basics, I wanted to try to learn in more depth about frontend development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " When I am coding, I always try to write efficient algorithms but if the problem requires only a good enough solution, I rather sacrifice some performance in order to improve legibility and maintainability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".test[_ngcontent-%COMP%] {\r\n  height: 500px;\r\n  width: 100vw;\r\n  display: inline-table;\r\n  background-color: white;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%] {\r\n  font-family: Barlow;\r\n  padding-left: 10vw;\r\n  padding-top: 20vh;\r\n  width: 90vw;\r\n  display: inline-table;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  font-size: 7vh;\r\n  color: #363945;\r\n  height: 7vh;\r\n  font-weight: 700;\r\n}\r\n\r\n.resume[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n  width: 35vw;\r\n  height: auto;\r\n  margin-top: 15vh;\r\n  color: #363945;\r\n  font-size: 2vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucmVzdW1lIHtcclxuICBmb250LWZhbWlseTogQmFybG93O1xyXG4gIHBhZGRpbmctbGVmdDogMTB2dztcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbn1cclxuXHJcbi5yZXN1bWUgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDd2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucmVzdW1lIC50ZXh0IHtcclxuICB3aWR0aDogMzV2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBjb2xvcjogIzM2Mzk0NTtcclxuICBmb250LXNpemU6IDJ2aDtcclxufSJdfQ== */"] });
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
        this.viewsService = service;
    }
    ngOnInit() {
        let homeButton = document.getElementById("home");
        if (homeButton != null) {
            this.homeButton = homeButton;
        }
        let aboutMeButton = document.getElementById("about-me");
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
        console.log(width);
        let parentElement = event.target;
        let loadedEvents = this.viewsService.getIndex();
        while (parentElement != null && parentElement.parentElement != null) {
            parentElement = parentElement.parentElement;
            if (!this.mainView && parentElement.id == "main") {
                this.mainView = parentElement;
            }
        }
        if (this.mainView) {
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
                if (parentElement.scrollLeft > 0) {
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
            case 'about-me': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "hover-copy";
                    this.experienceButton.className = "button";
                    this.contactButton.className = "button";
                }
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
                break;
            }
            case 'experience': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "button";
                    this.experienceButton.className = "hover-copy";
                    this.contactButton.className = "button";
                }
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
                break;
            }
            case 'contact': {
                if (this.homeButton && this.aboutMeButton && this.experienceButton && this.contactButton) {
                    this.homeButton.className = "button";
                    this.aboutMeButton.className = "button";
                    this.experienceButton.className = "button";
                    this.contactButton.className = "hover-copy";
                }
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
                break;
            }
            default: {
                console.log("nope");
            }
        }
        if (this.mainView) {
            window.setTimeout(() => { this.mainView.className = "main"; }, 200);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_views_service__WEBPACK_IMPORTED_MODULE_1__["ViewsService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { viewsService: "viewsService" }, outputs: { loadComponent: "loadComponent", removeComponent: "removeComponent" }, decls: 10, vars: 0, consts: [[1, "site-header"], [1, "navigation"], ["id", "home", "routerLink", "/home", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "about-me", "routerLink", "/about-me", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "experience", "routerLink", "/experience", "routerLinkActive", "active", 1, "button", 3, "click"], ["id", "contact", "routerLink", "/contact", "routerLinkActive", "active", 1, "button", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ABOUT ME ");
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["@media only screen and (min-width: 850px) {\r\n  .site-header[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 7vh;\r\n    position: fixed;\r\n    top: 0;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 10vw;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    color: #363945;\r\n    font-size: 2.2vh;\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .hover-copy[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    font-size: 2.2vh;\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 850px) {\r\n  .site-header[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 7vh;\r\n    position: fixed;\r\n    top: 0;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 10vw;\r\n    margin-top: 1vh;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    color: #363945;\r\n    font-size: 2.2vh;\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n\r\n  .site-header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .hover-copy[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 1vh 2vw;\r\n    font-size: 2.2vh;\r\n    font-family: Barlow Condensed;\r\n    font-weight: 300;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    color: black;\r\n    text-shadow: 0px 0px 1px rgb(71, 71, 71);\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdDQUF3QztJQUN4Qyx5QkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdDQUF3QztJQUN4Qyx5QkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMseUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCkge1xyXG4gIC5zaXRlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zaXRlLWhlYWRlciAubmF2aWdhdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAuc2l0ZS1oZWFkZXIgLm5hdmlnYXRpb24gLmJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDF2aCAydnc7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGZvbnQtc2l6ZTogMi4ydmg7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5ob3Zlci1jb3B5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMXZoIDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMi4ydmg7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gIC5zaXRlLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zaXRlLWhlYWRlciAubmF2aWdhdGlvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgfVxyXG5cclxuICAuc2l0ZS1oZWFkZXIgLm5hdmlnYXRpb24gLmJ1dHRvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDF2aCAydnc7XHJcbiAgICBjb2xvcjogIzM2Mzk0NTtcclxuICAgIGZvbnQtc2l6ZTogMi4ydmg7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnNpdGUtaGVhZGVyIC5uYXZpZ2F0aW9uIC5ob3Zlci1jb3B5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMXZoIDJ2dztcclxuICAgIGZvbnQtc2l6ZTogMi4ydmg7XHJcbiAgICBmb250LWZhbWlseTogQmFybG93IENvbmRlbnNlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHJnYig3MSwgNzEsIDcxKTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxufSJdfQ== */"] });
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
        path: 'about-me',
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