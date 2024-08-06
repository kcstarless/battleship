/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/rust.woff */ "./src/styles/fonts/rust.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/rust.woff2 */ "./src/styles/fonts/rust.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/ocean.jpg */ "./src/assets/images/ocean.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Rust";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: normal;
  font-style: normal;
}
:root {
  --font-family-sans: "Poppins", "Rust", system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  --line-height-headers: 1.1;
  --line-height-body: 1.5;
  --line-height-break: 2;
  --font-size-xs: 0.75rem;
  --font-size-s: 0.875rem;
  --font-size-m: 1rem;
  --font-size-l: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-xxl: 1.5rem;
  --font-size-xxxl: 2rem;
  --font-size-xxxxl: 2.5rem;
  --color-text-header: hsl(0, 1%, 16%);
  --color-text-body: hsl(0, 5%, 25%);
  --color-text-muted: hsl(0, 1%, 44%);
  --space-xxxs: 0.25rem;
  --space-xxs: 0.375rem;
  --space-xs: 0.5rem;
  --space-s: 0.75rem;
  --space-m: 1rem;
  --space-l: 1.5rem;
  --space-xl: 2rem;
  --space-xxl: 2.5rem;
  --space-xxxl: 3rem;
  --space-xxxxl: 4rem;
  --color-primary: hsl(350, 67%, 50%);
  --color-primary-rotate: hsl(10, 73%, 54%);
  --color-primary-bg: hsl(0, 85%, 96%);
  --color-secondary: hsl(101, 45%, 56%);
  --color-secondary-rotate: hsl(120, 45%, 56%);
  --color-tertiary: hsl(49, 89%, 64%);
  --color-glint: rgb(163, 209, 255);
  --color-white: hsl(0, 0%, 100%);
  --color-background: hsl(30, 50%, 98%);
  --color-light: hsl(0, 6%, 93%);
  --color-dark: var(--color-text-header);
  --border-radius: 0.375rem;
  --border: solid 2px var(--color-light);
  --border-dark: solid 2px var(--color-dark);
  --shadow-large: 2px 4px 10px hsl(0 0% 0% / 0.1);
  --shadow-small: 1px 3px 6px hsl(0 0% 0% / 0.1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  overflow-y: scroll;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: var(--color-background);
  color: var(--color-text-body);
  line-height: var(--line-height-body);
  font-family: var(--font-family-sans);
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--color-text-header);
  line-height: var(--line-height-headers);
  font-family: "Rust";
  font-weight: 500;
}

h1 {
  font-size: var(--font-size-xxxl);
}

h2 {
  font-size: var(--font-size-xxl);
}

h3 {
  font-size: var(--font-size-xl);
}

h4 {
  font-size: var(--font-size-l);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 200ms;
}
a:hover, a:focus, a:active {
  color: var(--color-primary-rotate);
}

.container {
  border: var(--border-dark);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr auto 0.1fr;
  grid-template-areas: "header" "content" "footer";
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  background-color: transparent;
}
@media (min-width: 50rem) {
  .container {
    max-width: 60rem;
  }
}

.content {
  grid-area: content;
  margin: var(--space-s);
  border: var(--border-dark);
  border-radius: var(--border-radius);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
}

footer {
  grid-area: footer;
  margin: var(--space-s);
  border: var(--border-dark);
  border-radius: var(--border-radius);
}

header {
  grid-area: header;
  margin: var(--space-s);
  border: var(--border-dark);
  border-radius: var(--border-radius);
}

.sidebar {
  grid-area: sidebar;
  margin: var(--space-s);
  border: var(--border-dark);
  border-radius: var(--border-radius);
  background-color: var(--color-secondary-bg);
}

.profile {
  display: flex;
  flex-direction: column;
}
.profile .profile-title {
  font-size: var(--font-size-xxl);
  font-weight: bold;
}

.board-container {
  display: flex;
  justify-content: space-around;
  padding-top: var(--space-l);
}

.board-cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.p1-board {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  gap: 1px;
}
.p1-board .board-cell.water {
  background-color: rgb(23, 103, 223);
}
.p1-board .board-cell.ship {
  background-color: rgb(102, 204, 141);
}

.p2-board {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  grid-template-rows: repeat(10, 30px);
  gap: 1px;
}
.p2-board .board-cell.water {
  background-color: rgb(23, 103, 223);
}
.p2-board .board-cell.ship {
  background-color: rgb(23, 103, 223);
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/config/_variables.scss","webpack://./src/styles/config/_reset.scss","webpack://./src/styles/layouts/_container.scss","webpack://./src/styles/mixins/_media.scss","webpack://./src/styles/layouts/_content.scss","webpack://./src/styles/layouts/_footer.scss","webpack://./src/styles/layouts/_header.scss","webpack://./src/styles/layouts/_sidebar.scss","webpack://./src/styles/components/_board.scss"],"names":[],"mappings":"AAOA;EACI,mBAAA;EACA,mHAAA;EAEA,mBAAA;EACA,kBAAA;AANJ;ACNA;EAEI,8JAAA;EAGA,0BAAA;EACA,uBAAA;EACA,sBAAA;EAGA,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,uBAAA;EACA,sBAAA;EACA,yBAAA;EAGA,oCAAA;EACA,kCAAA;EACA,mCAAA;EAGA,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EAGA,mCAAA;EACA,yCAAA;EACA,oCAAA;EACA,qCAAA;EACA,4CAAA;EACA,mCAAA;EACA,iCAAA;EAGA,+BAAA;EACA,qCAAA;EACA,8BAAA;EACA,sCAAA;EAGA,yBAAA;EAGA,sCAAA;EACA,0CAAA;EAGA,+CAAA;EACA,8CAAA;ADXJ;;AEjDA;;;EAGE,sBAAA;AFoDF;;AEjDA;EACE,SAAA;EACA,UAAA;AFoDF;;AEjDA;EACE,kBAAA;EACA,YAAA;AFoDF;;AEjDA;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EAEA,yCAAA;EACA,6BAAA;EACA,oCAAA;EACA,oCAAA;AFmDF;;AEhDA;;;EAGE,cAAA;EACA,eAAA;AFmDF;;AEhDA;;;;EAIE,aAAA;AFmDF;;AEhDA;;;;;;EAME,+BAAA;EACA,uCAAA;EACA,mBAAA;EACA,gBAAA;AFmDF;;AEhDA;EACE,gCAAA;AFmDF;;AEhDA;EACE,+BAAA;AFmDF;;AEhDA;EACE,8BAAA;AFmDF;;AEhDA;EACE,6BAAA;AFmDF;;AEhDA;EACE,2BAAA;EACA,qBAAA;EACA,uBAAA;AFmDF;AEjDE;EAGE,kCAAA;AFiDJ;;AG9HA;EACI,0BAAA;EACA,kBAAA;EACA,aAAA;EACA,0BAAA;EACA,oCAAA;EACA,gDACE;EAIF,WAAA;EACA,YAAA;EAGA,iBAAA;EACA,kBAAA;EAGA,mCAAA;EAEA,oCAAA;EAEA,6BAAA;AHuHJ;AI5IM;EDFN;IA4BM,gBAAA;EHsHJ;AACF;;AKnJA;EACI,kBAAA;EACA,sBAAA;EACA,0BAAA;EACA,mCAAA;EACA,yDAAA;EACA,sBAAA;ALsJJ;;AM5JA;EACI,iBAAA;EACA,sBAAA;EACA,0BAAA;EACA,mCAAA;AN+JJ;;AOnKA;EACI,iBAAA;EACA,sBAAA;EACA,0BAAA;EACA,mCAAA;APsKJ;;AQ1KA;EACI,kBAAA;EACA,sBAAA;EACA,0BAAA;EACA,mCAAA;EACA,2CAAA;AR6KJ;;AQxKE;EACE,aAAA;EACA,sBAAA;AR2KJ;AQ1KI;EACE,+BAAA;EACA,iBAAA;AR4KN;;ASzLA;EACI,aAAA;EACA,6BAAA;EACA,2BAAA;AT4LJ;;ASzLA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AT4LJ;;ASzLA;EACI,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,QAAA;AT4LJ;ASzLI;EACI,mCAAA;AT2LR;ASxLI;EACI,oCAAA;AT0LR;;ASvLA;EAEI,aAAA;EACA,uCAAA;EACA,oCAAA;EACA,QAAA;ATyLJ;ASvLI;EACI,mCAAA;ATyLR;AStLI;EACI,mCAAA;ATwLR","sourcesContent":["// Entry point for your Sass build\n@import \"mixins/media\";\n\n// Google fonts\n@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');\n\n// Fonts\n@font-face {\n    font-family: 'Rust';\n    src: url('./fonts/rust.woff') format('woff'),\n        url('./fonts/rust.woff2') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n// Configuration\n@import \"config/variables\";\n@import \"config/reset\";\n\n// Layout\n@import \"layouts/container\";\n@import \"layouts/content\";\n@import \"layouts/footer\";\n@import \"layouts/header\";\n@import \"layouts/sidebar\";\n\n// Components\n@import \"components/board\";",":root {\n    // Simple fonts\n    --font-family-sans: 'Poppins', 'Rust', system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n    // Classical line heights\n    --line-height-headers: 1.1;\n    --line-height-body:    1.5;\n    --line-height-break:   2;\n\n    // Classical and robust font sizes system\n    --font-size-xs: 0.75rem;   // 12px\n    --font-size-s: 0.875rem;   // 14px\n    --font-size-m: 1rem;       // 16px\n    --font-size-l: 1.125rem;   // 18px\n    --font-size-xl: 1.25rem;   // 20px\n    --font-size-xxl: 1.5rem;   // 24px\n    --font-size-xxxl: 2rem;    // 32px\n    --font-size-xxxxl: 2.5rem; // 40px\n\n    // Three different text colors\n    --color-text-header: hsl(0, 1%, 16%);\n    --color-text-body:   hsl(0, 5%, 25%);\n    --color-text-muted:  hsl(0, 1%, 44%);\n\n    // Classical and robust spacing system\n    --space-xxxs: 0.25rem; // 4px\n    --space-xxs: 0.375rem; // 6px\n    --space-xs: 0.5rem;    // 8px\n    --space-s: 0.75rem;    // 12px\n    --space-m: 1rem;       // 16px\n    --space-l: 1.5rem;     // 24px\n    --space-xl: 2rem;      // 32px\n    --space-xxl: 2.5rem;   // 40px\n    --space-xxxl: 3rem;    // 48px\n    --space-xxxxl: 4rem;   // 64px\n\n    // Application colors\n    --color-primary:          hsl(350, 67%, 50%);\n    --color-primary-rotate:   hsl(10, 73%, 54%);\n    --color-primary-bg:       hsl(0, 85%, 96%);\n    --color-secondary:        hsl(101, 45%, 56%);\n    --color-secondary-rotate: hsl(120, 45%, 56%);\n    --color-tertiary:         hsl(49, 89%, 64%);\n    --color-glint:            rgb(163, 209, 255);\n\n    // Neutral colors\n    --color-white:      hsl(0, 0%, 100%);\n    --color-background: hsl(30, 50%, 98%);\n    --color-light:      hsl(0, 6%, 93%);\n    --color-dark:       var(--color-text-header);\n\n    // Border radius\n    --border-radius: 0.375rem;\n\n    // Border\n    --border: solid 2px var(--color-light);\n    --border-dark: solid 2px var(--color-dark);\n\n    // Shadows\n    --shadow-large:  2px 4px 10px hsl(0 0% 0% / 0.1);\n    --shadow-small:  1px 3px 6px hsl(0 0% 0% / 0.1);\n}\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  overflow-y: scroll;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n\n  background-color: var(--color-background);\n  color: var(--color-text-body);\n  line-height: var(--line-height-body);\n  font-family: var(--font-family-sans);\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--color-text-header);\n  line-height: var(--line-height-headers);\n  font-family: 'Rust';\n  font-weight: 500;\n}\n\nh1 {\n  font-size: var(--font-size-xxxl);\n}\n\nh2 {\n  font-size: var(--font-size-xxl);\n}\n\nh3 {\n  font-size: var(--font-size-xl);\n}\n\nh4 {\n  font-size: var(--font-size-l);\n}\n\na {\n  color: var(--color-primary);\n  text-decoration: none;\n  transition: color 200ms;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: var(--color-primary-rotate);\n  }\n}\n\n",".container {\n    border: var(--border-dark);\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.1fr auto 0.1fr;\n    grid-template-areas:\n      \"header\"\n      \"content\"\n      \"footer\";\n\n    width: 100%;\n    height: 100%;\n    // padding-right: var(--space-xs);\n    // padding-left: var(--space-xs);\n    margin-left: auto;\n    margin-right: auto;\n    // margin-top: var(--space-l);\n    \n    border-radius: var(--border-radius);\n    // box-shadow: var(--shadow-small);\n    background-color: var(--color-white);\n  \n    background-color: transparent;\n\n    @include media(tabletAndUp) {\n      // padding-right: var(--space-m);\n      // padding-left: var(--space-m);\n      max-width: 60rem;\n    }\n  }","@mixin media($query) {\n    @if $query == tabletAndUp {\n      @media (min-width: 50rem) { @content; }\n    }\n  }",".content {\n    grid-area: content;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n    background-image: url(../assets/images/ocean.jpg);\n    background-size: cover; \n}","footer {\n    grid-area: footer;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n}","header {\n    grid-area: header;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n  }",".sidebar {\n    grid-area: sidebar;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n    background-color: var(--color-secondary-bg);\n\n\n  }\n\n  .profile {\n    display: flex;\n    flex-direction: column;\n    .profile-title {\n      font-size: var(--font-size-xxl);\n      font-weight: bold;\n    }\n  }","// board.scss\n\n.board-container {\n    display: flex;\n    justify-content: space-around;\n    padding-top: var(--space-l);\n}\n\n.board-cell {\n    width: 30px; // Match the width in grid-template-columns\n    height: 30px; // Match the height in grid-template-rows\n    border: 1px solid #ddd; // Border to visualize grid cells\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p1-board {\n    display: grid;\n    grid-template-columns: repeat(10, 30px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 30px);\n    gap: 1px; // Space between cells (optional)\n\n    \n    .board-cell.water {\n        background-color: rgb(23, 103, 223); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: rgb(102, 204, 141); // Different color for ship\n    }\n}\n.p2-board {\n    // border: var(--border-dark);\n    display: grid;\n    grid-template-columns: repeat(10, 30px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 30px);\n    gap: 1px; // Space between cells (optional)\n    \n    .board-cell.water {\n        background-color: rgb(23, 103, 223); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: rgb(23, 103, 223);// Different color for ship\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/domHelper.js":
/*!**********************************!*\
  !*** ./src/modules/domHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domCreator: () => (/* binding */ domCreator),
/* harmony export */   domSelector: () => (/* binding */ domSelector)
/* harmony export */ });
// domHelper.js

function domSelector(name) {
    return document.querySelector(name);
}

function domCreator(name){
    return document.createElement(name);
}

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameModule: () => (/* binding */ gameModule)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBoard */ "./src/modules/renderBoard.js");
// game.js




const gameModule = (function () {
    let currentPlayerIndex = 0;
    let players = [];

    function init(playerList) {
        players = playerList;
        round();
    }

    function round() {
        const attacker = players[currentPlayerIndex]
        console.log(`attacker type: ${attacker.playerType}`)
        const defender = players[(currentPlayerIndex + 1) % players.length];
    
        // when attacker is type of human
        if (attacker.playerType === 'human') {
            playerBoard(attacker);
            oponentBoard(defender);
        } 
    
        // when attacker is type of computer
        if (attacker.playerType === 'computer') {
            attacker.computerAttack(defender);
            playerBoard(defender);
            console.log("computer attacked");
            switchPlayer();
            switchTurn();
        }
    };

    function playerBoard(player){
        const board = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p1-board');
        const cellStatus = player.playerBoard.getBoardStatus().board;
        (0,_renderBoard__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(board, cellStatus, player);
    }

    function oponentBoard(player) {
        const board = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p2-board');
        const cellStatus = player.playerBoard.getBoardStatus().board;
        (0,_renderBoard__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(board, cellStatus, player);
    }

    function attackCell(i, j, defender) {
        defender.playerBoard.receiveAttack(i, j);
        switchPlayer();
        switchTurn();
    }

    function switchPlayer() {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    }

    function switchTurn() {
        round();
    }

    return { init, attackCell };
})();

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameboard: () => (/* binding */ createGameboard),
/* harmony export */   xAxis: () => (/* binding */ xAxis),
/* harmony export */   yAxis: () => (/* binding */ yAxis)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
// gameboard.js



// Global board size;
const xAxis = 10; 
const yAxis = 10;

function createGameboard() {
    // Declare board size & board


    // Players board, ships and attack records. 
    let board = Array.from({ length: yAxis }, () => Array(xAxis).fill(null));
    let playerFleet = [];
    let missedAttacks = [];
    let landedAttacks = [];

    // Create ships
    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('carrier');
    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('battleship');
    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('destroyer');
    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('submarine');
    const patrolboat = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('patrolboat');

    // Places each ships
    placeShip(0, 0, carrier, 'horizontal');
    placeShip(1, 0, battleship, 'horizontal');
    placeShip(2, 0, destroyer, 'horizontal');
    placeShip(3, 0, submarine, 'horizontal');
    placeShip(4, 0, patrolboat, 'horizontal');

    // Display board
    function getBoardStatus() {
        return {
            board: board,
            fleet: playerFleet,
            missed: missedAttacks,
            landed: landedAttacks
        }
    }

    // Places ships if postion is valid. 
    function placeShip(y, x, ship, orientation) {
        const len = ship.getStatus().length;

        if (!validPositions(y, x, len, orientation)) {
            return 'Invalid Position';
        }

        if (orientation === 'vertical') {
            for(let i = y; i < len; i++) {
                board[i][x] = ship;
            }
        } else {
            for(let i = x; i < len; i++) {
                board[y][i] = ship;
            }
        }
        playerFleet.push(ship); // keep record of players ships
    }

    /** Attacks! */

    // Determines if an attack with coordinate hit a ship.
    function receiveAttack(y, x) {
        const cell = board[y][x];

        if (cell && cell.type === 'ship') {
            cell.hit();
            landedAttacks.push([y, x]); // if hit keep record 
            checkFleet();
            return 'HIT'
        } else {
            missedAttacks.push([y, x]); // if miss keep record
            // board[y][x] = 'miss';
            return 'MISS'
        }
    }

    // Check players fleet status
    function checkFleet() {
        return (playerFleet.every(ship => ship.getStatus().sunk)); // return true if all sunk
    }


    /** Valid ship placement on the board **/

    // Return true if both conditions are true else false
    function validPositions(y, x, len, orientation) {
        return (validCellLength(y, x, len, orientation) && validEdge(y, x));
    }

    // Check if position have enough free cells for the length of the ship
    function validCellLength(y, x, len, orientation) {
        if (orientation === 'vertical') {
            for(let i = y; i < len; i++) {
                !validCell(i, x) && false; 
                !validEdge(i, x) && false; 
            }
        } else {
            for(let i = x; i < len; i++) {
                !validCell(y, i) && false;
                !validEdge(y, i) && false;
            }
        }
        return true;
    }

    // Check if coordinates is within board boundaries.
    function validEdge(y, x) {
        return (x >= 0 && x < xAxis && y >= 0 && y < yAxis);
    }

    // Check if cell is free. 
    function validCell(y, x) {
        board[y][x] === null && true
    }

    return { board, missedAttacks, landedAttacks, getBoardStatus, placeShip, receiveAttack, checkFleet }
}

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPlayer: () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
// player.js



function createPlayer(type) {
    const playerType = type;
    let playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();
    let currentPlayer = false;

    function attack(y, x, oponent){
        alert("attacked");
        // oponent.playerBoard.recieveAttack(y, x);
    }

    function computerAttack() {
        alert("computer has attacked!");
    }

    return { playerType, playerBoard, currentPlayer, attack, computerAttack };
}

/***/ }),

/***/ "./src/modules/renderBoard.js":
/*!************************************!*\
  !*** ./src/modules/renderBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoard: () => (/* binding */ displayBoard)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
// renderBoard.js




function displayBoard(board, cellStatus, defender) {
    board.innerHTML = '';
    for (let i = 0; i < _gameboard__WEBPACK_IMPORTED_MODULE_1__.yAxis; i++) {
        for (let j = 0; j < _gameboard__WEBPACK_IMPORTED_MODULE_1__.xAxis; j++) {
            const cell = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
            cell.className = 'board-cell';
            cell.id = 'board-cell';
            cell.dataset.position = `${[i, j]}`; // give coordinate on the board

            defender.playerType === 'computer' && cell.addEventListener('click', () => _game__WEBPACK_IMPORTED_MODULE_2__.gameModule.attackCell(i, j, defender)); // add event to defender's board

            if (cellStatus[i][j]) {
                cell.classList.add('ship');
            } else {
                cell.classList.add('water');
            }
            board.append(cell);
        }
    }
}

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShip: () => (/* binding */ createShip)
/* harmony export */ });
// ship.js

// Define ship class with name and HP, you can add and modify different classes.
const shipClass = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrolboat: 2
}

// Create a ship object with ships class name
function createShip(className) {
    const shipType = className;
    const shipLength = shipClass[className];
    let shipHits = 0;
    let shipSunk = false;

    function getStatus() {
        return {
            name: shipType,
            length: shipLength,
            hits: shipHits,
            sunk: shipSunk
        }
    }

    function hit() {
        !shipSunk && (shipHits++, isSunk());
        return this;
    }

    function isSunk() {
        shipHits >= shipLength && (shipSunk = true);
    }

    return { getStatus, hit, type: 'ship' }
}


/***/ }),

/***/ "./src/assets/images/ocean.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/ocean.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/ocean.jpg";

/***/ }),

/***/ "./src/styles/fonts/rust.woff":
/*!************************************!*\
  !*** ./src/styles/fonts/rust.woff ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eacae7426fad690ae966.woff";

/***/ }),

/***/ "./src/styles/fonts/rust.woff2":
/*!*************************************!*\
  !*** ./src/styles/fonts/rust.woff2 ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "857ca50a7a0b663dff19.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/player */ "./src/modules/player.js");
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");
// index.js





function init() {
    let human = (0,_modules_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('human');
    let computer = (0,_modules_player__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('computer');
    let players = [human, computer];
    // let currentPlayerIndex = 0;
    _modules_game__WEBPACK_IMPORTED_MODULE_2__.gameModule.init(players);
}

init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxzSEFBb0M7QUFDaEYsNENBQTRDLHdIQUFxQztBQUNqRiw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysb0hBQW9IO0FBQ3BILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DLHdCQUF3QixtQ0FBbUM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBmQUEwZixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxTQUFTLFVBQVUsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdB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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0FBOztBQUU0QjtBQUNvQjtBQUNKOztBQUU1QztBQUNBLGdCQUFnQiw2REFBWTtBQUM1QixtQkFBbUIsNkRBQVk7QUFDL0I7QUFDQTtBQUNBLElBQUkscURBQVU7QUFDZDs7QUFFQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kb21IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvcnVzdC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9ydXN0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9vY2Vhbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSdXN0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIiksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIC0tZm9udC1mYW1pbHktc2FuczogXCJQb3BwaW5zXCIsIFwiUnVzdFwiLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgLS1saW5lLWhlaWdodC1oZWFkZXJzOiAxLjE7XG4gIC0tbGluZS1oZWlnaHQtYm9keTogMS41O1xuICAtLWxpbmUtaGVpZ2h0LWJyZWFrOiAyO1xuICAtLWZvbnQtc2l6ZS14czogMC43NXJlbTtcbiAgLS1mb250LXNpemUtczogMC44NzVyZW07XG4gIC0tZm9udC1zaXplLW06IDFyZW07XG4gIC0tZm9udC1zaXplLWw6IDEuMTI1cmVtO1xuICAtLWZvbnQtc2l6ZS14bDogMS4yNXJlbTtcbiAgLS1mb250LXNpemUteHhsOiAxLjVyZW07XG4gIC0tZm9udC1zaXplLXh4eGw6IDJyZW07XG4gIC0tZm9udC1zaXplLXh4eHhsOiAyLjVyZW07XG4gIC0tY29sb3ItdGV4dC1oZWFkZXI6IGhzbCgwLCAxJSwgMTYlKTtcbiAgLS1jb2xvci10ZXh0LWJvZHk6IGhzbCgwLCA1JSwgMjUlKTtcbiAgLS1jb2xvci10ZXh0LW11dGVkOiBoc2woMCwgMSUsIDQ0JSk7XG4gIC0tc3BhY2UteHh4czogMC4yNXJlbTtcbiAgLS1zcGFjZS14eHM6IDAuMzc1cmVtO1xuICAtLXNwYWNlLXhzOiAwLjVyZW07XG4gIC0tc3BhY2UtczogMC43NXJlbTtcbiAgLS1zcGFjZS1tOiAxcmVtO1xuICAtLXNwYWNlLWw6IDEuNXJlbTtcbiAgLS1zcGFjZS14bDogMnJlbTtcbiAgLS1zcGFjZS14eGw6IDIuNXJlbTtcbiAgLS1zcGFjZS14eHhsOiAzcmVtO1xuICAtLXNwYWNlLXh4eHhsOiA0cmVtO1xuICAtLWNvbG9yLXByaW1hcnk6IGhzbCgzNTAsIDY3JSwgNTAlKTtcbiAgLS1jb2xvci1wcmltYXJ5LXJvdGF0ZTogaHNsKDEwLCA3MyUsIDU0JSk7XG4gIC0tY29sb3ItcHJpbWFyeS1iZzogaHNsKDAsIDg1JSwgOTYlKTtcbiAgLS1jb2xvci1zZWNvbmRhcnk6IGhzbCgxMDEsIDQ1JSwgNTYlKTtcbiAgLS1jb2xvci1zZWNvbmRhcnktcm90YXRlOiBoc2woMTIwLCA0NSUsIDU2JSk7XG4gIC0tY29sb3ItdGVydGlhcnk6IGhzbCg0OSwgODklLCA2NCUpO1xuICAtLWNvbG9yLWdsaW50OiByZ2IoMTYzLCAyMDksIDI1NSk7XG4gIC0tY29sb3Itd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIC0tY29sb3ItYmFja2dyb3VuZDogaHNsKDMwLCA1MCUsIDk4JSk7XG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCA2JSwgOTMlKTtcbiAgLS1jb2xvci1kYXJrOiB2YXIoLS1jb2xvci10ZXh0LWhlYWRlcik7XG4gIC0tYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1kYXJrOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZGFyayk7XG4gIC0tc2hhZG93LWxhcmdlOiAycHggNHB4IDEwcHggaHNsKDAgMCUgMCUgLyAwLjEpO1xuICAtLXNoYWRvdy1zbWFsbDogMXB4IDNweCA2cHggaHNsKDAgMCUgMCUgLyAwLjEpO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtYm9keSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1ib2R5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXNhbnMpO1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWhlYWRlcik7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkZXJzKTtcbiAgZm9udC1mYW1pbHk6IFwiUnVzdFwiO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4eGwpO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xufVxuYTpob3ZlciwgYTpmb2N1cywgYTphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgYXV0byAwLjFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcImNvbnRlbnRcIiBcImZvb3RlclwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MHJlbSkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xuICBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnNpZGViYXIge1xuICBncmlkLWFyZWE6IHNpZGViYXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcbn1cblxuLnByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb2ZpbGUgLnByb2ZpbGUtdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbCk7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wMS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBnYXA6IDFweDtcbn1cbi5wMS1ib2FyZCAuYm9hcmQtY2VsbC53YXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTAzLCAyMjMpO1xufVxuLnAxLWJvYXJkIC5ib2FyZC1jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAyLCAyMDQsIDE0MSk7XG59XG5cbi5wMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xuICBnYXA6IDFweDtcbn1cbi5wMi1ib2FyZCAuYm9hcmQtY2VsbC53YXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTAzLCAyMjMpO1xufVxuLnAyLWJvYXJkIC5ib2FyZC1jZWxsLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDEwMywgMjIzKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbmZpZy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29uZmlnL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dHMvX2NvbnRhaW5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21peGlucy9fbWVkaWEuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXRzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9fc2lkZWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvX2JvYXJkLnNjc3NcIl0s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VHlMSjtBU3ZMSTtFQUNJLG1DQUFBO0FUeUxSO0FTdExJO0VBQ0ksbUNBQUE7QVR3TFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gRW50cnkgcG9pbnQgZm9yIHlvdXIgU2FzcyBidWlsZFxcbkBpbXBvcnQgXFxcIm1peGlucy9tZWRpYVxcXCI7XFxuXFxuLy8gR29vZ2xlIGZvbnRzXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8vIEZvbnRzXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzdCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL3J1c3Qud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCcuL2ZvbnRzL3J1c3Qud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vLyBDb25maWd1cmF0aW9uXFxuQGltcG9ydCBcXFwiY29uZmlnL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiY29uZmlnL3Jlc2V0XFxcIjtcXG5cXG4vLyBMYXlvdXRcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2NvbnRhaW5lclxcXCI7XFxuQGltcG9ydCBcXFwibGF5b3V0cy9jb250ZW50XFxcIjtcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2Zvb3RlclxcXCI7XFxuQGltcG9ydCBcXFwibGF5b3V0cy9oZWFkZXJcXFwiO1xcbkBpbXBvcnQgXFxcImxheW91dHMvc2lkZWJhclxcXCI7XFxuXFxuLy8gQ29tcG9uZW50c1xcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvYm9hcmRcXFwiO1wiLFwiOnJvb3Qge1xcbiAgICAvLyBTaW1wbGUgZm9udHNcXG4gICAgLS1mb250LWZhbWlseS1zYW5zOiAnUG9wcGlucycsICdSdXN0Jywgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC8vIENsYXNzaWNhbCBsaW5lIGhlaWdodHNcXG4gICAgLS1saW5lLWhlaWdodC1oZWFkZXJzOiAxLjE7XFxuICAgIC0tbGluZS1oZWlnaHQtYm9keTogICAgMS41O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWJyZWFrOiAgIDI7XFxuXFxuICAgIC8vIENsYXNzaWNhbCBhbmQgcm9idXN0IGZvbnQgc2l6ZXMgc3lzdGVtXFxuICAgIC0tZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgIC8vIDEycHhcXG4gICAgLS1mb250LXNpemUtczogMC44NzVyZW07ICAgLy8gMTRweFxcbiAgICAtLWZvbnQtc2l6ZS1tOiAxcmVtOyAgICAgICAvLyAxNnB4XFxuICAgIC0tZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcXG4gICAgLS1mb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxcbiAgICAtLWZvbnQtc2l6ZS14eGw6IDEuNXJlbTsgICAvLyAyNHB4XFxuICAgIC0tZm9udC1zaXplLXh4eGw6IDJyZW07ICAgIC8vIDMycHhcXG4gICAgLS1mb250LXNpemUteHh4eGw6IDIuNXJlbTsgLy8gNDBweFxcblxcbiAgICAvLyBUaHJlZSBkaWZmZXJlbnQgdGV4dCBjb2xvcnNcXG4gICAgLS1jb2xvci10ZXh0LWhlYWRlcjogaHNsKDAsIDElLCAxNiUpO1xcbiAgICAtLWNvbG9yLXRleHQtYm9keTogICBoc2woMCwgNSUsIDI1JSk7XFxuICAgIC0tY29sb3ItdGV4dC1tdXRlZDogIGhzbCgwLCAxJSwgNDQlKTtcXG5cXG4gICAgLy8gQ2xhc3NpY2FsIGFuZCByb2J1c3Qgc3BhY2luZyBzeXN0ZW1cXG4gICAgLS1zcGFjZS14eHhzOiAwLjI1cmVtOyAvLyA0cHhcXG4gICAgLS1zcGFjZS14eHM6IDAuMzc1cmVtOyAvLyA2cHhcXG4gICAgLS1zcGFjZS14czogMC41cmVtOyAgICAvLyA4cHhcXG4gICAgLS1zcGFjZS1zOiAwLjc1cmVtOyAgICAvLyAxMnB4XFxuICAgIC0tc3BhY2UtbTogMXJlbTsgICAgICAgLy8gMTZweFxcbiAgICAtLXNwYWNlLWw6IDEuNXJlbTsgICAgIC8vIDI0cHhcXG4gICAgLS1zcGFjZS14bDogMnJlbTsgICAgICAvLyAzMnB4XFxuICAgIC0tc3BhY2UteHhsOiAyLjVyZW07ICAgLy8gNDBweFxcbiAgICAtLXNwYWNlLXh4eGw6IDNyZW07ICAgIC8vIDQ4cHhcXG4gICAgLS1zcGFjZS14eHh4bDogNHJlbTsgICAvLyA2NHB4XFxuXFxuICAgIC8vIEFwcGxpY2F0aW9uIGNvbG9yc1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICAgICAgICAgIGhzbCgzNTAsIDY3JSwgNTAlKTtcXG4gICAgLS1jb2xvci1wcmltYXJ5LXJvdGF0ZTogICBoc2woMTAsIDczJSwgNTQlKTtcXG4gICAgLS1jb2xvci1wcmltYXJ5LWJnOiAgICAgICBoc2woMCwgODUlLCA5NiUpO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogICAgICAgIGhzbCgxMDEsIDQ1JSwgNTYlKTtcXG4gICAgLS1jb2xvci1zZWNvbmRhcnktcm90YXRlOiBoc2woMTIwLCA0NSUsIDU2JSk7XFxuICAgIC0tY29sb3ItdGVydGlhcnk6ICAgICAgICAgaHNsKDQ5LCA4OSUsIDY0JSk7XFxuICAgIC0tY29sb3ItZ2xpbnQ6ICAgICAgICAgICAgcmdiKDE2MywgMjA5LCAyNTUpO1xcblxcbiAgICAvLyBOZXV0cmFsIGNvbG9yc1xcbiAgICAtLWNvbG9yLXdoaXRlOiAgICAgIGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogaHNsKDMwLCA1MCUsIDk4JSk7XFxuICAgIC0tY29sb3ItbGlnaHQ6ICAgICAgaHNsKDAsIDYlLCA5MyUpO1xcbiAgICAtLWNvbG9yLWRhcms6ICAgICAgIHZhcigtLWNvbG9yLXRleHQtaGVhZGVyKTtcXG5cXG4gICAgLy8gQm9yZGVyIHJhZGl1c1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcblxcbiAgICAvLyBCb3JkZXJcXG4gICAgLS1ib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1saWdodCk7XFxuICAgIC0tYm9yZGVyLWRhcms6IHNvbGlkIDJweCB2YXIoLS1jb2xvci1kYXJrKTtcXG5cXG4gICAgLy8gU2hhZG93c1xcbiAgICAtLXNoYWRvdy1sYXJnZTogIDJweCA0cHggMTBweCBoc2woMCAwJSAwJSAvIDAuMSk7XFxuICAgIC0tc2hhZG93LXNtYWxsOiAgMXB4IDNweCA2cHggaHNsKDAgMCUgMCUgLyAwLjEpO1xcbn1cXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1ib2R5KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1ib2R5KTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1zYW5zKTtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWhlYWRlcik7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtaGVhZGVycyk7XFxuICBmb250LWZhbWlseTogJ1J1c3QnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHh4bCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyxcXG4gICY6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcXG4gIH1cXG59XFxuXFxuXCIsXCIuY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgYXV0byAwLjFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJjb250ZW50XFxcIlxcbiAgICAgIFxcXCJmb290ZXJcXFwiO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjZS14cyk7XFxuICAgIC8vIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UteHMpO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAvLyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1sKTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAvLyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc21hbGwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldEFuZFVwKSB7XFxuICAgICAgLy8gcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2UtbSk7XFxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1tKTtcXG4gICAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICB9XFxuICB9XCIsXCJAbWl4aW4gbWVkaWEoJHF1ZXJ5KSB7XFxuICAgIEBpZiAkcXVlcnkgPT0gdGFibGV0QW5kVXAge1xcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MHJlbSkgeyBAY29udGVudDsgfVxcbiAgICB9XFxuICB9XCIsXCIuY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9vY2Vhbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcXG59XCIsXCJmb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cIixcImhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICB9XCIsXCIuc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xcblxcblxcbiAgfVxcblxcbiAgLnByb2ZpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAucHJvZmlsZS10aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcbiAgfVwiLFwiLy8gYm9hcmQuc2Nzc1xcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLWwpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICAgIHdpZHRoOiAzMHB4OyAvLyBNYXRjaCB0aGUgd2lkdGggaW4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXFxuICAgIGhlaWdodDogMzBweDsgLy8gTWF0Y2ggdGhlIGhlaWdodCBpbiBncmlkLXRlbXBsYXRlLXJvd3NcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsgLy8gQm9yZGVyIHRvIHZpc3VhbGl6ZSBncmlkIGNlbGxzXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucDEtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7IC8vIEFkanVzdCB0aGUgc2l6ZSBiYXNlZCBvbiB5b3VyIG5lZWRzXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ2FwOiAxcHg7IC8vIFNwYWNlIGJldHdlZW4gY2VsbHMgKG9wdGlvbmFsKVxcblxcbiAgICBcXG4gICAgLmJvYXJkLWNlbGwud2F0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMDMsIDIyMyk7IC8vIERpZmZlcmVudCBjb2xvciBmb3IgJ3dhdGVyJ1xcbiAgICB9XFxuICAgIFxcbiAgICAuYm9hcmQtY2VsbC5zaGlwIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDIsIDIwNCwgMTQxKTsgLy8gRGlmZmVyZW50IGNvbG9yIGZvciBzaGlwXFxuICAgIH1cXG59XFxuLnAyLWJvYXJkIHtcXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTsgLy8gQWRqdXN0IHRoZSBzaXplIGJhc2VkIG9uIHlvdXIgbmVlZHNcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBnYXA6IDFweDsgLy8gU3BhY2UgYmV0d2VlbiBjZWxscyAob3B0aW9uYWwpXFxuICAgIFxcbiAgICAuYm9hcmQtY2VsbC53YXRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDEwMywgMjIzKTsgLy8gRGlmZmVyZW50IGNvbG9yIGZvciAnd2F0ZXInXFxuICAgIH1cXG4gICAgXFxuICAgIC5ib2FyZC1jZWxsLnNoaXAge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMDMsIDIyMyk7Ly8gRGlmZmVyZW50IGNvbG9yIGZvciBzaGlwXFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBkb21IZWxwZXIuanNcblxuZXhwb3J0IGZ1bmN0aW9uIGRvbVNlbGVjdG9yKG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbUNyZWF0b3IobmFtZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59IiwiLy8gZ2FtZS5qc1xuXG5pbXBvcnQgeyBkb21TZWxlY3RvciB9IGZyb20gJy4vZG9tSGVscGVyJztcbmltcG9ydCB7IGRpc3BsYXlCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuXG5leHBvcnQgY29uc3QgZ2FtZU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgbGV0IHBsYXllcnMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGluaXQocGxheWVyTGlzdCkge1xuICAgICAgICBwbGF5ZXJzID0gcGxheWVyTGlzdDtcbiAgICAgICAgcm91bmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByb3VuZCgpIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZXIgPSBwbGF5ZXJzW2N1cnJlbnRQbGF5ZXJJbmRleF1cbiAgICAgICAgY29uc29sZS5sb2coYGF0dGFja2VyIHR5cGU6ICR7YXR0YWNrZXIucGxheWVyVHlwZX1gKVxuICAgICAgICBjb25zdCBkZWZlbmRlciA9IHBsYXllcnNbKGN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgcGxheWVycy5sZW5ndGhdO1xuICAgIFxuICAgICAgICAvLyB3aGVuIGF0dGFja2VyIGlzIHR5cGUgb2YgaHVtYW5cbiAgICAgICAgaWYgKGF0dGFja2VyLnBsYXllclR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkKGF0dGFja2VyKTtcbiAgICAgICAgICAgIG9wb25lbnRCb2FyZChkZWZlbmRlcik7XG4gICAgICAgIH0gXG4gICAgXG4gICAgICAgIC8vIHdoZW4gYXR0YWNrZXIgaXMgdHlwZSBvZiBjb21wdXRlclxuICAgICAgICBpZiAoYXR0YWNrZXIucGxheWVyVHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgYXR0YWNrZXIuY29tcHV0ZXJBdHRhY2soZGVmZW5kZXIpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQoZGVmZW5kZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb21wdXRlciBhdHRhY2tlZFwiKTtcbiAgICAgICAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgICAgICAgICAgc3dpdGNoVHVybigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBsYXllckJvYXJkKHBsYXllcil7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9tU2VsZWN0b3IoJyNwMS1ib2FyZCcpO1xuICAgICAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLnBsYXllckJvYXJkLmdldEJvYXJkU3RhdHVzKCkuYm9hcmQ7XG4gICAgICAgIGRpc3BsYXlCb2FyZChib2FyZCwgY2VsbFN0YXR1cywgcGxheWVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcG9uZW50Qm9hcmQocGxheWVyKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9tU2VsZWN0b3IoJyNwMi1ib2FyZCcpO1xuICAgICAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLnBsYXllckJvYXJkLmdldEJvYXJkU3RhdHVzKCkuYm9hcmQ7XG4gICAgICAgIGRpc3BsYXlCb2FyZChib2FyZCwgY2VsbFN0YXR1cywgcGxheWVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRhY2tDZWxsKGksIGosIGRlZmVuZGVyKSB7XG4gICAgICAgIGRlZmVuZGVyLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soaSwgaik7XG4gICAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgICAgICBzd2l0Y2hUdXJuKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgICAgICBjdXJyZW50UGxheWVySW5kZXggPSBjdXJyZW50UGxheWVySW5kZXggPT09IDAgPyAxIDogMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hUdXJuKCkge1xuICAgICAgICByb3VuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIGF0dGFja0NlbGwgfTtcbn0pKCk7IiwiLy8gZ2FtZWJvYXJkLmpzXG5cbmltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbi8vIEdsb2JhbCBib2FyZCBzaXplO1xuZXhwb3J0IGNvbnN0IHhBeGlzID0gMTA7IFxuZXhwb3J0IGNvbnN0IHlBeGlzID0gMTA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gICAgLy8gRGVjbGFyZSBib2FyZCBzaXplICYgYm9hcmRcblxuXG4gICAgLy8gUGxheWVycyBib2FyZCwgc2hpcHMgYW5kIGF0dGFjayByZWNvcmRzLiBcbiAgICBsZXQgYm9hcmQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB5QXhpcyB9LCAoKSA9PiBBcnJheSh4QXhpcykuZmlsbChudWxsKSk7XG4gICAgbGV0IHBsYXllckZsZWV0ID0gW107XG4gICAgbGV0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBsZXQgbGFuZGVkQXR0YWNrcyA9IFtdO1xuXG4gICAgLy8gQ3JlYXRlIHNoaXBzXG4gICAgY29uc3QgY2FycmllciA9IGNyZWF0ZVNoaXAoJ2NhcnJpZXInKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlU2hpcCgnYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IGNyZWF0ZVNoaXAoJ2Rlc3Ryb3llcicpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IGNyZWF0ZVNoaXAoJ3N1Ym1hcmluZScpO1xuICAgIGNvbnN0IHBhdHJvbGJvYXQgPSBjcmVhdGVTaGlwKCdwYXRyb2xib2F0Jyk7XG5cbiAgICAvLyBQbGFjZXMgZWFjaCBzaGlwc1xuICAgIHBsYWNlU2hpcCgwLCAwLCBjYXJyaWVyLCAnaG9yaXpvbnRhbCcpO1xuICAgIHBsYWNlU2hpcCgxLCAwLCBiYXR0bGVzaGlwLCAnaG9yaXpvbnRhbCcpO1xuICAgIHBsYWNlU2hpcCgyLCAwLCBkZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XG4gICAgcGxhY2VTaGlwKDMsIDAsIHN1Ym1hcmluZSwgJ2hvcml6b250YWwnKTtcbiAgICBwbGFjZVNoaXAoNCwgMCwgcGF0cm9sYm9hdCwgJ2hvcml6b250YWwnKTtcblxuICAgIC8vIERpc3BsYXkgYm9hcmRcbiAgICBmdW5jdGlvbiBnZXRCb2FyZFN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgICAgICAgIGZsZWV0OiBwbGF5ZXJGbGVldCxcbiAgICAgICAgICAgIG1pc3NlZDogbWlzc2VkQXR0YWNrcyxcbiAgICAgICAgICAgIGxhbmRlZDogbGFuZGVkQXR0YWNrc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGxhY2VzIHNoaXBzIGlmIHBvc3Rpb24gaXMgdmFsaWQuIFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcCh5LCB4LCBzaGlwLCBvcmllbnRhdGlvbikge1xuICAgICAgICBjb25zdCBsZW4gPSBzaGlwLmdldFN0YXR1cygpLmxlbmd0aDtcblxuICAgICAgICBpZiAoIXZhbGlkUG9zaXRpb25zKHksIHgsIGxlbiwgb3JpZW50YXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgUG9zaXRpb24nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVt4XSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt5XVtpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyRmxlZXQucHVzaChzaGlwKTsgLy8ga2VlcCByZWNvcmQgb2YgcGxheWVycyBzaGlwc1xuICAgIH1cblxuICAgIC8qKiBBdHRhY2tzISAqL1xuXG4gICAgLy8gRGV0ZXJtaW5lcyBpZiBhbiBhdHRhY2sgd2l0aCBjb29yZGluYXRlIGhpdCBhIHNoaXAuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh5LCB4KSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBib2FyZFt5XVt4XTtcblxuICAgICAgICBpZiAoY2VsbCAmJiBjZWxsLnR5cGUgPT09ICdzaGlwJykge1xuICAgICAgICAgICAgY2VsbC5oaXQoKTtcbiAgICAgICAgICAgIGxhbmRlZEF0dGFja3MucHVzaChbeSwgeF0pOyAvLyBpZiBoaXQga2VlcCByZWNvcmQgXG4gICAgICAgICAgICBjaGVja0ZsZWV0KCk7XG4gICAgICAgICAgICByZXR1cm4gJ0hJVCdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pc3NlZEF0dGFja3MucHVzaChbeSwgeF0pOyAvLyBpZiBtaXNzIGtlZXAgcmVjb3JkXG4gICAgICAgICAgICAvLyBib2FyZFt5XVt4XSA9ICdtaXNzJztcbiAgICAgICAgICAgIHJldHVybiAnTUlTUydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHBsYXllcnMgZmxlZXQgc3RhdHVzXG4gICAgZnVuY3Rpb24gY2hlY2tGbGVldCgpIHtcbiAgICAgICAgcmV0dXJuIChwbGF5ZXJGbGVldC5ldmVyeShzaGlwID0+IHNoaXAuZ2V0U3RhdHVzKCkuc3VuaykpOyAvLyByZXR1cm4gdHJ1ZSBpZiBhbGwgc3Vua1xuICAgIH1cblxuXG4gICAgLyoqIFZhbGlkIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZCAqKi9cblxuICAgIC8vIFJldHVybiB0cnVlIGlmIGJvdGggY29uZGl0aW9ucyBhcmUgdHJ1ZSBlbHNlIGZhbHNlXG4gICAgZnVuY3Rpb24gdmFsaWRQb3NpdGlvbnMoeSwgeCwgbGVuLCBvcmllbnRhdGlvbikge1xuICAgICAgICByZXR1cm4gKHZhbGlkQ2VsbExlbmd0aCh5LCB4LCBsZW4sIG9yaWVudGF0aW9uKSAmJiB2YWxpZEVkZ2UoeSwgeCkpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHBvc2l0aW9uIGhhdmUgZW5vdWdoIGZyZWUgY2VsbHMgZm9yIHRoZSBsZW5ndGggb2YgdGhlIHNoaXBcbiAgICBmdW5jdGlvbiB2YWxpZENlbGxMZW5ndGgoeSwgeCwgbGVuLCBvcmllbnRhdGlvbikge1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICF2YWxpZENlbGwoaSwgeCkgJiYgZmFsc2U7IFxuICAgICAgICAgICAgICAgICF2YWxpZEVkZ2UoaSwgeCkgJiYgZmFsc2U7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgIXZhbGlkQ2VsbCh5LCBpKSAmJiBmYWxzZTtcbiAgICAgICAgICAgICAgICAhdmFsaWRFZGdlKHksIGkpICYmIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGNvb3JkaW5hdGVzIGlzIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzLlxuICAgIGZ1bmN0aW9uIHZhbGlkRWRnZSh5LCB4KSB7XG4gICAgICAgIHJldHVybiAoeCA+PSAwICYmIHggPCB4QXhpcyAmJiB5ID49IDAgJiYgeSA8IHlBeGlzKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBjZWxsIGlzIGZyZWUuIFxuICAgIGZ1bmN0aW9uIHZhbGlkQ2VsbCh5LCB4KSB7XG4gICAgICAgIGJvYXJkW3ldW3hdID09PSBudWxsICYmIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4geyBib2FyZCwgbWlzc2VkQXR0YWNrcywgbGFuZGVkQXR0YWNrcywgZ2V0Qm9hcmRTdGF0dXMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgY2hlY2tGbGVldCB9XG59IiwiLy8gcGxheWVyLmpzXG5cbmltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKHR5cGUpIHtcbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgICBsZXQgY3VycmVudFBsYXllciA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrKHksIHgsIG9wb25lbnQpe1xuICAgICAgICBhbGVydChcImF0dGFja2VkXCIpO1xuICAgICAgICAvLyBvcG9uZW50LnBsYXllckJvYXJkLnJlY2lldmVBdHRhY2soeSwgeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKSB7XG4gICAgICAgIGFsZXJ0KFwiY29tcHV0ZXIgaGFzIGF0dGFja2VkIVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJUeXBlLCBwbGF5ZXJCb2FyZCwgY3VycmVudFBsYXllciwgYXR0YWNrLCBjb21wdXRlckF0dGFjayB9O1xufSIsIi8vIHJlbmRlckJvYXJkLmpzXG5pbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb21IZWxwZXInO1xuaW1wb3J0IHsgeEF4aXMsIHlBeGlzIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmQsIGNlbGxTdGF0dXMsIGRlZmVuZGVyKSB7XG4gICAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB5QXhpczsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgeEF4aXM7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbCc7XG4gICAgICAgICAgICBjZWxsLmlkID0gJ2JvYXJkLWNlbGwnO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gYCR7W2ksIGpdfWA7IC8vIGdpdmUgY29vcmRpbmF0ZSBvbiB0aGUgYm9hcmRcblxuICAgICAgICAgICAgZGVmZW5kZXIucGxheWVyVHlwZSA9PT0gJ2NvbXB1dGVyJyAmJiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2FtZU1vZHVsZS5hdHRhY2tDZWxsKGksIGosIGRlZmVuZGVyKSk7IC8vIGFkZCBldmVudCB0byBkZWZlbmRlcidzIGJvYXJkXG5cbiAgICAgICAgICAgIGlmIChjZWxsU3RhdHVzW2ldW2pdKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnd2F0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChjZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBzaGlwLmpzXG5cbi8vIERlZmluZSBzaGlwIGNsYXNzIHdpdGggbmFtZSBhbmQgSFAsIHlvdSBjYW4gYWRkIGFuZCBtb2RpZnkgZGlmZmVyZW50IGNsYXNzZXMuXG5jb25zdCBzaGlwQ2xhc3MgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGRlc3Ryb3llcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgcGF0cm9sYm9hdDogMlxufVxuXG4vLyBDcmVhdGUgYSBzaGlwIG9iamVjdCB3aXRoIHNoaXBzIGNsYXNzIG5hbWVcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHNoaXBUeXBlID0gY2xhc3NOYW1lO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwQ2xhc3NbY2xhc3NOYW1lXTtcbiAgICBsZXQgc2hpcEhpdHMgPSAwO1xuICAgIGxldCBzaGlwU3VuayA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogc2hpcFR5cGUsXG4gICAgICAgICAgICBsZW5ndGg6IHNoaXBMZW5ndGgsXG4gICAgICAgICAgICBoaXRzOiBzaGlwSGl0cyxcbiAgICAgICAgICAgIHN1bms6IHNoaXBTdW5rXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgICFzaGlwU3VuayAmJiAoc2hpcEhpdHMrKywgaXNTdW5rKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIHNoaXBIaXRzID49IHNoaXBMZW5ndGggJiYgKHNoaXBTdW5rID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U3RhdHVzLCBoaXQsIHR5cGU6ICdzaGlwJyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5kZXguanNcblxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi9tb2R1bGVzL3BsYXllcic7XG5pbXBvcnQgeyBnYW1lTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGxldCBodW1hbiA9IGNyZWF0ZVBsYXllcignaHVtYW4nKTtcbiAgICBsZXQgY29tcHV0ZXIgPSBjcmVhdGVQbGF5ZXIoJ2NvbXB1dGVyJyk7XG4gICAgbGV0IHBsYXllcnMgPSBbaHVtYW4sIGNvbXB1dGVyXTtcbiAgICAvLyBsZXQgY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICBnYW1lTW9kdWxlLmluaXQocGxheWVycyk7XG59XG5cbmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=