"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/typedarray-to-buffer";
exports.ids = ["vendor-chunks/typedarray-to-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/typedarray-to-buffer/index.js":
/*!****************************************************!*\
  !*** ./node_modules/typedarray-to-buffer/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("/*! typedarray-to-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /**\n * Convert a typed array to a Buffer without a copy\n *\n * Author:   Feross Aboukhadijeh <https://feross.org>\n * License:  MIT\n *\n * `npm install typedarray-to-buffer`\n */ \nmodule.exports = function typedarrayToBuffer(arr) {\n    return ArrayBuffer.isView(arr) ? Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength) : Buffer.from(arr);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS10by1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGLEdBQzNGOzs7Ozs7O0NBT0M7QUFFREEsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLG1CQUFvQkMsR0FBRztJQUMvQyxPQUFPQyxZQUFZQyxNQUFNLENBQUNGLE9BR3RCRyxPQUFPQyxJQUFJLENBQUNKLElBQUlLLE1BQU0sRUFBRUwsSUFBSU0sVUFBVSxFQUFFTixJQUFJTyxVQUFVLElBRXRESixPQUFPQyxJQUFJLENBQUNKO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHdycGVya3MvLi9ub2RlX21vZHVsZXMvdHlwZWRhcnJheS10by1idWZmZXIvaW5kZXguanM/NjIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgdHlwZWRhcnJheS10by1idWZmZXIuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qKlxuICogQ29udmVydCBhIHR5cGVkIGFycmF5IHRvIGEgQnVmZmVyIHdpdGhvdXQgYSBjb3B5XG4gKlxuICogQXV0aG9yOiAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIExpY2Vuc2U6ICBNSVRcbiAqXG4gKiBgbnBtIGluc3RhbGwgdHlwZWRhcnJheS10by1idWZmZXJgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0eXBlZGFycmF5VG9CdWZmZXIgKGFycikge1xuICByZXR1cm4gQXJyYXlCdWZmZXIuaXNWaWV3KGFycilcbiAgICAvLyBUbyBhdm9pZCBhIGNvcHksIHVzZSB0aGUgdHlwZWQgYXJyYXkncyB1bmRlcmx5aW5nIEFycmF5QnVmZmVyIHRvIGJhY2tcbiAgICAvLyBuZXcgQnVmZmVyLCByZXNwZWN0aW5nIHRoZSBcInZpZXdcIiwgaS5lLiBieXRlT2Zmc2V0IGFuZCBieXRlTGVuZ3RoXG4gICAgPyBCdWZmZXIuZnJvbShhcnIuYnVmZmVyLCBhcnIuYnl0ZU9mZnNldCwgYXJyLmJ5dGVMZW5ndGgpXG4gICAgLy8gUGFzcyB0aHJvdWdoIGFsbCBvdGhlciB0eXBlcyB0byBgQnVmZmVyLmZyb21gXG4gICAgOiBCdWZmZXIuZnJvbShhcnIpXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInR5cGVkYXJyYXlUb0J1ZmZlciIsImFyciIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiQnVmZmVyIiwiZnJvbSIsImJ1ZmZlciIsImJ5dGVPZmZzZXQiLCJieXRlTGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/typedarray-to-buffer/index.js\n");

/***/ })

};
;