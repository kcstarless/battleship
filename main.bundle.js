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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/radar02.jpg */ "./src/assets/images/radar02.jpg"), __webpack_require__.b);
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
  --color-primary: #d6d0b8;
  --color-primary-rotate: rgb(23, 103, 223);
  --color-primary-bg: #5baaec;
  --color-secondary: #4c9173;
  --color-secondary-rotate: #902424;
  --color-tertiary: hsl(49, 89%, 64%);
  --color-glint: rgb(163, 209, 255);
  --color-white: hsl(0, 0%, 100%);
  --color-background: #33425b;
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
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-size: cover; /* Scales the image to cover the entire container */
  background-position: center;
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
  color: var(--color-primary);
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr auto 0.1fr;
  grid-template-areas: "header" "content" "footer";
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--border-radius);
}
@media (min-width: 50rem) {
  .container {
    max-width: 60rem;
  }
}

.content {
  grid-area: content;
  margin: var(--space-s);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
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
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  justify-content: space-between;
  padding-top: var(--space-l);
}

.board-cell {
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
}

.p1-board {
  display: grid;
  grid-template-columns: repeat(10, 35px);
  grid-template-rows: repeat(10, 35px);
  gap: 1px;
}
.p1-board .board-cell.water {
  background-color: var(--color-primary-rotate);
}
.p1-board .board-cell.ship {
  background-color: var(--color-background);
}

.p2-board {
  display: grid;
  grid-template-columns: repeat(10, 35px);
  grid-template-rows: repeat(10, 35px);
  gap: 1px;
}
.p2-board .board-cell.water {
  background-color: var(--color-primary-rotate);
}
.p2-board .board-cell.ship {
  background-color: var(--color-primary-rotate);
}

.game-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.game-info .top {
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-info .top .feedback-image {
  display: block;
  align-items: center;
}
.game-info .middle {
  text-align: center;
  font-size: var(--font-size-xxxxl);
  font-weight: 700;
  color: var(--color-secondary-rotate);
  filter: brightness(1.2) contrast(1.5);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4); /* White glow */
  animation: none; /* Ensure no animation is applied initially */
}
.game-info .middle.fade-out {
  animation: fadeOutAndShrink 3s forwards;
}
@keyframes fadeOutAndShrink {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5); /* Shrinks the text to 50% of its original size */
  }
}
.game-info .bottom {
  color: var(--color-light);
}

.fleet {
  color: var(--color-primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--space-l);
}
.fleet .p1-fleet, .fleet .p2-fleet {
  flex: 1;
  margin-top: var(--space-m);
  border-bottom: none;
  border-radius: 50%;
  border-width: 4px;
}
.fleet .p1-fleet {
  border-right: none;
  border-color: var(--color-secondary);
}
.fleet .p1-fleet legend {
  font-family: "Rust";
  color: var(--color-primary);
}
.fleet .p1-fleet .title {
  padding-top: var(--space-xs);
}
.fleet .p1-fleet .title h5 {
  color: var(--color-white);
}
.fleet .p1-fleet .ship {
  display: flex;
  gap: 1px;
}
.fleet .p1-fleet .board-cell {
  width: 20px; /* Adjust size as needed */
  height: 20px;
  background-color: grey; /* Default color for ship */
}
.fleet .p1-fleet .board-cell.hit {
  background-color: red; /* Color for hit */
}
.fleet .p2-fleet {
  border-left: none;
  border-color: var(--color-secondary-rotate);
}
.fleet .p2-fleet legend {
  font-family: "Rust";
  color: var(--color-primary);
  text-align: right; /* Align text to the right */
}
.fleet .p2-fleet .title {
  padding-top: var(--space-xs);
  display: flex;
  justify-content: end;
}
.fleet .p2-fleet .title h5 {
  color: var(--color-white);
}
.fleet .p2-fleet .ship {
  display: flex;
  gap: 1px;
  justify-content: flex-end;
}
.fleet .p2-fleet .board-cell {
  width: 20px; /* Adjust size as needed */
  height: 20px;
  background-color: grey; /* Default color for ship */
}
.fleet .p2-fleet .board-cell.hit {
  background-color: red; /* Color for hit */
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/config/_variables.scss","webpack://./src/styles/config/_reset.scss","webpack://./src/styles/layouts/_container.scss","webpack://./src/styles/mixins/_media.scss","webpack://./src/styles/layouts/_content.scss","webpack://./src/styles/layouts/_footer.scss","webpack://./src/styles/layouts/_header.scss","webpack://./src/styles/layouts/_sidebar.scss","webpack://./src/styles/components/_board.scss","webpack://./src/styles/components/_gameinfo.scss","webpack://./src/styles/components/_fleet.scss"],"names":[],"mappings":"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","sourcesContent":["// Entry point for your Sass build\n@import \"mixins/media\";\n\n// Google fonts\n@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');\n\n// Fonts\n@font-face {\n    font-family: 'Rust';\n    src: url('./fonts/rust.woff') format('woff'),\n        url('./fonts/rust.woff2') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n// Configuration\n@import \"config/variables\";\n@import \"config/reset\";\n\n// Layout\n@import \"layouts/container\";\n@import \"layouts/content\";\n@import \"layouts/footer\";\n@import \"layouts/header\";\n@import \"layouts/sidebar\";\n\n// Components\n@import \"components/board\";\n@import \"components/gameinfo\";\n@import \"components/fleet\";",":root {\n    // Simple fonts\n    --font-family-sans: 'Poppins', 'Rust', system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n    // Classical line heights\n    --line-height-headers: 1.1;\n    --line-height-body:    1.5;\n    --line-height-break:   2;\n\n    // Classical and robust font sizes system\n    --font-size-xs: 0.75rem;   // 12px\n    --font-size-s: 0.875rem;   // 14px\n    --font-size-m: 1rem;       // 16px\n    --font-size-l: 1.125rem;   // 18px\n    --font-size-xl: 1.25rem;   // 20px\n    --font-size-xxl: 1.5rem;   // 24px\n    --font-size-xxxl: 2rem;    // 32px\n    --font-size-xxxxl: 2.5rem; // 40px\n\n    // Three different text colors\n    --color-text-header: hsl(0, 1%, 16%);\n    --color-text-body:   hsl(0, 5%, 25%);\n    --color-text-muted:  hsl(0, 1%, 44%);\n\n    // Classical and robust spacing system\n    --space-xxxs: 0.25rem; // 4px\n    --space-xxs: 0.375rem; // 6px\n    --space-xs: 0.5rem;    // 8px\n    --space-s: 0.75rem;    // 12px\n    --space-m: 1rem;       // 16px\n    --space-l: 1.5rem;     // 24px\n    --space-xl: 2rem;      // 32px\n    --space-xxl: 2.5rem;   // 40px\n    --space-xxxl: 3rem;    // 48px\n    --space-xxxxl: 4rem;   // 64px\n\n    // Application colors\n    --color-primary:          #d6d0b8;\n    --color-primary-rotate:   rgb(23, 103, 223);\n    --color-primary-bg:       #5baaec;\n    --color-secondary:        #4c9173;\n    --color-secondary-rotate: #902424;\n    --color-tertiary:         hsl(49, 89%, 64%);\n    --color-glint:            rgb(163, 209, 255);\n\n    // Neutral colors\n    --color-white:      hsl(0, 0%, 100%);\n    --color-background: #33425b;\n    --color-light:      hsl(0, 6%, 93%);\n    --color-dark:       var(--color-text-header);\n\n    // Border radius\n    --border-radius: 0.375rem;\n\n    // Border\n    --border: solid 2px var(--color-light);\n    --border-dark: solid 2px var(--color-dark);\n\n    // Shadows\n    --shadow-large:  2px 4px 10px hsl(0 0% 0% / 0.1);\n    --shadow-small:  1px 3px 6px hsl(0 0% 0% / 0.1);\n}\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  overflow-y: scroll;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background-image: url(../assets/images/radar02.jpg);\n  background-repeat: no-repeat; /* Prevents the image from repeating */\n  background-size: cover; /* Scales the image to cover the entire container */\n  background-position: center;\n\n  // background-color: var(--color-background);\n  color: var(--color-text-body);\n  line-height: var(--line-height-body);\n  font-family: var(--font-family-sans);\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--color-primary);\n  line-height: var(--line-height-headers);\n  font-family: 'Rust';\n  font-weight: 500;\n}\n\nh1 {\n  font-size: var(--font-size-xxxl);\n}\n\nh2 {\n  font-size: var(--font-size-xxl);\n}\n\nh3 {\n  font-size: var(--font-size-xl);\n}\n\nh4 {\n  font-size: var(--font-size-l);\n}\n\na {\n  color: var(--color-primary);\n  text-decoration: none;\n  transition: color 200ms;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: var(--color-primary-rotate);\n  }\n}\n\n",".container {\n    // border: var(--border-dark);\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.1fr auto 0.1fr;\n    grid-template-areas:\n      \"header\"\n      \"content\"\n      \"footer\";\n\n    width: 100%;\n    // height: 100vh;\n    // padding-right: var(--space-xs);\n    // padding-left: var(--space-xs);\n    margin-left: auto;\n    margin-right: auto;\n    // margin-top: var(--space-l);\n    \n    border-radius: var(--border-radius);\n    // box-shadow: var(--shadow-small);\n    // background-color: var(--color-primary-bg);\n  \n    // background-color: transparent;\n\n    @include media(tabletAndUp) {\n      // padding-right: var(--space-m);\n      // padding-left: var(--space-m);\n      max-width: 60rem;\n    }\n  }","@mixin media($query) {\n    @if $query == tabletAndUp {\n      @media (min-width: 50rem) { @content; }\n    }\n  }",".content {\n    grid-area: content;\n    margin: var(--space-s);\n    // border: var(--border-dark);\n    border-radius: var(--border-radius);\n\n    display: flex;\n    flex-direction: column;\n    // justify-content: space-around;\n}","footer {\n    grid-area: footer;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n}","header {\n    grid-area: header;\n    margin: var(--space-s);\n    // border: var(--border-dark);\n    border-radius: var(--border-radius);\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }",".sidebar {\n    grid-area: sidebar;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n    background-color: var(--color-secondary-bg);\n\n\n  }\n\n  .profile {\n    display: flex;\n    flex-direction: column;\n    .profile-title {\n      font-size: var(--font-size-xxl);\n      font-weight: bold;\n    }\n  }","// board.scss\n\n.board-container {\n    display: flex;\n    justify-content: space-between;\n    padding-top: var(--space-l);\n}\n\n.board-cell {\n    // width: 50px; // Match the width in grid-template-columns\n    // height: 50px; // Match the height in grid-template-rows\n    border: 2px solid var(--color-primary); // Border to visualize grid cells\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--color-background);\n    // box-shadow: var(--shadow-large);\n}\n\n.p1-board {\n    display: grid;\n    grid-template-columns: repeat(10, 35px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 35px);\n    gap: 1px;\n    \n    .board-cell.water {\n        background-color: var(--color-primary-rotate); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: var(--color-background); // Different color for ship\n    }\n}\n.p2-board {\n    // border: var(--border-dark);\n    display: grid;\n    grid-template-columns: repeat(10, 35px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 35px);\n    gap: 1px; // Space between cells (optional)\n\n    .board-cell.water {\n        background-color: var(--color-primary-rotate);\n        // background-color: rgb(23, 103, 223); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: var(--color-primary-rotate);\n        // background-color: rgb(23, 103, 223);// Different color for ship\n    }\n}\n\n","// _gameinfo.scss\n\n.game-info {\n    // border: var(--border-dark);\n    // color: var(--color-light);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    \n    .top {\n        color: var(--color-primary);\n        font-size: var(--font-size-xl);\n        font-weight: bold;\n\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        // justify-content: center; \n\n        .feedback-image {\n            display: block;\n            align-items: center;\n        }\n    }\n\n    .middle {\n        text-align: center;\n        font-size: var(--font-size-xxxxl);\n        font-weight: 700;\n        color: var(--color-secondary-rotate);\n        filter: brightness(1.2) contrast(1.5);\n        text-shadow: \n            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */\n            0 0 10px rgba(255, 255, 255, 0.6), /* White glow */\n            0 0 15px rgba(255, 255, 255, 0.4); /* White glow */\n            animation: none; /* Ensure no animation is applied initially */\n        }\n        \n        .middle.fade-out {\n            animation: fadeOutAndShrink 3s forwards;\n        }\n        \n        @keyframes fadeOutAndShrink {\n            0% {\n                opacity: 1;\n                transform: scale(1);\n            }\n            100% {\n                opacity: 0;\n                transform: scale(0.5); /* Shrinks the text to 50% of its original size */\n            }\n        }\n\n    .bottom {\n        color: var(--color-light);\n    }\n}\n","// _fleet.scss\n.fleet {\n    color: var(--color-primary);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: var(--space-l);\n\n    .p1-fleet, .p2-fleet {\n        flex: 1;\n        margin-top: var(--space-m);\n        // padding: var(--space-s);\n        border-bottom: none;\n        border-radius: 50%;\n        border-width: 4px;\n    }\n    \n\n    .p1-fleet {\n        border-right: none;\n        border-color: var(--color-secondary);\n        legend {\n            font-family: 'Rust';\n            color: var(--color-primary);\n        }\n        .title {\n            padding-top: var(--space-xs);\n            h5 {\n                color: var(--color-white);\n            }\n        }\n        .ship{\n            display: flex;\n            gap: 1px;\n        }\n        .board-cell {\n            width: 20px; /* Adjust size as needed */\n            height: 20px;\n            background-color: grey; /* Default color for ship */\n        }\n        .board-cell.hit {\n            background-color: red; /* Color for hit */\n        }\n    }\n\n    .p2-fleet {\n        border-left: none;\n        border-color: var(--color-secondary-rotate);\n        legend {\n            font-family: 'Rust';\n            color: var(--color-primary);\n            text-align: right; /* Align text to the right */\n        }\n        .title {\n            padding-top: var(--space-xs);\n            display: flex;\n            justify-content: end;\n            h5 {\n                color: var(--color-white);\n            }\n        }\n        .ship{\n            display: flex;\n            gap: 1px;\n            justify-content: flex-end;\n        }\n        .board-cell {\n            width: 20px; /* Adjust size as needed */\n            height: 20px;\n            background-color: grey; /* Default color for ship */\n        }\n        .board-cell.hit {\n            background-color: red; /* Color for hit */\n        }\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/feedbackHelper.js":
/*!***************************************!*\
  !*** ./src/modules/feedbackHelper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   feedback: () => (/* binding */ feedback)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
// feedbackHelper.js



const feedback = (function() {

    function top(m, imageURL = null){
        const feedback = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('.top');
        feedback.innerHTML = '';
        // feedback.textContent = m;
        if (imageURL) {
            const img = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('img');
            img.src = imageURL;
            img.alt = 'Feedback Image';
            img.className = 'feedback-image'; // Add a class for styling
            feedback.appendChild(img);
        }

        const text = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
        text.className = 'feedback-text';
        text.innerHTML = m;
        feedback.appendChild(text);
    }

    function middle(m){
        const feedback = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('.middle');
        feedback.textContent = m;
        
        // Reset the animation by removing the class
        feedback.classList.remove('fade-out');
        setTimeout(() => feedback.classList.add('fade-out'), 10); 
    }
    
    function bottom(m){
        const feedback = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('.bottom');
        feedback.textContent = m;
    }

    return { top, middle, bottom };
})();



/***/ }),

/***/ "./src/modules/gameModule.js":
/*!***********************************!*\
  !*** ./src/modules/gameModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameModule: () => (/* binding */ gameModule)
/* harmony export */ });
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard */ "./src/modules/renderBoard.js");
/* harmony import */ var _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackHelper.js */ "./src/modules/feedbackHelper.js");
/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/player */ "./src/modules/player.js");
/* harmony import */ var _assets_images_missile_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/missile_right.png */ "./src/assets/images/missile_right.png");
/* harmony import */ var _assets_images_missile_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/missile_left.png */ "./src/assets/images/missile_left.png");
// gameModule.js







const gameModule = (function () {
    let currentPlayerIndex = 0;
    let players = [];
    let attacker;
    let defender;
    let isGameOver = false;

    function init() {
        let human = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)('human');
        let computer = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.createPlayer)('computer');
        players = [human, computer];
        round();
    }

    function round() {
        attacker = players[currentPlayerIndex]
        defender = players[getNextPlayerIndex()];
        // when attacker is type of human
        if (attacker.playerType === 'human') {
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.top(`Your Command`, _assets_images_missile_right_png__WEBPACK_IMPORTED_MODULE_3__);
            (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.playerBoard)(attacker);
            (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.opponentBoard)(defender);  
        } 
    
        // when attacker is type of computer
        if (attacker.playerType === 'computer') { 
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.top(`Enemy attacking..`, _assets_images_missile_right_png__WEBPACK_IMPORTED_MODULE_3__);
            attacker.isAttacking = true;
            (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.opponentBoard)(attacker); // Make opponent board unclickable during computers attack

            // Give delay before computer attacks. 
            setTimeout(() => {
                attacker.computerAttack(defender);
                (0,_renderBoard__WEBPACK_IMPORTED_MODULE_0__.playerBoard)(defender);
                attacker.isAttacking = false;
                gameOver();
            }, 3000);  
        }
    };

    function getIsGameOver() {
        return isGameOver;
    }

    function getNextPlayerIndex() {
        return (currentPlayerIndex + 1) % players.length;
    }

    function switchPlayer() {
        currentPlayerIndex = getNextPlayerIndex(); // switch player
        round(); // new round
    }

    function gameOver() {
        if (defender.getBoard().checkFleet()) {
            isGameOver = true;
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.middle(`Gameover: ${attacker.playerType} WINS!`);
        } else {
            if(players[getNextPlayerIndex()].getBoard().getBoardStatus().hit === true) {
                _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.bottom("Fire again!");
                round();
            } else {
                switchPlayer();
            }

        }
    }
    return { init, gameOver, getIsGameOver };
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
/* harmony import */ var _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackHelper.js */ "./src/modules/feedbackHelper.js");
/* harmony import */ var _assets_images_hit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/hit.png */ "./src/assets/images/hit.png");
/* harmony import */ var _assets_images_miss_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/miss.png */ "./src/assets/images/miss.png");
// gameboard.js







// Global board size;
const xAxis = 10; 
const yAxis = 10;

function createGameboard(type) {

    // Players board, ships and attack records. 
    let board = Array.from({ length: yAxis }, () => Array(xAxis).fill(null));
    let playerFleet = [];
    let shots =  new Map();
    let hasHit = false;

    // Create ships
    const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('carrier');
    const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('battleship');
    const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('destroyer');
    const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('submarine');
    const patrolboat = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)('patrolboat');

    // Places each ships
    if (type == 'human'){
        placeShip(0, 0, carrier, 'horizontal');
        placeShip(1, 0, battleship, 'horizontal');
        placeShip(2, 0, destroyer, 'horizontal');
        placeShip(3, 0, submarine, 'horizontal');
        placeShip(4, 0, patrolboat, 'horizontal');
    } else {
        placeShip(9, 0, carrier, 'horizontal');
        placeShip(8, 0, battleship, 'horizontal');
        placeShip(7, 0, destroyer, 'horizontal');
        placeShip(6, 0, submarine, 'horizontal');
        placeShip(5, 0, patrolboat, 'horizontal');
    }

    // Display board
    function getBoardStatus() {
        return {
            board: board,
            fleet: playerFleet,
            shots: shots,
            hit: hasHit
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
        if (shots.has(`${y},${x}`)) {
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.bottom('Check your co-ord.')
            return false
        }

        const cell = board[y][x];
        if (cell?.type === 'ship') {
            hasHit = true;
            cell.hit();
            shots.set(`${y},${x}`, _assets_images_hit_png__WEBPACK_IMPORTED_MODULE_2__); // if hit keep record with img
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.middle(`HIT!`);
            checkShip(cell);
        } else {
            hasHit = false;
            shots.set(`${y},${x}`, _assets_images_miss_png__WEBPACK_IMPORTED_MODULE_3__); // if miss keep record
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.middle(`MISSED!`);
        }
        return true;
    }

    // Check ship status that was hit
    function checkShip(cell){
        const ship = cell.getStatus();
        if (ship.sunk) {
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.middle(`${ship.name} sunk!`);
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

    return { getBoardStatus, placeShip, receiveAttack, checkFleet }
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
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/modules/gameModule.js");
// player.js





function createPlayer(type) {
    const playerType = type;
    const isAttacking = false;
    let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.createGameboard)(type);
    let possibleShots = fillPossibleShots();
    

    function getBoard(){
        return board;
    }

    /*** Computer Attack Logics ***/
    function computerAttack(player) {
        const [y, x] = getRandomShot();
        player.getBoard().receiveAttack(y, x);
    }

    // Creates array of all possible shots(coordinate) based on the size of board
    function fillPossibleShots() {
        const array = [];

        for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.yAxis; y++) {
            for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.xAxis; x++) {
                array.push([y, x]);
            }
        }
        return array;
    }
    // Generate a random index passed on possibleShots
    function getRandomShot() {
        const randomIndex = Math.floor(Math.random() * possibleShots.length);
        
        // Get the coordinate at the random index
        const [shot] = possibleShots.splice(randomIndex, 1); // Remove the shot from the array
        return shot;
    }

    return { playerType, isAttacking, getBoard, computerAttack };
}

/***/ }),

/***/ "./src/modules/renderBoard.js":
/*!************************************!*\
  !*** ./src/modules/renderBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayFleet: () => (/* binding */ displayFleet),
/* harmony export */   opponentBoard: () => (/* binding */ opponentBoard),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameModule */ "./src/modules/gameModule.js");
// renderBoard.js




function playerBoard(player){
    const divPlayerBoard = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p1-board');
    const divFleet = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p1-fleet');
    const board = player.getBoard().getBoardStatus().board;
    
    displayBoard(divPlayerBoard, board, player);
    displayFleet(player, divFleet);
}

function opponentBoard(player) {
    const divOpponentBoard = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p2-board');
    const divFleet = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p2-fleet');
    const board = player.getBoard().getBoardStatus().board;

    displayBoard(divOpponentBoard, board, player);
    displayFleet(player, divFleet);
}

// Render board 
function displayBoard(divBoard, board, player) {
    divBoard.innerHTML = '';

    for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_1__.yAxis; y++) {
        for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_1__.xAxis; x++) {
            const coord = `${y},${x}`;
            const cellType = board[y][x];
            const cell = createCell(player, coord, cellType);
            divBoard.append(cell);
        }
    }
}

// Return each cell to display board
function createCell(player, coord, cellType) { 
    const cell = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
    cell.className = 'board-cell';
    cell.id = 'board-cell';
    cell.dataset.position = coord;
    const img = checkHitsAndMisses(player, coord);
    cell.classList.add(cellType ? 'ship' : 'water'); // Add ship or water class depending on the cell content
    cell.append(img);
    // Adds click event on opponents board if player is computer, is attacking and game not over.
    if (player.playerType === 'computer' && !player.isAttacking && !_gameModule__WEBPACK_IMPORTED_MODULE_2__.gameModule.getIsGameOver()) {
        cell.addEventListener('click', () => handleCellClick(player, coord));   
    }
    return cell;
}

//Render fleet
function displayFleet(player, divFleet) {
    const fleet = player.getBoard().getBoardStatus().fleet;
    divFleet.innerHTML = '';
    const divFleetLegend = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('legend');
    
    divFleetLegend.textContent = 'My Fleet';
    divFleet.append(divFleetLegend);

    fleet.forEach(ship => {       
        const divShip = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
        const divTitle = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');

        divTitle.className = "title";
        divShip.className = "ship";
        divTitle.innerHTML = `<h5>${ship.getStatus().name}</h5>`;
        divFleet.append(divTitle);
        const cells = createShipsCells(ship, player);
        cells.forEach(cell => divShip.appendChild(cell));
        divFleet.append(divShip);
    });
}

// Create ship cells for fleet display
function createShipsCells(ship, player) {
    const shipLength = ship.getStatus().length;
    let shipHits = ship.getStatus().hits;
    const shipSunk = ship.getStatus().sunk;

    const cells = [];
    for (let i = 0; i < shipLength; i++) {
        const cell = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('div');
        cell.className = 'board-cell';
        cell.classList.add('ship'); // Ensure it matches the ship class used on the board
        if (shipHits > 0 && player.playerType !== 'computer' ) { // if ships has hits add hit class
            cell.classList.add('hit');
            shipHits = Math.max(0, shipHits - 1); // ensure shipHits doesn't go below 0
        }
        if (shipSunk) {
            cell.classList.add('hit');      
        }
        cells.push(cell);
    }
    return cells;
}

// Loads image file for shots thats hit and miss
function checkHitsAndMisses(player, coord){
    const shotsFired = player.getBoard().getBoardStatus().shots.has(coord);
    if (shotsFired) {
        const img = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domCreator)('img');
        img.src = player.getBoard().getBoardStatus().shots.get(coord);
        return img;
    }
    return '';
}

function handleCellClick(player, coord) {
    const [y, x] = coord.split(',').map(Number);
    if (player.getBoard().receiveAttack(y, x)) { // if attack is sucessful
        _gameModule__WEBPACK_IMPORTED_MODULE_2__.gameModule.gameOver();
        opponentBoard(player); // updates board and ensure to remove click event if isGameOver
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

/***/ "./src/assets/images/hit.png":
/*!***********************************!*\
  !*** ./src/assets/images/hit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/hit.png";

/***/ }),

/***/ "./src/assets/images/miss.png":
/*!************************************!*\
  !*** ./src/assets/images/miss.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/miss.png";

/***/ }),

/***/ "./src/assets/images/missile_left.png":
/*!********************************************!*\
  !*** ./src/assets/images/missile_left.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/missile_left.png";

/***/ }),

/***/ "./src/assets/images/missile_right.png":
/*!*********************************************!*\
  !*** ./src/assets/images/missile_right.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/missile_right.png";

/***/ }),

/***/ "./src/assets/images/radar02.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/radar02.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/radar02.jpg";

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
/* harmony import */ var _modules_gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameModule */ "./src/modules/gameModule.js");
// index.js




function init() {
    _modules_gameModule__WEBPACK_IMPORTED_MODULE_1__.gameModule.init();
}

init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxzSEFBb0M7QUFDaEYsNENBQTRDLHdIQUFxQztBQUNqRiw0Q0FBNEMsb0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysb0hBQW9IO0FBQ3BILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DLHdCQUF3QixtQ0FBbUM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0QsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUhBQXVIO0FBQ3ZILG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixDQUFDLE9BQU8sNmxCQUE2bEIsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxzQkFBc0Isc0JBQXNCLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLFNBQVMsVUFBVSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxzQkFBc0Isc0JBQXNCLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxzQkFBc0IsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLHFCQUFxQixVQUFVLHNCQUFzQixNQUFNLE1BQU0sc0JBQXNCLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxzQkFBc0IsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0scUJBQXFCLFVBQVUsc0JBQXNCLE1BQU0sTUFBTSxzQkFBc0IsdUZBQXVGLGlH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O1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7QUNBQTs7QUFFNEI7QUFDc0I7O0FBRWxEO0FBQ0EsSUFBSSwyREFBVTtBQUNkOztBQUVBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2RvbUhlbHBlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvZmVlZGJhY2tIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dhbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9yZW5kZXJCb2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvcnVzdC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9ydXN0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9yYWRhcjAyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1c3RcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbjpyb290IHtcbiAgLS1mb250LWZhbWlseS1zYW5zOiBcIlBvcHBpbnNcIiwgXCJSdXN0XCIsIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAtLWxpbmUtaGVpZ2h0LWhlYWRlcnM6IDEuMTtcbiAgLS1saW5lLWhlaWdodC1ib2R5OiAxLjU7XG4gIC0tbGluZS1oZWlnaHQtYnJlYWs6IDI7XG4gIC0tZm9udC1zaXplLXhzOiAwLjc1cmVtO1xuICAtLWZvbnQtc2l6ZS1zOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtbTogMXJlbTtcbiAgLS1mb250LXNpemUtbDogMS4xMjVyZW07XG4gIC0tZm9udC1zaXplLXhsOiAxLjI1cmVtO1xuICAtLWZvbnQtc2l6ZS14eGw6IDEuNXJlbTtcbiAgLS1mb250LXNpemUteHh4bDogMnJlbTtcbiAgLS1mb250LXNpemUteHh4eGw6IDIuNXJlbTtcbiAgLS1jb2xvci10ZXh0LWhlYWRlcjogaHNsKDAsIDElLCAxNiUpO1xuICAtLWNvbG9yLXRleHQtYm9keTogaHNsKDAsIDUlLCAyNSUpO1xuICAtLWNvbG9yLXRleHQtbXV0ZWQ6IGhzbCgwLCAxJSwgNDQlKTtcbiAgLS1zcGFjZS14eHhzOiAwLjI1cmVtO1xuICAtLXNwYWNlLXh4czogMC4zNzVyZW07XG4gIC0tc3BhY2UteHM6IDAuNXJlbTtcbiAgLS1zcGFjZS1zOiAwLjc1cmVtO1xuICAtLXNwYWNlLW06IDFyZW07XG4gIC0tc3BhY2UtbDogMS41cmVtO1xuICAtLXNwYWNlLXhsOiAycmVtO1xuICAtLXNwYWNlLXh4bDogMi41cmVtO1xuICAtLXNwYWNlLXh4eGw6IDNyZW07XG4gIC0tc3BhY2UteHh4eGw6IDRyZW07XG4gIC0tY29sb3ItcHJpbWFyeTogI2Q2ZDBiODtcbiAgLS1jb2xvci1wcmltYXJ5LXJvdGF0ZTogcmdiKDIzLCAxMDMsIDIyMyk7XG4gIC0tY29sb3ItcHJpbWFyeS1iZzogIzViYWFlYztcbiAgLS1jb2xvci1zZWNvbmRhcnk6ICM0YzkxNzM7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZTogIzkwMjQyNDtcbiAgLS1jb2xvci10ZXJ0aWFyeTogaHNsKDQ5LCA4OSUsIDY0JSk7XG4gIC0tY29sb3ItZ2xpbnQ6IHJnYigxNjMsIDIwOSwgMjU1KTtcbiAgLS1jb2xvci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcbiAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzM0MjViO1xuICAtLWNvbG9yLWxpZ2h0OiBoc2woMCwgNiUsIDkzJSk7XG4gIC0tY29sb3ItZGFyazogdmFyKC0tY29sb3ItdGV4dC1oZWFkZXIpO1xuICAtLWJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAtLWJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgLS1ib3JkZXItZGFyazogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhcmspO1xuICAtLXNoYWRvdy1sYXJnZTogMnB4IDRweCAxMHB4IGhzbCgwIDAlIDAlIC8gMC4xKTtcbiAgLS1zaGFkb3ctc21hbGw6IDFweCAzcHggNnB4IGhzbCgwIDAlIDAlIC8gMC4xKTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBQcmV2ZW50cyB0aGUgaW1hZ2UgZnJvbSByZXBlYXRpbmcgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogU2NhbGVzIHRoZSBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWJvZHkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYm9keSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1zYW5zKTtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkZXJzKTtcbiAgZm9udC1mYW1pbHk6IFwiUnVzdFwiO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4eGwpO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xufVxuXG5hIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xufVxuYTpob3ZlciwgYTpmb2N1cywgYTphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciBhdXRvIDAuMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImhlYWRlclwiIFwiY29udGVudFwiIFwiZm9vdGVyXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MHJlbSkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZ3JpZC1hcmVhOiBjb250ZW50O1xuICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXIge1xuICBncmlkLWFyZWE6IHNpZGViYXI7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcbn1cblxuLnByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnByb2ZpbGUgLnByb2ZpbGUtdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLWwpO1xufVxuXG4uYm9hcmQtY2VsbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG4ucDEtYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcbiAgZ2FwOiAxcHg7XG59XG4ucDEtYm9hcmQgLmJvYXJkLWNlbGwud2F0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXJvdGF0ZSk7XG59XG4ucDEtYm9hcmQgLmJvYXJkLWNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xufVxuXG4ucDItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcbiAgZ2FwOiAxcHg7XG59XG4ucDItYm9hcmQgLmJvYXJkLWNlbGwud2F0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXJvdGF0ZSk7XG59XG4ucDItYm9hcmQgLmJvYXJkLWNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcbn1cblxuLmdhbWUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWluZm8gLnRvcCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWluZm8gLnRvcCAuZmVlZGJhY2staW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5nYW1lLWluZm8gLm1pZGRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHh4eGwpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZSk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpIGNvbnRyYXN0KDEuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IC8qIFdoaXRlIGdsb3cgKi9cbiAgYW5pbWF0aW9uOiBub25lOyAvKiBFbnN1cmUgbm8gYW5pbWF0aW9uIGlzIGFwcGxpZWQgaW5pdGlhbGx5ICovXG59XG4uZ2FtZS1pbmZvIC5taWRkbGUuZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGVPdXRBbmRTaHJpbmsgM3MgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXRBbmRTaHJpbmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpOyAvKiBTaHJpbmtzIHRoZSB0ZXh0IHRvIDUwJSBvZiBpdHMgb3JpZ2luYWwgc2l6ZSAqL1xuICB9XG59XG4uZ2FtZS1pbmZvIC5ib3R0b20ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xufVxuXG4uZmxlZXQge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1sKTtcbn1cbi5mbGVldCAucDEtZmxlZXQsIC5mbGVldCAucDItZmxlZXQge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItd2lkdGg6IDRweDtcbn1cbi5mbGVldCAucDEtZmxlZXQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5mbGVldCAucDEtZmxlZXQgbGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUnVzdFwiO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4uZmxlZXQgLnAxLWZsZWV0IC50aXRsZSB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjZS14cyk7XG59XG4uZmxlZXQgLnAxLWZsZWV0IC50aXRsZSBoNSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4uZmxlZXQgLnAxLWZsZWV0IC5zaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcHg7XG59XG4uZmxlZXQgLnAxLWZsZWV0IC5ib2FyZC1jZWxsIHtcbiAgd2lkdGg6IDIwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IC8qIERlZmF1bHQgY29sb3IgZm9yIHNoaXAgKi9cbn1cbi5mbGVldCAucDEtZmxlZXQgLmJvYXJkLWNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAvKiBDb2xvciBmb3IgaGl0ICovXG59XG4uZmxlZXQgLnAyLWZsZWV0IHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZSk7XG59XG4uZmxlZXQgLnAyLWZsZWV0IGxlZ2VuZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1c3RcIjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpZ24gdGV4dCB0byB0aGUgcmlnaHQgKi9cbn1cbi5mbGVldCAucDItZmxlZXQgLnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXhzKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG4uZmxlZXQgLnAyLWZsZWV0IC50aXRsZSBoNSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG59XG4uZmxlZXQgLnAyLWZsZWV0IC5zaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxlZXQgLnAyLWZsZWV0IC5ib2FyZC1jZWxsIHtcbiAgd2lkdGg6IDIwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7IC8qIERlZmF1bHQgY29sb3IgZm9yIHNoaXAgKi9cbn1cbi5mbGVldCAucDItZmxlZXQgLmJvYXJkLWNlbGwuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAvKiBDb2xvciBmb3IgaGl0ICovXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb25maWcvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbmZpZy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXRzL19jb250YWluZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9taXhpbnMvX21lZGlhLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9fY29udGVudC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dHMvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dHMvX3NpZGViYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19ib2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvX2dhbWVpbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fZmxlZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNJLG1CQUFBO0VBQ0EsbUhBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBTko7QUNOQTtFQUVJLDhKQUFBO0VBR0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBR0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUdBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUdBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUdBLCtCQUFBO0VBQ0EsMkJBQUE7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O0VWMk5kO0FBQ0Y7QVV4Tkk7RUFDSSx5QkFBQTtBVjBOUjs7QVdoUkE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QVhtUko7QVdqUkk7RUFDSSxPQUFBO0VBQ0EsMEJBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QVhrUlI7QVc5UUk7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0FYZ1JSO0FXL1FRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBWGlSWjtBVy9RUTtFQUNJLDRCQUFBO0FYaVJaO0FXaFJZO0VBQ0kseUJBQUE7QVhrUmhCO0FXL1FRO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QVhpUlo7QVcvUVE7RUFDSSxXQUFBLEVBQUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUEsRUFBQSwyQkFBQTtBWGlSWjtBVy9RUTtFQUNJLHFCQUFBLEVBQUEsa0JBQUE7QVhpUlo7QVc3UUk7RUFDSSxpQkFBQTtFQUNBLDJDQUFBO0FYK1FSO0FXOVFRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBLEVBQUEsNEJBQUE7QVhnUlo7QVc5UVE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBWGdSWjtBVy9RWTtFQUNJLHlCQUFBO0FYaVJoQjtBVzlRUTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QVhnUlo7QVc5UVE7RUFDSSxXQUFBLEVBQUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUEsRUFBQSwyQkFBQTtBWGdSWjtBVzlRUTtFQUNJLHFCQUFBLEVBQUEsa0JBQUE7QVhnUlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gRW50cnkgcG9pbnQgZm9yIHlvdXIgU2FzcyBidWlsZFxcbkBpbXBvcnQgXFxcIm1peGlucy9tZWRpYVxcXCI7XFxuXFxuLy8gR29vZ2xlIGZvbnRzXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8vIEZvbnRzXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzdCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL3J1c3Qud29mZicpIGZvcm1hdCgnd29mZicpLFxcbiAgICAgICAgdXJsKCcuL2ZvbnRzL3J1c3Qud29mZjInKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vLyBDb25maWd1cmF0aW9uXFxuQGltcG9ydCBcXFwiY29uZmlnL3ZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiY29uZmlnL3Jlc2V0XFxcIjtcXG5cXG4vLyBMYXlvdXRcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2NvbnRhaW5lclxcXCI7XFxuQGltcG9ydCBcXFwibGF5b3V0cy9jb250ZW50XFxcIjtcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2Zvb3RlclxcXCI7XFxuQGltcG9ydCBcXFwibGF5b3V0cy9oZWFkZXJcXFwiO1xcbkBpbXBvcnQgXFxcImxheW91dHMvc2lkZWJhclxcXCI7XFxuXFxuLy8gQ29tcG9uZW50c1xcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvYm9hcmRcXFwiO1xcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvZ2FtZWluZm9cXFwiO1xcbkBpbXBvcnQgXFxcImNvbXBvbmVudHMvZmxlZXRcXFwiO1wiLFwiOnJvb3Qge1xcbiAgICAvLyBTaW1wbGUgZm9udHNcXG4gICAgLS1mb250LWZhbWlseS1zYW5zOiAnUG9wcGlucycsICdSdXN0Jywgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC8vIENsYXNzaWNhbCBsaW5lIGhlaWdodHNcXG4gICAgLS1saW5lLWhlaWdodC1oZWFkZXJzOiAxLjE7XFxuICAgIC0tbGluZS1oZWlnaHQtYm9keTogICAgMS41O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWJyZWFrOiAgIDI7XFxuXFxuICAgIC8vIENsYXNzaWNhbCBhbmQgcm9idXN0IGZvbnQgc2l6ZXMgc3lzdGVtXFxuICAgIC0tZm9udC1zaXplLXhzOiAwLjc1cmVtOyAgIC8vIDEycHhcXG4gICAgLS1mb250LXNpemUtczogMC44NzVyZW07ICAgLy8gMTRweFxcbiAgICAtLWZvbnQtc2l6ZS1tOiAxcmVtOyAgICAgICAvLyAxNnB4XFxuICAgIC0tZm9udC1zaXplLWw6IDEuMTI1cmVtOyAgIC8vIDE4cHhcXG4gICAgLS1mb250LXNpemUteGw6IDEuMjVyZW07ICAgLy8gMjBweFxcbiAgICAtLWZvbnQtc2l6ZS14eGw6IDEuNXJlbTsgICAvLyAyNHB4XFxuICAgIC0tZm9udC1zaXplLXh4eGw6IDJyZW07ICAgIC8vIDMycHhcXG4gICAgLS1mb250LXNpemUteHh4eGw6IDIuNXJlbTsgLy8gNDBweFxcblxcbiAgICAvLyBUaHJlZSBkaWZmZXJlbnQgdGV4dCBjb2xvcnNcXG4gICAgLS1jb2xvci10ZXh0LWhlYWRlcjogaHNsKDAsIDElLCAxNiUpO1xcbiAgICAtLWNvbG9yLXRleHQtYm9keTogICBoc2woMCwgNSUsIDI1JSk7XFxuICAgIC0tY29sb3ItdGV4dC1tdXRlZDogIGhzbCgwLCAxJSwgNDQlKTtcXG5cXG4gICAgLy8gQ2xhc3NpY2FsIGFuZCByb2J1c3Qgc3BhY2luZyBzeXN0ZW1cXG4gICAgLS1zcGFjZS14eHhzOiAwLjI1cmVtOyAvLyA0cHhcXG4gICAgLS1zcGFjZS14eHM6IDAuMzc1cmVtOyAvLyA2cHhcXG4gICAgLS1zcGFjZS14czogMC41cmVtOyAgICAvLyA4cHhcXG4gICAgLS1zcGFjZS1zOiAwLjc1cmVtOyAgICAvLyAxMnB4XFxuICAgIC0tc3BhY2UtbTogMXJlbTsgICAgICAgLy8gMTZweFxcbiAgICAtLXNwYWNlLWw6IDEuNXJlbTsgICAgIC8vIDI0cHhcXG4gICAgLS1zcGFjZS14bDogMnJlbTsgICAgICAvLyAzMnB4XFxuICAgIC0tc3BhY2UteHhsOiAyLjVyZW07ICAgLy8gNDBweFxcbiAgICAtLXNwYWNlLXh4eGw6IDNyZW07ICAgIC8vIDQ4cHhcXG4gICAgLS1zcGFjZS14eHh4bDogNHJlbTsgICAvLyA2NHB4XFxuXFxuICAgIC8vIEFwcGxpY2F0aW9uIGNvbG9yc1xcbiAgICAtLWNvbG9yLXByaW1hcnk6ICAgICAgICAgICNkNmQwYjg7XFxuICAgIC0tY29sb3ItcHJpbWFyeS1yb3RhdGU6ICAgcmdiKDIzLCAxMDMsIDIyMyk7XFxuICAgIC0tY29sb3ItcHJpbWFyeS1iZzogICAgICAgIzViYWFlYztcXG4gICAgLS1jb2xvci1zZWNvbmRhcnk6ICAgICAgICAjNGM5MTczO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeS1yb3RhdGU6ICM5MDI0MjQ7XFxuICAgIC0tY29sb3ItdGVydGlhcnk6ICAgICAgICAgaHNsKDQ5LCA4OSUsIDY0JSk7XFxuICAgIC0tY29sb3ItZ2xpbnQ6ICAgICAgICAgICAgcmdiKDE2MywgMjA5LCAyNTUpO1xcblxcbiAgICAvLyBOZXV0cmFsIGNvbG9yc1xcbiAgICAtLWNvbG9yLXdoaXRlOiAgICAgIGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIC0tY29sb3ItYmFja2dyb3VuZDogIzMzNDI1YjtcXG4gICAgLS1jb2xvci1saWdodDogICAgICBoc2woMCwgNiUsIDkzJSk7XFxuICAgIC0tY29sb3ItZGFyazogICAgICAgdmFyKC0tY29sb3ItdGV4dC1oZWFkZXIpO1xcblxcbiAgICAvLyBCb3JkZXIgcmFkaXVzXFxuICAgIC0tYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxuXFxuICAgIC8vIEJvcmRlclxcbiAgICAtLWJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gICAgLS1ib3JkZXItZGFyazogc29saWQgMnB4IHZhcigtLWNvbG9yLWRhcmspO1xcblxcbiAgICAvLyBTaGFkb3dzXFxuICAgIC0tc2hhZG93LWxhcmdlOiAgMnB4IDRweCAxMHB4IGhzbCgwIDAlIDAlIC8gMC4xKTtcXG4gICAgLS1zaGFkb3ctc21hbGw6ICAxcHggM3B4IDZweCBoc2woMCAwJSAwJSAvIDAuMSk7XFxufVxcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltYWdlcy9yYWRhcjAyLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBQcmV2ZW50cyB0aGUgaW1hZ2UgZnJvbSByZXBlYXRpbmcgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIFNjYWxlcyB0aGUgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG5cXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtYm9keSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYm9keSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktc2Fucyk7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtaGVhZGVycyk7XFxuICBmb250LWZhbWlseTogJ1J1c3QnO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHh4bCk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyxcXG4gICY6YWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcXG4gIH1cXG59XFxuXFxuXCIsXCIuY29udGFpbmVyIHtcXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgYXV0byAwLjFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJjb250ZW50XFxcIlxcbiAgICAgIFxcXCJmb290ZXJcXFwiO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLy8gaGVpZ2h0OiAxMDB2aDtcXG4gICAgLy8gcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2UteHMpO1xcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXhzKTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgLy8gbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbCk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgLy8gYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtYWxsKTtcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1iZyk7XFxuICBcXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhKHRhYmxldEFuZFVwKSB7XFxuICAgICAgLy8gcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2UtbSk7XFxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1tKTtcXG4gICAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICB9XFxuICB9XCIsXCJAbWl4aW4gbWVkaWEoJHF1ZXJ5KSB7XFxuICAgIEBpZiAkcXVlcnkgPT0gdGFibGV0QW5kVXAge1xcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MHJlbSkgeyBAY29udGVudDsgfVxcbiAgICB9XFxuICB9XCIsXCIuY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XCIsXCJmb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cIixcImhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xcbiAgICAvLyBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cIixcIi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1iZyk7XFxuXFxuXFxuICB9XFxuXFxuICAucHJvZmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC5wcm9maWxlLXRpdGxlIHtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eGwpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuICB9XCIsXCIvLyBib2FyZC5zY3NzXFxuXFxuLmJvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLWwpO1xcbn1cXG5cXG4uYm9hcmQtY2VsbCB7XFxuICAgIC8vIHdpZHRoOiA1MHB4OyAvLyBNYXRjaCB0aGUgd2lkdGggaW4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXFxuICAgIC8vIGhlaWdodDogNTBweDsgLy8gTWF0Y2ggdGhlIGhlaWdodCBpbiBncmlkLXRlbXBsYXRlLXJvd3NcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7IC8vIEJvcmRlciB0byB2aXN1YWxpemUgZ3JpZCBjZWxsc1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xcbiAgICAvLyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGFyZ2UpO1xcbn1cXG5cXG4ucDEtYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7IC8vIEFkanVzdCB0aGUgc2l6ZSBiYXNlZCBvbiB5b3VyIG5lZWRzXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIFxcbiAgICAuYm9hcmQtY2VsbC53YXRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXJvdGF0ZSk7IC8vIERpZmZlcmVudCBjb2xvciBmb3IgJ3dhdGVyJ1xcbiAgICB9XFxuICAgIFxcbiAgICAuYm9hcmQtY2VsbC5zaGlwIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpOyAvLyBEaWZmZXJlbnQgY29sb3IgZm9yIHNoaXBcXG4gICAgfVxcbn1cXG4ucDItYm9hcmQge1xcbiAgICAvLyBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDM1cHgpOyAvLyBBZGp1c3QgdGhlIHNpemUgYmFzZWQgb24geW91ciBuZWVkc1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICAgIGdhcDogMXB4OyAvLyBTcGFjZSBiZXR3ZWVuIGNlbGxzIChvcHRpb25hbClcXG5cXG4gICAgLmJvYXJkLWNlbGwud2F0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMDMsIDIyMyk7IC8vIERpZmZlcmVudCBjb2xvciBmb3IgJ3dhdGVyJ1xcbiAgICB9XFxuICAgIFxcbiAgICAuYm9hcmQtY2VsbC5zaGlwIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTAzLCAyMjMpOy8vIERpZmZlcmVudCBjb2xvciBmb3Igc2hpcFxcbiAgICB9XFxufVxcblxcblwiLFwiLy8gX2dhbWVpbmZvLnNjc3NcXG5cXG4uZ2FtZS1pbmZvIHtcXG4gICAgLy8gYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIC8vIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIC50b3Age1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuXFxuICAgICAgICAuZmVlZGJhY2staW1hZ2Uge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm1pZGRsZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHh4bCk7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1yb3RhdGUpO1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMikgY29udHJhc3QoMS41KTtcXG4gICAgICAgIHRleHQtc2hhZG93OiBcXG4gICAgICAgICAgICAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgLyogRW5zdXJlIG5vIGFuaW1hdGlvbiBpcyBhcHBsaWVkIGluaXRpYWxseSAqL1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAubWlkZGxlLmZhZGUtb3V0IHtcXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXRBbmRTaHJpbmsgM3MgZm9yd2FyZHM7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZU91dEFuZFNocmluayB7XFxuICAgICAgICAgICAgMCUge1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAxMDAlIHtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpOyAvKiBTaHJpbmtzIHRoZSB0ZXh0IHRvIDUwJSBvZiBpdHMgb3JpZ2luYWwgc2l6ZSAqL1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgLmJvdHRvbSB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICB9XFxufVxcblwiLFwiLy8gX2ZsZWV0LnNjc3NcXG4uZmxlZXQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sKTtcXG5cXG4gICAgLnAxLWZsZWV0LCAucDItZmxlZXQge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW0pO1xcbiAgICAgICAgLy8gcGFkZGluZzogdmFyKC0tc3BhY2Utcyk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIC5wMS1mbGVldCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICBsZWdlbmQge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUnVzdCc7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UteHMpO1xcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2hpcHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvYXJkLWNlbGwge1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4OyAvKiBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWQgKi9cXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcCAqL1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvYXJkLWNlbGwuaGl0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIENvbG9yIGZvciBoaXQgKi9cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucDItZmxlZXQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1yb3RhdGUpO1xcbiAgICAgICAgbGVnZW5kIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1J1c3QnO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpZ24gdGV4dCB0byB0aGUgcmlnaHQgKi9cXG4gICAgICAgIH1cXG4gICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXhzKTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2hpcHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYm9hcmQtY2VsbCB7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyAvKiBEZWZhdWx0IGNvbG9yIGZvciBzaGlwICovXFxuICAgICAgICB9XFxuICAgICAgICAuYm9hcmQtY2VsbC5oaXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgLyogQ29sb3IgZm9yIGhpdCAqL1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZG9tSGVscGVyLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TZWxlY3RvcihuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21DcmVhdG9yKG5hbWUpe1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG4iLCIvLyBmZWVkYmFja0hlbHBlci5qc1xuXG5pbXBvcnQgeyBkb21DcmVhdG9yLCBkb21TZWxlY3RvciB9IGZyb20gXCIuL2RvbUhlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgZmVlZGJhY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiB0b3AobSwgaW1hZ2VVUkwgPSBudWxsKXtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb21TZWxlY3RvcignLnRvcCcpO1xuICAgICAgICBmZWVkYmFjay5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgLy8gZmVlZGJhY2sudGV4dENvbnRlbnQgPSBtO1xuICAgICAgICBpZiAoaW1hZ2VVUkwpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvbUNyZWF0b3IoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlVVJMO1xuICAgICAgICAgICAgaW1nLmFsdCA9ICdGZWVkYmFjayBJbWFnZSc7XG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gJ2ZlZWRiYWNrLWltYWdlJzsgLy8gQWRkIGEgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICAgICAgICAgIGZlZWRiYWNrLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9tQ3JlYXRvcignZGl2Jyk7XG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gJ2ZlZWRiYWNrLXRleHQnO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IG07XG4gICAgICAgIGZlZWRiYWNrLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1pZGRsZShtKXtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb21TZWxlY3RvcignLm1pZGRsZScpO1xuICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IG07XG4gICAgICAgIFxuICAgICAgICAvLyBSZXNldCB0aGUgYW5pbWF0aW9uIGJ5IHJlbW92aW5nIHRoZSBjbGFzc1xuICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLW91dCcpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0JyksIDEwKTsgXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGJvdHRvbShtKXtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb21TZWxlY3RvcignLmJvdHRvbScpO1xuICAgICAgICBmZWVkYmFjay50ZXh0Q29udGVudCA9IG07XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG9wLCBtaWRkbGUsIGJvdHRvbSB9O1xufSkoKTtcblxuIiwiLy8gZ2FtZU1vZHVsZS5qc1xuXG5pbXBvcnQgeyBwbGF5ZXJCb2FyZCwgb3Bwb25lbnRCb2FyZCB9IGZyb20gJy4vcmVuZGVyQm9hcmQnO1xuaW1wb3J0IHsgZmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFja0hlbHBlci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi4vbW9kdWxlcy9wbGF5ZXInO1xuaW1wb3J0IG1pc3NpbGVSaWdodCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21pc3NpbGVfcmlnaHQucG5nJztcbmltcG9ydCBtaXNzaWxlTGVmdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL21pc3NpbGVfbGVmdC5wbmcnO1xuXG5leHBvcnQgY29uc3QgZ2FtZU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XG4gICAgbGV0IHBsYXllcnMgPSBbXTtcbiAgICBsZXQgYXR0YWNrZXI7XG4gICAgbGV0IGRlZmVuZGVyO1xuICAgIGxldCBpc0dhbWVPdmVyID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgaHVtYW4gPSBjcmVhdGVQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgICAgIGxldCBjb21wdXRlciA9IGNyZWF0ZVBsYXllcignY29tcHV0ZXInKTtcbiAgICAgICAgcGxheWVycyA9IFtodW1hbiwgY29tcHV0ZXJdO1xuICAgICAgICByb3VuZCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdW5kKCkge1xuICAgICAgICBhdHRhY2tlciA9IHBsYXllcnNbY3VycmVudFBsYXllckluZGV4XVxuICAgICAgICBkZWZlbmRlciA9IHBsYXllcnNbZ2V0TmV4dFBsYXllckluZGV4KCldO1xuICAgICAgICAvLyB3aGVuIGF0dGFja2VyIGlzIHR5cGUgb2YgaHVtYW5cbiAgICAgICAgaWYgKGF0dGFja2VyLnBsYXllclR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLnRvcChgWW91ciBDb21tYW5kYCwgbWlzc2lsZVJpZ2h0KTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkKGF0dGFja2VyKTtcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQoZGVmZW5kZXIpOyAgXG4gICAgICAgIH0gXG4gICAgXG4gICAgICAgIC8vIHdoZW4gYXR0YWNrZXIgaXMgdHlwZSBvZiBjb21wdXRlclxuICAgICAgICBpZiAoYXR0YWNrZXIucGxheWVyVHlwZSA9PT0gJ2NvbXB1dGVyJykgeyBcbiAgICAgICAgICAgIGZlZWRiYWNrLnRvcChgRW5lbXkgYXR0YWNraW5nLi5gLCBtaXNzaWxlUmlnaHQpO1xuICAgICAgICAgICAgYXR0YWNrZXIuaXNBdHRhY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZChhdHRhY2tlcik7IC8vIE1ha2Ugb3Bwb25lbnQgYm9hcmQgdW5jbGlja2FibGUgZHVyaW5nIGNvbXB1dGVycyBhdHRhY2tcblxuICAgICAgICAgICAgLy8gR2l2ZSBkZWxheSBiZWZvcmUgY29tcHV0ZXIgYXR0YWNrcy4gXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhdHRhY2tlci5jb21wdXRlckF0dGFjayhkZWZlbmRlcik7XG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQoZGVmZW5kZXIpO1xuICAgICAgICAgICAgICAgIGF0dGFja2VyLmlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIH0sIDMwMDApOyAgXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNHYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIGlzR2FtZU92ZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmV4dFBsYXllckluZGV4KCkge1xuICAgICAgICByZXR1cm4gKGN1cnJlbnRQbGF5ZXJJbmRleCArIDEpICUgcGxheWVycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKCkge1xuICAgICAgICBjdXJyZW50UGxheWVySW5kZXggPSBnZXROZXh0UGxheWVySW5kZXgoKTsgLy8gc3dpdGNoIHBsYXllclxuICAgICAgICByb3VuZCgpOyAvLyBuZXcgcm91bmRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKGRlZmVuZGVyLmdldEJvYXJkKCkuY2hlY2tGbGVldCgpKSB7XG4gICAgICAgICAgICBpc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGZlZWRiYWNrLm1pZGRsZShgR2FtZW92ZXI6ICR7YXR0YWNrZXIucGxheWVyVHlwZX0gV0lOUyFgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKHBsYXllcnNbZ2V0TmV4dFBsYXllckluZGV4KCldLmdldEJvYXJkKCkuZ2V0Qm9hcmRTdGF0dXMoKS5oaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmZWVkYmFjay5ib3R0b20oXCJGaXJlIGFnYWluIVwiKTtcbiAgICAgICAgICAgICAgICByb3VuZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGluaXQsIGdhbWVPdmVyLCBnZXRJc0dhbWVPdmVyIH07XG59KSgpOyIsIi8vIGdhbWVib2FyZC5qc1xuXG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFja0hlbHBlci5qc1wiO1xuaW1wb3J0IGhpdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hpdC5wbmcnO1xuaW1wb3J0IG1pc3MgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9taXNzLnBuZyc7XG5cblxuLy8gR2xvYmFsIGJvYXJkIHNpemU7XG5leHBvcnQgY29uc3QgeEF4aXMgPSAxMDsgXG5leHBvcnQgY29uc3QgeUF4aXMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCh0eXBlKSB7XG5cbiAgICAvLyBQbGF5ZXJzIGJvYXJkLCBzaGlwcyBhbmQgYXR0YWNrIHJlY29yZHMuIFxuICAgIGxldCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHlBeGlzIH0sICgpID0+IEFycmF5KHhBeGlzKS5maWxsKG51bGwpKTtcbiAgICBsZXQgcGxheWVyRmxlZXQgPSBbXTtcbiAgICBsZXQgc2hvdHMgPSAgbmV3IE1hcCgpO1xuICAgIGxldCBoYXNIaXQgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSBzaGlwc1xuICAgIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKCdjYXJyaWVyJyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwKCdkZXN0cm95ZXInKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICBjb25zdCBwYXRyb2xib2F0ID0gY3JlYXRlU2hpcCgncGF0cm9sYm9hdCcpO1xuXG4gICAgLy8gUGxhY2VzIGVhY2ggc2hpcHNcbiAgICBpZiAodHlwZSA9PSAnaHVtYW4nKXtcbiAgICAgICAgcGxhY2VTaGlwKDAsIDAsIGNhcnJpZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCgxLCAwLCBiYXR0bGVzaGlwLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoMiwgMCwgZGVzdHJveWVyLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoMywgMCwgc3VibWFyaW5lLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoNCwgMCwgcGF0cm9sYm9hdCwgJ2hvcml6b250YWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXAoOSwgMCwgY2FycmllciwgJ2hvcml6b250YWwnKTtcbiAgICAgICAgcGxhY2VTaGlwKDgsIDAsIGJhdHRsZXNoaXAsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg3LCAwLCBkZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg2LCAwLCBzdWJtYXJpbmUsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg1LCAwLCBwYXRyb2xib2F0LCAnaG9yaXpvbnRhbCcpO1xuICAgIH1cblxuICAgIC8vIERpc3BsYXkgYm9hcmRcbiAgICBmdW5jdGlvbiBnZXRCb2FyZFN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgICAgICAgIGZsZWV0OiBwbGF5ZXJGbGVldCxcbiAgICAgICAgICAgIHNob3RzOiBzaG90cyxcbiAgICAgICAgICAgIGhpdDogaGFzSGl0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZXMgc2hpcHMgaWYgcG9zdGlvbiBpcyB2YWxpZC4gXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHksIHgsIHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHNoaXAuZ2V0U3RhdHVzKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmICghdmFsaWRQb3NpdGlvbnMoeSwgeCwgbGVuLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBQb3NpdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hdID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3ldW2ldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJGbGVldC5wdXNoKHNoaXApOyAvLyBrZWVwIHJlY29yZCBvZiBwbGF5ZXJzIHNoaXBzXG4gICAgfVxuXG4gICAgLyoqIEF0dGFja3MhICovXG5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayB3aXRoIGNvb3JkaW5hdGUgaGl0IGEgc2hpcC5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHksIHgpIHtcbiAgICAgICAgaWYgKHNob3RzLmhhcyhgJHt5fSwke3h9YCkpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmJvdHRvbSgnQ2hlY2sgeW91ciBjby1vcmQuJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkW3ldW3hdO1xuICAgICAgICBpZiAoY2VsbD8udHlwZSA9PT0gJ3NoaXAnKSB7XG4gICAgICAgICAgICBoYXNIaXQgPSB0cnVlO1xuICAgICAgICAgICAgY2VsbC5oaXQoKTtcbiAgICAgICAgICAgIHNob3RzLnNldChgJHt5fSwke3h9YCwgaGl0KTsgLy8gaWYgaGl0IGtlZXAgcmVjb3JkIHdpdGggaW1nXG4gICAgICAgICAgICBmZWVkYmFjay5taWRkbGUoYEhJVCFgKTtcbiAgICAgICAgICAgIGNoZWNrU2hpcChjZWxsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhc0hpdCA9IGZhbHNlO1xuICAgICAgICAgICAgc2hvdHMuc2V0KGAke3l9LCR7eH1gLCBtaXNzKTsgLy8gaWYgbWlzcyBrZWVwIHJlY29yZFxuICAgICAgICAgICAgZmVlZGJhY2subWlkZGxlKGBNSVNTRUQhYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgc2hpcCBzdGF0dXMgdGhhdCB3YXMgaGl0XG4gICAgZnVuY3Rpb24gY2hlY2tTaGlwKGNlbGwpe1xuICAgICAgICBjb25zdCBzaGlwID0gY2VsbC5nZXRTdGF0dXMoKTtcbiAgICAgICAgaWYgKHNoaXAuc3Vuaykge1xuICAgICAgICAgICAgZmVlZGJhY2subWlkZGxlKGAke3NoaXAubmFtZX0gc3VuayFgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIHBsYXllcnMgZmxlZXQgc3RhdHVzXG4gICAgZnVuY3Rpb24gY2hlY2tGbGVldCgpIHtcbiAgICAgICAgcmV0dXJuIChwbGF5ZXJGbGVldC5ldmVyeShzaGlwID0+IHNoaXAuZ2V0U3RhdHVzKCkuc3VuaykpOyAvLyByZXR1cm4gdHJ1ZSBpZiBhbGwgc3Vua1xuICAgIH1cblxuICAgIC8qKiBWYWxpZCBzaGlwIHBsYWNlbWVudCBvbiB0aGUgYm9hcmQgKiovXG4gICAgLy8gUmV0dXJuIHRydWUgaWYgYm90aCBjb25kaXRpb25zIGFyZSB0cnVlIGVsc2UgZmFsc2VcbiAgICBmdW5jdGlvbiB2YWxpZFBvc2l0aW9ucyh5LCB4LCBsZW4sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIHJldHVybiAodmFsaWRDZWxsTGVuZ3RoKHksIHgsIGxlbiwgb3JpZW50YXRpb24pICYmIHZhbGlkRWRnZSh5LCB4KSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgcG9zaXRpb24gaGF2ZSBlbm91Z2ggZnJlZSBjZWxscyBmb3IgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcFxuICAgIGZ1bmN0aW9uIHZhbGlkQ2VsbExlbmd0aCh5LCB4LCBsZW4sIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgZm9yKGxldCBpID0geTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgIXZhbGlkQ2VsbChpLCB4KSAmJiBmYWxzZTsgXG4gICAgICAgICAgICAgICAgIXZhbGlkRWRnZShpLCB4KSAmJiBmYWxzZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAhdmFsaWRDZWxsKHksIGkpICYmIGZhbHNlO1xuICAgICAgICAgICAgICAgICF2YWxpZEVkZ2UoeSwgaSkgJiYgZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRpbmF0ZXMgaXMgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXMuXG4gICAgZnVuY3Rpb24gdmFsaWRFZGdlKHksIHgpIHtcbiAgICAgICAgcmV0dXJuICh4ID49IDAgJiYgeCA8IHhBeGlzICYmIHkgPj0gMCAmJiB5IDwgeUF4aXMpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGNlbGwgaXMgZnJlZS4gXG4gICAgZnVuY3Rpb24gdmFsaWRDZWxsKHksIHgpIHtcbiAgICAgICAgYm9hcmRbeV1beF0gPT09IG51bGwgJiYgdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldEJvYXJkU3RhdHVzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGNoZWNrRmxlZXQgfVxufSIsIi8vIHBsYXllci5qc1xuXG5pbXBvcnQgeyB4QXhpcywgeUF4aXMgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGdhbWVNb2R1bGUgfSBmcm9tICcuL2dhbWVNb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVyKHR5cGUpIHtcbiAgICBjb25zdCBwbGF5ZXJUeXBlID0gdHlwZTtcbiAgICBjb25zdCBpc0F0dGFja2luZyA9IGZhbHNlO1xuICAgIGxldCBib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCh0eXBlKTtcbiAgICBsZXQgcG9zc2libGVTaG90cyA9IGZpbGxQb3NzaWJsZVNob3RzKCk7XG4gICAgXG5cbiAgICBmdW5jdGlvbiBnZXRCb2FyZCgpe1xuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgLyoqKiBDb21wdXRlciBBdHRhY2sgTG9naWNzICoqKi9cbiAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjayhwbGF5ZXIpIHtcbiAgICAgICAgY29uc3QgW3ksIHhdID0gZ2V0UmFuZG9tU2hvdCgpO1xuICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKHksIHgpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgYXJyYXkgb2YgYWxsIHBvc3NpYmxlIHNob3RzKGNvb3JkaW5hdGUpIGJhc2VkIG9uIHRoZSBzaXplIG9mIGJvYXJkXG4gICAgZnVuY3Rpb24gZmlsbFBvc3NpYmxlU2hvdHMoKSB7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB5QXhpczsgeSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHhBeGlzOyB4KyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKFt5LCB4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSBpbmRleCBwYXNzZWQgb24gcG9zc2libGVTaG90c1xuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVNob3QoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVTaG90cy5sZW5ndGgpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSBjb29yZGluYXRlIGF0IHRoZSByYW5kb20gaW5kZXhcbiAgICAgICAgY29uc3QgW3Nob3RdID0gcG9zc2libGVTaG90cy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpOyAvLyBSZW1vdmUgdGhlIHNob3QgZnJvbSB0aGUgYXJyYXlcbiAgICAgICAgcmV0dXJuIHNob3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGxheWVyVHlwZSwgaXNBdHRhY2tpbmcsIGdldEJvYXJkLCBjb21wdXRlckF0dGFjayB9O1xufSIsIi8vIHJlbmRlckJvYXJkLmpzXG5pbXBvcnQgeyBkb21DcmVhdG9yLGRvbVNlbGVjdG9yIH0gZnJvbSAnLi9kb21IZWxwZXInO1xuaW1wb3J0IHsgeEF4aXMsIHlBeGlzIH0gZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4vZ2FtZU1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJCb2FyZChwbGF5ZXIpe1xuICAgIGNvbnN0IGRpdlBsYXllckJvYXJkID0gZG9tU2VsZWN0b3IoJyNwMS1ib2FyZCcpO1xuICAgIGNvbnN0IGRpdkZsZWV0ID0gZG9tU2VsZWN0b3IoJyNwMS1mbGVldCcpO1xuICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmdldEJvYXJkKCkuZ2V0Qm9hcmRTdGF0dXMoKS5ib2FyZDtcbiAgICBcbiAgICBkaXNwbGF5Qm9hcmQoZGl2UGxheWVyQm9hcmQsIGJvYXJkLCBwbGF5ZXIpO1xuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIsIGRpdkZsZWV0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wcG9uZW50Qm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgZGl2T3Bwb25lbnRCb2FyZCA9IGRvbVNlbGVjdG9yKCcjcDItYm9hcmQnKTtcbiAgICBjb25zdCBkaXZGbGVldCA9IGRvbVNlbGVjdG9yKCcjcDItZmxlZXQnKTtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuYm9hcmQ7XG5cbiAgICBkaXNwbGF5Qm9hcmQoZGl2T3Bwb25lbnRCb2FyZCwgYm9hcmQsIHBsYXllcik7XG4gICAgZGlzcGxheUZsZWV0KHBsYXllciwgZGl2RmxlZXQpO1xufVxuXG4vLyBSZW5kZXIgYm9hcmQgXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoZGl2Qm9hcmQsIGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBkaXZCb2FyZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgeUF4aXM7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHhBeGlzOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gYCR7eX0sJHt4fWA7XG4gICAgICAgICAgICBjb25zdCBjZWxsVHlwZSA9IGJvYXJkW3ldW3hdO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwocGxheWVyLCBjb29yZCwgY2VsbFR5cGUpO1xuICAgICAgICAgICAgZGl2Qm9hcmQuYXBwZW5kKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBSZXR1cm4gZWFjaCBjZWxsIHRvIGRpc3BsYXkgYm9hcmRcbmZ1bmN0aW9uIGNyZWF0ZUNlbGwocGxheWVyLCBjb29yZCwgY2VsbFR5cGUpIHsgXG4gICAgY29uc3QgY2VsbCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwnO1xuICAgIGNlbGwuaWQgPSAnYm9hcmQtY2VsbCc7XG4gICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gY29vcmQ7XG4gICAgY29uc3QgaW1nID0gY2hlY2tIaXRzQW5kTWlzc2VzKHBsYXllciwgY29vcmQpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjZWxsVHlwZSA/ICdzaGlwJyA6ICd3YXRlcicpOyAvLyBBZGQgc2hpcCBvciB3YXRlciBjbGFzcyBkZXBlbmRpbmcgb24gdGhlIGNlbGwgY29udGVudFxuICAgIGNlbGwuYXBwZW5kKGltZyk7XG4gICAgLy8gQWRkcyBjbGljayBldmVudCBvbiBvcHBvbmVudHMgYm9hcmQgaWYgcGxheWVyIGlzIGNvbXB1dGVyLCBpcyBhdHRhY2tpbmcgYW5kIGdhbWUgbm90IG92ZXIuXG4gICAgaWYgKHBsYXllci5wbGF5ZXJUeXBlID09PSAnY29tcHV0ZXInICYmICFwbGF5ZXIuaXNBdHRhY2tpbmcgJiYgIWdhbWVNb2R1bGUuZ2V0SXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVDZWxsQ2xpY2socGxheWVyLCBjb29yZCkpOyAgIFxuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbn1cblxuLy9SZW5kZXIgZmxlZXRcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RmxlZXQocGxheWVyLCBkaXZGbGVldCkge1xuICAgIGNvbnN0IGZsZWV0ID0gcGxheWVyLmdldEJvYXJkKCkuZ2V0Qm9hcmRTdGF0dXMoKS5mbGVldDtcbiAgICBkaXZGbGVldC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBkaXZGbGVldExlZ2VuZCA9IGRvbUNyZWF0b3IoJ2xlZ2VuZCcpO1xuICAgIFxuICAgIGRpdkZsZWV0TGVnZW5kLnRleHRDb250ZW50ID0gJ015IEZsZWV0JztcbiAgICBkaXZGbGVldC5hcHBlbmQoZGl2RmxlZXRMZWdlbmQpO1xuXG4gICAgZmxlZXQuZm9yRWFjaChzaGlwID0+IHsgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdlNoaXAgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2VGl0bGUgPSBkb21DcmVhdG9yKCdkaXYnKTtcblxuICAgICAgICBkaXZUaXRsZS5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgIGRpdlNoaXAuY2xhc3NOYW1lID0gXCJzaGlwXCI7XG4gICAgICAgIGRpdlRpdGxlLmlubmVySFRNTCA9IGA8aDU+JHtzaGlwLmdldFN0YXR1cygpLm5hbWV9PC9oNT5gO1xuICAgICAgICBkaXZGbGVldC5hcHBlbmQoZGl2VGl0bGUpO1xuICAgICAgICBjb25zdCBjZWxscyA9IGNyZWF0ZVNoaXBzQ2VsbHMoc2hpcCwgcGxheWVyKTtcbiAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IGRpdlNoaXAuYXBwZW5kQ2hpbGQoY2VsbCkpO1xuICAgICAgICBkaXZGbGVldC5hcHBlbmQoZGl2U2hpcCk7XG4gICAgfSk7XG59XG5cbi8vIENyZWF0ZSBzaGlwIGNlbGxzIGZvciBmbGVldCBkaXNwbGF5XG5mdW5jdGlvbiBjcmVhdGVTaGlwc0NlbGxzKHNoaXAsIHBsYXllcikge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmdldFN0YXR1cygpLmxlbmd0aDtcbiAgICBsZXQgc2hpcEhpdHMgPSBzaGlwLmdldFN0YXR1cygpLmhpdHM7XG4gICAgY29uc3Qgc2hpcFN1bmsgPSBzaGlwLmdldFN0YXR1cygpLnN1bms7XG5cbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbCc7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpOyAvLyBFbnN1cmUgaXQgbWF0Y2hlcyB0aGUgc2hpcCBjbGFzcyB1c2VkIG9uIHRoZSBib2FyZFxuICAgICAgICBpZiAoc2hpcEhpdHMgPiAwICYmIHBsYXllci5wbGF5ZXJUeXBlICE9PSAnY29tcHV0ZXInICkgeyAvLyBpZiBzaGlwcyBoYXMgaGl0cyBhZGQgaGl0IGNsYXNzXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgc2hpcEhpdHMgPSBNYXRoLm1heCgwLCBzaGlwSGl0cyAtIDEpOyAvLyBlbnN1cmUgc2hpcEhpdHMgZG9lc24ndCBnbyBiZWxvdyAwXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXBTdW5rKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpOyAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgfVxuICAgIHJldHVybiBjZWxscztcbn1cblxuLy8gTG9hZHMgaW1hZ2UgZmlsZSBmb3Igc2hvdHMgdGhhdHMgaGl0IGFuZCBtaXNzXG5mdW5jdGlvbiBjaGVja0hpdHNBbmRNaXNzZXMocGxheWVyLCBjb29yZCl7XG4gICAgY29uc3Qgc2hvdHNGaXJlZCA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuc2hvdHMuaGFzKGNvb3JkKTtcbiAgICBpZiAoc2hvdHNGaXJlZCkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb21DcmVhdG9yKCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuc2hvdHMuZ2V0KGNvb3JkKTtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2socGxheWVyLCBjb29yZCkge1xuICAgIGNvbnN0IFt5LCB4XSA9IGNvb3JkLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soeSwgeCkpIHsgLy8gaWYgYXR0YWNrIGlzIHN1Y2Vzc2Z1bFxuICAgICAgICBnYW1lTW9kdWxlLmdhbWVPdmVyKCk7XG4gICAgICAgIG9wcG9uZW50Qm9hcmQocGxheWVyKTsgLy8gdXBkYXRlcyBib2FyZCBhbmQgZW5zdXJlIHRvIHJlbW92ZSBjbGljayBldmVudCBpZiBpc0dhbWVPdmVyXG4gICAgfVxufSIsIi8vIHNoaXAuanNcblxuLy8gRGVmaW5lIHNoaXAgY2xhc3Mgd2l0aCBuYW1lIGFuZCBIUCwgeW91IGNhbiBhZGQgYW5kIG1vZGlmeSBkaWZmZXJlbnQgY2xhc3Nlcy5cbmNvbnN0IHNoaXBDbGFzcyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgZGVzdHJveWVyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBwYXRyb2xib2F0OiAyXG59XG5cbi8vIENyZWF0ZSBhIHNoaXAgb2JqZWN0IHdpdGggc2hpcHMgY2xhc3MgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoaXAoY2xhc3NOYW1lKSB7XG4gICAgY29uc3Qgc2hpcFR5cGUgPSBjbGFzc05hbWU7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBDbGFzc1tjbGFzc05hbWVdO1xuICAgIGxldCBzaGlwSGl0cyA9IDA7XG4gICAgbGV0IHNoaXBTdW5rID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzaGlwVHlwZSxcbiAgICAgICAgICAgIGxlbmd0aDogc2hpcExlbmd0aCxcbiAgICAgICAgICAgIGhpdHM6IHNoaXBIaXRzLFxuICAgICAgICAgICAgc3Vuazogc2hpcFN1bmtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgIXNoaXBTdW5rICYmIChzaGlwSGl0cysrLCBpc1N1bmsoKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgc2hpcEhpdHMgPj0gc2hpcExlbmd0aCAmJiAoc2hpcFN1bmsgPSB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRTdGF0dXMsIGhpdCwgdHlwZTogJ3NoaXAnIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmRleC5qc1xuXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBnYW1lTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL2dhbWVNb2R1bGUnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGdhbWVNb2R1bGUuaW5pdCgpO1xufVxuXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9