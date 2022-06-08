"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_setup"] = self["webpackChunkwebpack_setup"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Fresca&family=Patrick+Hand&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 16px;\\r\\n  line-height: 20px;\\r\\n  letter-spacing: 1px;\\r\\n  font-family: 'Patrick Hand', cursive;\\r\\n  background-color: #f0f0f0;\\r\\n  color: #5e5e5e;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\ni {\\r\\n  font-size: 14px;\\r\\n  color: #9c9c9c;\\r\\n}\\r\\n\\r\\n.border {\\r\\n  border-bottom: 1px solid #e0e0e0;\\r\\n}\\r\\n\\r\\n.yellow {\\r\\n  background: #fff78180;\\r\\n}\\r\\n\\r\\n.btn2 {\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"] {\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  width: 90%;\\r\\n  font-family: inherit;\\r\\n  font-size: inherit;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n/* !Section styling */\\r\\n#todo-section {\\r\\n  width: 95%;\\r\\n  max-width: 600px;\\r\\n  margin: 100px auto 0;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 3px 15px 0 rgba(168, 168, 168, 0.4);\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.head {\\r\\n  padding: 15px 20px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 25px;\\r\\n  font-weight: 400;\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n\\r\\n/* !form and list section styling */\\r\\n\\r\\n.list-flex {\\r\\n  padding: 10px 10px 10px 15px;\\r\\n}\\r\\n\\r\\n.to-do-list li div {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n#add-item {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.btn button {\\r\\n  width: 100%;\\r\\n  background: #f0f0f0;\\r\\n  height: 100%;\\r\\n  display: block;\\r\\n  padding: 10px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n\r\n\r\n\r\n\r\n\r\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.form.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.form.reset();\r\n});\r\n\r\nconst displayLi = (list) => {\r\n  for (let i = 1; i <= list.length; i += 1) {\r\n    list.forEach((listItem) => {\r\n      if (listItem.index === i) {\r\n        (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listItem);\r\n      }\r\n    });\r\n  }  \r\n};\r\n\r\ndisplayLi(_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list);\r\n\r\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.clear.addEventListener('click', () => {\r\n  const newlist = _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list.filter((element) => element.completed === true);\r\n  newlist.forEach((element) => {\r\n    if (_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list.includes(element)) {\r\n      _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list.splice(_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list.indexOf(element), 1);\r\n    }\r\n  });\r\n  let i = 1;\r\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list.forEach((element) => {\r\n    element.index = i;\r\n    i += 1;\r\n  });\r\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.innerHTML = '';\r\n  displayLi(_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list);\r\n  localStorage.setItem('list', JSON.stringify(_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.list));\r\n});\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ \"./src/modules/toDo.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _populate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate.js */ \"./src/modules/populate.js\");\n\n\n\n\nconst addNew = () => {\n  const todo = new _toDo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  todo.description = _elements_js__WEBPACK_IMPORTED_MODULE_1__.form[\"new\"].value;\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__.list.push(todo);\n  todo.index = _elements_js__WEBPACK_IMPORTED_MODULE_1__.list.length;\n  (0,_populate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo);\n  localStorage.setItem('list', JSON.stringify(_elements_js__WEBPACK_IMPORTED_MODULE_1__.list));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNew);\n\n//# sourceURL=webpack://webpack-setup/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/check.js":
/*!******************************!*\
  !*** ./src/modules/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCheck\": () => (/* binding */ checkCheck),\n/* harmony export */   \"complete\": () => (/* binding */ complete)\n/* harmony export */ });\nconst complete = (e, todo, text) => {\r\n  if (e.target.checked) {\r\n    todo.completed = true;\r\n    text.style.textDecoration = 'line-through';\r\n  } else {\r\n    todo.completed = false;\r\n    text.style.textDecoration = 'none';\r\n  }\r\n};\r\n\r\nconst checkCheck = (checkbox, todo, text) => {\r\n  if (todo.completed) {\r\n    checkbox.checked = true;\r\n    text.style.textDecoration = 'line-through';\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/check.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n\n\nconst editTask = (text, listItem, todo, btn, btn2) => {\n  text.disabled = false;\n  text.focus();\n  text.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      text.disabled = true;\n      listItem.classList.remove('yellow');\n      todo.description = text.value;\n      localStorage.setItem('list', JSON.stringify(_elements_js__WEBPACK_IMPORTED_MODULE_0__.list));\n      btn.style.display = 'block';\n      btn2.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://webpack-setup/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clear\": () => (/* binding */ clear),\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\nconst toDoList = document.querySelector('.to-do-list');\r\nconst form = document.querySelector('#add-form');\r\nconst clear = document.querySelector('.btn button');\r\nconst list = JSON.parse(localStorage.getItem('list')) || [];\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove.js */ \"./src/modules/remove.js\");\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.js */ \"./src/modules/check.js\");\n\r\n\r\n\r\n\r\n\r\nconst populate = (todo) => {\r\n  const listItem = document.createElement('li');\r\n  listItem.classList.add('border', 'list-flex', 'flex');\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.appendChild(listItem);\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.setAttribute('type', 'checkbox');\r\n  checkbox.classList.add('check-list');\r\n\r\n  const text = document.createElement('input');\r\n  text.value = todo.description;\r\n  text.setAttribute('type', 'text');\r\n  text.disabled = true;\r\n\r\n  const div = document.createElement('div');\r\n  div.append(checkbox, text);\r\n\r\n  const btn = document.createElement('button');\r\n  btn.setAttribute('type', 'button');\r\n  btn.innerHTML = '<i class=\"bi bi-three-dots-vertical\"></i>';\r\n\r\n  const btn2 = document.createElement('button');\r\n  btn2.setAttribute('type', 'button');\r\n  btn2.innerHTML = '<i class=\"bi bi-trash-fill btn2\"></i>';\r\n  btn2.style.display = 'none';\r\n  listItem.append(div, btn, btn2);\r\n\r\n  let listelement = {};\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.forEach((element) => {\r\n    if (element === todo) {\r\n      listelement = element;\r\n    }\r\n  });\r\n\r\n  btn.addEventListener('click', () => {\r\n    (0,_edit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text, listItem, listelement, btn, btn2);\r\n    listItem.classList.add('yellow');\r\n    btn2.style.display = 'block';\r\n    btn.style.display = 'none';\r\n  });\r\n\r\n  document.addEventListener('click', (e) => {\r\n    const desc = Array.from(listItem.querySelectorAll('*'));\r\n    if (!desc.includes(e.target) && !text.disabled) {\r\n      text.disabled = true;\r\n      listItem.classList.remove('yellow');\r\n      listelement.description = text.value;\r\n      localStorage.setItem('list', JSON.stringify(_elements_js__WEBPACK_IMPORTED_MODULE_0__.list));\r\n      btn.style.display = 'block';\r\n      btn2.style.display = 'none';\r\n    }\r\n  });\r\n\r\n  btn2.addEventListener('click', () => {\r\n    (0,_remove_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(btn2, listelement);\r\n  });\r\n\r\n  (0,_check_js__WEBPACK_IMPORTED_MODULE_3__.checkCheck)(checkbox, todo, text);\r\n\r\n  checkbox.addEventListener('change', (e) => {\r\n    (0,_check_js__WEBPACK_IMPORTED_MODULE_3__.complete)(e, listelement, text);\r\n    localStorage.setItem('list', JSON.stringify(_elements_js__WEBPACK_IMPORTED_MODULE_0__.list));\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n\n\nconst removeTodo = (btn2, todo) => {\n  btn2.parentElement.remove();\n  const ind = _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.indexOf(todo);\n  _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.splice(ind, 1);\n  for (let i = ind; i < _elements_js__WEBPACK_IMPORTED_MODULE_0__.list.length; i += 1) {\n    _elements_js__WEBPACK_IMPORTED_MODULE_0__.list[i].index -= 1;\n  }\n  localStorage.setItem('list', JSON.stringify(_elements_js__WEBPACK_IMPORTED_MODULE_0__.list));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodo);\n\n//# sourceURL=webpack://webpack-setup/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/toDo.js":
/*!*****************************!*\
  !*** ./src/modules/toDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\nclass ToDo {\n  constructor(description, index) {\n    this.description = description;\n    this.completed = false;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://webpack-setup/./src/modules/toDo.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);