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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dummy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/vendor/d3-array */ \"(app-pages-browser)/./node_modules/d3-array/src/extent.js\");\n/* harmony import */ var _visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visx/vendor/d3-array */ \"(app-pages-browser)/./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _visx_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @visx/curve */ \"(app-pages-browser)/./node_modules/@visx/curve/esm/index.js\");\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visx/group */ \"(app-pages-browser)/./node_modules/@visx/group/esm/Group.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visx/shape */ \"(app-pages-browser)/./node_modules/@visx/shape/esm/shapes/LinePath.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/scale */ \"(app-pages-browser)/./node_modules/@visx/scale/esm/scales/time.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visx/scale */ \"(app-pages-browser)/./node_modules/@visx/scale/esm/scales/linear.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/X.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Cross.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Circle.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Arrow.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visx/marker */ \"(app-pages-browser)/./node_modules/@visx/marker/esm/markers/Line.js\");\n/* harmony import */ var _visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/mock-data/lib/generators/genDateValue */ \"(app-pages-browser)/./node_modules/@visx/mock-data/lib/generators/genDateValue.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst curveTypes = Object.keys(_visx_curve__WEBPACK_IMPORTED_MODULE_2__);\nconst lineCount = 1;\nconst series = new Array(lineCount).fill(null).map((_, i)=>// vary each series value deterministically\n    (0,_visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(20.0, /* seed= */ i / 30.0).sort((a, b)=>a.date.getTime() - b.date.getTime()));\nconst allData = series.reduce((rec, d)=>rec.concat(d), []);\n// data accessors\nconst getX = (d)=>d.date;\nconst getY = (d)=>d.value;\n// scales\nconst xScale = (0,_visx_scale__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    domain: (0,_visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(allData, getX)\n});\nconst yScale = (0,_visx_scale__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    domain: [\n        0,\n        (0,_visx_vendor_d3_array__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(allData, getY)\n    ]\n});\nfunction Dummy(param) {\n    let { width, height, showControls = true } = param;\n    _s();\n    const [curveType, setCurveType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"curveNatural\");\n    const [showPoints, setShowPoints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const svgHeight = showControls ? height - 10 : height;\n    const lineHeight = svgHeight / lineCount;\n    // update scale output ranges\n    xScale.range([\n        0,\n        width + 110\n    ]);\n    yScale.range([\n        lineHeight + 100,\n        130\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"visx-curves-demo\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: width * 1.75,\n            height: svgHeight,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    id: \"marker-x\",\n                    stroke: \"#333\",\n                    size: 22,\n                    strokeWidth: 4,\n                    markerUnits: \"userSpaceOnUse\"\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    id: \"marker-cross\",\n                    stroke: \"#333\",\n                    size: 22,\n                    strokeWidth: 4,\n                    strokeOpacity: 0.6,\n                    markerUnits: \"userSpaceOnUse\"\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    id: \"marker-circle\",\n                    fill: \"#333\",\n                    size: 2,\n                    refX: 2\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    id: \"marker-arrow-odd\",\n                    stroke: \"#333\",\n                    size: 8,\n                    strokeWidth: 1\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                    id: \"marker-line\",\n                    fill: \"#333\",\n                    size: 16,\n                    strokeWidth: 1\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_marker__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    id: \"marker-arrow\",\n                    fill: \"#333\",\n                    refX: 2,\n                    size: 6\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"rect\", {\n                    width: width * 2,\n                    height: svgHeight,\n                    fill: \"#efefef\",\n                    rx: 14,\n                    ry: 14\n                }, void 0, false, {\n                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                width > 8 && series.map((lineData, i)=>{\n                    const even = i % 2 === 0;\n                    let markerStart = even ? \"url(#marker-cross)\" : \"url(#marker-x)\";\n                    if (i === 1) markerStart = \"url(#marker-line)\";\n                    const markerEnd = even ? \"url(#marker-arrow)\" : \"url(#marker-arrow-odd)\";\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_group__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                        top: i * lineHeight,\n                        left: 13,\n                        children: [\n                            showPoints && lineData.map((d, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    r: 3,\n                                    cx: xScale(getX(d)),\n                                    cy: yScale(getY(d)),\n                                    stroke: \"rgba(33,33,33,0.5)\",\n                                    fill: \"transparent\"\n                                }, i + j, false, {\n                                    fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 21\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_visx_shape__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                curve: _visx_curve__WEBPACK_IMPORTED_MODULE_2__[curveType],\n                                data: lineData,\n                                x: (d)=>{\n                                    var _xScale;\n                                    return (_xScale = xScale(getX(d))) !== null && _xScale !== void 0 ? _xScale : 0;\n                                },\n                                y: (d)=>{\n                                    var _yScale;\n                                    return (_yScale = yScale(getY(d))) !== null && _yScale !== void 0 ? _yScale : 0;\n                                },\n                                stroke: \"#333\",\n                                strokeWidth: even ? 2 : 1,\n                                strokeOpacity: even ? 0.6 : 1,\n                                shapeRendering: \"geometricPrecision\",\n                                markerMid: \"url(#marker-circle)\",\n                                markerStart: markerStart,\n                                markerEnd: markerEnd\n                            }, void 0, false, {\n                                fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, \"lines-\".concat(i), true, {\n                        fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/msturman00/Documents/GitHub/tezos-hack-2024/src/app/dashboard/Graph.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Dummy, \"jhkBRAO4tyU6vq4Zpe0ipJm0v84=\");\n_c = Dummy;\nvar _c;\n$RefreshReg$(_c, \"Dummy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL0dyYXBoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ1k7QUFDWDtBQUNMO0FBQ0c7QUFDYztBQUNzQztBQUNBO0FBSTNGLE1BQU1lLGFBQWFDLE9BQU9DLElBQUksQ0FBQ2Isd0NBQVNBO0FBQ3hDLE1BQU1jLFlBQVk7QUFDbEIsTUFBTUMsU0FBUyxJQUFJQyxNQUFNRixXQUFXRyxJQUFJLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLElBQ3JELDJDQUEyQztJQUMzQ1YsdUZBQWlCQSxDQUFDLE1BQU0sU0FBUyxHQUFHVSxJQUFJLE1BQU1DLElBQUksQ0FDaEQsQ0FBQ0MsR0FBY0MsSUFBaUJELEVBQUVFLElBQUksQ0FBQ0MsT0FBTyxLQUFLRixFQUFFQyxJQUFJLENBQUNDLE9BQU87QUFHckUsTUFBTUMsVUFBVVgsT0FBT1ksTUFBTSxDQUFDLENBQUNDLEtBQUtDLElBQU1ELElBQUlFLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFO0FBRTNELGlCQUFpQjtBQUNqQixNQUFNRSxPQUFPLENBQUNGLElBQWlCQSxFQUFFTCxJQUFJO0FBQ3JDLE1BQU1RLE9BQU8sQ0FBQ0gsSUFBaUJBLEVBQUVJLEtBQUs7QUFFdEMsU0FBUztBQUNULE1BQU1DLFNBQVMvQix1REFBU0EsQ0FBUztJQUMvQmdDLFFBQVFyQyxpRUFBTUEsQ0FBQzRCLFNBQVNLO0FBQzFCO0FBQ0EsTUFBTUssU0FBU2hDLHVEQUFXQSxDQUFTO0lBQ2pDK0IsUUFBUTtRQUFDO1FBQUdwQyxpRUFBR0EsQ0FBQzJCLFNBQVNNO0tBQWdCO0FBQzNDO0FBUWUsU0FBU0ssTUFBTSxLQUFrRDtRQUFsRCxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsZUFBZSxJQUFJLEVBQWMsR0FBbEQ7O0lBQzVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHN0MsK0NBQVFBLENBQVk7SUFDdEQsTUFBTSxDQUFDOEMsWUFBWUMsY0FBYyxHQUFHL0MsK0NBQVFBLENBQVU7SUFDdEQsTUFBTWdELFlBQVlMLGVBQWVELFNBQVMsS0FBS0E7SUFDL0MsTUFBTU8sYUFBYUQsWUFBWS9CO0lBRS9CLDZCQUE2QjtJQUM3Qm9CLE9BQU9hLEtBQUssQ0FBQztRQUFDO1FBQUdULFFBQVE7S0FBSTtJQUM3QkYsT0FBT1csS0FBSyxDQUFDO1FBQUNELGFBQWE7UUFBSztLQUFJO0lBRXBDLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJWixPQUFPQSxRQUFRO1lBQU1DLFFBQVFNOzs4QkFDaEMsOERBQUN0QyxvREFBT0E7b0JBQ040QyxJQUFHO29CQUNIQyxRQUFPO29CQUNQQyxNQUFNO29CQUNOQyxhQUFhO29CQUNiQyxhQUFZOzs7Ozs7OEJBRWQsOERBQUNqRCxvREFBV0E7b0JBQ1Y2QyxJQUFHO29CQUNIQyxRQUFPO29CQUNQQyxNQUFNO29CQUNOQyxhQUFhO29CQUNiRSxlQUFlO29CQUNmRCxhQUFZOzs7Ozs7OEJBRWQsOERBQUMvQyxxREFBWUE7b0JBQUMyQyxJQUFHO29CQUFnQmxDLE1BQUs7b0JBQU9vQyxNQUFNO29CQUFHSSxNQUFNOzs7Ozs7OEJBQzVELDhEQUFDcEQscURBQVdBO29CQUFDOEMsSUFBRztvQkFBbUJDLFFBQU87b0JBQU9DLE1BQU07b0JBQUdDLGFBQWE7Ozs7Ozs4QkFDdkUsOERBQUM3QyxxREFBVUE7b0JBQUMwQyxJQUFHO29CQUFjbEMsTUFBSztvQkFBT29DLE1BQU07b0JBQUlDLGFBQWE7Ozs7Ozs4QkFDaEUsOERBQUNqRCxxREFBV0E7b0JBQUM4QyxJQUFHO29CQUFlbEMsTUFBSztvQkFBT3dDLE1BQU07b0JBQUdKLE1BQU07Ozs7Ozs4QkFDMUQsOERBQUNLO29CQUFLcEIsT0FBT0EsUUFBUTtvQkFBR0MsUUFBUU07b0JBQVc1QixNQUFLO29CQUFVMEMsSUFBSTtvQkFBSUMsSUFBSTs7Ozs7O2dCQUNyRXRCLFFBQVEsS0FDUHZCLE9BQU9HLEdBQUcsQ0FBQyxDQUFDMkMsVUFBVXpDO29CQUNwQixNQUFNMEMsT0FBTzFDLElBQUksTUFBTTtvQkFDdkIsSUFBSTJDLGNBQWNELE9BQU8sdUJBQXVCO29CQUNoRCxJQUFJMUMsTUFBTSxHQUFHMkMsY0FBYztvQkFDM0IsTUFBTUMsWUFBWUYsT0FBTyx1QkFBdUI7b0JBQ2hELHFCQUNFLDhEQUFDN0Qsb0RBQUtBO3dCQUFvQmdFLEtBQUs3QyxJQUFJMEI7d0JBQVlvQixNQUFNOzs0QkFDbER2QixjQUNDa0IsU0FBUzNDLEdBQUcsQ0FBQyxDQUFDVyxHQUFHc0Msa0JBQ2YsOERBQUNDO29DQUVDQyxHQUFHO29DQUNIQyxJQUFJcEMsT0FBT0gsS0FBS0Y7b0NBQ2hCMEMsSUFBSW5DLE9BQU9KLEtBQUtIO29DQUNoQnVCLFFBQU87b0NBQ1BuQyxNQUFLO21DQUxBRyxJQUFJK0M7Ozs7OzBDQVFmLDhEQUFDakUsb0RBQVFBO2dDQUNQc0UsT0FBT3hFLHdDQUFTLENBQUN5QyxVQUFVO2dDQUMzQmdDLE1BQU1aO2dDQUNOYSxHQUFHLENBQUM3Qzt3Q0FBTUs7MkNBQUFBLENBQUFBLFVBQUFBLE9BQU9ILEtBQUtGLGlCQUFaSyxxQkFBQUEsVUFBbUI7Z0NBQUE7Z0NBQzdCeUMsR0FBRyxDQUFDOUM7d0NBQU1POzJDQUFBQSxDQUFBQSxVQUFBQSxPQUFPSixLQUFLSCxpQkFBWk8scUJBQUFBLFVBQW1CO2dDQUFBO2dDQUM3QmdCLFFBQU87Z0NBQ1BFLGFBQWFRLE9BQU8sSUFBSTtnQ0FDeEJOLGVBQWVNLE9BQU8sTUFBTTtnQ0FDNUJjLGdCQUFlO2dDQUNmQyxXQUFVO2dDQUNWZCxhQUFhQTtnQ0FDYkMsV0FBV0E7Ozs7Ozs7dUJBdkJILFNBQVcsT0FBRjVDOzs7OztnQkEyQnpCOzs7Ozs7Ozs7Ozs7QUFJVjtHQXZFd0JpQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9HcmFwaC50c3g/OGM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBleHRlbnQsIG1heCB9IGZyb20gJ0B2aXN4L3ZlbmRvci9kMy1hcnJheSc7XG5pbXBvcnQgKiBhcyBhbGxDdXJ2ZXMgZnJvbSAnQHZpc3gvY3VydmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdAdmlzeC9ncm91cCc7XG5pbXBvcnQgeyBMaW5lUGF0aCB9IGZyb20gJ0B2aXN4L3NoYXBlJztcbmltcG9ydCB7IHNjYWxlVGltZSwgc2NhbGVMaW5lYXIgfSBmcm9tICdAdmlzeC9zY2FsZSc7XG5pbXBvcnQgeyBNYXJrZXJBcnJvdywgTWFya2VyQ3Jvc3MsIE1hcmtlclgsIE1hcmtlckNpcmNsZSwgTWFya2VyTGluZSB9IGZyb20gJ0B2aXN4L21hcmtlcic7XG5pbXBvcnQgZ2VuZXJhdGVEYXRlVmFsdWUsIHsgRGF0ZVZhbHVlIH0gZnJvbSAnQHZpc3gvbW9jay1kYXRhL2xpYi9nZW5lcmF0b3JzL2dlbkRhdGVWYWx1ZSc7XG5cbnR5cGUgQ3VydmVUeXBlID0ga2V5b2YgdHlwZW9mIGFsbEN1cnZlcztcblxuY29uc3QgY3VydmVUeXBlcyA9IE9iamVjdC5rZXlzKGFsbEN1cnZlcyk7XG5jb25zdCBsaW5lQ291bnQgPSAxO1xuY29uc3Qgc2VyaWVzID0gbmV3IEFycmF5KGxpbmVDb3VudCkuZmlsbChudWxsKS5tYXAoKF8sIGkpID0+XG4gIC8vIHZhcnkgZWFjaCBzZXJpZXMgdmFsdWUgZGV0ZXJtaW5pc3RpY2FsbHlcbiAgZ2VuZXJhdGVEYXRlVmFsdWUoMjAuMCwgLyogc2VlZD0gKi8gaSAvIDMwLjApLnNvcnQoXG4gICAgKGE6IERhdGVWYWx1ZSwgYjogRGF0ZVZhbHVlKSA9PiBhLmRhdGUuZ2V0VGltZSgpIC0gYi5kYXRlLmdldFRpbWUoKSxcbiAgKSxcbik7XG5jb25zdCBhbGxEYXRhID0gc2VyaWVzLnJlZHVjZSgocmVjLCBkKSA9PiByZWMuY29uY2F0KGQpLCBbXSk7XG5cbi8vIGRhdGEgYWNjZXNzb3JzXG5jb25zdCBnZXRYID0gKGQ6IERhdGVWYWx1ZSkgPT4gZC5kYXRlO1xuY29uc3QgZ2V0WSA9IChkOiBEYXRlVmFsdWUpID0+IGQudmFsdWU7XG5cbi8vIHNjYWxlc1xuY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lPG51bWJlcj4oe1xuICBkb21haW46IGV4dGVudChhbGxEYXRhLCBnZXRYKSBhcyBbRGF0ZSwgRGF0ZV0sXG59KTtcbmNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyPG51bWJlcj4oe1xuICBkb21haW46IFswLCBtYXgoYWxsRGF0YSwgZ2V0WSkgYXMgbnVtYmVyXSxcbn0pO1xuXG5leHBvcnQgdHlwZSBDdXJ2ZVByb3BzID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgc2hvd0NvbnRyb2xzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15KHsgd2lkdGgsIGhlaWdodCwgc2hvd0NvbnRyb2xzID0gdHJ1ZSB9OiBDdXJ2ZVByb3BzKSB7XG4gIGNvbnN0IFtjdXJ2ZVR5cGUsIHNldEN1cnZlVHlwZV0gPSB1c2VTdGF0ZTxDdXJ2ZVR5cGU+KCdjdXJ2ZU5hdHVyYWwnKTtcbiAgY29uc3QgW3Nob3dQb2ludHMsIHNldFNob3dQb2ludHNdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IHN2Z0hlaWdodCA9IHNob3dDb250cm9scyA/IGhlaWdodCAtIDEwIDogaGVpZ2h0O1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gc3ZnSGVpZ2h0IC8gbGluZUNvdW50O1xuXG4gIC8vIHVwZGF0ZSBzY2FsZSBvdXRwdXQgcmFuZ2VzXG4gIHhTY2FsZS5yYW5nZShbMCwgd2lkdGggKyAxMTBdKTtcbiAgeVNjYWxlLnJhbmdlKFtsaW5lSGVpZ2h0ICsgMTAwLCAxMzBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzeC1jdXJ2ZXMtZGVtb1wiPlxuICAgICAgPHN2ZyB3aWR0aD17d2lkdGggKiAxLjc1fSBoZWlnaHQ9e3N2Z0hlaWdodH0+XG4gICAgICAgIDxNYXJrZXJYXG4gICAgICAgICAgaWQ9XCJtYXJrZXIteFwiXG4gICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgc2l6ZT17MjJ9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDcm9zc1xuICAgICAgICAgIGlkPVwibWFya2VyLWNyb3NzXCJcbiAgICAgICAgICBzdHJva2U9XCIjMzMzXCJcbiAgICAgICAgICBzaXplPXsyMn1cbiAgICAgICAgICBzdHJva2VXaWR0aD17NH1cbiAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjZ9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDaXJjbGUgaWQ9XCJtYXJrZXItY2lyY2xlXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsyfSByZWZYPXsyfSAvPlxuICAgICAgICA8TWFya2VyQXJyb3cgaWQ9XCJtYXJrZXItYXJyb3ctb2RkXCIgc3Ryb2tlPVwiIzMzM1wiIHNpemU9ezh9IHN0cm9rZVdpZHRoPXsxfSAvPlxuICAgICAgICA8TWFya2VyTGluZSBpZD1cIm1hcmtlci1saW5lXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezF9IC8+XG4gICAgICAgIDxNYXJrZXJBcnJvdyBpZD1cIm1hcmtlci1hcnJvd1wiIGZpbGw9XCIjMzMzXCIgcmVmWD17Mn0gc2l6ZT17Nn0gLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRoICogMn0gaGVpZ2h0PXtzdmdIZWlnaHR9IGZpbGw9XCIjZWZlZmVmXCIgcng9ezE0fSByeT17MTR9IC8+XG4gICAgICAgIHt3aWR0aCA+IDggJiZcbiAgICAgICAgICBzZXJpZXMubWFwKChsaW5lRGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbiA9IGkgJSAyID09PSAwO1xuICAgICAgICAgICAgbGV0IG1hcmtlclN0YXJ0ID0gZXZlbiA/ICd1cmwoI21hcmtlci1jcm9zcyknIDogJ3VybCgjbWFya2VyLXgpJztcbiAgICAgICAgICAgIGlmIChpID09PSAxKSBtYXJrZXJTdGFydCA9ICd1cmwoI21hcmtlci1saW5lKSc7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXJFbmQgPSBldmVuID8gJ3VybCgjbWFya2VyLWFycm93KScgOiAndXJsKCNtYXJrZXItYXJyb3ctb2RkKSc7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JvdXAga2V5PXtgbGluZXMtJHtpfWB9IHRvcD17aSAqIGxpbmVIZWlnaHR9IGxlZnQ9ezEzfT5cbiAgICAgICAgICAgICAgICB7c2hvd1BvaW50cyAmJlxuICAgICAgICAgICAgICAgICAgbGluZURhdGEubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2kgKyBqfVxuICAgICAgICAgICAgICAgICAgICAgIHI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZShnZXRYKGQpKX1cbiAgICAgICAgICAgICAgICAgICAgICBjeT17eVNjYWxlKGdldFkoZCkpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cInJnYmEoMzMsMzMsMzMsMC41KVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxMaW5lUGF0aDxEYXRlVmFsdWU+XG4gICAgICAgICAgICAgICAgICBjdXJ2ZT17YWxsQ3VydmVzW2N1cnZlVHlwZV19XG4gICAgICAgICAgICAgICAgICBkYXRhPXtsaW5lRGF0YX1cbiAgICAgICAgICAgICAgICAgIHg9eyhkKSA9PiB4U2NhbGUoZ2V0WChkKSkgPz8gMH1cbiAgICAgICAgICAgICAgICAgIHk9eyhkKSA9PiB5U2NhbGUoZ2V0WShkKSkgPz8gMH1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMzMzNcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2V2ZW4gPyAyIDogMX1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9e2V2ZW4gPyAwLjYgOiAxfVxuICAgICAgICAgICAgICAgICAgc2hhcGVSZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIlxuICAgICAgICAgICAgICAgICAgbWFya2VyTWlkPVwidXJsKCNtYXJrZXItY2lyY2xlKVwiXG4gICAgICAgICAgICAgICAgICBtYXJrZXJTdGFydD17bWFya2VyU3RhcnR9XG4gICAgICAgICAgICAgICAgICBtYXJrZXJFbmQ9e21hcmtlckVuZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyb3VwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZXh0ZW50IiwibWF4IiwiYWxsQ3VydmVzIiwiR3JvdXAiLCJMaW5lUGF0aCIsInNjYWxlVGltZSIsInNjYWxlTGluZWFyIiwiTWFya2VyQXJyb3ciLCJNYXJrZXJDcm9zcyIsIk1hcmtlclgiLCJNYXJrZXJDaXJjbGUiLCJNYXJrZXJMaW5lIiwiZ2VuZXJhdGVEYXRlVmFsdWUiLCJjdXJ2ZVR5cGVzIiwiT2JqZWN0Iiwia2V5cyIsImxpbmVDb3VudCIsInNlcmllcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsImdldFRpbWUiLCJhbGxEYXRhIiwicmVkdWNlIiwicmVjIiwiZCIsImNvbmNhdCIsImdldFgiLCJnZXRZIiwidmFsdWUiLCJ4U2NhbGUiLCJkb21haW4iLCJ5U2NhbGUiLCJEdW1teSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvd0NvbnRyb2xzIiwiY3VydmVUeXBlIiwic2V0Q3VydmVUeXBlIiwic2hvd1BvaW50cyIsInNldFNob3dQb2ludHMiLCJzdmdIZWlnaHQiLCJsaW5lSGVpZ2h0IiwicmFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJpZCIsInN0cm9rZSIsInNpemUiLCJzdHJva2VXaWR0aCIsIm1hcmtlclVuaXRzIiwic3Ryb2tlT3BhY2l0eSIsInJlZlgiLCJyZWN0IiwicngiLCJyeSIsImxpbmVEYXRhIiwiZXZlbiIsIm1hcmtlclN0YXJ0IiwibWFya2VyRW5kIiwidG9wIiwibGVmdCIsImoiLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImN1cnZlIiwiZGF0YSIsIngiLCJ5Iiwic2hhcGVSZW5kZXJpbmciLCJtYXJrZXJNaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/Graph.tsx\n"));

/***/ })

});