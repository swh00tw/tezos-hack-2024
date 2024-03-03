"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/Graph.tsx":
/*!*************************************!*\
  !*** ./src/app/dashboard/Graph.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Example; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/vendor/d3-array */ \"(app-pages-browser)/./node_modules/d3-array/src/extent.js\");\n/* harmony import */ var _visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visx/vendor/d3-array */ \"(app-pages-browser)/./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _visx_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/curve */ \"(app-pages-browser)/./node_modules/@visx/curve/esm/index.js\");\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visx/group */ \"(app-pages-browser)/./node_modules/@visx/group/esm/Group.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visx/shape */ \"(app-pages-browser)/./node_modules/@visx/shape/esm/shapes/LinePath.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/scale */ \"(app-pages-browser)/./node_modules/@visx/scale/esm/scales/time.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visx/scale */ \"(app-pages-browser)/./node_modules/@visx/scale/esm/scales/linear.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/X.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Cross.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Circle.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Arrow.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Line.js\");\n/* harmony import */ var _visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/mock-data/lib/generators/genDateValue */ \"(app-pages-browser)/./node_modules/@visx/mock-data/lib/generators/genDateValue.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst curveTypes = Object.keys(_visx_curve__WEBPACK_IMPORTED_MODULE_2__);\nconst lineCount = 1;\nconst series = new Array(lineCount).fill(null).map((_, i)=>// vary each series value deterministically\n    (0,_visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(400.0, /* seed= */ i / 932.0).sort((a, b)=>a.date.getTime() - b.date.getTime()));\nconst allData = series.reduce((rec, d)=>rec.concat(d), []);\n// data accessors\nconst getX = (d)=>d.date;\nconst getY = (d)=>d.value;\n// scales\nconst xScale = (0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    domain: (0,_visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(allData, getX)\n});\nconst yScale = (0,_visx_scale__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    domain: [\n        0,\n        (0,_visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(allData, getY)\n    ]\n});\nfunction Example(param) {\n    let { width, height, showControls = true } = param;\n    _s();\n    const [curveType, setCurveType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"curveNatural\");\n    const [showPoints, setShowPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const svgHeight = showControls ? height - 40 : height;\n    const lineHeight = svgHeight / lineCount;\n    // update scale output ranges\n    xScale.range([\n        0,\n        width - 50\n    ]);\n    yScale.range([\n        lineHeight - 2,\n        0\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visx-curves-demo\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: width,\n            height: svgHeight,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    id: \"marker-x\",\n                    stroke: \"#333\",\n                    size: 22,\n                    strokeWidth: 4,\n                    markerUnits: \"userSpaceOnUse\"\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    id: \"marker-cross\",\n                    stroke: \"#333\",\n                    size: 22,\n                    strokeWidth: 4,\n                    strokeOpacity: 0.6,\n                    markerUnits: \"userSpaceOnUse\"\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    id: \"marker-circle\",\n                    fill: \"#333\",\n                    size: 2,\n                    refX: 2\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    id: \"marker-arrow-odd\",\n                    stroke: \"#333\",\n                    size: 8,\n                    strokeWidth: 1\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    id: \"marker-line\",\n                    fill: \"#333\",\n                    size: 16,\n                    strokeWidth: 1\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    id: \"marker-arrow\",\n                    fill: \"#333\",\n                    refX: 2,\n                    size: 6\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                    width: width,\n                    height: svgHeight,\n                    fill: \"#efefef\",\n                    rx: 14,\n                    ry: 14\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                width > 8 && series.map((lineData, i)=>{\n                    const even = i % 2 === 0;\n                    let markerStart = even ? \"url(#marker-cross)\" : \"url(#marker-x)\";\n                    if (i === 1) markerStart = \"url(#marker-line)\";\n                    const markerEnd = even ? \"url(#marker-arrow)\" : \"url(#marker-arrow-odd)\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_group__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        top: i * lineHeight,\n                        left: 13,\n                        children: [\n                            showPoints && lineData.map((d, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    r: 3,\n                                    cx: xScale(getX(d)),\n                                    cy: yScale(getY(d)),\n                                    stroke: \"rgba(33,33,33,0.5)\",\n                                    fill: \"transparent\"\n                                }, i + j, false, {\n                                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 21\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_shape__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                curve: _visx_curve__WEBPACK_IMPORTED_MODULE_2__[curveType],\n                                data: lineData,\n                                x: (d)=>{\n                                    var _xScale;\n                                    return (_xScale = xScale(getX(d))) !== null && _xScale !== void 0 ? _xScale : 0;\n                                },\n                                y: (d)=>{\n                                    var _yScale;\n                                    return (_yScale = yScale(getY(d))) !== null && _yScale !== void 0 ? _yScale : 0;\n                                },\n                                stroke: \"#333\",\n                                strokeWidth: even ? 2 : 1,\n                                strokeOpacity: even ? 0.6 : 1,\n                                shapeRendering: \"geometricPrecision\",\n                                markerMid: \"url(#marker-circle)\",\n                                markerStart: markerStart,\n                                markerEnd: markerEnd\n                            }, void 0, false, {\n                                fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, \"lines-\".concat(i), true, {\n                        fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Example, \"jhkBRAO4tyU6vq4Zpe0ipJm0v84=\");\n_c = Example;\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL0dyYXBoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1k7QUFDWDtBQUNMO0FBQ0c7QUFDYztBQUNzQztBQUNBO0FBSTNGLE1BQU1lLGFBQWFDLE9BQU9DLElBQUksQ0FBQ2Isd0NBQVNBO0FBQ3hDLE1BQU1jLFlBQVk7QUFDbEIsTUFBTUMsU0FBUyxJQUFJQyxNQUFNRixXQUFXRyxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQ3JELDJDQUEyQztJQUMzQ1YsdUZBQWlCQSxDQUFDLE9BQU8sU0FBUyxHQUFHVSxJQUFJLE9BQU9DLElBQUksQ0FDbEQsQ0FBQ0MsR0FBY0MsSUFBaUJELEVBQUVFLElBQUksQ0FBQ0MsT0FBTyxLQUFLRixFQUFFQyxJQUFJLENBQUNDLE9BQU87QUFHckUsTUFBTUMsVUFBVVgsT0FBT1ksTUFBTSxDQUFDLENBQUNDLEtBQUtDLElBQU1ELElBQUlFLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFO0FBRTNELGlCQUFpQjtBQUNqQixNQUFNRSxPQUFPLENBQUNGLElBQWlCQSxFQUFFTCxJQUFJO0FBQ3JDLE1BQU1RLE9BQU8sQ0FBQ0gsSUFBaUJBLEVBQUVJLEtBQUs7QUFFdEMsU0FBUztBQUNULE1BQU1DLFNBQVMvQix1REFBU0EsQ0FBUztJQUMvQmdDLFFBQVFyQyxpRUFBTUEsQ0FBQzRCLFNBQVNLO0FBQzFCO0FBQ0EsTUFBTUssU0FBU2hDLHVEQUFXQSxDQUFTO0lBQ2pDK0IsUUFBUTtRQUFDO1FBQUdwQyxpRUFBR0EsQ0FBQzJCLFNBQVNNO0tBQWdCO0FBQzNDO0FBUWUsU0FBU0ssUUFBUSxLQUFrRDtRQUFsRCxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsZUFBZSxJQUFJLEVBQWMsR0FBbEQ7O0lBQzlCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHN0MsK0NBQVFBLENBQVk7SUFDdEQsTUFBTSxDQUFDOEMsWUFBWUMsY0FBYyxHQUFHL0MsK0NBQVFBLENBQVU7SUFDdEQsTUFBTWdELFlBQVlMLGVBQWVELFNBQVMsS0FBS0E7SUFDL0MsTUFBTU8sYUFBYUQsWUFBWS9CO0lBRS9CLDZCQUE2QjtJQUM3Qm9CLE9BQU9hLEtBQUssQ0FBQztRQUFDO1FBQUdULFFBQVE7S0FBRztJQUM1QkYsT0FBT1csS0FBSyxDQUFDO1FBQUNELGFBQWE7UUFBRztLQUFFO0lBRWhDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJWixPQUFPQTtZQUFPQyxRQUFRTTs7OEJBQ3pCLDhEQUFDdEMsb0RBQU9BO29CQUNONEMsSUFBRztvQkFDSEMsUUFBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtvQkFDYkMsYUFBWTs7Ozs7OzhCQUVkLDhEQUFDakQsb0RBQVdBO29CQUNWNkMsSUFBRztvQkFDSEMsUUFBTztvQkFDUEMsTUFBTTtvQkFDTkMsYUFBYTtvQkFDYkUsZUFBZTtvQkFDZkQsYUFBWTs7Ozs7OzhCQUVkLDhEQUFDL0MscURBQVlBO29CQUFDMkMsSUFBRztvQkFBZ0JsQyxNQUFLO29CQUFPb0MsTUFBTTtvQkFBR0ksTUFBTTs7Ozs7OzhCQUM1RCw4REFBQ3BELHFEQUFXQTtvQkFBQzhDLElBQUc7b0JBQW1CQyxRQUFPO29CQUFPQyxNQUFNO29CQUFHQyxhQUFhOzs7Ozs7OEJBQ3ZFLDhEQUFDN0MscURBQVVBO29CQUFDMEMsSUFBRztvQkFBY2xDLE1BQUs7b0JBQU9vQyxNQUFNO29CQUFJQyxhQUFhOzs7Ozs7OEJBQ2hFLDhEQUFDakQscURBQVdBO29CQUFDOEMsSUFBRztvQkFBZWxDLE1BQUs7b0JBQU93QyxNQUFNO29CQUFHSixNQUFNOzs7Ozs7OEJBQzFELDhEQUFDSztvQkFBS3BCLE9BQU9BO29CQUFPQyxRQUFRTTtvQkFBVzVCLE1BQUs7b0JBQVUwQyxJQUFJO29CQUFJQyxJQUFJOzs7Ozs7Z0JBQ2pFdEIsUUFBUSxLQUNQdkIsT0FBT0csR0FBRyxDQUFDLENBQUMyQyxVQUFVekM7b0JBQ3BCLE1BQU0wQyxPQUFPMUMsSUFBSSxNQUFNO29CQUN2QixJQUFJMkMsY0FBY0QsT0FBTyx1QkFBdUI7b0JBQ2hELElBQUkxQyxNQUFNLEdBQUcyQyxjQUFjO29CQUMzQixNQUFNQyxZQUFZRixPQUFPLHVCQUF1QjtvQkFDaEQscUJBQ0UsOERBQUM3RCxvREFBS0E7d0JBQW9CZ0UsS0FBSzdDLElBQUkwQjt3QkFBWW9CLE1BQU07OzRCQUNsRHZCLGNBQ0NrQixTQUFTM0MsR0FBRyxDQUFDLENBQUNXLEdBQUdzQyxrQkFDZiw4REFBQ0M7b0NBRUNDLEdBQUc7b0NBQ0hDLElBQUlwQyxPQUFPSCxLQUFLRjtvQ0FDaEIwQyxJQUFJbkMsT0FBT0osS0FBS0g7b0NBQ2hCdUIsUUFBTztvQ0FDUG5DLE1BQUs7bUNBTEFHLElBQUkrQzs7Ozs7MENBUWYsOERBQUNqRSxvREFBUUE7Z0NBQ1BzRSxPQUFPeEUsd0NBQVMsQ0FBQ3lDLFVBQVU7Z0NBQzNCZ0MsTUFBTVo7Z0NBQ05hLEdBQUcsQ0FBQzdDO3dDQUFNSzsyQ0FBQUEsQ0FBQUEsVUFBQUEsT0FBT0gsS0FBS0YsaUJBQVpLLHFCQUFBQSxVQUFtQjtnQ0FBQTtnQ0FDN0J5QyxHQUFHLENBQUM5Qzt3Q0FBTU87MkNBQUFBLENBQUFBLFVBQUFBLE9BQU9KLEtBQUtILGlCQUFaTyxxQkFBQUEsVUFBbUI7Z0NBQUE7Z0NBQzdCZ0IsUUFBTztnQ0FDUEUsYUFBYVEsT0FBTyxJQUFJO2dDQUN4Qk4sZUFBZU0sT0FBTyxNQUFNO2dDQUM1QmMsZ0JBQWU7Z0NBQ2ZDLFdBQVU7Z0NBQ1ZkLGFBQWFBO2dDQUNiQyxXQUFXQTs7Ozs7Ozt1QkF2QkgsU0FBVyxPQUFGNUM7Ozs7O2dCQTJCekI7Ozs7Ozs7Ozs7OztBQUlWO0dBdkV3QmlCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZGFzaGJvYXJkL0dyYXBoLnRzeD84Yzk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGV4dGVudCwgbWF4IH0gZnJvbSAnQHZpc3gvdmVuZG9yL2QzLWFycmF5JztcbmltcG9ydCAqIGFzIGFsbEN1cnZlcyBmcm9tICdAdmlzeC9jdXJ2ZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ0B2aXN4L2dyb3VwJztcbmltcG9ydCB7IExpbmVQYXRoIH0gZnJvbSAnQHZpc3gvc2hhcGUnO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gJ0B2aXN4L3NjYWxlJztcbmltcG9ydCB7IE1hcmtlckFycm93LCBNYXJrZXJDcm9zcywgTWFya2VyWCwgTWFya2VyQ2lyY2xlLCBNYXJrZXJMaW5lIH0gZnJvbSAnQHZpc3gvbWFya2VyJztcbmltcG9ydCBnZW5lcmF0ZURhdGVWYWx1ZSwgeyBEYXRlVmFsdWUgfSBmcm9tICdAdmlzeC9tb2NrLWRhdGEvbGliL2dlbmVyYXRvcnMvZ2VuRGF0ZVZhbHVlJztcblxudHlwZSBDdXJ2ZVR5cGUgPSBrZXlvZiB0eXBlb2YgYWxsQ3VydmVzO1xuXG5jb25zdCBjdXJ2ZVR5cGVzID0gT2JqZWN0LmtleXMoYWxsQ3VydmVzKTtcbmNvbnN0IGxpbmVDb3VudCA9IDE7XG5jb25zdCBzZXJpZXMgPSBuZXcgQXJyYXkobGluZUNvdW50KS5maWxsKG51bGwpLm1hcCgoXywgaSkgPT5cbiAgLy8gdmFyeSBlYWNoIHNlcmllcyB2YWx1ZSBkZXRlcm1pbmlzdGljYWxseVxuICBnZW5lcmF0ZURhdGVWYWx1ZSg0MDAuMCwgLyogc2VlZD0gKi8gaSAvIDkzMi4wKS5zb3J0KFxuICAgIChhOiBEYXRlVmFsdWUsIGI6IERhdGVWYWx1ZSkgPT4gYS5kYXRlLmdldFRpbWUoKSAtIGIuZGF0ZS5nZXRUaW1lKCksXG4gICksXG4pO1xuY29uc3QgYWxsRGF0YSA9IHNlcmllcy5yZWR1Y2UoKHJlYywgZCkgPT4gcmVjLmNvbmNhdChkKSwgW10pO1xuXG4vLyBkYXRhIGFjY2Vzc29yc1xuY29uc3QgZ2V0WCA9IChkOiBEYXRlVmFsdWUpID0+IGQuZGF0ZTtcbmNvbnN0IGdldFkgPSAoZDogRGF0ZVZhbHVlKSA9PiBkLnZhbHVlO1xuXG4vLyBzY2FsZXNcbmNvbnN0IHhTY2FsZSA9IHNjYWxlVGltZTxudW1iZXI+KHtcbiAgZG9tYWluOiBleHRlbnQoYWxsRGF0YSwgZ2V0WCkgYXMgW0RhdGUsIERhdGVdLFxufSk7XG5jb25zdCB5U2NhbGUgPSBzY2FsZUxpbmVhcjxudW1iZXI+KHtcbiAgZG9tYWluOiBbMCwgbWF4KGFsbERhdGEsIGdldFkpIGFzIG51bWJlcl0sXG59KTtcblxuZXhwb3J0IHR5cGUgQ3VydmVQcm9wcyA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHNob3dDb250cm9scz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGFtcGxlKHsgd2lkdGgsIGhlaWdodCwgc2hvd0NvbnRyb2xzID0gdHJ1ZSB9OiBDdXJ2ZVByb3BzKSB7XG4gIGNvbnN0IFtjdXJ2ZVR5cGUsIHNldEN1cnZlVHlwZV0gPSB1c2VTdGF0ZTxDdXJ2ZVR5cGU+KCdjdXJ2ZU5hdHVyYWwnKTtcbiAgY29uc3QgW3Nob3dQb2ludHMsIHNldFNob3dQb2ludHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IHN2Z0hlaWdodCA9IHNob3dDb250cm9scyA/IGhlaWdodCAtIDQwIDogaGVpZ2h0O1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gc3ZnSGVpZ2h0IC8gbGluZUNvdW50O1xuXG4gIC8vIHVwZGF0ZSBzY2FsZSBvdXRwdXQgcmFuZ2VzXG4gIHhTY2FsZS5yYW5nZShbMCwgd2lkdGggLSA1MF0pO1xuICB5U2NhbGUucmFuZ2UoW2xpbmVIZWlnaHQgLSAyLCAwXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc3gtY3VydmVzLWRlbW9cIj5cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0+XG4gICAgICAgIDxNYXJrZXJYXG4gICAgICAgICAgaWQ9XCJtYXJrZXIteFwiXG4gICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgc2l6ZT17MjJ9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDcm9zc1xuICAgICAgICAgIGlkPVwibWFya2VyLWNyb3NzXCJcbiAgICAgICAgICBzdHJva2U9XCIjMzMzXCJcbiAgICAgICAgICBzaXplPXsyMn1cbiAgICAgICAgICBzdHJva2VXaWR0aD17NH1cbiAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjZ9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDaXJjbGUgaWQ9XCJtYXJrZXItY2lyY2xlXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsyfSByZWZYPXsyfSAvPlxuICAgICAgICA8TWFya2VyQXJyb3cgaWQ9XCJtYXJrZXItYXJyb3ctb2RkXCIgc3Ryb2tlPVwiIzMzM1wiIHNpemU9ezh9IHN0cm9rZVdpZHRoPXsxfSAvPlxuICAgICAgICA8TWFya2VyTGluZSBpZD1cIm1hcmtlci1saW5lXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezF9IC8+XG4gICAgICAgIDxNYXJrZXJBcnJvdyBpZD1cIm1hcmtlci1hcnJvd1wiIGZpbGw9XCIjMzMzXCIgcmVmWD17Mn0gc2l6ZT17Nn0gLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gZmlsbD1cIiNlZmVmZWZcIiByeD17MTR9IHJ5PXsxNH0gLz5cbiAgICAgICAge3dpZHRoID4gOCAmJlxuICAgICAgICAgIHNlcmllcy5tYXAoKGxpbmVEYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVuID0gaSAlIDIgPT09IDA7XG4gICAgICAgICAgICBsZXQgbWFya2VyU3RhcnQgPSBldmVuID8gJ3VybCgjbWFya2VyLWNyb3NzKScgOiAndXJsKCNtYXJrZXIteCknO1xuICAgICAgICAgICAgaWYgKGkgPT09IDEpIG1hcmtlclN0YXJ0ID0gJ3VybCgjbWFya2VyLWxpbmUpJztcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVuZCA9IGV2ZW4gPyAndXJsKCNtYXJrZXItYXJyb3cpJyA6ICd1cmwoI21hcmtlci1hcnJvdy1vZGQpJztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxHcm91cCBrZXk9e2BsaW5lcy0ke2l9YH0gdG9wPXtpICogbGluZUhlaWdodH0gbGVmdD17MTN9PlxuICAgICAgICAgICAgICAgIHtzaG93UG9pbnRzICYmXG4gICAgICAgICAgICAgICAgICBsaW5lRGF0YS5tYXAoKGQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XG4gICAgICAgICAgICAgICAgICAgICAgcj17M31cbiAgICAgICAgICAgICAgICAgICAgICBjeD17eFNjYWxlKGdldFgoZCkpfVxuICAgICAgICAgICAgICAgICAgICAgIGN5PXt5U2NhbGUoZ2V0WShkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwicmdiYSgzMywzMywzMywwLjUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPExpbmVQYXRoPERhdGVWYWx1ZT5cbiAgICAgICAgICAgICAgICAgIGN1cnZlPXthbGxDdXJ2ZXNbY3VydmVUeXBlXX1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e2xpbmVEYXRhfVxuICAgICAgICAgICAgICAgICAgeD17KGQpID0+IHhTY2FsZShnZXRYKGQpKSA/PyAwfVxuICAgICAgICAgICAgICAgICAgeT17KGQpID0+IHlTY2FsZShnZXRZKGQpKSA/PyAwfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZXZlbiA/IDIgOiAxfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17ZXZlbiA/IDAuNiA6IDF9XG4gICAgICAgICAgICAgICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICAgICAgICAgICAgICBtYXJrZXJNaWQ9XCJ1cmwoI21hcmtlci1jaXJjbGUpXCJcbiAgICAgICAgICAgICAgICAgIG1hcmtlclN0YXJ0PXttYXJrZXJTdGFydH1cbiAgICAgICAgICAgICAgICAgIG1hcmtlckVuZD17bWFya2VyRW5kfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJleHRlbnQiLCJtYXgiLCJhbGxDdXJ2ZXMiLCJHcm91cCIsIkxpbmVQYXRoIiwic2NhbGVUaW1lIiwic2NhbGVMaW5lYXIiLCJNYXJrZXJBcnJvdyIsIk1hcmtlckNyb3NzIiwiTWFya2VyWCIsIk1hcmtlckNpcmNsZSIsIk1hcmtlckxpbmUiLCJnZW5lcmF0ZURhdGVWYWx1ZSIsImN1cnZlVHlwZXMiLCJPYmplY3QiLCJrZXlzIiwibGluZUNvdW50Iiwic2VyaWVzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJzb3J0IiwiYSIsImIiLCJkYXRlIiwiZ2V0VGltZSIsImFsbERhdGEiLCJyZWR1Y2UiLCJyZWMiLCJkIiwiY29uY2F0IiwiZ2V0WCIsImdldFkiLCJ2YWx1ZSIsInhTY2FsZSIsImRvbWFpbiIsInlTY2FsZSIsIkV4YW1wbGUiLCJ3aWR0aCIsImhlaWdodCIsInNob3dDb250cm9scyIsImN1cnZlVHlwZSIsInNldEN1cnZlVHlwZSIsInNob3dQb2ludHMiLCJzZXRTaG93UG9pbnRzIiwic3ZnSGVpZ2h0IiwibGluZUhlaWdodCIsInJhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3ZnIiwiaWQiLCJzdHJva2UiLCJzaXplIiwic3Ryb2tlV2lkdGgiLCJtYXJrZXJVbml0cyIsInN0cm9rZU9wYWNpdHkiLCJyZWZYIiwicmVjdCIsInJ4IiwicnkiLCJsaW5lRGF0YSIsImV2ZW4iLCJtYXJrZXJTdGFydCIsIm1hcmtlckVuZCIsInRvcCIsImxlZnQiLCJqIiwiY2lyY2xlIiwiciIsImN4IiwiY3kiLCJjdXJ2ZSIsImRhdGEiLCJ4IiwieSIsInNoYXBlUmVuZGVyaW5nIiwibWFya2VyTWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/Graph.tsx\n"));

/***/ })

});