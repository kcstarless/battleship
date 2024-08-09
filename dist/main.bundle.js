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
  text-align: center;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-secondary-rotate);
  filter: brightness(1.2) contrast(1.5);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4); /* White glow */
  animation: none; /* Ensure no animation is applied initially */
}
.game-info .bottom.fade-out {
  animation: fadeOutAndShrink 5s forwards;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/config/_variables.scss","webpack://./src/styles/config/_reset.scss","webpack://./src/styles/layouts/_container.scss","webpack://./src/styles/mixins/_media.scss","webpack://./src/styles/layouts/_content.scss","webpack://./src/styles/layouts/_footer.scss","webpack://./src/styles/layouts/_header.scss","webpack://./src/styles/layouts/_sidebar.scss","webpack://./src/styles/components/_board.scss","webpack://./src/styles/components/_gameinfo.scss","webpack://./src/styles/components/_fleet.scss"],"names":[],"mappings":"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","sourcesContent":["// Entry point for your Sass build\n@import \"mixins/media\";\n\n// Google fonts\n@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');\n\n// Fonts\n@font-face {\n    font-family: 'Rust';\n    src: url('./fonts/rust.woff') format('woff'),\n        url('./fonts/rust.woff2') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n// Configuration\n@import \"config/variables\";\n@import \"config/reset\";\n\n// Layout\n@import \"layouts/container\";\n@import \"layouts/content\";\n@import \"layouts/footer\";\n@import \"layouts/header\";\n@import \"layouts/sidebar\";\n\n// Components\n@import \"components/board\";\n@import \"components/gameinfo\";\n@import \"components/fleet\";",":root {\n    // Simple fonts\n    --font-family-sans: 'Poppins', 'Rust', system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\n    // Classical line heights\n    --line-height-headers: 1.1;\n    --line-height-body:    1.5;\n    --line-height-break:   2;\n\n    // Classical and robust font sizes system\n    --font-size-xs: 0.75rem;   // 12px\n    --font-size-s: 0.875rem;   // 14px\n    --font-size-m: 1rem;       // 16px\n    --font-size-l: 1.125rem;   // 18px\n    --font-size-xl: 1.25rem;   // 20px\n    --font-size-xxl: 1.5rem;   // 24px\n    --font-size-xxxl: 2rem;    // 32px\n    --font-size-xxxxl: 2.5rem; // 40px\n\n    // Three different text colors\n    --color-text-header: hsl(0, 1%, 16%);\n    --color-text-body:   hsl(0, 5%, 25%);\n    --color-text-muted:  hsl(0, 1%, 44%);\n\n    // Classical and robust spacing system\n    --space-xxxs: 0.25rem; // 4px\n    --space-xxs: 0.375rem; // 6px\n    --space-xs: 0.5rem;    // 8px\n    --space-s: 0.75rem;    // 12px\n    --space-m: 1rem;       // 16px\n    --space-l: 1.5rem;     // 24px\n    --space-xl: 2rem;      // 32px\n    --space-xxl: 2.5rem;   // 40px\n    --space-xxxl: 3rem;    // 48px\n    --space-xxxxl: 4rem;   // 64px\n\n    // Application colors\n    --color-primary:          #d6d0b8;\n    --color-primary-rotate:   rgb(23, 103, 223);\n    --color-primary-bg:       #5baaec;\n    --color-secondary:        #4c9173;\n    --color-secondary-rotate: #902424;\n    --color-tertiary:         hsl(49, 89%, 64%);\n    --color-glint:            rgb(163, 209, 255);\n\n    // Neutral colors\n    --color-white:      hsl(0, 0%, 100%);\n    --color-background: #33425b;\n    --color-light:      hsl(0, 6%, 93%);\n    --color-dark:       var(--color-text-header);\n\n    // Border radius\n    --border-radius: 0.375rem;\n\n    // Border\n    --border: solid 2px var(--color-light);\n    --border-dark: solid 2px var(--color-dark);\n\n    // Shadows\n    --shadow-large:  2px 4px 10px hsl(0 0% 0% / 0.1);\n    --shadow-small:  1px 3px 6px hsl(0 0% 0% / 0.1);\n}\n","*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  overflow-y: scroll;\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  background-image: url(../assets/images/radar02.jpg);\n  background-repeat: no-repeat; /* Prevents the image from repeating */\n  background-size: cover; /* Scales the image to cover the entire container */\n  background-position: center;\n\n  // background-color: var(--color-background);\n  color: var(--color-text-body);\n  line-height: var(--line-height-body);\n  font-family: var(--font-family-sans);\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: var(--color-primary);\n  line-height: var(--line-height-headers);\n  font-family: 'Rust';\n  font-weight: 500;\n}\n\nh1 {\n  font-size: var(--font-size-xxxl);\n}\n\nh2 {\n  font-size: var(--font-size-xxl);\n}\n\nh3 {\n  font-size: var(--font-size-xl);\n}\n\nh4 {\n  font-size: var(--font-size-l);\n}\n\na {\n  color: var(--color-primary);\n  text-decoration: none;\n  transition: color 200ms;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: var(--color-primary-rotate);\n  }\n}\n\n",".container {\n    // border: var(--border-dark);\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 0.1fr auto 0.1fr;\n    grid-template-areas:\n      \"header\"\n      \"content\"\n      \"footer\";\n\n    width: 100%;\n    // height: 100vh;\n    // padding-right: var(--space-xs);\n    // padding-left: var(--space-xs);\n    margin-left: auto;\n    margin-right: auto;\n    // margin-top: var(--space-l);\n    \n    border-radius: var(--border-radius);\n    // box-shadow: var(--shadow-small);\n    // background-color: var(--color-primary-bg);\n  \n    // background-color: transparent;\n\n    @include media(tabletAndUp) {\n      // padding-right: var(--space-m);\n      // padding-left: var(--space-m);\n      max-width: 60rem;\n    }\n  }","@mixin media($query) {\n    @if $query == tabletAndUp {\n      @media (min-width: 50rem) { @content; }\n    }\n  }",".content {\n    grid-area: content;\n    margin: var(--space-s);\n    // border: var(--border-dark);\n    border-radius: var(--border-radius);\n\n    display: flex;\n    flex-direction: column;\n    // justify-content: space-around;\n}","footer {\n    grid-area: footer;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n}","header {\n    grid-area: header;\n    margin: var(--space-s);\n    // border: var(--border-dark);\n    border-radius: var(--border-radius);\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }",".sidebar {\n    grid-area: sidebar;\n    margin: var(--space-s);\n    border: var(--border-dark);\n    border-radius: var(--border-radius);\n    background-color: var(--color-secondary-bg);\n\n\n  }\n\n  .profile {\n    display: flex;\n    flex-direction: column;\n    .profile-title {\n      font-size: var(--font-size-xxl);\n      font-weight: bold;\n    }\n  }","// board.scss\n\n.board-container {\n    display: flex;\n    justify-content: space-between;\n    padding-top: var(--space-l);\n}\n\n.board-cell {\n    // width: 50px; // Match the width in grid-template-columns\n    // height: 50px; // Match the height in grid-template-rows\n    border: 2px solid var(--color-primary); // Border to visualize grid cells\n    border-radius: var(--border-radius);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--color-background);\n    // box-shadow: var(--shadow-large);\n}\n\n.p1-board {\n    display: grid;\n    grid-template-columns: repeat(10, 35px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 35px);\n    gap: 1px;\n    \n    .board-cell.water {\n        background-color: var(--color-primary-rotate); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: var(--color-background); // Different color for ship\n    }\n}\n.p2-board {\n    // border: var(--border-dark);\n    display: grid;\n    grid-template-columns: repeat(10, 35px); // Adjust the size based on your needs\n    grid-template-rows: repeat(10, 35px);\n    gap: 1px; // Space between cells (optional)\n\n    .board-cell.water {\n        background-color: var(--color-primary-rotate);\n        // background-color: rgb(23, 103, 223); // Different color for 'water'\n    }\n    \n    .board-cell.ship {\n        background-color: var(--color-primary-rotate);\n        // background-color: rgb(23, 103, 223);// Different color for ship\n    }\n}\n\n","// _gameinfo.scss\n\n.game-info {\n    // border: var(--border-dark);\n    // color: var(--color-light);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    \n    .top {\n        color: var(--color-primary);\n        font-size: var(--font-size-xl);\n        font-weight: bold;\n\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        // justify-content: center; \n\n        .feedback-image {\n            display: block;\n            align-items: center;\n        }\n    }\n\n    .middle {\n        text-align: center;\n        font-size: var(--font-size-xxxxl);\n        font-weight: 700;\n        color: var(--color-secondary-rotate);\n        filter: brightness(1.2) contrast(1.5);\n        text-shadow: \n            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */\n            0 0 10px rgba(255, 255, 255, 0.6), /* White glow */\n            0 0 15px rgba(255, 255, 255, 0.4); /* White glow */\n            animation: none; /* Ensure no animation is applied initially */\n        }\n        \n    .middle.fade-out {\n        animation: fadeOutAndShrink 3s forwards;\n    }\n    \n    @keyframes fadeOutAndShrink {\n        0% {\n            opacity: 1;\n            transform: scale(1);\n        }\n        100% {\n            opacity: 0;\n            transform: scale(0.5); /* Shrinks the text to 50% of its original size */\n        }\n    }\n\n    .bottom {\n        text-align: center;\n        font-size: var(--font-size-xl);\n        font-weight: 700;\n        color: var(--color-secondary-rotate);\n        filter: brightness(1.2) contrast(1.5);\n        text-shadow: \n            0 0 5px rgba(255, 255, 255, 0.8), /* White glow */\n            0 0 10px rgba(255, 255, 255, 0.6), /* White glow */\n            0 0 15px rgba(255, 255, 255, 0.4); /* White glow */\n            animation: none; /* Ensure no animation is applied initially */\n    }\n\n    .bottom.fade-out {\n        animation: fadeOutAndShrink 5s forwards;\n    }\n}\n","// _fleet.scss\n.fleet {\n    color: var(--color-primary);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: var(--space-l);\n\n    .p1-fleet, .p2-fleet {\n        flex: 1;\n        margin-top: var(--space-m);\n        // padding: var(--space-s);\n        border-bottom: none;\n        border-radius: 50%;\n        border-width: 4px;\n    }\n    \n\n    .p1-fleet {\n        border-right: none;\n        border-color: var(--color-secondary);\n        legend {\n            font-family: 'Rust';\n            color: var(--color-primary);\n        }\n        .title {\n            padding-top: var(--space-xs);\n            h5 {\n                color: var(--color-white);\n            }\n        }\n        .ship{\n            display: flex;\n            gap: 1px;\n        }\n        .board-cell {\n            width: 20px; /* Adjust size as needed */\n            height: 20px;\n            background-color: grey; /* Default color for ship */\n        }\n        .board-cell.hit {\n            background-color: red; /* Color for hit */\n        }\n    }\n\n    .p2-fleet {\n        border-left: none;\n        border-color: var(--color-secondary-rotate);\n        legend {\n            font-family: 'Rust';\n            color: var(--color-primary);\n            text-align: right; /* Align text to the right */\n        }\n        .title {\n            padding-top: var(--space-xs);\n            display: flex;\n            justify-content: end;\n            h5 {\n                color: var(--color-white);\n            }\n        }\n        .ship{\n            display: flex;\n            gap: 1px;\n            justify-content: flex-end;\n        }\n        .board-cell {\n            width: 20px; /* Adjust size as needed */\n            height: 20px;\n            background-color: grey; /* Default color for ship */\n        }\n        .board-cell.hit {\n            background-color: red; /* Color for hit */\n        }\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/domLoader.js":
/*!**********************************!*\
  !*** ./src/modules/domLoader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   opponentBoard: () => (/* binding */ opponentBoard),
/* harmony export */   playerBoard: () => (/* binding */ playerBoard)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
/* harmony import */ var _renderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBoard */ "./src/modules/renderBoard.js");
/* harmony import */ var _renderFleet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFleet */ "./src/modules/renderFleet.js");
// domLoader.js





function playerBoard(player){
    const divPlayerBoard = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p1-board');
    const divFleet = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p1-fleet');
    const board = player.getBoard().getBoardStatus().board;
    
    (0,_renderBoard__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(divPlayerBoard, board, player);
    (0,_renderFleet__WEBPACK_IMPORTED_MODULE_2__.displayFleet)(player, divFleet);
}

function opponentBoard(player) {
    const divOpponentBoard = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p2-board');
    const divFleet = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domSelector)('#p2-fleet');
    const board = player.getBoard().getBoardStatus().board;

    (0,_renderBoard__WEBPACK_IMPORTED_MODULE_1__.displayBoard)(divOpponentBoard, board, player);
    (0,_renderFleet__WEBPACK_IMPORTED_MODULE_2__.displayFleet)(player, divFleet);
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
        feedback.classList.remove('fade-out');
        setTimeout(() => feedback.classList.add('fade-out'), 10); 
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
/* harmony import */ var _domLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLoader.js */ "./src/modules/domLoader.js");
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
            (0,_domLoader_js__WEBPACK_IMPORTED_MODULE_0__.playerBoard)(attacker);
            (0,_domLoader_js__WEBPACK_IMPORTED_MODULE_0__.opponentBoard)(defender);  
        } 
    
        // when attacker is type of computer
        if (attacker.playerType === 'computer') { 
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.top(`Enemy attacking..`, _assets_images_missile_right_png__WEBPACK_IMPORTED_MODULE_3__);
            attacker.isAttacking = true;
            (0,_domLoader_js__WEBPACK_IMPORTED_MODULE_0__.opponentBoard)(attacker); // Make opponent board unclickable during computers attack

            // Give delay before computer attacks. 
            setTimeout(() => {
                attacker.computerAttack(defender);
                (0,_domLoader_js__WEBPACK_IMPORTED_MODULE_0__.playerBoard)(defender);
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

    function checkLastShot() {
        return players[getNextPlayerIndex()].getBoard().getBoardStatus().hit
    }

    function gameOver() {
        if (defender.getBoard().checkFleet()) {
            isGameOver = true;
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.middle(`Gameover: ${attacker.playerType} WINS!`);
        } else if (checkLastShot()) {   
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.bottom("Fire again!");
            round(); // If hit play another round without switching player.
        } else {
            switchPlayer();
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
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.bottom('Check your coord.')
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
            _feedbackHelper_js__WEBPACK_IMPORTED_MODULE_1__.feedback.bottom(`${ship.name} sunk!`);
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
/* harmony export */   displayBoard: () => (/* binding */ displayBoard)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameModule */ "./src/modules/gameModule.js");
/* harmony import */ var _domLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domLoader */ "./src/modules/domLoader.js");
// renderBoard.js





// Render board 
function displayBoard(divBoard, board, player) {
    divBoard.innerHTML = '';

    for (let y = 0; y < _gameboard__WEBPACK_IMPORTED_MODULE_0__.yAxis; y++) {
        for (let x = 0; x < _gameboard__WEBPACK_IMPORTED_MODULE_0__.xAxis; x++) {
            const coord = `${y},${x}`;
            const cellType = board[y][x];
            const cell = createCell(player, coord, cellType);
            divBoard.append(cell);
        }
    }
}

// Return each cell to display board
function createCell(player, coord, cellType) { 
    const cell = (0,_domHelper__WEBPACK_IMPORTED_MODULE_1__.domCreator)('div');
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

// Loads image file for shots thats hit and miss
function checkHitsAndMisses(player, coord){
    const shotsFired = player.getBoard().getBoardStatus().shots.has(coord);
    if (shotsFired) {
        const img = (0,_domHelper__WEBPACK_IMPORTED_MODULE_1__.domCreator)('img');
        img.src = player.getBoard().getBoardStatus().shots.get(coord);
        return img;
    }
    return '';
}

function handleCellClick(player, coord) {
    const [y, x] = coord.split(',').map(Number);
    if (player.getBoard().receiveAttack(y, x)) { // if attack is sucessful
        _gameModule__WEBPACK_IMPORTED_MODULE_2__.gameModule.gameOver();
        (0,_domLoader__WEBPACK_IMPORTED_MODULE_3__.opponentBoard)(player); // updates board and ensure to remove click event if isGameOver
    }
}

/***/ }),

/***/ "./src/modules/renderFleet.js":
/*!************************************!*\
  !*** ./src/modules/renderFleet.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayFleet: () => (/* binding */ displayFleet)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/modules/domHelper.js");
// renderFleet.js


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxzSEFBb0M7QUFDaEYsNENBQTRDLHdIQUFxQztBQUNqRiw0Q0FBNEMsb0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysb0hBQW9IO0FBQ3BILHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DLHdCQUF3QixtQ0FBbUM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0QsZ0NBQWdDO0FBQ2hDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUhBQXVIO0FBQ3ZILG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SEFBdUg7QUFDdkgsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsQ0FBQyxPQUFPLDZsQkFBNmxCLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsc0JBQXNCLHNCQUFzQixXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxTQUFTLFVBQVUsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsc0JBQXNCLHNCQUFzQixNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsc0JBQXNCLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxzQkFBc0Isc0JBQXNCLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0scUJBQXFCLFVBQVUsc0JBQXNCLE1BQU0sTUFBTSxzQkFBc0IsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLHNCQUFzQixNQUFNLE1BQU0s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cGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvZG9tSGVscGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9kb21Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL2ZlZWRiYWNrSGVscGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9nYW1lTW9kdWxlLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrLy4vc3JjL21vZHVsZXMvcmVuZGVyQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9tb2R1bGVzL3JlbmRlckZsZWV0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1qcy13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RlbXBsYXRlLWpzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtanMtd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9ydXN0LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3J1c3Qud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL3JhZGFyMDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUnVzdFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuOnJvb3Qge1xuICAtLWZvbnQtZmFtaWx5LXNhbnM6IFwiUG9wcGluc1wiLCBcIlJ1c3RcIiwgc3lzdGVtLXVpLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIC0tbGluZS1oZWlnaHQtaGVhZGVyczogMS4xO1xuICAtLWxpbmUtaGVpZ2h0LWJvZHk6IDEuNTtcbiAgLS1saW5lLWhlaWdodC1icmVhazogMjtcbiAgLS1mb250LXNpemUteHM6IDAuNzVyZW07XG4gIC0tZm9udC1zaXplLXM6IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1tOiAxcmVtO1xuICAtLWZvbnQtc2l6ZS1sOiAxLjEyNXJlbTtcbiAgLS1mb250LXNpemUteGw6IDEuMjVyZW07XG4gIC0tZm9udC1zaXplLXh4bDogMS41cmVtO1xuICAtLWZvbnQtc2l6ZS14eHhsOiAycmVtO1xuICAtLWZvbnQtc2l6ZS14eHh4bDogMi41cmVtO1xuICAtLWNvbG9yLXRleHQtaGVhZGVyOiBoc2woMCwgMSUsIDE2JSk7XG4gIC0tY29sb3ItdGV4dC1ib2R5OiBoc2woMCwgNSUsIDI1JSk7XG4gIC0tY29sb3ItdGV4dC1tdXRlZDogaHNsKDAsIDElLCA0NCUpO1xuICAtLXNwYWNlLXh4eHM6IDAuMjVyZW07XG4gIC0tc3BhY2UteHhzOiAwLjM3NXJlbTtcbiAgLS1zcGFjZS14czogMC41cmVtO1xuICAtLXNwYWNlLXM6IDAuNzVyZW07XG4gIC0tc3BhY2UtbTogMXJlbTtcbiAgLS1zcGFjZS1sOiAxLjVyZW07XG4gIC0tc3BhY2UteGw6IDJyZW07XG4gIC0tc3BhY2UteHhsOiAyLjVyZW07XG4gIC0tc3BhY2UteHh4bDogM3JlbTtcbiAgLS1zcGFjZS14eHh4bDogNHJlbTtcbiAgLS1jb2xvci1wcmltYXJ5OiAjZDZkMGI4O1xuICAtLWNvbG9yLXByaW1hcnktcm90YXRlOiByZ2IoMjMsIDEwMywgMjIzKTtcbiAgLS1jb2xvci1wcmltYXJ5LWJnOiAjNWJhYWVjO1xuICAtLWNvbG9yLXNlY29uZGFyeTogIzRjOTE3MztcbiAgLS1jb2xvci1zZWNvbmRhcnktcm90YXRlOiAjOTAyNDI0O1xuICAtLWNvbG9yLXRlcnRpYXJ5OiBoc2woNDksIDg5JSwgNjQlKTtcbiAgLS1jb2xvci1nbGludDogcmdiKDE2MywgMjA5LCAyNTUpO1xuICAtLWNvbG9yLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xuICAtLWNvbG9yLWJhY2tncm91bmQ6ICMzMzQyNWI7XG4gIC0tY29sb3ItbGlnaHQ6IGhzbCgwLCA2JSwgOTMlKTtcbiAgLS1jb2xvci1kYXJrOiB2YXIoLS1jb2xvci10ZXh0LWhlYWRlcik7XG4gIC0tYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIC0tYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1kYXJrOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZGFyayk7XG4gIC0tc2hhZG93LWxhcmdlOiAycHggNHB4IDEwcHggaHNsKDAgMCUgMCUgLyAwLjEpO1xuICAtLXNoYWRvdy1zbWFsbDogMXB4IDNweCA2cHggaHNsKDAgMCUgMCUgLyAwLjEpO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIFByZXZlbnRzIHRoZSBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBTY2FsZXMgdGhlIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtYm9keSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1ib2R5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXNhbnMpO1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWhlYWRlcnMpO1xuICBmb250LWZhbWlseTogXCJSdXN0XCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHh4bCk7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbCk7XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG59XG5hOmhvdmVyLCBhOmZvY3VzLCBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXJvdGF0ZSk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIGF1dG8gMC4xZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyXCIgXCJjb250ZW50XCIgXCJmb290ZXJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwcmVtKSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjByZW07XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhciB7XG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItZGFyayk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktYmcpO1xufVxuXG4ucHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucHJvZmlsZSAucHJvZmlsZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9hcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbCk7XG59XG5cbi5ib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbi5wMS1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xuICBnYXA6IDFweDtcbn1cbi5wMS1ib2FyZCAuYm9hcmQtY2VsbC53YXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcbn1cbi5wMS1ib2FyZCAuYm9hcmQtY2VsbC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG59XG5cbi5wMi1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xuICBnYXA6IDFweDtcbn1cbi5wMi1ib2FyZCAuYm9hcmQtY2VsbC53YXRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTtcbn1cbi5wMi1ib2FyZCAuYm9hcmQtY2VsbC5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xufVxuXG4uZ2FtZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtaW5mbyAudG9wIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtaW5mbyAudG9wIC5mZWVkYmFjay1pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdhbWUtaW5mbyAubWlkZGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHh4bCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktcm90YXRlKTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMikgY29udHJhc3QoMS41KTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLCAwIDAgMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgLyogV2hpdGUgZ2xvdyAqL1xuICBhbmltYXRpb246IG5vbmU7IC8qIEVuc3VyZSBubyBhbmltYXRpb24gaXMgYXBwbGllZCBpbml0aWFsbHkgKi9cbn1cbi5nYW1lLWluZm8gLm1pZGRsZS5mYWRlLW91dCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dEFuZFNocmluayAzcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmFkZU91dEFuZFNocmluayB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7IC8qIFNocmlua3MgdGhlIHRleHQgdG8gNTAlIG9mIGl0cyBvcmlnaW5hbCBzaXplICovXG4gIH1cbn1cbi5nYW1lLWluZm8gLmJvdHRvbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZSk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpIGNvbnRyYXN0KDEuNSk7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IC8qIFdoaXRlIGdsb3cgKi9cbiAgYW5pbWF0aW9uOiBub25lOyAvKiBFbnN1cmUgbm8gYW5pbWF0aW9uIGlzIGFwcGxpZWQgaW5pdGlhbGx5ICovXG59XG4uZ2FtZS1pbmZvIC5ib3R0b20uZmFkZS1vdXQge1xuICBhbmltYXRpb246IGZhZGVPdXRBbmRTaHJpbmsgNXMgZm9yd2FyZHM7XG59XG5cbi5mbGVldCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IHZhcigtLXNwYWNlLWwpO1xufVxuLmZsZWV0IC5wMS1mbGVldCwgLmZsZWV0IC5wMi1mbGVldCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW0pO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci13aWR0aDogNHB4O1xufVxuLmZsZWV0IC5wMS1mbGVldCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmZsZWV0IC5wMS1mbGVldCBsZWdlbmQge1xuICBmb250LWZhbWlseTogXCJSdXN0XCI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi5mbGVldCAucDEtZmxlZXQgLnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXhzKTtcbn1cbi5mbGVldCAucDEtZmxlZXQgLnRpdGxlIGg1IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5mbGVldCAucDEtZmxlZXQgLnNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFweDtcbn1cbi5mbGVldCAucDEtZmxlZXQgLmJvYXJkLWNlbGwge1xuICB3aWR0aDogMjBweDsgLyogQWRqdXN0IHNpemUgYXMgbmVlZGVkICovXG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcCAqL1xufVxuLmZsZWV0IC5wMS1mbGVldCAuYm9hcmQtY2VsbC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIENvbG9yIGZvciBoaXQgKi9cbn1cbi5mbGVldCAucDItZmxlZXQge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktcm90YXRlKTtcbn1cbi5mbGVldCAucDItZmxlZXQgbGVnZW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUnVzdFwiO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyAvKiBBbGlnbiB0ZXh0IHRvIHRoZSByaWdodCAqL1xufVxuLmZsZWV0IC5wMi1mbGVldCAudGl0bGUge1xuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UteHMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cbi5mbGVldCAucDItZmxlZXQgLnRpdGxlIGg1IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5mbGVldCAucDItZmxlZXQgLnNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mbGVldCAucDItZmxlZXQgLmJvYXJkLWNlbGwge1xuICB3aWR0aDogMjBweDsgLyogQWRqdXN0IHNpemUgYXMgbmVlZGVkICovXG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcCAqL1xufVxuLmZsZWV0IC5wMi1mbGVldCAuYm9hcmQtY2VsbC5oaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIENvbG9yIGZvciBoaXQgKi9cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbmZpZy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29uZmlnL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2xheW91dHMvX2NvbnRhaW5lci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21peGlucy9fbWVkaWEuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sYXlvdXRzL19jb250ZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9fZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0cy9fc2lkZWJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvX2JvYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9fZ2FtZWluZm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL19mbGVldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksbUJBQUE7RUFDQSxtSEFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQ05BO0VBRUksOEpBQUE7RUFHQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFHQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBR0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBR0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUdBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBR0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFHQSx5QkFBQTtFQUdBLHNDQUFBO0VBQ0EsMENBQUE7RUFHQSwrQ0FBQTtFQUNBLDhDQUFBO0FEWEo7O0FFakRBOzs7RUFHRSxzQkFBQTtBRm9ERjs7QUVqREE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBRm9ERjs7QUVqREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUZvREY7O0FFakRBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5REFBQTtFQUNBLDRCQUFBLEVBQUEsc0NBQUE7RUFDQSxzQkFBQSxFQUFBLG1EQUFBO0VBQ0EsMkJBQUE7RUFHQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0NBQUE7QUZrREY7O0FFL0NBOzs7RUFHRSxjQUFBO0VBQ0EsZUFBQTtBRmtERjs7QUUvQ0E7Ozs7RUFJRSxhQUFBO0FGa0RGOztBRS9DQTs7Ozs7O0VBTUUsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUZrREY7O0FFL0NBO0VBQ0UsZ0NBQUE7QUZrREY7O0FFL0NBO0VBQ0UsK0JBQUE7QUZrREY7O0FFL0NBO0VBQ0UsOEJBQUE7QUZrREY7O0FFL0NBO0VBQ0UsNkJBQUE7QUZrREY7O0FFL0NBO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FGa0RGO0FFaERFO0VBR0Usa0NBQUE7QUZnREo7O0FHaklBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdEQUNFO0VBSUYsV0FBQTtFQUlBLGlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxtQ0FBQTtBSDBISjtBSTNJTTtFREZOO0lBNEJNLGdCQUFBO0VIcUhKO0FBQ0Y7O0FLbEpBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUVBLG1DQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FMbUpKOztBTTFKQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FONkpKOztBT2pLQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxtQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVBrS0o7O0FRM0tBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBUjhLSjs7QVF6S0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QVI0S0o7QVEzS0k7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FSNktOOztBUzFMQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FUNkxKOztBUzFMQTtFQUdJLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FUMkxKOztBU3ZMQTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsUUFBQTtBVDBMSjtBU3hMSTtFQUNJLDZDQUFBO0FUMExSO0FTdkxJO0VBQ0kseUNBQUE7QVR5TFI7O0FTdExBO0VBRUksYUFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxRQUFBO0FUd0xKO0FTdExJO0VBQ0ksNkNBQUE7QVR3TFI7QVNwTEk7RUFDSSw2Q0FBQTtBVHNMUjs7QVVuT0E7RUFHSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FWb09KO0FVbE9JO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QVZtT1I7QVVoT1E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QVZrT1o7QVU5Tkk7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUhBQ0ksRUFFbUMsZUFBQTtFQUNuQyxlQUFBLEVBQUEsNkNBQUE7QVY2Tlo7QVUxTkk7RUFDSSx1Q0FBQTtBVjROUjtBVXpOSTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VWMk5WO0VVek5NO0lBQ0ksVUFBQTtJQUNBLHFCQUFBLEVBQUEsaURBQUE7RVYyTlY7QUFDRjtBVXhOSTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtSEFDSSxFQUVtQyxlQUFBO0VBQ25DLGVBQUEsRUFBQSw2Q0FBQTtBVnVOWjtBVXBOSTtFQUNJLHVDQUFBO0FWc05SOztBV3pSQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBWDRSSjtBVzFSSTtFQUNJLE9BQUE7RUFDQSwwQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBWDJSUjtBV3ZSSTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QVh5UlI7QVd4UlE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FYMFJaO0FXeFJRO0VBQ0ksNEJBQUE7QVgwUlo7QVd6Ulk7RUFDSSx5QkFBQTtBWDJSaEI7QVd4UlE7RUFDSSxhQUFBO0VBQ0EsUUFBQTtBWDBSWjtBV3hSUTtFQUNJLFdBQUEsRUFBQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQSxFQUFBLDJCQUFBO0FYMFJaO0FXeFJRO0VBQ0kscUJBQUEsRUFBQSxrQkFBQTtBWDBSWjtBV3RSSTtFQUNJLGlCQUFBO0VBQ0EsMkNBQUE7QVh3UlI7QVd2UlE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUEsRUFBQSw0QkFBQTtBWHlSWjtBV3ZSUTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FYeVJaO0FXeFJZO0VBQ0kseUJBQUE7QVgwUmhCO0FXdlJRO0VBQ0ksYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBWHlSWjtBV3ZSUTtFQUNJLFdBQUEsRUFBQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQSxFQUFBLDJCQUFBO0FYeVJaO0FXdlJRO0VBQ0kscUJBQUEsRUFBQSxrQkFBQTtBWHlSWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBFbnRyeSBwb2ludCBmb3IgeW91ciBTYXNzIGJ1aWxkXFxuQGltcG9ydCBcXFwibWl4aW5zL21lZGlhXFxcIjtcXG5cXG4vLyBHb29nbGUgZm9udHNcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxuXFxuLy8gRm9udHNcXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXN0JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvcnVzdC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJy4vZm9udHMvcnVzdC53b2ZmMicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8vIENvbmZpZ3VyYXRpb25cXG5AaW1wb3J0IFxcXCJjb25maWcvdmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJjb25maWcvcmVzZXRcXFwiO1xcblxcbi8vIExheW91dFxcbkBpbXBvcnQgXFxcImxheW91dHMvY29udGFpbmVyXFxcIjtcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2NvbnRlbnRcXFwiO1xcbkBpbXBvcnQgXFxcImxheW91dHMvZm9vdGVyXFxcIjtcXG5AaW1wb3J0IFxcXCJsYXlvdXRzL2hlYWRlclxcXCI7XFxuQGltcG9ydCBcXFwibGF5b3V0cy9zaWRlYmFyXFxcIjtcXG5cXG4vLyBDb21wb25lbnRzXFxuQGltcG9ydCBcXFwiY29tcG9uZW50cy9ib2FyZFxcXCI7XFxuQGltcG9ydCBcXFwiY29tcG9uZW50cy9nYW1laW5mb1xcXCI7XFxuQGltcG9ydCBcXFwiY29tcG9uZW50cy9mbGVldFxcXCI7XCIsXCI6cm9vdCB7XFxuICAgIC8vIFNpbXBsZSBmb250c1xcbiAgICAtLWZvbnQtZmFtaWx5LXNhbnM6ICdQb3BwaW5zJywgJ1J1c3QnLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLy8gQ2xhc3NpY2FsIGxpbmUgaGVpZ2h0c1xcbiAgICAtLWxpbmUtaGVpZ2h0LWhlYWRlcnM6IDEuMTtcXG4gICAgLS1saW5lLWhlaWdodC1ib2R5OiAgICAxLjU7XFxuICAgIC0tbGluZS1oZWlnaHQtYnJlYWs6ICAgMjtcXG5cXG4gICAgLy8gQ2xhc3NpY2FsIGFuZCByb2J1c3QgZm9udCBzaXplcyBzeXN0ZW1cXG4gICAgLS1mb250LXNpemUteHM6IDAuNzVyZW07ICAgLy8gMTJweFxcbiAgICAtLWZvbnQtc2l6ZS1zOiAwLjg3NXJlbTsgICAvLyAxNHB4XFxuICAgIC0tZm9udC1zaXplLW06IDFyZW07ICAgICAgIC8vIDE2cHhcXG4gICAgLS1mb250LXNpemUtbDogMS4xMjVyZW07ICAgLy8gMThweFxcbiAgICAtLWZvbnQtc2l6ZS14bDogMS4yNXJlbTsgICAvLyAyMHB4XFxuICAgIC0tZm9udC1zaXplLXh4bDogMS41cmVtOyAgIC8vIDI0cHhcXG4gICAgLS1mb250LXNpemUteHh4bDogMnJlbTsgICAgLy8gMzJweFxcbiAgICAtLWZvbnQtc2l6ZS14eHh4bDogMi41cmVtOyAvLyA0MHB4XFxuXFxuICAgIC8vIFRocmVlIGRpZmZlcmVudCB0ZXh0IGNvbG9yc1xcbiAgICAtLWNvbG9yLXRleHQtaGVhZGVyOiBoc2woMCwgMSUsIDE2JSk7XFxuICAgIC0tY29sb3ItdGV4dC1ib2R5OiAgIGhzbCgwLCA1JSwgMjUlKTtcXG4gICAgLS1jb2xvci10ZXh0LW11dGVkOiAgaHNsKDAsIDElLCA0NCUpO1xcblxcbiAgICAvLyBDbGFzc2ljYWwgYW5kIHJvYnVzdCBzcGFjaW5nIHN5c3RlbVxcbiAgICAtLXNwYWNlLXh4eHM6IDAuMjVyZW07IC8vIDRweFxcbiAgICAtLXNwYWNlLXh4czogMC4zNzVyZW07IC8vIDZweFxcbiAgICAtLXNwYWNlLXhzOiAwLjVyZW07ICAgIC8vIDhweFxcbiAgICAtLXNwYWNlLXM6IDAuNzVyZW07ICAgIC8vIDEycHhcXG4gICAgLS1zcGFjZS1tOiAxcmVtOyAgICAgICAvLyAxNnB4XFxuICAgIC0tc3BhY2UtbDogMS41cmVtOyAgICAgLy8gMjRweFxcbiAgICAtLXNwYWNlLXhsOiAycmVtOyAgICAgIC8vIDMycHhcXG4gICAgLS1zcGFjZS14eGw6IDIuNXJlbTsgICAvLyA0MHB4XFxuICAgIC0tc3BhY2UteHh4bDogM3JlbTsgICAgLy8gNDhweFxcbiAgICAtLXNwYWNlLXh4eHhsOiA0cmVtOyAgIC8vIDY0cHhcXG5cXG4gICAgLy8gQXBwbGljYXRpb24gY29sb3JzXFxuICAgIC0tY29sb3ItcHJpbWFyeTogICAgICAgICAgI2Q2ZDBiODtcXG4gICAgLS1jb2xvci1wcmltYXJ5LXJvdGF0ZTogICByZ2IoMjMsIDEwMywgMjIzKTtcXG4gICAgLS1jb2xvci1wcmltYXJ5LWJnOiAgICAgICAjNWJhYWVjO1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogICAgICAgICM0YzkxNzM7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZTogIzkwMjQyNDtcXG4gICAgLS1jb2xvci10ZXJ0aWFyeTogICAgICAgICBoc2woNDksIDg5JSwgNjQlKTtcXG4gICAgLS1jb2xvci1nbGludDogICAgICAgICAgICByZ2IoMTYzLCAyMDksIDI1NSk7XFxuXFxuICAgIC8vIE5ldXRyYWwgY29sb3JzXFxuICAgIC0tY29sb3Itd2hpdGU6ICAgICAgaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kOiAjMzM0MjViO1xcbiAgICAtLWNvbG9yLWxpZ2h0OiAgICAgIGhzbCgwLCA2JSwgOTMlKTtcXG4gICAgLS1jb2xvci1kYXJrOiAgICAgICB2YXIoLS1jb2xvci10ZXh0LWhlYWRlcik7XFxuXFxuICAgIC8vIEJvcmRlciByYWRpdXNcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG5cXG4gICAgLy8gQm9yZGVyXFxuICAgIC0tYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3ItbGlnaHQpO1xcbiAgICAtLWJvcmRlci1kYXJrOiBzb2xpZCAycHggdmFyKC0tY29sb3ItZGFyayk7XFxuXFxuICAgIC8vIFNoYWRvd3NcXG4gICAgLS1zaGFkb3ctbGFyZ2U6ICAycHggNHB4IDEwcHggaHNsKDAgMCUgMCUgLyAwLjEpO1xcbiAgICAtLXNoYWRvdy1zbWFsbDogIDFweCAzcHggNnB4IGhzbCgwIDAlIDAlIC8gMC4xKTtcXG59XFxuXCIsXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1hZ2VzL3JhZGFyMDIuanBnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIFByZXZlbnRzIHRoZSBpbWFnZSBmcm9tIHJlcGVhdGluZyAqL1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogU2NhbGVzIHRoZSBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGNvbnRhaW5lciAqL1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcblxcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1ib2R5KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1ib2R5KTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1zYW5zKTtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1oZWFkZXJzKTtcXG4gIGZvbnQtZmFtaWx5OiAnUnVzdCc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14eHhsKTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHhsKTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzLFxcbiAgJjphY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xcbiAgfVxcbn1cXG5cXG5cIixcIi5jb250YWluZXIge1xcbiAgICAvLyBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciBhdXRvIDAuMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgXFxcImNvbnRlbnRcXFwiXFxuICAgICAgXFxcImZvb3RlclxcXCI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvLyBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjZS14cyk7XFxuICAgIC8vIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UteHMpO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAvLyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1sKTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICAvLyBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc21hbGwpO1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJnKTtcXG4gIFxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEodGFibGV0QW5kVXApIHtcXG4gICAgICAvLyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjZS1tKTtcXG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW0pO1xcbiAgICAgIG1heC13aWR0aDogNjByZW07XFxuICAgIH1cXG4gIH1cIixcIkBtaXhpbiBtZWRpYSgkcXVlcnkpIHtcXG4gICAgQGlmICRxdWVyeSA9PSB0YWJsZXRBbmRVcCB7XFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwcmVtKSB7IEBjb250ZW50OyB9XFxuICAgIH1cXG4gIH1cIixcIi5jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xcbiAgICAvLyBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cIixcImZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVwiLFwiaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XFxuICAgIC8vIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVwiLFwiLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWJnKTtcXG5cXG5cXG4gIH1cXG5cXG4gIC5wcm9maWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLnByb2ZpbGUtdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4bCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG4gIH1cIixcIi8vIGJvYXJkLnNjc3NcXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UtbCk7XFxufVxcblxcbi5ib2FyZC1jZWxsIHtcXG4gICAgLy8gd2lkdGg6IDUwcHg7IC8vIE1hdGNoIHRoZSB3aWR0aCBpbiBncmlkLXRlbXBsYXRlLWNvbHVtbnNcXG4gICAgLy8gaGVpZ2h0OiA1MHB4OyAvLyBNYXRjaCB0aGUgaGVpZ2h0IGluIGdyaWQtdGVtcGxhdGUtcm93c1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTsgLy8gQm9yZGVyIHRvIHZpc3VhbGl6ZSBncmlkIGNlbGxzXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XFxuICAgIC8vIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sYXJnZSk7XFxufVxcblxcbi5wMS1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTsgLy8gQWRqdXN0IHRoZSBzaXplIGJhc2VkIG9uIHlvdXIgbmVlZHNcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpO1xcbiAgICBnYXA6IDFweDtcXG4gICAgXFxuICAgIC5ib2FyZC1jZWxsLndhdGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktcm90YXRlKTsgLy8gRGlmZmVyZW50IGNvbG9yIGZvciAnd2F0ZXInXFxuICAgIH1cXG4gICAgXFxuICAgIC5ib2FyZC1jZWxsLnNoaXAge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7IC8vIERpZmZlcmVudCBjb2xvciBmb3Igc2hpcFxcbiAgICB9XFxufVxcbi5wMi1ib2FyZCB7XFxuICAgIC8vIGJvcmRlcjogdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7IC8vIEFkanVzdCB0aGUgc2l6ZSBiYXNlZCBvbiB5b3VyIG5lZWRzXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gICAgZ2FwOiAxcHg7IC8vIFNwYWNlIGJldHdlZW4gY2VsbHMgKG9wdGlvbmFsKVxcblxcbiAgICAuYm9hcmQtY2VsbC53YXRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXJvdGF0ZSk7XFxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDEwMywgMjIzKTsgLy8gRGlmZmVyZW50IGNvbG9yIGZvciAnd2F0ZXInXFxuICAgIH1cXG4gICAgXFxuICAgIC5ib2FyZC1jZWxsLnNoaXAge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1yb3RhdGUpO1xcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMDMsIDIyMyk7Ly8gRGlmZmVyZW50IGNvbG9yIGZvciBzaGlwXFxuICAgIH1cXG59XFxuXFxuXCIsXCIvLyBfZ2FtZWluZm8uc2Nzc1xcblxcbi5nYW1lLWluZm8ge1xcbiAgICAvLyBib3JkZXI6IHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgLy8gY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgLnRvcCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG5cXG4gICAgICAgIC5mZWVkYmFjay1pbWFnZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubWlkZGxlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXh4eHhsKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXJvdGF0ZSk7XFxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKSBjb250cmFzdCgxLjUpO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxcbiAgICAgICAgICAgIDAgMCA1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLCAvKiBXaGl0ZSBnbG93ICovXFxuICAgICAgICAgICAgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCAvKiBXaGl0ZSBnbG93ICovXFxuICAgICAgICAgICAgMCAwIDE1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyAvKiBXaGl0ZSBnbG93ICovXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBub25lOyAvKiBFbnN1cmUgbm8gYW5pbWF0aW9uIGlzIGFwcGxpZWQgaW5pdGlhbGx5ICovXFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgLm1pZGRsZS5mYWRlLW91dCB7XFxuICAgICAgICBhbmltYXRpb246IGZhZGVPdXRBbmRTaHJpbmsgM3MgZm9yd2FyZHM7XFxuICAgIH1cXG4gICAgXFxuICAgIEBrZXlmcmFtZXMgZmFkZU91dEFuZFNocmluayB7XFxuICAgICAgICAwJSB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgfVxcbiAgICAgICAgMTAwJSB7XFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7IC8qIFNocmlua3MgdGhlIHRleHQgdG8gNTAlIG9mIGl0cyBvcmlnaW5hbCBzaXplICovXFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmJvdHRvbSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1yb3RhdGUpO1xcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMikgY29udHJhc3QoMS41KTtcXG4gICAgICAgIHRleHQtc2hhZG93OiBcXG4gICAgICAgICAgICAwIDAgNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgLyogV2hpdGUgZ2xvdyAqL1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgLyogRW5zdXJlIG5vIGFuaW1hdGlvbiBpcyBhcHBsaWVkIGluaXRpYWxseSAqL1xcbiAgICB9XFxuXFxuICAgIC5ib3R0b20uZmFkZS1vdXQge1xcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0QW5kU2hyaW5rIDVzIGZvcndhcmRzO1xcbiAgICB9XFxufVxcblwiLFwiLy8gX2ZsZWV0LnNjc3NcXG4uZmxlZXQge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sKTtcXG5cXG4gICAgLnAxLWZsZWV0LCAucDItZmxlZXQge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW0pO1xcbiAgICAgICAgLy8gcGFkZGluZzogdmFyKC0tc3BhY2Utcyk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgIC5wMS1mbGVldCB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxuICAgICAgICBsZWdlbmQge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUnVzdCc7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2UteHMpO1xcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2hpcHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvYXJkLWNlbGwge1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4OyAvKiBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWQgKi9cXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgLyogRGVmYXVsdCBjb2xvciBmb3Igc2hpcCAqL1xcbiAgICAgICAgfVxcbiAgICAgICAgLmJvYXJkLWNlbGwuaGl0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIENvbG9yIGZvciBoaXQgKi9cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAucDItZmxlZXQge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1yb3RhdGUpO1xcbiAgICAgICAgbGVnZW5kIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1J1c3QnO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgLyogQWxpZ24gdGV4dCB0byB0aGUgcmlnaHQgKi9cXG4gICAgICAgIH1cXG4gICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLXNwYWNlLXhzKTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuc2hpcHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogMXB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICB9XFxuICAgICAgICAuYm9hcmQtY2VsbCB7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyAvKiBEZWZhdWx0IGNvbG9yIGZvciBzaGlwICovXFxuICAgICAgICB9XFxuICAgICAgICAuYm9hcmQtY2VsbC5oaXQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgLyogQ29sb3IgZm9yIGhpdCAqL1xcbiAgICAgICAgfVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZG9tSGVscGVyLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBkb21TZWxlY3RvcihuYW1lKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21DcmVhdG9yKG5hbWUpe1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuXG4iLCIvLyBkb21Mb2FkZXIuanNcblxuaW1wb3J0IHsgZG9tU2VsZWN0b3IgfSBmcm9tICcuL2RvbUhlbHBlcic7XG5pbXBvcnQgeyBkaXNwbGF5Qm9hcmQgfSBmcm9tICcuL3JlbmRlckJvYXJkJztcbmltcG9ydCB7IGRpc3BsYXlGbGVldCB9IGZyb20gJy4vcmVuZGVyRmxlZXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyQm9hcmQocGxheWVyKXtcbiAgICBjb25zdCBkaXZQbGF5ZXJCb2FyZCA9IGRvbVNlbGVjdG9yKCcjcDEtYm9hcmQnKTtcbiAgICBjb25zdCBkaXZGbGVldCA9IGRvbVNlbGVjdG9yKCcjcDEtZmxlZXQnKTtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuYm9hcmQ7XG4gICAgXG4gICAgZGlzcGxheUJvYXJkKGRpdlBsYXllckJvYXJkLCBib2FyZCwgcGxheWVyKTtcbiAgICBkaXNwbGF5RmxlZXQocGxheWVyLCBkaXZGbGVldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHBvbmVudEJvYXJkKHBsYXllcikge1xuICAgIGNvbnN0IGRpdk9wcG9uZW50Qm9hcmQgPSBkb21TZWxlY3RvcignI3AyLWJvYXJkJyk7XG4gICAgY29uc3QgZGl2RmxlZXQgPSBkb21TZWxlY3RvcignI3AyLWZsZWV0Jyk7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRCb2FyZFN0YXR1cygpLmJvYXJkO1xuXG4gICAgZGlzcGxheUJvYXJkKGRpdk9wcG9uZW50Qm9hcmQsIGJvYXJkLCBwbGF5ZXIpO1xuICAgIGRpc3BsYXlGbGVldChwbGF5ZXIsIGRpdkZsZWV0KTtcbn1cblxuXG5cbiIsIi8vIGZlZWRiYWNrSGVscGVyLmpzXG5cbmltcG9ydCB7IGRvbUNyZWF0b3IsIGRvbVNlbGVjdG9yIH0gZnJvbSBcIi4vZG9tSGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBmZWVkYmFjayA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHRvcChtLCBpbWFnZVVSTCA9IG51bGwpe1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IGRvbVNlbGVjdG9yKCcudG9wJyk7XG4gICAgICAgIGZlZWRiYWNrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAvLyBmZWVkYmFjay50ZXh0Q29udGVudCA9IG07XG4gICAgICAgIGlmIChpbWFnZVVSTCkge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9tQ3JlYXRvcignaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2VVUkw7XG4gICAgICAgICAgICBpbWcuYWx0ID0gJ0ZlZWRiYWNrIEltYWdlJztcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSAnZmVlZGJhY2staW1hZ2UnOyAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICAgICAgZmVlZGJhY2suYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHQgPSBkb21DcmVhdG9yKCdkaXYnKTtcbiAgICAgICAgdGV4dC5jbGFzc05hbWUgPSAnZmVlZGJhY2stdGV4dCc7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gbTtcbiAgICAgICAgZmVlZGJhY2suYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWlkZGxlKG0pe1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IGRvbVNlbGVjdG9yKCcubWlkZGxlJyk7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gbTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlc2V0IHRoZSBhbmltYXRpb24gYnkgcmVtb3ZpbmcgdGhlIGNsYXNzXG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtb3V0Jyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKSwgMTApOyBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gYm90dG9tKG0pe1xuICAgICAgICBjb25zdCBmZWVkYmFjayA9IGRvbVNlbGVjdG9yKCcuYm90dG9tJyk7XG4gICAgICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gbTtcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1vdXQnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpLCAxMCk7IFxuICAgIH1cblxuICAgIHJldHVybiB7IHRvcCwgbWlkZGxlLCBib3R0b20gfTtcbn0pKCk7XG5cbiIsIi8vIGdhbWVNb2R1bGUuanNcblxuaW1wb3J0IHsgcGxheWVyQm9hcmQsIG9wcG9uZW50Qm9hcmQgfSBmcm9tICcuL2RvbUxvYWRlci5qcyc7XG5pbXBvcnQgeyBmZWVkYmFjayB9IGZyb20gXCIuL2ZlZWRiYWNrSGVscGVyLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tICcuLi9tb2R1bGVzL3BsYXllcic7XG5pbXBvcnQgbWlzc2lsZVJpZ2h0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZV9yaWdodC5wbmcnO1xuaW1wb3J0IG1pc3NpbGVMZWZ0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbWlzc2lsZV9sZWZ0LnBuZyc7XG5cbmV4cG9ydCBjb25zdCBnYW1lTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudFBsYXllckluZGV4ID0gMDtcbiAgICBsZXQgcGxheWVycyA9IFtdO1xuICAgIGxldCBhdHRhY2tlcjtcbiAgICBsZXQgZGVmZW5kZXI7XG4gICAgbGV0IGlzR2FtZU92ZXIgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBodW1hbiA9IGNyZWF0ZVBsYXllcignaHVtYW4nKTtcbiAgICAgICAgbGV0IGNvbXB1dGVyID0gY3JlYXRlUGxheWVyKCdjb21wdXRlcicpO1xuICAgICAgICBwbGF5ZXJzID0gW2h1bWFuLCBjb21wdXRlcl07XG4gICAgICAgIHJvdW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcm91bmQoKSB7XG4gICAgICAgIGF0dGFja2VyID0gcGxheWVyc1tjdXJyZW50UGxheWVySW5kZXhdXG4gICAgICAgIGRlZmVuZGVyID0gcGxheWVyc1tnZXROZXh0UGxheWVySW5kZXgoKV07XG4gICAgICAgIC8vIHdoZW4gYXR0YWNrZXIgaXMgdHlwZSBvZiBodW1hblxuICAgICAgICBpZiAoYXR0YWNrZXIucGxheWVyVHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgZmVlZGJhY2sudG9wKGBZb3VyIENvbW1hbmRgLCBtaXNzaWxlUmlnaHQpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQoYXR0YWNrZXIpO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZChkZWZlbmRlcik7ICBcbiAgICAgICAgfSBcbiAgICBcbiAgICAgICAgLy8gd2hlbiBhdHRhY2tlciBpcyB0eXBlIG9mIGNvbXB1dGVyXG4gICAgICAgIGlmIChhdHRhY2tlci5wbGF5ZXJUeXBlID09PSAnY29tcHV0ZXInKSB7IFxuICAgICAgICAgICAgZmVlZGJhY2sudG9wKGBFbmVteSBhdHRhY2tpbmcuLmAsIG1pc3NpbGVSaWdodCk7XG4gICAgICAgICAgICBhdHRhY2tlci5pc0F0dGFja2luZyA9IHRydWU7XG4gICAgICAgICAgICBvcHBvbmVudEJvYXJkKGF0dGFja2VyKTsgLy8gTWFrZSBvcHBvbmVudCBib2FyZCB1bmNsaWNrYWJsZSBkdXJpbmcgY29tcHV0ZXJzIGF0dGFja1xuXG4gICAgICAgICAgICAvLyBHaXZlIGRlbGF5IGJlZm9yZSBjb21wdXRlciBhdHRhY2tzLiBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF0dGFja2VyLmNvbXB1dGVyQXR0YWNrKGRlZmVuZGVyKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZChkZWZlbmRlcik7XG4gICAgICAgICAgICAgICAgYXR0YWNrZXIuaXNBdHRhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgfSwgMzAwMCk7ICBcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRJc0dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gaXNHYW1lT3ZlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXh0UGxheWVySW5kZXgoKSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudFBsYXllckluZGV4ICsgMSkgJSBwbGF5ZXJzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXJJbmRleCA9IGdldE5leHRQbGF5ZXJJbmRleCgpOyAvLyBzd2l0Y2ggcGxheWVyXG4gICAgICAgIHJvdW5kKCk7IC8vIG5ldyByb3VuZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTGFzdFNob3QoKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJzW2dldE5leHRQbGF5ZXJJbmRleCgpXS5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuaGl0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmIChkZWZlbmRlci5nZXRCb2FyZCgpLmNoZWNrRmxlZXQoKSkge1xuICAgICAgICAgICAgaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBmZWVkYmFjay5taWRkbGUoYEdhbWVvdmVyOiAke2F0dGFja2VyLnBsYXllclR5cGV9IFdJTlMhYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tMYXN0U2hvdCgpKSB7ICAgXG4gICAgICAgICAgICBmZWVkYmFjay5ib3R0b20oXCJGaXJlIGFnYWluIVwiKTtcbiAgICAgICAgICAgIHJvdW5kKCk7IC8vIElmIGhpdCBwbGF5IGFub3RoZXIgcm91bmQgd2l0aG91dCBzd2l0Y2hpbmcgcGxheWVyLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiB7IGluaXQsIGdhbWVPdmVyLCBnZXRJc0dhbWVPdmVyIH07XG59KSgpOyIsIi8vIGdhbWVib2FyZC5qc1xuXG5pbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZmVlZGJhY2sgfSBmcm9tIFwiLi9mZWVkYmFja0hlbHBlci5qc1wiO1xuaW1wb3J0IGhpdCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hpdC5wbmcnO1xuaW1wb3J0IG1pc3MgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9taXNzLnBuZyc7XG5cblxuLy8gR2xvYmFsIGJvYXJkIHNpemU7XG5leHBvcnQgY29uc3QgeEF4aXMgPSAxMDsgXG5leHBvcnQgY29uc3QgeUF4aXMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCh0eXBlKSB7XG5cbiAgICAvLyBQbGF5ZXJzIGJvYXJkLCBzaGlwcyBhbmQgYXR0YWNrIHJlY29yZHMuIFxuICAgIGxldCBib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHlBeGlzIH0sICgpID0+IEFycmF5KHhBeGlzKS5maWxsKG51bGwpKTtcbiAgICBsZXQgcGxheWVyRmxlZXQgPSBbXTtcbiAgICBsZXQgc2hvdHMgPSAgbmV3IE1hcCgpO1xuICAgIGxldCBoYXNIaXQgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSBzaGlwc1xuICAgIGNvbnN0IGNhcnJpZXIgPSBjcmVhdGVTaGlwKCdjYXJyaWVyJyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVNoaXAoJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBjcmVhdGVTaGlwKCdkZXN0cm95ZXInKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBjcmVhdGVTaGlwKCdzdWJtYXJpbmUnKTtcbiAgICBjb25zdCBwYXRyb2xib2F0ID0gY3JlYXRlU2hpcCgncGF0cm9sYm9hdCcpO1xuXG4gICAgLy8gUGxhY2VzIGVhY2ggc2hpcHNcbiAgICBpZiAodHlwZSA9PSAnaHVtYW4nKXtcbiAgICAgICAgcGxhY2VTaGlwKDAsIDAsIGNhcnJpZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCgxLCAwLCBiYXR0bGVzaGlwLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoMiwgMCwgZGVzdHJveWVyLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoMywgMCwgc3VibWFyaW5lLCAnaG9yaXpvbnRhbCcpO1xuICAgICAgICBwbGFjZVNoaXAoNCwgMCwgcGF0cm9sYm9hdCwgJ2hvcml6b250YWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGFjZVNoaXAoOSwgMCwgY2FycmllciwgJ2hvcml6b250YWwnKTtcbiAgICAgICAgcGxhY2VTaGlwKDgsIDAsIGJhdHRsZXNoaXAsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg3LCAwLCBkZXN0cm95ZXIsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg2LCAwLCBzdWJtYXJpbmUsICdob3Jpem9udGFsJyk7XG4gICAgICAgIHBsYWNlU2hpcCg1LCAwLCBwYXRyb2xib2F0LCAnaG9yaXpvbnRhbCcpO1xuICAgIH1cblxuICAgIC8vIERpc3BsYXkgYm9hcmRcbiAgICBmdW5jdGlvbiBnZXRCb2FyZFN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJvYXJkOiBib2FyZCxcbiAgICAgICAgICAgIGZsZWV0OiBwbGF5ZXJGbGVldCxcbiAgICAgICAgICAgIHNob3RzOiBzaG90cyxcbiAgICAgICAgICAgIGhpdDogaGFzSGl0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQbGFjZXMgc2hpcHMgaWYgcG9zdGlvbiBpcyB2YWxpZC4gXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHksIHgsIHNoaXAsIG9yaWVudGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHNoaXAuZ2V0U3RhdHVzKCkubGVuZ3RoO1xuXG4gICAgICAgIGlmICghdmFsaWRQb3NpdGlvbnMoeSwgeCwgbGVuLCBvcmllbnRhdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBQb3NpdGlvbic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHk7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW3hdID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3ldW2ldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXJGbGVldC5wdXNoKHNoaXApOyAvLyBrZWVwIHJlY29yZCBvZiBwbGF5ZXJzIHNoaXBzXG4gICAgfVxuXG4gICAgLyoqIEF0dGFja3MhICovXG5cbiAgICAvLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayB3aXRoIGNvb3JkaW5hdGUgaGl0IGEgc2hpcC5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHksIHgpIHtcbiAgICAgICAgaWYgKHNob3RzLmhhcyhgJHt5fSwke3h9YCkpIHtcbiAgICAgICAgICAgIGZlZWRiYWNrLmJvdHRvbSgnQ2hlY2sgeW91ciBjb29yZC4nKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmRbeV1beF07XG4gICAgICAgIGlmIChjZWxsPy50eXBlID09PSAnc2hpcCcpIHtcbiAgICAgICAgICAgIGhhc0hpdCA9IHRydWU7XG4gICAgICAgICAgICBjZWxsLmhpdCgpO1xuICAgICAgICAgICAgc2hvdHMuc2V0KGAke3l9LCR7eH1gLCBoaXQpOyAvLyBpZiBoaXQga2VlcCByZWNvcmQgd2l0aCBpbWdcbiAgICAgICAgICAgIGZlZWRiYWNrLm1pZGRsZShgSElUIWApO1xuICAgICAgICAgICAgY2hlY2tTaGlwKGNlbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFzSGl0ID0gZmFsc2U7XG4gICAgICAgICAgICBzaG90cy5zZXQoYCR7eX0sJHt4fWAsIG1pc3MpOyAvLyBpZiBtaXNzIGtlZXAgcmVjb3JkXG4gICAgICAgICAgICBmZWVkYmFjay5taWRkbGUoYE1JU1NFRCFgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBzaGlwIHN0YXR1cyB0aGF0IHdhcyBoaXRcbiAgICBmdW5jdGlvbiBjaGVja1NoaXAoY2VsbCl7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBjZWxsLmdldFN0YXR1cygpO1xuICAgICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICBmZWVkYmFjay5ib3R0b20oYCR7c2hpcC5uYW1lfSBzdW5rIWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgcGxheWVycyBmbGVldCBzdGF0dXNcbiAgICBmdW5jdGlvbiBjaGVja0ZsZWV0KCkge1xuICAgICAgICByZXR1cm4gKHBsYXllckZsZWV0LmV2ZXJ5KHNoaXAgPT4gc2hpcC5nZXRTdGF0dXMoKS5zdW5rKSk7IC8vIHJldHVybiB0cnVlIGlmIGFsbCBzdW5rXG4gICAgfVxuXG4gICAgLyoqIFZhbGlkIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZCAqKi9cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBib3RoIGNvbmRpdGlvbnMgYXJlIHRydWUgZWxzZSBmYWxzZVxuICAgIGZ1bmN0aW9uIHZhbGlkUG9zaXRpb25zKHksIHgsIGxlbiwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgcmV0dXJuICh2YWxpZENlbGxMZW5ndGgoeSwgeCwgbGVuLCBvcmllbnRhdGlvbikgJiYgdmFsaWRFZGdlKHksIHgpKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBwb3NpdGlvbiBoYXZlIGVub3VnaCBmcmVlIGNlbGxzIGZvciB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgZnVuY3Rpb24gdmFsaWRDZWxsTGVuZ3RoKHksIHgsIGxlbiwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAhdmFsaWRDZWxsKGksIHgpICYmIGZhbHNlOyBcbiAgICAgICAgICAgICAgICAhdmFsaWRFZGdlKGksIHgpICYmIGZhbHNlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICF2YWxpZENlbGwoeSwgaSkgJiYgZmFsc2U7XG4gICAgICAgICAgICAgICAgIXZhbGlkRWRnZSh5LCBpKSAmJiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBpcyB3aXRoaW4gYm9hcmQgYm91bmRhcmllcy5cbiAgICBmdW5jdGlvbiB2YWxpZEVkZ2UoeSwgeCkge1xuICAgICAgICByZXR1cm4gKHggPj0gMCAmJiB4IDwgeEF4aXMgJiYgeSA+PSAwICYmIHkgPCB5QXhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgY2VsbCBpcyBmcmVlLiBcbiAgICBmdW5jdGlvbiB2YWxpZENlbGwoeSwgeCkge1xuICAgICAgICBib2FyZFt5XVt4XSA9PT0gbnVsbCAmJiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0Qm9hcmRTdGF0dXMsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgY2hlY2tGbGVldCB9XG59IiwiLy8gcGxheWVyLmpzXG5cbmltcG9ydCB7IHhBeGlzLCB5QXhpcyB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGNyZWF0ZUdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4vZ2FtZU1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIodHlwZSkge1xuICAgIGNvbnN0IHBsYXllclR5cGUgPSB0eXBlO1xuICAgIGNvbnN0IGlzQXR0YWNraW5nID0gZmFsc2U7XG4gICAgbGV0IGJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHR5cGUpO1xuICAgIGxldCBwb3NzaWJsZVNob3RzID0gZmlsbFBvc3NpYmxlU2hvdHMoKTtcbiAgICBcblxuICAgIGZ1bmN0aW9uIGdldEJvYXJkKCl7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICAvKioqIENvbXB1dGVyIEF0dGFjayBMb2dpY3MgKioqL1xuICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKHBsYXllcikge1xuICAgICAgICBjb25zdCBbeSwgeF0gPSBnZXRSYW5kb21TaG90KCk7XG4gICAgICAgIHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soeSwgeCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlcyBhcnJheSBvZiBhbGwgcG9zc2libGUgc2hvdHMoY29vcmRpbmF0ZSkgYmFzZWQgb24gdGhlIHNpemUgb2YgYm9hcmRcbiAgICBmdW5jdGlvbiBmaWxsUG9zc2libGVTaG90cygpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHlBeGlzOyB5KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgeEF4aXM7IHgrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goW3ksIHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIGluZGV4IHBhc3NlZCBvbiBwb3NzaWJsZVNob3RzXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tU2hvdCgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZVNob3RzLmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgdGhlIGNvb3JkaW5hdGUgYXQgdGhlIHJhbmRvbSBpbmRleFxuICAgICAgICBjb25zdCBbc2hvdF0gPSBwb3NzaWJsZVNob3RzLnNwbGljZShyYW5kb21JbmRleCwgMSk7IC8vIFJlbW92ZSB0aGUgc2hvdCBmcm9tIHRoZSBhcnJheVxuICAgICAgICByZXR1cm4gc2hvdDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXJUeXBlLCBpc0F0dGFja2luZywgZ2V0Qm9hcmQsIGNvbXB1dGVyQXR0YWNrIH07XG59IiwiLy8gcmVuZGVyQm9hcmQuanNcbmltcG9ydCB7IHhBeGlzLCB5QXhpcyB9IGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGRvbUNyZWF0b3IgfSBmcm9tICcuL2RvbUhlbHBlcic7XG5pbXBvcnQgeyBnYW1lTW9kdWxlIH0gZnJvbSAnLi9nYW1lTW9kdWxlJztcbmltcG9ydCB7IG9wcG9uZW50Qm9hcmQgfSBmcm9tICcuL2RvbUxvYWRlcic7XG5cbi8vIFJlbmRlciBib2FyZCBcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Qm9hcmQoZGl2Qm9hcmQsIGJvYXJkLCBwbGF5ZXIpIHtcbiAgICBkaXZCb2FyZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgeUF4aXM7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHhBeGlzOyB4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gYCR7eX0sJHt4fWA7XG4gICAgICAgICAgICBjb25zdCBjZWxsVHlwZSA9IGJvYXJkW3ldW3hdO1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwocGxheWVyLCBjb29yZCwgY2VsbFR5cGUpO1xuICAgICAgICAgICAgZGl2Qm9hcmQuYXBwZW5kKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBSZXR1cm4gZWFjaCBjZWxsIHRvIGRpc3BsYXkgYm9hcmRcbmZ1bmN0aW9uIGNyZWF0ZUNlbGwocGxheWVyLCBjb29yZCwgY2VsbFR5cGUpIHsgXG4gICAgY29uc3QgY2VsbCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwnO1xuICAgIGNlbGwuaWQgPSAnYm9hcmQtY2VsbCc7XG4gICAgY2VsbC5kYXRhc2V0LnBvc2l0aW9uID0gY29vcmQ7XG4gICAgY29uc3QgaW1nID0gY2hlY2tIaXRzQW5kTWlzc2VzKHBsYXllciwgY29vcmQpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChjZWxsVHlwZSA/ICdzaGlwJyA6ICd3YXRlcicpOyAvLyBBZGQgc2hpcCBvciB3YXRlciBjbGFzcyBkZXBlbmRpbmcgb24gdGhlIGNlbGwgY29udGVudFxuICAgIGNlbGwuYXBwZW5kKGltZyk7XG4gICAgLy8gQWRkcyBjbGljayBldmVudCBvbiBvcHBvbmVudHMgYm9hcmQgaWYgcGxheWVyIGlzIGNvbXB1dGVyLCBpcyBhdHRhY2tpbmcgYW5kIGdhbWUgbm90IG92ZXIuXG4gICAgaWYgKHBsYXllci5wbGF5ZXJUeXBlID09PSAnY29tcHV0ZXInICYmICFwbGF5ZXIuaXNBdHRhY2tpbmcgJiYgIWdhbWVNb2R1bGUuZ2V0SXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVDZWxsQ2xpY2socGxheWVyLCBjb29yZCkpOyAgIFxuICAgIH1cbiAgICByZXR1cm4gY2VsbDtcbn1cblxuLy8gTG9hZHMgaW1hZ2UgZmlsZSBmb3Igc2hvdHMgdGhhdHMgaGl0IGFuZCBtaXNzXG5mdW5jdGlvbiBjaGVja0hpdHNBbmRNaXNzZXMocGxheWVyLCBjb29yZCl7XG4gICAgY29uc3Qgc2hvdHNGaXJlZCA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuc2hvdHMuaGFzKGNvb3JkKTtcbiAgICBpZiAoc2hvdHNGaXJlZCkge1xuICAgICAgICBjb25zdCBpbWcgPSBkb21DcmVhdG9yKCdpbWcnKTtcbiAgICAgICAgaW1nLnNyYyA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkU3RhdHVzKCkuc2hvdHMuZ2V0KGNvb3JkKTtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2socGxheWVyLCBjb29yZCkge1xuICAgIGNvbnN0IFt5LCB4XSA9IGNvb3JkLnNwbGl0KCcsJykubWFwKE51bWJlcik7XG4gICAgaWYgKHBsYXllci5nZXRCb2FyZCgpLnJlY2VpdmVBdHRhY2soeSwgeCkpIHsgLy8gaWYgYXR0YWNrIGlzIHN1Y2Vzc2Z1bFxuICAgICAgICBnYW1lTW9kdWxlLmdhbWVPdmVyKCk7XG4gICAgICAgIG9wcG9uZW50Qm9hcmQocGxheWVyKTsgLy8gdXBkYXRlcyBib2FyZCBhbmQgZW5zdXJlIHRvIHJlbW92ZSBjbGljayBldmVudCBpZiBpc0dhbWVPdmVyXG4gICAgfVxufSIsIi8vIHJlbmRlckZsZWV0LmpzXG5pbXBvcnQgeyBkb21DcmVhdG9yIH0gZnJvbSAnLi9kb21IZWxwZXInO1xuXG4vL1JlbmRlciBmbGVldFxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGbGVldChwbGF5ZXIsIGRpdkZsZWV0KSB7XG4gICAgY29uc3QgZmxlZXQgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRCb2FyZFN0YXR1cygpLmZsZWV0O1xuICAgIGRpdkZsZWV0LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGRpdkZsZWV0TGVnZW5kID0gZG9tQ3JlYXRvcignbGVnZW5kJyk7XG4gICAgXG4gICAgZGl2RmxlZXRMZWdlbmQudGV4dENvbnRlbnQgPSAnTXkgRmxlZXQnO1xuICAgIGRpdkZsZWV0LmFwcGVuZChkaXZGbGVldExlZ2VuZCk7XG5cbiAgICBmbGVldC5mb3JFYWNoKHNoaXAgPT4geyAgICAgICBcbiAgICAgICAgY29uc3QgZGl2U2hpcCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZUaXRsZSA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuXG4gICAgICAgIGRpdlRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICAgICAgZGl2U2hpcC5jbGFzc05hbWUgPSBcInNoaXBcIjtcbiAgICAgICAgZGl2VGl0bGUuaW5uZXJIVE1MID0gYDxoNT4ke3NoaXAuZ2V0U3RhdHVzKCkubmFtZX08L2g1PmA7XG4gICAgICAgIGRpdkZsZWV0LmFwcGVuZChkaXZUaXRsZSk7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gY3JlYXRlU2hpcHNDZWxscyhzaGlwLCBwbGF5ZXIpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4gZGl2U2hpcC5hcHBlbmRDaGlsZChjZWxsKSk7XG4gICAgICAgIGRpdkZsZWV0LmFwcGVuZChkaXZTaGlwKTtcbiAgICB9KTtcbn1cblxuLy8gQ3JlYXRlIHNoaXAgY2VsbHMgZm9yIGZsZWV0IGRpc3BsYXlcbmZ1bmN0aW9uIGNyZWF0ZVNoaXBzQ2VsbHMoc2hpcCwgcGxheWVyKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuZ2V0U3RhdHVzKCkubGVuZ3RoO1xuICAgIGxldCBzaGlwSGl0cyA9IHNoaXAuZ2V0U3RhdHVzKCkuaGl0cztcbiAgICBjb25zdCBzaGlwU3VuayA9IHNoaXAuZ2V0U3RhdHVzKCkuc3VuaztcblxuICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvbUNyZWF0b3IoJ2RpdicpO1xuICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsJztcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7IC8vIEVuc3VyZSBpdCBtYXRjaGVzIHRoZSBzaGlwIGNsYXNzIHVzZWQgb24gdGhlIGJvYXJkXG4gICAgICAgIGlmIChzaGlwSGl0cyA+IDAgJiYgcGxheWVyLnBsYXllclR5cGUgIT09ICdjb21wdXRlcicgKSB7IC8vIGlmIHNoaXBzIGhhcyBoaXRzIGFkZCBoaXQgY2xhc3NcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBzaGlwSGl0cyA9IE1hdGgubWF4KDAsIHNoaXBIaXRzIC0gMSk7IC8vIGVuc3VyZSBzaGlwSGl0cyBkb2Vzbid0IGdvIGJlbG93IDBcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcFN1bmspIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7ICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIGNlbGxzO1xufVxuXG4iLCIvLyBzaGlwLmpzXG5cbi8vIERlZmluZSBzaGlwIGNsYXNzIHdpdGggbmFtZSBhbmQgSFAsIHlvdSBjYW4gYWRkIGFuZCBtb2RpZnkgZGlmZmVyZW50IGNsYXNzZXMuXG5jb25zdCBzaGlwQ2xhc3MgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGRlc3Ryb3llcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgcGF0cm9sYm9hdDogMlxufVxuXG4vLyBDcmVhdGUgYSBzaGlwIG9iamVjdCB3aXRoIHNoaXBzIGNsYXNzIG5hbWVcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGlwKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IHNoaXBUeXBlID0gY2xhc3NOYW1lO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwQ2xhc3NbY2xhc3NOYW1lXTtcbiAgICBsZXQgc2hpcEhpdHMgPSAwO1xuICAgIGxldCBzaGlwU3VuayA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogc2hpcFR5cGUsXG4gICAgICAgICAgICBsZW5ndGg6IHNoaXBMZW5ndGgsXG4gICAgICAgICAgICBoaXRzOiBzaGlwSGl0cyxcbiAgICAgICAgICAgIHN1bms6IHNoaXBTdW5rXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgICFzaGlwU3VuayAmJiAoc2hpcEhpdHMrKywgaXNTdW5rKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIHNoaXBIaXRzID49IHNoaXBMZW5ndGggJiYgKHNoaXBTdW5rID0gdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0U3RhdHVzLCBoaXQsIHR5cGU6ICdzaGlwJyB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5kZXguanNcblxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgZ2FtZU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9nYW1lTW9kdWxlJztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBnYW1lTW9kdWxlLmluaXQoKTtcbn1cblxuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==