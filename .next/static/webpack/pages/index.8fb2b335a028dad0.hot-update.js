"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data/data.json */ \"./src/pages/Data/data.json\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home() {\n    const { sections , products  } = _Data_data_json__WEBPACK_IMPORTED_MODULE_3__;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex pt-5 gap-5 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__.SideBar, {\n                    fields: sections[0].fields\n                }, void 0, false, {\n                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-5 overflow-y-scroll\",\n                children: products.map((product, index)=>{\n                    const { console , img , lowestPrice , name  } = product;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border-teal-600 border-2 rounded-md flex flex-col items-center h-auto w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    alt: name,\n                                    src: product.img,\n                                    style: {\n                                        objectFit: \"fill\"\n                                    },\n                                    width: 200,\n                                    height: 120\n                                }, void 0, false, {\n                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex h-auto w-full p-2 flex-col gap-2\",\n                                    style: {\n                                        backgroundColor: \"#88CBCB\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between w-full items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: \"/128/Nintendo 64.png\",\n                                                        alt: console,\n                                                        width: 40,\n                                                        height: 40\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-white rounded-md p-2\",\n                                                    children: \"Visit Sellers\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-lg\",\n                                                    children: [\n                                                        \"$\",\n                                                        lowestPrice\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUloQjtBQUNLOztBQUNyQixTQUFTRyxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUUsR0FBR0gsNENBQUlBO0lBQ25DLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUNOLHdEQUFPQTtvQkFBQ1EsUUFBUUosUUFBUSxDQUFDLEVBQUUsQ0FBQ0ksTUFBTTs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWkYsU0FBU0ksR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7b0JBQ2hDLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxJQUFHLEVBQUVDLFlBQVcsRUFBRUMsS0FBSSxFQUFFLEdBQUdMO29CQUM1QyxxQkFDRSw4REFBQ0o7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ04sbURBQUtBO29DQUNKZSxLQUFLRDtvQ0FDTEUsS0FBS1AsUUFBUUcsR0FBRztvQ0FDaEJLLE9BQU87d0NBQ0xDLFdBQVc7b0NBQ2I7b0NBQ0FDLE9BQU87b0NBQ1BDLFFBQVE7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDZjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQ0NDLFdBQVU7b0NBQ1ZXLE9BQU87d0NBQ0xJLGlCQUFpQjtvQ0FDbkI7O3NEQUVBLDhEQUFDaEI7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDZ0I7OERBQU1SOzs7Ozs7OERBQ1AsOERBQUNROzhEQUNDLDRFQUFDdEIsbURBQUtBO3dEQUNKZ0IsS0FBSTt3REFDSkQsS0FBS0o7d0RBQ0xRLE9BQU87d0RBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUlkLDhEQUFDZjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNpQjtvREFBT2pCLFdBQVU7OERBQTBCOzs7Ozs7OERBRzVDLDhEQUFDRDtvREFBSUMsV0FBVTs7d0RBQVU7d0RBQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXBDNUJIOzs7OztnQkEwQ1g7Ozs7Ozs7Ozs7OztBQUlSLENBQUM7S0EzRHVCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IHsgUm9vdE9iamVjdCB9IGZyb20gXCJAL3BhZ2VzL0RhdGEvdHlwZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vRGF0YS9kYXRhLmpzb25cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc2VjdGlvbnMsIHByb2R1Y3RzIH0gPSBkYXRhIGFzIFJvb3RPYmplY3Q7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB0LTUgZ2FwLTUgXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZUJhciBmaWVsZHM9e3NlY3Rpb25zWzBdLmZpZWxkc30gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTUgb3ZlcmZsb3cteS1zY3JvbGxcIj5cbiAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGNvbnNvbGUsIGltZywgbG93ZXN0UHJpY2UsIG5hbWUgfSA9IHByb2R1Y3Q7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLXRlYWwtNjAwIGJvcmRlci0yIHJvdW5kZWQtbWQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1hdXRvIHctZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1nfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImZpbGxcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMjB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggaC1hdXRvIHctZnVsbCBwLTIgZmxleC1jb2wgZ2FwLTJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM4OENCQ0JcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi8xMjgvTmludGVuZG8gNjQucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Y29uc29sZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgVmlzaXQgU2VsbGVyc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+JHtsb3dlc3RQcmljZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7XG4gIHJlcSxcbiAgcGFyYW1zLFxufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpXCIsXG4gIH0pO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcIi9tYW51ZmFjdHVyZXJzXCIsIHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIG1hbnVmYWN0dXJlcjogcGFyYW1zLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJTaWRlQmFyIiwiSW1hZ2UiLCJkYXRhIiwiSG9tZSIsInNlY3Rpb25zIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWVsZHMiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJjb25zb2xlIiwiaW1nIiwibG93ZXN0UHJpY2UiLCJuYW1lIiwiYWx0Iiwic3JjIiwic3R5bGUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});