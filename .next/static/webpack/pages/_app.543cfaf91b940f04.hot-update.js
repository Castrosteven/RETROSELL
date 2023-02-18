"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Navbar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _generated_gql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../__generated__/gql */ \"./src/__generated__/gql.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = ()=>{\n    _s();\n    // const [manufacturers, setManufacturers] = useState<string[]>([]);\n    const GET_MANUFACTURERS = (0,_generated_gql__WEBPACK_IMPORTED_MODULE_2__.gql)(\"query GetManufacturers {\\n        manufacturers {\\n          name\\n        }\\n      }\\n    \");\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_MANUFACTURERS);\n    // const fetchManufacturers = async () => {\n    //   const url = await fetch(\"http://localhost:3000/api/manufacturer\");\n    //   const data = await url.json();\n    //   setManufacturers(data);\n    // };\n    // useEffect(() => {\n    //   fetchManufacturers();\n    // }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n        lineNumber: 26,\n        columnNumber: 23\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error : \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n        lineNumber: 27,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-teal-500 h-auto p-5 w-full flex flex-col gap-3 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center jusitfy-between h-full max-w-7xl container mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Retro Sell\"\n                        }, void 0, false, {\n                            fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"search\",\n                            id: \"search\",\n                            placeholder: \"Search\",\n                            className: \"w-full p-2 rounded-md bg-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/4 flex \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex w-full gap-10 text-center items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Account\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"items-center flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex gap-5 items-center\",\n                    children: data && data.manufacturers.map((manufacturer)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"?manufacturer=\".concat(manufacturer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: manufacturer.name\n                            }, void 0, false, {\n                                fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, undefined)\n                        }, manufacturer, false, {\n                            fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/steven.castro/Desktop/RETROSELL/src/components/Layout/Navbar.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFFYTtBQUNJO0FBRXZDLE1BQU1HLFNBQVMsSUFBTTs7SUFDMUIsb0VBQW9FO0lBQ3BFLE1BQU1DLG9CQUFvQkYsbURBQUdBLENBQzFCO0lBT0gsTUFBTSxFQUFFRyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdOLHdEQUFRQSxDQUFDRztJQUUxQywyQ0FBMkM7SUFDM0MsdUVBQXVFO0lBQ3ZFLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsS0FBSztJQUNMLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLElBQUlDLFNBQVMscUJBQU8sOERBQUNHO2tCQUFFOzs7Ozs7SUFDdkIsSUFBSUYsT0FBTyxxQkFBTyw4REFBQ0U7O1lBQUU7WUFBU0YsTUFBTUcsT0FBTzs7Ozs7OztJQUMzQyxxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBS0YsV0FBVTtzQ0FBcUI7Ozs7Ozs7Ozs7O2tDQUV2Qyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNHOzRCQUNDQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUCxXQUFVOzs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0M7OENBQUk7Ozs7Ozs4Q0FDTCw4REFBQ0E7OENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlYLDhEQUFDTztnQkFBSVIsV0FBVTswQkFDYiw0RUFBQ1M7b0JBQUdULFdBQVU7OEJBQ1hKLFFBQ0NBLEtBQUtjLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGVBQWlCO3dCQUN2QyxxQkFDRSw4REFBQ3ZCLGtEQUFJQTs0QkFBb0J3QixNQUFNLGlCQUE4QixPQUFiRDtzQ0FDOUMsNEVBQUNFOzBDQUFJRixhQUFhUCxJQUFJOzs7Ozs7MkJBRGJPOzs7OztvQkFJZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWixFQUFFO0dBMURXcEI7O1FBVXNCRixvREFBUUE7OztLQVY5QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci50c3g/ODk5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIi4uLy4uL19fZ2VuZXJhdGVkX18vZ3FsXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIC8vIGNvbnN0IFttYW51ZmFjdHVyZXJzLCBzZXRNYW51ZmFjdHVyZXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IEdFVF9NQU5VRkFDVFVSRVJTID0gZ3FsKFxuICAgIGBxdWVyeSBHZXRNYW51ZmFjdHVyZXJzIHtcbiAgICAgICAgbWFudWZhY3R1cmVycyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfTUFOVUZBQ1RVUkVSUyk7XG5cbiAgLy8gY29uc3QgZmV0Y2hNYW51ZmFjdHVyZXJzID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHVybCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9tYW51ZmFjdHVyZXJcIik7XG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHVybC5qc29uKCk7XG4gIC8vICAgc2V0TWFudWZhY3R1cmVycyhkYXRhKTtcbiAgLy8gfTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBmZXRjaE1hbnVmYWN0dXJlcnMoKTtcbiAgLy8gfSwgW10pO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvciA6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy10ZWFsLTUwMCBoLWF1dG8gcC01IHctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC0zIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXNpdGZ5LWJldHdlZW4gaC1mdWxsIG1heC13LTd4bCBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+UmV0cm8gU2VsbDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiByb3VuZGVkLW1kIGJnLXdoaXRlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBmbGV4ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGdhcC0xMCB0ZXh0LWNlbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+QWNjb3VudDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DYXJ0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGdhcC01IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICBkYXRhLm1hbnVmYWN0dXJlcnMubWFwKChtYW51ZmFjdHVyZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e21hbnVmYWN0dXJlcn0gaHJlZj17YD9tYW51ZmFjdHVyZXI9JHttYW51ZmFjdHVyZXJ9YH0+XG4gICAgICAgICAgICAgICAgICA8bGk+e21hbnVmYWN0dXJlci5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVF1ZXJ5IiwiZ3FsIiwiTmF2YmFyIiwiR0VUX01BTlVGQUNUVVJFUlMiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicCIsIm1lc3NhZ2UiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJuYXYiLCJ1bCIsIm1hbnVmYWN0dXJlcnMiLCJtYXAiLCJtYW51ZmFjdHVyZXIiLCJocmVmIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/Navbar.tsx\n"));

/***/ })

});