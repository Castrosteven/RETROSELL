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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar */ \"./src/components/Sidebar.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Data_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data/data.json */ \"./src/pages/Data/data.json\");\n\n\n\n\nvar __N_SSP = true;\nfunction Home(products) {\n    const { sections  } = _Data_data_json__WEBPACK_IMPORTED_MODULE_3__;\n    console.log(products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex pt-5 gap-5 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__.SideBar, {\n                    fields: sections[0].fields\n                }, void 0, false, {\n                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 gap-5 overflow-y-scroll\",\n                children: products.map((product, index)=>{\n                    const { console: console1 , img , lowestPrice , name  } = product;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white border-teal-600 border-2 rounded-md flex flex-col items-center h-auto w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    alt: name,\n                                    src: product.img,\n                                    style: {\n                                        objectFit: \"fill\"\n                                    },\n                                    width: 200,\n                                    height: 120\n                                }, void 0, false, {\n                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" flex h-auto w-full p-2 flex-col gap-2\",\n                                    style: {\n                                        backgroundColor: \"#88CBCB\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex justify-between w-full items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: \"/128/Nintendo 64.png\",\n                                                        alt: console1,\n                                                        width: 40,\n                                                        height: 40\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-white rounded-md p-2\",\n                                                    children: \"Visit Sellers\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-lg\",\n                                                    children: [\n                                                        \"$\",\n                                                        lowestPrice\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/scastr49/my-app/src/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQztBQUloQjtBQUNLOztBQUNyQixTQUFTRyxLQUFLQyxRQUFnQyxFQUFFO0lBQzdELE1BQU0sRUFBRUMsU0FBUSxFQUFFLEdBQUdILDRDQUFJQTtJQUN6QkksUUFBUUMsR0FBRyxDQUFDSDtJQUNaLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7MEJBQ0MsNEVBQUNSLHdEQUFPQTtvQkFBQ1UsUUFBUUwsUUFBUSxDQUFDLEVBQUUsQ0FBQ0ssTUFBTTs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDWkwsU0FBU08sR0FBRyxDQUFDLENBQUNDLFNBQVNDLFFBQVU7b0JBQ2hDLE1BQU0sRUFBRVAsU0FBQUEsU0FBTyxFQUFFUSxJQUFHLEVBQUVDLFlBQVcsRUFBRUMsS0FBSSxFQUFFLEdBQUdKO29CQUM1QyxxQkFDRSw4REFBQ0o7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1IsbURBQUtBO29DQUNKZ0IsS0FBS0Q7b0NBQ0xFLEtBQUtOLFFBQVFFLEdBQUc7b0NBQ2hCSyxPQUFPO3dDQUNMQyxXQUFXO29DQUNiO29DQUNBQyxPQUFPO29DQUNQQyxRQUFROzs7Ozs7Ozs7OzswQ0FHWiw4REFBQ2Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUNDQyxXQUFVO29DQUNWVSxPQUFPO3dDQUNMSSxpQkFBaUI7b0NBQ25COztzREFFQSw4REFBQ2Y7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDZTs4REFBTVI7Ozs7Ozs4REFDUCw4REFBQ1E7OERBQ0MsNEVBQUN2QixtREFBS0E7d0RBQ0ppQixLQUFJO3dEQUNKRCxLQUFLWDt3REFDTGUsT0FBTzt3REFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSWQsOERBQUNkOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ2dCO29EQUFPaEIsV0FBVTs4REFBMEI7Ozs7Ozs4REFHNUMsOERBQUNEO29EQUFJQyxXQUFVOzt3REFBVTt3REFBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBcEM1QkY7Ozs7O2dCQTBDWDs7Ozs7Ozs7Ozs7O0FBSVIsQ0FBQztLQTVEdUJWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaWRlQmFyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQgeyBSb290T2JqZWN0IH0gZnJvbSBcIkAvcGFnZXMvRGF0YS90eXBlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9EYXRhL2RhdGEuanNvblwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9kdWN0czogUm9vdE9iamVjdFtcInByb2R1Y3RzXCJdKSB7XG4gIGNvbnN0IHsgc2VjdGlvbnMgfSA9IGRhdGEgYXMgUm9vdE9iamVjdDtcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwdC01IGdhcC01IFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVCYXIgZmllbGRzPXtzZWN0aW9uc1swXS5maWVsZHN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC01IG92ZXJmbG93LXktc2Nyb2xsXCI+XG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBjb25zb2xlLCBpbWcsIGxvd2VzdFByaWNlLCBuYW1lIH0gPSBwcm9kdWN0O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci10ZWFsLTYwMCBib3JkZXItMiByb3VuZGVkLW1kIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtYXV0byB3LWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltZ31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJmaWxsXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmbGV4IGgtYXV0byB3LWZ1bGwgcC0yIGZsZXgtY29sIGdhcC0yXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODhDQkNCXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvMTI4L05pbnRlbmRvIDY0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NvbnNvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFZpc2l0IFNlbGxlcnNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPiR7bG93ZXN0UHJpY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe1xuICByZXEsXG4gIHBhcmFtcyxcbiAgcXVlcnksXG59KSA9PiB7XG4gIGNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGlcIixcbiAgfSk7XG4gIGxldCByZXM7XG4gIGlmIChxdWVyeS5tYW51ZmFjdHVyZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KFwiL3Byb2R1Y3RzXCIsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtYW51ZmFjdHVyZXI6IHF1ZXJ5Lm1hbnVmYWN0dXJlcixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzID0gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcIi9wcm9kdWN0c1wiLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWFudWZhY3R1cmVyOiBcIk5pbnRlbmRvXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcyA9IGRhdGE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0czogcmVzLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJJbWFnZSIsImRhdGEiLCJIb21lIiwicHJvZHVjdHMiLCJzZWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmaWVsZHMiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJpbWciLCJsb3dlc3RQcmljZSIsIm5hbWUiLCJhbHQiLCJzcmMiLCJzdHlsZSIsIm9iamVjdEZpdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwic3BhbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});